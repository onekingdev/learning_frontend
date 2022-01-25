import {FC, useEffect, ReactChildren, ReactChild, useState, forwardRef, useImperativeHandle } from 'react';
import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux'
import {ParentPgNav} from '../ParentPgNav/ParentPgNav'
import * as TYPES from '../../../app/types'
import paypal from '../../assets/paypal.svg'
import apple from '../../assets/apple-pay.svg'
import visacard from '../../assets/visacard.svg'
import Button from '../../molecules/MuiButton'
import TextField from '../../molecules/MuiTextField'
import {ButtonColor, shadeColor, BasicColor} from '../../Color';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import { useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement, CardElement } from '@stripe/react-stripe-js';
import {
  useStyles,
  PayPal,
  CardType,
  Apple,
  FlexRow,
  Title,
  CardContent
 } from './Style'
 import StripeInput from "./StripeInput";
import { FlexColumn } from '../../pages/Account/Style';
type PaymentFormProps = {
  isUpdate: boolean
};
interface PaymentFormFunc {
    handleOrder(coupon: string, price: number): void;
    handleUpdate(): void;
}
export const PaymentForm = forwardRef<PaymentFormFunc, any> ((props, ref) => {
  const history = useHistory();
  const dispatch = useDispatch()
  const classes = useStyles();
  const stripe = useStripe();
  const elements = useElements();
  const { isUpdate } = props

  const [paymentMethod, setPaymentMethod] = useState("card")
  const [validateRst, setValidateRst] = useState({
    firstName: null,
    lastName: null,
    cardNumber: null,
    expiryDate: null,
    cvc: null,
    addressOne: null,
    addressTwo: null,
    state: null,
    city: null,
    zip: null,
    country: null,
    phone: null,
    email: null,
  });

  const [data, setData] = useState({
    paymentMethod: 'card',
    firstName: '',
    lastName: '',
    addressOne: '',
    addressTwo: '',
    state: '',
    city: '',
    zip: '',
    country: '',
    phone: '',
    couponCode: '',
    email: '',
    price: 0
  })

  const handleFormChange = (field: string, errMsg: string) => {
      setValidateRst({...validateRst, [field]: errMsg})
  }
  const handleReturn = (event: any) => {

  }

  const handleOrder = async () => {

    if(!stripe) return {success: false, result: "Can't get stripe"};
    if(!elements) return {success: false, result: "Can't get element"};
    if(!elements.getElement(CardNumberElement)) return {success: false, result: "Can't get card number element"};

    const cardElement:any = elements.getElement(CardNumberElement);
    const result = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
            email: data.email,
        },
    }).catch(console.log);

    if(!result) return {success: false, result: "Can't create payment method"};

    return {success: true, result: result};
  }

  const handleUpdate = () => {

  }

  useImperativeHandle(ref, () => ({
    handleOrder (couponCode, price) {
        data.couponCode = couponCode;
        data.price = price;
        setData(data);
        handleOrder();
    },

    handleUpdate () {
        handleUpdate();
    }
  }))
  useEffect(() => {
  }, []);
  return (
    <>
        <Title>Payment Method</Title>
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                value={data.paymentMethod}
                onChange={(e)=> setData({...data, paymentMethod: e.target.value})}
            >
                <FlexRow>
                    <FormControlLabel value="paypal" control={<Radio className={classes.radio} disabled/>} label=""></FormControlLabel>
                    <PayPal src={paypal}/>
                    <Apple src={apple}/>
                </FlexRow>
                <Divider className={classes.divider} />
                <FlexRow>
                    <FormControlLabel value="card" control={<Radio className={classes.radio}/>} label="" />
                    <CardContent>
                        <div>Credit or debit card</div>
                        <CardType src={visacard} />
                    </CardContent>
                </FlexRow>
            </RadioGroup>
        </FormControl>
        <div style={{fontSize: '24px', fontWeight: '700', paddingTop: '15px', paddingBottom: '15px'}}>Billing Information</div>
        <Grid container spacing={4}>
            <Grid item xs={6}>
                <TextField
                    label="First Name"
                    onChange={(e: any) => {
                        handleFormChange("firstName",e.target.value.length === 0 ? "Field is required" : "")
                        setData({...data, firstName: e.target.value})
                    } }
                    error={!!validateRst.firstName}
                    helperText={validateRst.firstName}
                    value={data.firstName}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Last Name"
                    onChange={(e: any) => {
                        handleFormChange("lastName",e.target.value.length === 0 ? "Field is required" : "")
                        setData({...data, lastName: e.target.value})
                    } }
                    error={!!validateRst.lastName}
                    helperText={validateRst.lastName}
                    value={data.lastName}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="Card Number"
                    InputProps={{
                        inputProps: {
                            component: CardNumberElement
                        },
                        inputComponent: StripeInput
                    }}
                    onChange={(e: any) => handleFormChange("cardNumber",e['error'] ? e['error']['message'] : null)}
                    error={validateRst.cardNumber !== null}
                    helperText={validateRst.cardNumber}
                    focused
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    label="Expiry Date"
                    InputProps={{
                        inputProps: {
                        component: CardExpiryElement
                        },
                        inputComponent: StripeInput
                    }}
                    onChange={(e: any) => handleFormChange("expiryDate",e['error'] ? e['error']['message'] : null)}
                    focused
                    error={validateRst.expiryDate !== null}
                    helperText={validateRst.expiryDate}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    label="CVC/CVV"
                    InputProps={{
                        inputProps: {
                        component: CardCvcElement
                        },
                        inputComponent: StripeInput
                    }}
                    onChange={(e: any) => handleFormChange("cvc",e['error'] ? e['error']['message'] : null)}
                    focused
                    error={validateRst.cvc !== null}
                    helperText={validateRst.cvc}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="Address Line 1"
                    onChange={(e: any) => {
                        handleFormChange("addressOne",e.target.value.length === 0 ? "Field is required" : "")
                        setData({...data, addressOne: e.target.value})
                    } }
                    error={!!validateRst.addressOne}
                    helperText={validateRst.addressOne}
                    value={data.addressOne}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="Address Line 2"
                    onChange={(e: any) => {
                        handleFormChange("addressTwo",e.target.value.length === 0 ? "Field is required" : "");
                        setData({...data, addressTwo: e.target.value});
                    } }
                    error={!!validateRst.addressTwo}
                    helperText={validateRst.addressTwo}
                    value={data.addressTwo}
                />
            </Grid>
            <Grid item xs={6} md={6}>
                <TextField
                    label="City"
                    onChange={(e: any) => {
                        handleFormChange("city",e.target.value.length === 0 ? "Field is required" : "");
                        setData({...data, city: e.target.value});
                    } }
                    error={!!validateRst.city}
                    helperText={validateRst.city}
                    value={data.city}
                />
            </Grid>
            <Grid item xs={6} md={6}>
                <TextField
                    label="State/ Province"
                    onChange={(e: any) => {
                        handleFormChange("state",e.target.value.length === 0 ? "Field is required" : "");
                        setData({...data, state: e.target.value})
                    } }
                    error={!!validateRst.state}
                    helperText={validateRst.state}
                    value={data.state}
                />
            </Grid>
            <Grid item xs={6} md={6}>
                <TextField
                    label="Zip /Postal Code"
                    onChange={(e: any) => {
                        handleFormChange("zip",e.target.value.length === 0 ? "Field is required" : "")
                        setData({...data, zip: e.target.value})
                    } }
                    error={!!validateRst.zip}
                    helperText={validateRst.zip}
                    value={data.zip}
                />
            </Grid>
            <Grid item xs={6} md={6}>
                <TextField
                    label="Country"
                    onChange={(e: any) => {
                        handleFormChange("country",e.target.value.length === 0 ? "Field is required" : "");
                        setData({...data, country: e.target.value})

                    } }
                    error={!!validateRst.country}
                    helperText={validateRst.country}
                    value={data.country}
                />
            </Grid>
            <Grid item xs={12} md={12}>
                <TextField
                    label="Email"
                    onChange={(e: any) => {
                        handleFormChange("email",e.target.value.length === 0 ? "Field is required" : "")
                        setData({...data, email: e.target.value})
                    } }
                    error={!!validateRst.email}
                    helperText={validateRst.email}
                    value={data.email}
                />
            </Grid>
            <Grid item xs={12} md={12}>
                <TextField
                    label="Phone"
                    onChange={(e: any) => {
                        handleFormChange("phone",e.target.value.length === 0 ? "Field is required" : "")
                        setData({...data, phone: e.target.value})
                    } }
                    error={!!validateRst.phone}
                    helperText={validateRst.phone}
                    value={data.phone}
                />
            </Grid>
            {isUpdate && (<>
                <Grid item xs={12} md={6}>
                    <Button
                        bgColor={BasicColor.green}
                        onClick={handleOrder}
                        align="left"
                        value="Update"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Button
                        bgColor={BasicColor.gray60}
                        onClick={handleOrder}
                        align="right"
                        value="Return"
                    />
                </Grid>
            </>)}
        </Grid>
        <div style={{color: BasicColor.lightCyanBlue, fontSize: '14px', paddingTop: '30px', paddingBottom: '30px'}}>Your transactions is secured SSL encryption</div>
    </>
  );
});
