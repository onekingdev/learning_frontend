import {FC, useEffect, ReactChildren, ReactChild, useState, forwardRef, useImperativeHandle } from 'react';
import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux'
import {ParentPgNav} from '../ParentPgNav/ParentPgNav'
import * as TYPES from '../../../app/types'
import colorpanel from '../../assets/colorPannel.svg';
import paypal from '../../assets/paypal.svg'
import apple from '../../assets/apple-pay.svg'
import visacard from '../../assets/visacard.svg'
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js';
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
    handleOrder(): void;
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
    fullName: null,
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
  });

  const handleFormChange = (field: string, errMsg: string) => {
      setValidateRst({...validateRst, [field]: errMsg})
  }
  const handleReturn = (event: any) => {

  }

  const handleOrder = () => {
    console.log("order")
  }

  const handleUpdate = () => {

  }

  useImperativeHandle(ref, () => ({
    handleOrder () {
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
                value={paymentMethod}
                onChange={(e)=> setPaymentMethod(e.target.value)}
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
            <Grid item xs={12}>
                <TextField label="Full Name"
                    variant="outlined"
                    fullWidth
                    className={classes.input}
                    onChange={(e: any) => handleFormChange("fullName",e['error'] ? e['error']['message'] : null)}
                    focused
                    error={validateRst.fullName !== null}
                    helperText={validateRst.fullName}
                    />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="Card Number"
                    variant="outlined"
                    fullWidth
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
                    className={classes.input}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    label="Expiry Date"
                    variant="outlined"
                    fullWidth
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
                    className={classes.input}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    label="CVC/CVV"
                    variant="outlined"
                    fullWidth
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
                    className={classes.input}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="Address Line 1"
                    variant="outlined"
                    fullWidth
                    onChange={(e: any) => handleFormChange("addressOne",e.target.value.length === 0 ? "Field is required" : "") }
                    error={!!validateRst.addressOne}
                    helperText={validateRst.addressOne}
                    className={classes.input}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="Address Line 2"
                    variant="outlined"
                    fullWidth
                    onChange={(e: any) => handleFormChange("addressOne",e.target.value.length === 0 ? "Field is required" : "") }
                    error={!!validateRst.addressOne}
                    helperText={validateRst.addressOne}
                    className={classes.input}
                    />
            </Grid>
            <Grid item xs={6} md={6}>
                <TextField
                    label="City"
                    variant="outlined"
                    fullWidth
                    onChange={(e: any) => handleFormChange("city",e.target.value.length === 0 ? "Field is required" : "") }
                    error={!!validateRst.city}
                    helperText={validateRst.city}
                    className={classes.input}
                />
            </Grid>
            <Grid item xs={6} md={6}>
                <TextField
                    label="State/ Province"
                    variant="outlined"
                    fullWidth
                    onChange={(e: any) => handleFormChange("state",e.target.value.length === 0 ? "Field is required" : "") }
                    error={!!validateRst.state}
                    helperText={validateRst.state}
                    className={classes.input}
                    />
            </Grid>
            <Grid item xs={6} md={6}>
                <TextField
                    label="Zip /Postal Code"
                    variant="outlined"
                    fullWidth
                    onChange={(e: any) => handleFormChange("zip",e.target.value.length === 0 ? "Field is required" : "") }
                    error={!!validateRst.zip}
                    helperText={validateRst.zip}
                    className={classes.input}
                    />
            </Grid>
            <Grid item xs={6} md={6}>
                <TextField
                    label="Country"
                    variant="outlined"
                    fullWidth
                    onChange={(e: any) => handleFormChange("country",e.target.value.length === 0 ? "Field is required" : "") }
                    error={!!validateRst.country}
                    helperText={validateRst.country}
                    className={classes.input}
                    />
            </Grid>
            <Grid item xs={12} md={12}>
                <TextField
                    label="Phone"
                    variant="outlined"
                    fullWidth
                    onChange={(e: any) => handleFormChange("phone",e.target.value.length === 0 ? "Field is required" : "") }
                    error={!!validateRst.phone}
                    helperText={validateRst.phone}
                    className={classes.input}
                    />
            </Grid>
            {isUpdate && (<>
                <Grid item xs={12} md={6}>
                    <Button
                        variant="contained"
                        className={classes.updateButton}
                        color="success"
                        onClick={handleOrder}
                        fullWidth
                    >
                        Update
                    </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Button
                        variant="contained"
                        className={classes.returnButton}
                        color="success"
                        onClick={handleOrder}
                        fullWidth
                    >
                        Return
                    </Button>
                </Grid></>
            )}
        </Grid>
        <div style={{color: '#BCC3C8', fontSize: '14px', paddingTop: '30px', paddingBottom: '30px'}}>Your transactions is secured SSL encryption</div>
    </>
  );
});
