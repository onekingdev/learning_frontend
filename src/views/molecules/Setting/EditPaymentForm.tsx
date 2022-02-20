import {FC, useEffect, ReactChildren, ReactChild, useState, forwardRef, useImperativeHandle } from 'react';
import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux'
import {ParentPgNav} from '../ParentPgNav/ParentPgNav'
import * as TYPES from '../../../app/types'
import paypal from '../../assets/paypal.svg'
import apple from '../../assets/apple-pay.svg'
import visacard from '../../assets/visacard.svg'
import Button from '../MuiButton'
import TextField from '../MuiTextField'
import {ButtonColor, shadeColor, BasicColor} from '../../Color';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import { useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js';
import {
  useStyles,
  PayPal,
  CardType,
  Apple,
  FlexRow,
  Title,
  CardContent
 } from '../PaymentMethod/Style'

import StripeInput from '../PaymentMethod/StripeInput';

import { FlexColumn } from '../../pages/Payment/Style';
type PaymentFormProps = {
  isUpdate: boolean
};
interface PaymentFormFunc {
    handleOrder(): void;
    handleUpdate(): void;
}
export const EditPaymentForm = forwardRef<PaymentFormFunc, any> ((props, ref) => {
  const history = useHistory();
  const dispatch = useDispatch()
  const classes = useStyles();
  const stripe = useStripe();
  const elements = useElements();
  const { isUpdate } = props

  const [paymentMethod, setPaymentMethod] = useState('card')
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
    console.log('order')
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
        <Grid container spacing={4}>
            <Grid item xs={12}>
                <TextField
                    label='Card Number'
                    InputProps={{
                        inputProps: {
                            component: CardNumberElement
                        },
                        inputComponent: StripeInput
                    }}
                    onChange={(e: any) => handleFormChange('cardNumber',e['error'] ? e['error']['message'] : null)}
                    error={validateRst.cardNumber !== null}
                    helperText={validateRst.cardNumber}
                    focused
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    label='Expiry Date'
                    InputProps={{
                        inputProps: {
                        component: CardExpiryElement
                        },
                        inputComponent: StripeInput
                    }}
                    onChange={(e: any) => handleFormChange('expiryDate',e['error'] ? e['error']['message'] : null)}
                    focused
                    error={validateRst.expiryDate !== null}
                    helperText={validateRst.expiryDate}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    label='CVC/CVV'
                    InputProps={{
                        inputProps: {
                        component: CardCvcElement
                        },
                        inputComponent: StripeInput
                    }}
                    onChange={(e: any) => handleFormChange('cvc',e['error'] ? e['error']['message'] : null)}
                    focused
                    error={validateRst.cvc !== null}
                    helperText={validateRst.cvc}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label='Address Line 1'
                    onChange={(e: any) => handleFormChange('addressOne',e.target.value.length === 0 ? 'Field is required' : '') }
                    error={!!validateRst.addressOne}
                    helperText={validateRst.addressOne}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label='Address Line 2'
                    onChange={(e: any) => handleFormChange('addressTwo',e.target.value.length === 0 ? 'Field is required' : '') }
                    error={!!validateRst.addressTwo}
                    helperText={validateRst.addressTwo}
                />
            </Grid>
            <Grid item xs={6} md={6}>
                <TextField
                    label='City'
                    onChange={(e: any) => handleFormChange('city',e.target.value.length === 0 ? 'Field is required' : '') }
                    error={!!validateRst.city}
                    helperText={validateRst.city}
                />
            </Grid>
            <Grid item xs={6} md={6}>
                <TextField
                    label='State/ Province'
                    onChange={(e: any) => handleFormChange('state',e.target.value.length === 0 ? 'Field is required' : '') }
                    error={!!validateRst.state}
                    helperText={validateRst.state}
                />
            </Grid>
            <Grid item xs={6} md={6}>
                <TextField
                    label='Zip /Postal Code'
                    onChange={(e: any) => handleFormChange('zip',e.target.value.length === 0 ? 'Field is required' : '') }
                    error={!!validateRst.zip}
                    helperText={validateRst.zip}
                />
            </Grid>
            <Grid item xs={6} md={6}>
                <TextField
                    label='Country'
                    onChange={(e: any) => handleFormChange('country',e.target.value.length === 0 ? 'Field is required' : '') }
                    error={!!validateRst.country}
                    helperText={validateRst.country}
                />
            </Grid>
            <Grid item xs={12} md={12}>
                <TextField
                    label='Phone'
                    onChange={(e: any) => handleFormChange('phone',e.target.value.length === 0 ? 'Field is required' : '') }
                    error={!!validateRst.phone}
                    helperText={validateRst.phone}
                />
            </Grid>
            {isUpdate && (<>
                <Grid item xs={12} md={6}>
                    <Button
                        bgColor={BasicColor.green}
                        onClick={handleOrder}
                        align='left'
                        value='Update'
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Button
                        bgColor={BasicColor.gray60}
                        onClick={handleOrder}
                        align='right'
                        value='Return'
                    />
                </Grid>
            </>)}
        </Grid>
    </>
  );
});
