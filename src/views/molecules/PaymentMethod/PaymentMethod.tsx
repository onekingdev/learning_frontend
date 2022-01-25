import {FC, useEffect, ReactChildren, ReactChild, useState, useRef} from 'react';
import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux'
import * as TYPES from '../../../app/types'
import payOrderLog from '../../assets/pay-order-log.svg'
import Button from '../../molecules/MuiButton'
import TextField from '../../molecules/MuiTextField'
import {ButtonColor, shadeColor, BasicColor} from '../../Color';
import Grid from '@mui/material/Grid';
import { useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js';
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
 import moment from 'moment'
 import StripeInput from "./StripeInput";
type PaymentMethodProps = {
  type: string;
  price: number;
  path: any;
  plan: string;
  kidNum: number
};
interface PaymentFormFunc {
    handleOrder(coupon: string, price: number): void;
    handleUpdate(): void;
}
export const PaymentMethod: FC<PaymentMethodProps> = ({type, price, path, plan, kidNum}) => {
  const history = useHistory();
  const dispatch = useDispatch()
  const classes = useStyles();
  const stripe = useStripe();
  const elements = useElements();
  const paymentFormRef = useRef<PaymentFormFunc>(null)

  const [couponCode, setCouponCode] = useState('');
  const [subtotal, setSubtotal] = useState(0);
  const [couponPrice, setCouponPrice] = useState(0);
  const [agreeLicense, setAgreeLicense] = useState(false)


  const handleOrder = (event: any) => {
    paymentFormRef?.current?.handleOrder(couponCode, price)
    // history.push('/parent/create')
  }

  const applyCoupon = (e: any) => {
    setCouponPrice(5);
  }

  useEffect(() => {
  }, []);

  useEffect(() => {
    setSubtotal( price * kidNum )
  }, [price])
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
                <OrderItem>
                    <OrderItemTitleContainer>
                        <OrderItemTitle>{kidNum} Child - {type}</OrderItemTitle>
                        <OrderItemSubtitle>{path.join(" / ")}</OrderItemSubtitle>
                    </OrderItemTitleContainer>
                    <OrderItemContent>${ price }</OrderItemContent>
                </OrderItem>
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
                    <OrderItemContent>{subtotal}</OrderItemContent>
                </OrderItem>
                <OrderItem>
                    <OrderItemTitleContainer>
                        <OrderItemTitle>Coupon:<div style={{fontWeight: 400, fontSize: '16px'}}>&nbsp;Year</div></OrderItemTitle>
                    </OrderItemTitleContainer>
                    <OrderItemContent>{couponPrice}</OrderItemContent>
                </OrderItem>
                <OrderItem>
                    <OrderItemTitleContainer>
                        <OrderItemTitle>Total</OrderItemTitle>
                    </OrderItemTitleContainer>
                    <OrderItemContent>
                        <div style={{display: "flex"}}>{subtotal - couponPrice}<div style={{fontSize: '12px', fontWeight: '400'}}>&nbsp;/&nbsp;Month</div></div>
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
                />
            </OrderBody>
        </OrderContainer>
    </Container>
  );
};
