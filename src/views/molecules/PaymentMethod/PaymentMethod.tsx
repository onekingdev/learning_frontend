import {FC, useEffect, ReactChildren, ReactChild, useState, useRef} from 'react';
import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux'
import {ParentPgNav} from '../ParentPgNav/ParentPgNav'
import * as TYPES from '../../../app/types'
import colorpanel from '../../assets/colorPannel.svg';
import paypal from '../../assets/paypal.svg'
import apple from '../../assets/apple-pay.svg'
import visacard from '../../assets/visacard.svg'
import payOrderLog from '../../assets/pay-order-log.svg'
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
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
  PayPal,
  CardType,
  Apple,
  FlexRow,
  Title
 } from './Style'
 import StripeInput from "./StripeInput";
type PaymentMethodProps = {
  type: string;
  price: number;
  path: any;
  plan: string;
};
interface PaymentFormFunc {
    handleOrder(): void;
    handleUpdate(): void;
}
export const PaymentMethod: FC<PaymentMethodProps> = ({type, price, path, plan}) => {
  const history = useHistory();
  const dispatch = useDispatch()
  const classes = useStyles();
  const stripe = useStripe();
  const elements = useElements();
  const paymentFormRef = useRef<PaymentFormFunc>(null)

  const handleOrder = (event: any) => {
    paymentFormRef?.current?.handleOrder()
  }

  useEffect(() => {
  }, []);

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
                        <OrderItemTitle>1 Child - Combo</OrderItemTitle>
                        <OrderItemSubtitle>Math / ELA</OrderItemSubtitle>
                    </OrderItemTitleContainer>
                    <OrderItemContent>$15.98</OrderItemContent>
                </OrderItem>
                <OrderItem>
                    <OrderItemTitleContainer>
                        <OrderItemTitle>1 Child - Area</OrderItemTitle>
                        <OrderItemSubtitle>Math</OrderItemSubtitle>
                    </OrderItemTitleContainer>
                    <OrderItemContent>$4.98</OrderItemContent>
                </OrderItem>
                <Grid container spacing={2} sx={{paddingLeft: '30px', paddingRight: '30px', justifyContent: 'center'}}>
                    <Grid item md={6} xs={10}>
                        <TextField label="Coupon code" variant="outlined" fullWidth className={`${classes.codeInput} ${classes.input}`}/>
                    </Grid>
                    <Grid item md={6} xs={10}>
                        <Button
                            variant="contained"
                            className={classes.codeButtn}
                            color="primary"
                            onClick={()=>{}}
                            fullWidth
                        >
                            Apply Coupon
                        </Button>
                    </Grid>
                </Grid>
                <OrderItem>
                    <OrderItemTitleContainer>
                        <OrderItemTitle>Subtotal</OrderItemTitle>
                    </OrderItemTitleContainer>
                    <OrderItemContent>$20.96</OrderItemContent>
                </OrderItem>
                <OrderItem>
                    <OrderItemTitleContainer>
                        <OrderItemTitle>Coupon:<div style={{fontWeight: 400, fontSize: '16px'}}>&nbsp;Year</div></OrderItemTitle>
                    </OrderItemTitleContainer>
                    <OrderItemContent>$4.98</OrderItemContent>
                </OrderItem>
                <OrderItem>
                    <OrderItemTitleContainer>
                        <OrderItemTitle>Total</OrderItemTitle>
                    </OrderItemTitleContainer>
                    <OrderItemContent>
                        <div style={{display: "flex"}}>$12.96<div style={{fontSize: '12px', fontWeight: '400'}}>&nbsp;/&nbsp;Month</div></div>
                        <div style={{fontWeight: 400, lineHeight: '12px', fontSize: '10px'}}>First Renewal: February 12, 2022</div>
                    </OrderItemContent>
                </OrderItem>
                <OrderTip>
                    Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in out privacy policy
                </OrderTip>
                <OrderTip>
                    <input type="checkbox" id="scales" name="scales" />
                    <div style={{paddingLeft: '20px'}}>I have read and agree to the website terms and conditions*</div>
                </OrderTip>
                <Button
                    variant="contained"
                    className={classes.orderButton}
                    color="success"
                    onClick={handleOrder}
                >
                    Place an Order
                </Button>
            </OrderBody>
        </OrderContainer>
    </Container>
  );
};
