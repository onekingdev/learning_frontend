import {FC, useEffect, useState, useRef} from 'react';
import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { SnackbarProvider, VariantType, useSnackbar } from 'notistack';
import moment from 'moment'
import Grid from '@mui/material/Grid';
import * as TYPES from '../../../app/types'
import payOrderLog from '../../assets/pay-order-log.svg'
import Button from '../../molecules/MuiButton'
import TextField from '../../molecules/MuiTextField'
import {ButtonColor, shadeColor, BasicColor} from 'views/Color';
import {PaymentForm} from './PaymentForm'

import {
  useStyles,
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
  OrderItemSubtitle,
  OrderItemContent,
  OrderTip,
 } from './Style'

type PaymentMethodProps = {
    plans : {
        Gold: any,
        Combo: any,
        Sole: any,
    };
    offRate: number;
    isSpecialCode: boolean;
};
interface PaymentFormFunc {
    handleOrder(plans: any, coupon: string): any;
    handleUpdate(): void;
}
// export const PaymentMethod: FC<PaymentMethodProps> = ({prices, plans, childrenCounts, offRate}) => {
export const PaymentMethod: FC<PaymentMethodProps> = ({ plans, offRate, isSpecialCode}) => {

  const history = useHistory();
  const dispatch = useDispatch()
  const classes = useStyles();
  const paymentFormRef = useRef<PaymentFormFunc>(null)
  const { enqueueSnackbar } = useSnackbar();

  const [couponCode, setCouponCode] = useState('');
  const [subtotal, setSubtotal] = useState(0);
  const [couponPrice, setCouponPrice] = useState(0);
  const [agreeLicense, setAgreeLicense] = useState(false)
  const [loading, setLoading] = useState(false)


  const handleOrder = async (event: any) => {
    setLoading(true)
    const result = await paymentFormRef?.current?.handleOrder(plans, couponCode);
    console.log("result is ", result)
    // test
    // dispatch({
    //     type: TYPES.GUARDIAN_SET_AVAILABLE_PLANS,
    //     payload: plans,
    // });
    // history.push('/kids/new')
    // test end
    if(result.success) {
        enqueueSnackbar('Your subscription has been successfully created!', { variant: 'success' });
        setLoading(false)
        // dispatch({
        //     type: TYPES.GUARDIAN_SET_AVAILABLE_PLANS,
        //     payload: plans,
        // });
        history.push('/kids/new')
    }
    else
        enqueueSnackbar(`Failed! ${result.msg}`, { variant: 'error' });
    setLoading(false)

  }

  const applyCoupon = (e: any) => {
    setCouponPrice(5);
  }

  useEffect(() => {
  }, []);

  useEffect(() => {
    const price_gold = plans.Gold.currentPrice / 100 * offRate * ((plans.Gold.childCount - 1 > 0) ? (plans.Gold.childCount - 1) : 0) + (plans.Gold.childCount > 0 ? 1 : 0 ) * plans.Gold.currentPrice;
    const price_combo = plans.Combo.currentPrice / 100 * offRate * ((plans.Combo.childCount - 1 > 0) ? (plans.Combo.childCount - 1) : 0) + (plans.Combo.childCount > 0 ? 1 : 0 ) * plans.Combo.currentPrice;
    const price_sole = plans.Sole.currentPrice / 100 * offRate * ((plans.Sole.childCount - 1 > 0) ? (plans.Sole.childCount - 1) : 0) + (plans.Sole.childCount > 0 ? 1 : 0 ) * plans.Sole.currentPrice;
    setSubtotal( price_gold + price_combo + price_sole )
  }, [plans])
  if(isSpecialCode)
    return (
        <Container>
            <Button
                bgColor={BasicColor.green}
                onClick={handleOrder}
                value="Place an Order"
                weight={700}
                loading = {loading}
            />
        </Container>
    )
  return (
    <Container>
        <PaymentContainer>
            <PaymentForm isUpdate={false} ref={paymentFormRef}/>
        </PaymentContainer>
        <OrderContainer>
            <OrderTitleContainer>
                <OrderTitleLog src={payOrderLog} />
                <OrderTitle>Order Summary</OrderTitle>
            </OrderTitleContainer>
            <OrderBody>
                {
                    plans.Gold.childCount > 0 &&
                    <OrderItem>
                        <OrderItemTitle>{plans.Gold.childCount} Gold Package </OrderItemTitle>
                        <OrderItemContent>${plans.Gold.currentPrice} / {plans.Gold.period}</OrderItemContent>
                    </OrderItem>
                }
                {
                   plans.Combo.childCount > 0 &&
                    <OrderItem>
                        <OrderItemTitle>{plans.Combo.childCount} Combo Package </OrderItemTitle>
                        <OrderItemContent>${plans.Combo.currentPrice} / {plans.Combo.period}</OrderItemContent>
                    </OrderItem>
                }
                {
                    plans.Sole.childCount > 0 &&
                    <OrderItem>
                        <OrderItemTitle>{plans.Sole.childCount} Sole Package </OrderItemTitle>
                        <OrderItemContent>${plans.Sole.currentPrice} / {plans.Sole.period}</OrderItemContent>
                    </OrderItem>
                }
                <Grid container spacing={2} sx={{paddingLeft: '30px', paddingRight: '30px', justifyContent: 'center'}}>
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
                </Grid>
                <OrderItem>
                    <OrderItemTitleContainer>
                        <OrderItemTitle>Subtotal</OrderItemTitle>
                    </OrderItemTitleContainer>
                    <OrderItemContent>${subtotal.toFixed(2)}</OrderItemContent>
                </OrderItem>
                <OrderItem>
                    <OrderItemTitleContainer>
                        <OrderItemTitle>Coupon:<div style={{fontWeight: 400, fontSize: '16px'}}>&nbsp;Year</div></OrderItemTitle>
                    </OrderItemTitleContainer>
                    <OrderItemContent>${couponPrice.toFixed(2)}</OrderItemContent>
                </OrderItem>
                <OrderItem>
                    <OrderItemTitleContainer>
                        <OrderItemTitle>Total</OrderItemTitle>
                    </OrderItemTitleContainer>
                    <OrderItemContent>
                        <div style={{display: 'flex'}}>${(subtotal - couponPrice).toFixed(2)}<div style={{fontSize: '12px', fontWeight: '400'}}>&nbsp;/&nbsp;Month</div></div>
                        <div style={{fontWeight: 400, lineHeight: '12px', fontSize: '10px'}}>First Renewal : {moment(new Date()).format('YYYY-MM-DD')}</div>
                    </OrderItemContent>
                </OrderItem>
                <OrderTip>
                    Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in out privacy policy
                </OrderTip>
                <OrderTip>
                    <input type="checkbox" id="scales" name="scales" onClick={(e: any) => setAgreeLicense(e.target.checked)}/>
                    <div style={{paddingLeft: '20px'}}>I have read and agree to the website terms and conditions*</div>
                </OrderTip>
                <Button
                    bgColor={BasicColor.green}
                    onClick={handleOrder}
                    value="Place an Order"
                    weight={700}
                    disabled={!agreeLicense}
                    loading={loading}
                />
            </OrderBody>
        </OrderContainer>
    </Container>
  );
};
