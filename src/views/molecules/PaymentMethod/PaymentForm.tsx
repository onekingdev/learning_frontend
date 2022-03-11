import { useEffect, useState, forwardRef, useImperativeHandle, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Store } from 'app/configureStore';
import paypal from 'views/assets/paypal.svg';
import apple from 'views/assets/apple-pay.svg';
import visacard from 'views/assets/visacard.svg';
import Button from 'views/molecules/MuiButton';
import TextField from 'views/molecules/MuiTextField';
import { BasicColor } from 'views/Color';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import {
    useStripe,
    useElements,
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement,
} from '@stripe/react-stripe-js';
import {
    useStyles,
    PayPal,
    CardType,
    Apple,
    FlexRow,
    Title,
    CardContent
} from './Style'
import StripeInput from './StripeInput';
import countryList from 'react-select-country-list';

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
  const user = useSelector((state: Store) => state.user)
  const options = useMemo(() => countryList().getData(), [])
  const { isUpdate } = props

  const [paymentMethod, setPaymentMethod] = useState('card')
  const [validateRst, setValidateRst] = useState<{ [key: string]: any }>({
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
    price: 0
  })

  console.log(options);
  const formValidation = () => {
    const validateMsgTemp = {...validateRst}
    let valiResult = true;
    for(const key in validateRst) {
      if(validateRst[key] === null) {
          validateMsgTemp[key] = 'Field is required';
      }
      if(validateMsgTemp[key]) {
          valiResult = false;
      }
    }
    setValidateRst(validateMsgTemp);
    return valiResult;
}

  const handleFormChange = (field: string, errMsg: string) => {
      setValidateRst({...validateRst, [field]: errMsg})
  }

  const handleReturn = (event: any) => {

  }

  const handleOrder = async () => {

    if(!formValidation()) return {success: false, result: 'Validation Failed'};
    if(!stripe) return {success: false, result: "Can't get stripe"};
    if(!elements) return {success: false, result: "Can't get element"};
    if(!elements.getElement(CardNumberElement)) return {success: false, result: "Can't get card number element"};

    const cardElement:any = elements.getElement(CardNumberElement);
    console.log(cardElement);
    const result:any = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
            // email: user.email,
            email: 'mooncode610@gmail.com',
            address: {
                city: data.city,
                country: data.country,
                line1: data.addressOne,
                line2: data.addressTwo,
                postal_code: data.zip,
                state: data.state
            },
            name: data.firstName + ' ' + data.lastName,
            phone: data.phone
        },
    }).catch(console.log);
    console.log(result);
    if(result.error) return {success: false, result: result.error.message};
    /*------------------------ send request to backend to create payment -S-----------------------------*/

    /*------------------------ send request to backend to create payment -E-----------------------------*/
    result.email = user.email;
    return {success: true, result: result};
  }

  const handleUpdate = async () => {
    if(!formValidation()) return {success: false, result: 'Validation Failed'};
    /*------------------------ send request to backend to create payment -S-----------------------------*/
    const result = {};
    /*------------------------ send request to backend to create payment -E-----------------------------*/
    return {success: true, result: result};
  }

  useImperativeHandle(ref, () => ({
    async handleOrder (couponCode, price) {
        data.couponCode = couponCode;
        data.price = price;
        setData(data);
        const result = await handleOrder();
        return result;
    },

    async handleUpdate () {
        const result = await handleUpdate();
        return result;
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
                        handleFormChange('firstName',e.target.value.length === 0 ? 'Field is required' : '')
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
                        handleFormChange('lastName',e.target.value.length === 0 ? 'Field is required' : '')
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
                    onChange={(e: any) => handleFormChange('cardNumber',e['error'] ? e['error']['message'] : '')}
                    error={!!validateRst.cardNumber}
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
                    onChange={(e: any) => handleFormChange('expiryDate',e['error'] ? e['error']['message'] : '')}
                    focused
                    error={!!validateRst.expiryDate}
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
                    onChange={(e: any) => handleFormChange('cvc',e['error'] ? e['error']['message'] : '')}
                    focused
                    error={!!validateRst.cvc}
                    helperText={validateRst.cvc}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="Address Line 1"
                    onChange={(e: any) => {
                        handleFormChange('addressOne',e.target.value.length === 0 ? 'Field is required' : '')
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
                        handleFormChange('addressTwo',e.target.value.length === 0 ? 'Field is required' : '');
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
                        handleFormChange('city',e.target.value.length === 0 ? 'Field is required' : '');
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
                        handleFormChange('state',e.target.value.length === 0 ? 'Field is required' : '');
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
                        handleFormChange('zip',e.target.value.length === 0 ? 'Field is required' : '')
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
                        handleFormChange('country',e.target.value.length === 0 ? 'Field is required' : '');
                        setData({...data, country: e.target.value})

                    } }
                    error={!!validateRst.country}
                    helperText={validateRst.country}
                    value={data.country}
                />
            </Grid>
            <Grid item xs={12} md={12}>
                <TextField
                    label="Phone"
                    onChange={(e: any) => {
                        handleFormChange('phone',e.target.value.length === 0 ? 'Field is required' : '')
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
