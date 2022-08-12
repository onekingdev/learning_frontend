import { FC, useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import moment from 'moment';
import payOrderLog from 'views/assets/pay-order-log.svg';
import Button from 'views/molecules/MuiButton';
import { BasicColor } from 'views/Color';
import { PaymentForm } from './PaymentForm';
import { useDispatch, useSelector } from 'react-redux';
import { dictionary } from './dictionary'
import {
    OrderTitleContainer,
    OrderTitleLog,
    OrderTitle,
    OrderItem,
    OrderItemTitleContainer,
    OrderItemTitle,
    OrderItemContent,
    OrderTip,
} from './Style';
import { GUARDIAN_SET_DATA, TEACHER_SET_DATA } from 'app/types';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { useSocratesMediaQuery } from 'hooks/useSocratesMediaQuery';

type PaymentMethodProps = {
    plans: {
        Gold: any,
        Combo: any,
        Sole: any,
        Classroom: any,
        School: any,
    };
    offRate: number;
    isSpecialCode: boolean;
    sponsorEmail?: string;
};
interface PaymentFormFunc {
    handleOrder(plans: any, coupon: string): any;
    handleUpdate(): void;
}


export const PaymentMethod: FC<PaymentMethodProps> = ({ plans, offRate, isSpecialCode, sponsorEmail }) => {

    const history = useHistory();
    const isMobile = useSocratesMediaQuery('xs')
    const trialExpiraton = new Date()
    const paymentFormRef = useRef<PaymentFormFunc>(null)
    const { enqueueSnackbar } = useSnackbar();
    const { couponCode, language, profile } = useSelector((state: any) => state.user)
    trialExpiraton.setDate(trialExpiraton.getDate() + (couponCode?.trialDay || 0))
    const [subtotal, setSubtotal] = useState(0);
    const [agreeLicense, setAgreeLicense] = useState(false)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    const handleOrder = async () => {

        // if (profile.role === USER_TYPE.subscriber) {plans.School.childCount = plans.School.quantityPreferentialMonth + (plans.School?.childCount || 0)}
        /*----------------------- if not selected any package, show error and break -S----------------------*/
        if (((plans.Gold?.childCount || 0) +
            (plans.Combo?.childCount || 0) +
            (plans.Classroom?.childCount || 0) +
            (plans.School?.childCount || 0) +
            (plans.Sole?.childCount || 0)) < 1) {
            enqueueSnackbar(dictionary[language]?.youDidNotSelectAnyChildrenNumber, { variant: 'error' });
            return
        }
        /*----------------------- if not selected any package, show error and break -E----------------------*/
        setLoading(true)
        // const result = await paymentFormRef?.current?.handleOrder(plans, couponCode);
        const result = await paymentFormRef?.current?.handleOrder(plans, '');
        // test
        // dispatch({
        //     type: TYPES.GUARDIAN_SET_AVAILABLE_PLANS,
        //     payload: plans,
        // });
        // history.push('/kids/new')
        // test end
        if (result.success) {
            enqueueSnackbar(dictionary[language]?.yourSubscriptionHasBeenSuccessfullyCreated, { variant: 'success' });
            setLoading(false)
            // dispatch({
            //     type: TYPES.GUARDIAN_SET_AVAILABLE_PLANS,
            //     payload: plans,
            // });
            // TODO: check user type, and when parent redirect to kids/new,
            const userType = profile.role
            const { teacher, guardian } = result.data
            switch (userType) {
                case 'TEACHER':
                    dispatch({
                        type: TEACHER_SET_DATA,
                        payload: teacher
                    })
                    history.push('/teacher/classrooms')
                    break;
                case 'SUBSCRIBER':
                    // TODO: updated after armin's backend update for confrim order to return subscriber
                    // dispatch({
                    //     type: SUBSCRIBER_ADD_SCHOOL,
                    //     payload: school
                    // })
                    history.push('/subscriber/schools')
                    break;
                case 'GUARDIAN':
                    dispatch({
                        type: GUARDIAN_SET_DATA,
                        payload: guardian,
                    });
                    history.push('/kids/new')
                    break;
                default: break
            }
            // dispatch({
            //     type: USER_SET_DATA,
            //     payload: { ...data.user, token: data.token, refreshToken: data.refreshToken },
            //   });
            //          when subscriber redirect to schools
        }
        else
            enqueueSnackbar(`Failed! ${result.msg}`, { variant: 'error' });
        setLoading(false)

    }

    //   const applyCoupon = (e: any) => {
    //     setCouponPrice(5);
    //   }

    //   useEffect(() => {
    //   }, []);

    const calcPrice = (plan: any) => {


        //  Sample plan schema
        // {
        //     "id": "5",
        //     "priceMonth": "3.333",
        //     "pricePreferentialMonth": "4.000",
        //     "quantityPreferentialMonth": 31,
        //     "priceYear": "29.997",
        //     "pricePreferentialYear": "36.000",
        //     "quantityPreferentialYear": 31,
        //     "name": "School",
        //     "quantityLowerLimit": 30,
        //      period: "month" | "year"
        //   }
        if (!plan) return 0

        const { childCount, period, priceMonth,
            pricePreferentialMonth,
            quantityPreferentialMonth,
            priceYear, pricePreferentialYear,
            quantityPreferentialYear } = plan

        const pricePrefer: number = parseFloat(period === 'month' ? pricePreferentialMonth : pricePreferentialYear)
        const quantityPrefer: number = +(period === 'month' ? quantityPreferentialMonth : quantityPreferentialYear)
        const basePrice: number = +(period === 'month' ? priceMonth : priceYear)
        const price: number =
            childCount > quantityPrefer ?
                (basePrice * quantityPrefer + pricePrefer * (childCount - quantityPrefer)) :
                basePrice * childCount

        return price || 0
    }

    useEffect(() => {

        const price_school = calcPrice(plans.School)
        const price_classroom = calcPrice(plans.Classroom)
        const price_combo = calcPrice(plans.Combo)
        const price_gold = calcPrice(plans.Gold)
        const price_sole = calcPrice(plans.Sole)

        setSubtotal(price_gold + price_combo + price_sole + price_school + price_classroom)
    }, [plans])
    return (
        <Container maxWidth='xl'>
            <Grid container justifyContent={'center'}>
                <Grid item xs={12} md={8}>
                    <Paper
                        elevation={5}
                        sx={{ padding: isMobile ? 2 : 6, backgroundColor: BasicColor.veryLightCyanBlue, borderColor: BasicColor.paleRed, borderWidth: 1, borderStyle: 'solid' }}>
                        <PaymentForm isUpdate={false} ref={paymentFormRef} isSpecialCode={isSpecialCode} />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper
                        elevation={3}
                        sx={{ borderColor: BasicColor.paleRed, borderWidth: 1, borderStyle: 'solid' }}>

                        <OrderTitleContainer>
                            <OrderTitleLog src={payOrderLog} />
                            <OrderTitle>{dictionary[language]?.orderSummary}</OrderTitle>
                        </OrderTitleContainer>
                        <Box display='flex' flexDirection={'column'} alignItems='center' justifyContent='center' gap={2} padding={2} sx={{ backgroundColor: BasicColor.blue }}>
                            {!isSpecialCode &&
                                <>
                                    {
                                        offRate < 100 && <Typography color='white' variant='h6'>You have {100 - offRate}% discount!</Typography>
                                    }
                                    {
                                        plans.Gold?.childCount > 0 &&
                                        <OrderItem>
                                            <OrderItemTitle>{plans.Gold.childCount} Gold {dictionary[language]?.package} </OrderItemTitle>
                                            <OrderItemContent>${plans.Gold.currentPrice} / {plans.Gold.period}</OrderItemContent>
                                        </OrderItem>
                                    }
                                    {
                                        plans.Combo?.childCount > 0 &&
                                        <OrderItem>
                                            <OrderItemTitle>{plans.Combo.childCount} Combo {dictionary[language]?.package} </OrderItemTitle>
                                            <OrderItemContent>${plans.Combo.currentPrice} / {plans.Combo.period}</OrderItemContent>
                                        </OrderItem>
                                    }
                                    {
                                        plans.Sole?.childCount > 0 &&
                                        <OrderItem>
                                            <OrderItemTitle>{plans.Sole.childCount} Solo {dictionary[language]?.package} </OrderItemTitle>
                                            <OrderItemContent>${plans.Sole.currentPrice} / {plans.Sole.period}</OrderItemContent>
                                        </OrderItem>
                                    }
                                    {
                                        plans.School?.childCount > 0 && <>
                                            <OrderItem>
                                                <OrderItemTitle>30 Teachers {dictionary[language]?.package} </OrderItemTitle>
                                                <OrderItemContent>${plans.School.currentPrice} / {plans.School.period}</OrderItemContent>
                                            </OrderItem>
                                            <OrderItem>
                                                <OrderItemTitle>Additional {plans.School.childCount - (plans.School.period === 'month' ? plans.School.quantityPreferentialMonth : plans.School.quantityPreferentialYear)} Teacher {dictionary[language]?.package} </OrderItemTitle>
                                                <OrderItemContent>${plans.School.period === 'month' ? plans.School.pricePreferentialMonth : plans.School.pricePreferentialYear} / {plans.School.period}</OrderItemContent>
                                            </OrderItem>
                                        </>
                                    }
                                    {
                                        plans.Classroom?.childCount > 0 &&
                                        <OrderItem>
                                            <OrderItemTitle>{plans.Classroom.childCount} Classroom {dictionary[language]?.package} </OrderItemTitle>
                                            <OrderItemContent>${plans.Classroom.currentPrice} / {plans.Classroom.period}</OrderItemContent>
                                        </OrderItem>
                                    }
                                    <OrderItem>
                                        <OrderItemTitleContainer>
                                            <OrderItemTitle>{dictionary[language]?.total}</OrderItemTitle>
                                        </OrderItemTitleContainer>
                                        <OrderItemContent>
                                            <div style={{ display: 'flex' }}>${(subtotal * offRate / 100).toFixed(2)}</div>
                                            <div style={{ fontWeight: 400, lineHeight: '12px', fontSize: '10px' }}>{dictionary[language]?.firstRenewal} : {moment(trialExpiraton).format('YYYY-MM-DD')}</div>
                                        </OrderItemContent>
                                    </OrderItem>
                                </>
                            }
                            {isSpecialCode &&
                                <>
                                    {
                                        plans.Gold.childCount > 0 &&
                                        <OrderItem>
                                            <OrderItemTitle>{plans.Gold.childCount} Gold {dictionary[language]?.package} </OrderItemTitle>
                                        </OrderItem>
                                    }
                                    {
                                        plans.Combo.childCount > 0 &&
                                        <OrderItem>
                                            <OrderItemTitle>{plans.Combo.childCount} Combo {dictionary[language]?.package} </OrderItemTitle>
                                        </OrderItem>
                                    }
                                    {
                                        plans.Sole.childCount > 0 &&
                                        <OrderItem>
                                            <OrderItemTitle>{plans.Sole.childCount} Solo {dictionary[language]?.package} </OrderItemTitle>
                                        </OrderItem>
                                    }
                                </>
                            }
                            <OrderTip>
                                {dictionary[language]?.yourPersonalDataWillOnlyBeUsedToProcessYourOrderAndSupportYourExperience}
                            </OrderTip>
                            <OrderTip style={{ display: 'flex' }}>
                                <input type="checkbox" id="scales" name="scales" onClick={(e: any) => setAgreeLicense(e.target.checked)} />
                                <div style={{ paddingLeft: '20px' }}>{dictionary[language]?.iHaveReadAndAgreeToTheWebsiteTermsAndConditions}</div>
                            </OrderTip>
                            <Button
                                bgColor={BasicColor.green}
                                onClick={handleOrder}
                                value={dictionary[language]?.planceAnOrder}
                                weight={700}
                                disabled={!agreeLicense}
                                loading={loading}
                            />
                        </Box>
                    </Paper>
                </Grid>
            </Grid>


        </Container >
    );
};
