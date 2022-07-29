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
    Container,
    PaymentContainer,
    OrderContainer,
    OrderTitleContainer,
    OrderTitleLog,
    OrderTitle,
    OrderBody,
    OrderItem,
    OrderItemTitleContainer,
    OrderItemTitle,
    OrderItemContent,
    OrderTip,
} from './Style';
import { LANGUAGES } from 'constants/common';
import { GUARDIAN_SET_DATA, SUBSCRIBER_ADD_SCHOOL, TEACHER_SET_DATA } from 'app/types';
import { Typography } from '@mui/material';

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
            const { teacher, guardian, school } = result.data
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
                    dispatch({
                        type: SUBSCRIBER_ADD_SCHOOL,
                        payload: school
                    })
                    history.push('/admin/schools')
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

    useEffect(() => {
        // const price_gold = plans.Gold.currentPrice / 100 * offRate * ((plans.Gold.childCount - 1 > 0) ? (plans.Gold.childCount - 1) : 0) + (plans.Gold.childCount > 0 ? 1 : 0) * plans.Gold.currentPrice;
        // const price_combo = plans.Combo.currentPrice / 100 * offRate * ((plans.Combo.childCount - 1 > 0) ? (plans.Combo.childCount - 1) : 0) + (plans.Combo.childCount > 0 ? 1 : 0) * plans.Combo.currentPrice;
        // const price_sole = plans.Sole.currentPrice / 100 * offRate * ((plans.Sole.childCount - 1 > 0) ? (plans.Sole.childCount - 1) : 0) + (plans.Sole.childCount > 0 ? 1 : 0) * plans.Sole.currentPrice;
        // const price_school = plans.School.currentPrice / 100 * offRate * ((plans.School.childCount - 1 > 0) ? (plans.School.childCount - 1) : 0) + (plans.School.childCount > 0 ? 1 : 0) * plans.School.currentPrice;
        // const price_classroom = plans.Classroom.currentPrice / 100 * offRate * ((plans.Classroom.childCount - 1 > 0) ? (plans.Classroom.childCount - 1) : 0) + (plans.Classroom.childCount > 0 ? 1 : 0) * plans.Classroom.currentPrice;
        const price_gold = plans.Gold?.currentPrice / 100 * offRate * (plans.Gold?.childCount || 0);
        const price_combo = plans.Combo?.currentPrice / 100 * offRate * (plans.Combo?.childCount || 0)
        const price_sole = plans.Sole?.currentPrice / 100 * offRate * (plans.Sole?.childCount || 0)
        const price_school = plans.School?.currentPrice / 100 * offRate * (plans.School?.childCount || 0)
        const price_classroom = plans.Classroom?.currentPrice / 100 * offRate * (plans.Classroom?.childCount || 0)
        setSubtotal(price_gold + price_combo + price_sole + price_school + price_classroom)
    }, [plans])
    return (
        <Container>
            <PaymentContainer>
                <PaymentForm isUpdate={false} ref={paymentFormRef} isSpecialCode={isSpecialCode} />
            </PaymentContainer>
            <OrderContainer>
                <OrderTitleContainer>
                    <OrderTitleLog src={payOrderLog} />
                    <OrderTitle>{dictionary[language]?.orderSummary}</OrderTitle>
                </OrderTitleContainer>
                {!isSpecialCode &&
                    <OrderBody>
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
                            plans.School?.childCount > 0 &&
                            <OrderItem>
                                <OrderItemTitle>{plans.School.childCount} School {dictionary[language]?.package} </OrderItemTitle>
                                <OrderItemContent>${plans.School.currentPrice} / {plans.School.period}</OrderItemContent>
                            </OrderItem>
                        }
                        {
                            plans.Classroom?.childCount > 0 &&
                            <OrderItem>
                                <OrderItemTitle>{plans.Classroom.childCount} Classroom {dictionary[language]?.package} </OrderItemTitle>
                                <OrderItemContent>${plans.Classroom.currentPrice} / {plans.Classroom.period}</OrderItemContent>
                            </OrderItem>
                        }
                        {/* <Grid container spacing={2} sx={{paddingLeft: '30px', paddingRight: '30px', justifyContent: 'center'}}>
                    <Grid item md={6} xs={10}>
                    <TextField
                        label="Coupon code"
                        className={classes.codeInput}
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                    />
                    </Grid>
                    <Grid item md={6} xs={10}>
                        <Button
                            bgColor={BasicColor.yellow}
                            color={BasicColor.black}
                            onClick={applyCoupon}
                            value="Apply Coupon"
                        />
                    </Grid>
                </Grid> */}
                        <OrderItem style={{ display: 'none' }}>
                            <OrderItemTitleContainer>
                                <OrderItemTitle>{dictionary[language]?.subtotal}</OrderItemTitle>
                            </OrderItemTitleContainer>
                            <OrderItemContent>${subtotal.toFixed(2)}</OrderItemContent>
                        </OrderItem>
                        <OrderItem style={{ display: 'none' }}>
                            <OrderItemTitleContainer>
                                <OrderItemTitle>{dictionary[language]?.coupon}:<div style={{ fontWeight: 400, fontSize: '16px' }}>&nbsp;{dictionary[language]?.year}</div></OrderItemTitle>
                            </OrderItemTitleContainer>
                            {/* <OrderItemContent>${couponPrice.toFixed(2)}</OrderItemContent> */}
                            <OrderItemContent>${0.00}</OrderItemContent>
                        </OrderItem>
                        <OrderItem>
                            <OrderItemTitleContainer>
                                <OrderItemTitle>{dictionary[language]?.total}</OrderItemTitle>
                            </OrderItemTitleContainer>
                            <OrderItemContent>
                                {/* <div style={{display: 'flex'}}>${(subtotal - couponPrice).toFixed(2)}<div style={{fontSize: '12px', fontWeight: '400'}}>&nbsp;/&nbsp;Month</div></div> */}
                                <div style={{ display: 'flex' }}>${(subtotal).toFixed(2)}</div>
                                <div style={{ fontWeight: 400, lineHeight: '12px', fontSize: '10px' }}>{dictionary[language]?.firstRenewal} : {moment(trialExpiraton).format('YYYY-MM-DD')}</div>
                            </OrderItemContent>
                        </OrderItem>
                        <OrderTip>
                            {dictionary[language]?.yourPersonalDataWillOnlyBeUsedToProcessYourOrderAndSupportYourExperience}
                        </OrderTip>
                        <OrderTip>
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
                    </OrderBody>
                }
                {isSpecialCode &&
                    <OrderBody>
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
                    </OrderBody>
                }
            </OrderContainer>
        </Container>
    );
};
