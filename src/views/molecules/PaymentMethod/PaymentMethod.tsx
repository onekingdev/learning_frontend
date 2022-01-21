import {FC, useEffect, ReactChildren, ReactChild} from 'react';
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

type PackagePanelProps = {
  method: string;
  type: string;
  price: number;
};
export const PaymentMethod: FC<PackagePanelProps> = ({type, method, price}) => {
  const history = useHistory();
  const dispatch = useDispatch()
  const classes = useStyles();

  useEffect(() => {
  }, []);
  return (
    <Container>
        <PaymentContainer>
            <Title>Payment Method</Title>
            <FormControl>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                >
                    <FlexRow>
                        <FormControlLabel value="paypal" control={<Radio className={classes.radio}/>} label="" ></FormControlLabel>
                        <PayPal src={paypal}/>
                        <Apple src={apple}/>
                    </FlexRow>
                    <Divider className={classes.divider} />
                    <FlexRow>
                        <FormControlLabel value="creditCard" control={<Radio className={classes.radio}/>} label="Credit or debit card" />
                        <CardType src={visacard} />
                    </FlexRow>
                </RadioGroup>
            </FormControl>
            <div style={{fontSize: '24px', fontWeight: '700', paddingTop: '15px', paddingBottom: '15px'}}>Billing Information</div>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <TextField label="Full Name" variant="outlined" fullWidth sx={{backgroundColor: 'white'}}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Card Number" variant="outlined" fullWidth sx={{backgroundColor: 'white'}}/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField label="Expiry Date" variant="outlined" fullWidth sx={{backgroundColor: 'white'}}/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField label="CVC/CVV" variant="outlined" fullWidth sx={{backgroundColor: 'white'}}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Address Line 1" variant="outlined" fullWidth sx={{backgroundColor: 'white'}}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Address Line 2" variant="outlined" fullWidth sx={{backgroundColor: 'white'}}/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField label="City" variant="outlined" fullWidth sx={{backgroundColor: 'white'}}/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField label="State/ Province" variant="outlined" fullWidth sx={{backgroundColor: 'white'}}/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField label="Zip /Postal Code" variant="outlined" fullWidth sx={{backgroundColor: 'white'}}/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField label="Country" variant="outlined" fullWidth sx={{backgroundColor: 'white'}}/>
                </Grid>
                <Grid item xs={12} md={12}>
                    <TextField label="Phone" variant="outlined" fullWidth sx={{backgroundColor: 'white'}}/>
                </Grid>
            </Grid>
            <div style={{color: '#BCC3C8', fontSize: '14px', paddingTop: '30px', paddingBottom: '30px'}}>Your transactions is secured SSL encryption</div>
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
                <Grid container spacing={2} sx={{paddingLeft: '30px', paddingRight: '30px'}}>
                    <Grid item xs={6}>
                        <TextField label="Coupon code" variant="outlined" fullWidth sx={{backgroundColor: 'white'}} className={classes.codeInput}/>
                    </Grid>
                    <Grid item xs={6}>
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
                    className={classes.monthButton}
                    color="success"
                    onClick={()=>{}}
                >
                    Place an Order
                </Button>
            </OrderBody>
        </OrderContainer>
    </Container>
  );
};
