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
    prices: {
        Gold: number,
        Combo: number,
        Sole: number,
    };
    plans : {
        Gold: string,
        Combo: string,
        Sole: string,
    };
    childrenCounts: {
        Gold: number,
        Combo: number,
        Sole: number,
    };
    offRate: number;
};
interface PaymentFormFunc {
    handleOrder(coupon: string, price: number): any;
    handleUpdate(): void;
}
export const PaymentMethod: FC<PaymentMethodProps> = ({prices, plans, childrenCounts, offRate}) => {
  const history = useHistory();
  const dispatch = useDispatch()
  const classes = useStyles();
  const paymentFormRef = useRef<PaymentFormFunc>(null)
  const { enqueueSnackbar } = useSnackbar();

  const [couponCode, setCouponCode] = useState('');
  const [subtotal, setSubtotal] = useState(0);
  const [couponPrice, setCouponPrice] = useState(0);
  const [agreeLicense, setAgreeLicense] = useState(false)


  const handleOrder = async (event: any) => {
    const result = await paymentFormRef?.current?.handleOrder(couponCode, 0);
    console.log(result);
    if(result.success) {
        enqueueSnackbar('Your subscription has been successfully created!', { variant: 'success' });
        history.push('/kids/new')
    }
    else
        enqueueSnackbar(`Failed! ${result.result}`, { variant: 'error' });
  }

  const applyCoupon = (e: any) => {
    setCouponPrice(5);
  }

  useEffect(() => {
  }, []);

  useEffect(() => {
        const price_gold = prices.Gold / 100 * offRate * ((childrenCounts.Gold - 1 > 0) ? (childrenCounts.Gold - 1) : 0) + (childrenCounts.Gold > 0 ? 1 : 0 ) * prices.Gold;
        const price_combo = prices.Combo / 100 * offRate * ((childrenCounts.Combo - 1 > 0) ? (childrenCounts.Combo - 1) : 0) + (childrenCounts.Combo > 0 ? 1 : 0 ) * prices.Combo;
        const price_sole = prices.Sole / 100 * offRate * ((childrenCounts.Sole - 1 > 0) ? (childrenCounts.Sole - 1) : 0) + (childrenCounts.Sole > 0 ? 1 : 0 ) * prices.Sole;
        setSubtotal( price_gold + price_combo + price_sole )
  }, [prices, childrenCounts])

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
                    childrenCounts.Gold > 0 &&
                    <OrderItem>
                        <OrderItemTitle>{childrenCounts.Gold} Gold Package </OrderItemTitle>
                        <OrderItemContent>${prices.Gold} / {plans.Gold}</OrderItemContent>
                    </OrderItem>
                }
                {
                    childrenCounts.Combo > 0 &&
                    <OrderItem>
                        <OrderItemTitle>{childrenCounts.Combo} Combo Package </OrderItemTitle>
                        <OrderItemContent>${prices.Combo} / {plans.Combo}</OrderItemContent>
                    </OrderItem>
                }
                {
                    childrenCounts.Sole > 0 &&
                    <OrderItem>
                        <OrderItemTitle>{childrenCounts.Sole} Sole Package </OrderItemTitle>
                        <OrderItemContent>${prices.Sole} / {plans.Sole}</OrderItemContent>
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
                />
            </OrderBody>
        </OrderContainer>
    </Container>
  );
};
