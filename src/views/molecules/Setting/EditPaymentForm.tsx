import {
    useState, FC,
} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { css } from 'styled-components';
import { BasicColor } from 'views/Color';
import { Grid, TextField } from '@mui/material';
import {
    doEditPaymentMethod,
} from 'app/actions/paymentActions';
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import { useSnackbar } from 'notistack';
import { GUARDIAN_PAYMENT_METHOD_INFO, TEACHER_SET_PAYMENT_METHOD } from 'app/types'
import commonDictionary from 'constants/commonDictionary'
import { images } from './utils/images'
import { USER_TYPE } from 'constants/common';
import { useMutation } from '@tanstack/react-query';
import LoadingButton from '@mui/lab/LoadingButton';
import validator from 'validator'

interface DialogProps {
    open: () => (void)
    paymentMethod: any
}

interface IUpdatePayment {
    token: string
    paymentMethodInfo: any
    paymentMethodId: string | number
}

export const EditPaymentForm: FC<DialogProps> = ({ open, paymentMethod }) => {
    const dispatch = useDispatch()
    const { language, token, profile } = useSelector((state: any) => state.user);

    const { enqueueSnackbar } = useSnackbar();

    const [loading, setLoading] = useState(false)

    const {
        wrapperProps,
        getCardImageProps,
        getCardNumberProps,
        getExpiryDateProps,
        getCVCProps
    } = usePaymentInputs();
    const [validateRst, setValidateRst] = useState({
        address1: null,
        address2: null,
        cardCvc: null,
        expiryDate: null,
        cardNumber: null,
        city: null,
        country: null,
        state: null,
        postCode: null,
        phone: null,
    });

    const style = {
        fieldWrapper: {
            base: css`
              width: 100%;
              border: unset;
            `,
            errored: css`
            border: unset;
            `
        },
        inputWrapper: {
            base: css`
              height: auto;
              border-radius: 10px;
              border-color: ${BasicColor.green};
              border: unset;
              padding: 16.5px 14px;
              outline: 2px solid ${BasicColor.green};
              overflow: auto;
            `,
            errored: css`
              border-color: maroon;
            `,
            focused: css`
              border-color: gray;
              box-shadow: unset;
              outline: 2px solid green;
            `
        },
        input: {
            base: css`
              color: green;
            `,
            errored: css`
              color: maroon;
            `,
            cardNumber: css`
              width: 100%;
            `,
            expiryDate: css`
              width: 100%;
            `,
            cvc: css`
              width: 100%;
            `,
        },
        errorText: {
            base: css`
              margin-left: 2vw;
              color: maroon;
            `
        }
    }

    const [paymentMethodInfo, setPaymentMethodInfo] = useState({
        address1: paymentMethod.address1,
        address2: paymentMethod.address2,
        cardCvc: paymentMethod.cardCvc,
        cardExpiryDate: ('0' + paymentMethod.cardExpMonth).slice(-2) + ' / ' + paymentMethod.cardExpYear?.slice(-2),
        cardNumber: paymentMethod.cardNumber,
        city: paymentMethod.city,
        state: paymentMethod.state,
        postCode: paymentMethod.postCode,
        country: paymentMethod.country,
        phone: paymentMethod.phone,
    })


    const handleFormChange = (field: string, errMsg: string) => {
        setValidateRst({ ...validateRst, [field]: errMsg })
    }

    const update = useMutation(({ token, paymentMethodInfo, paymentMethodId }: IUpdatePayment) => doEditPaymentMethod(
        paymentMethodId, paymentMethodInfo, token
    ), {
        onSuccess: async data => {
            if (data.message) {
                enqueueSnackbar(data.message, { variant: 'error' })
            } else {
                const updatedPaymentMethod = {
                    ...paymentMethodInfo,
                    cardExpMonth: paymentMethodInfo.cardExpiryDate.slice(0, 2),
                    cardExpYear: paymentMethodInfo.cardExpiryDate.slice(-2)
                }
                if (profile.role === USER_TYPE.guardian)
                    dispatch({
                        type: GUARDIAN_PAYMENT_METHOD_INFO,
                        payload: updatedPaymentMethod
                    });
                if (profile.role === USER_TYPE.teacher)
                    dispatch({
                        type: TEACHER_SET_PAYMENT_METHOD,
                        payload: {...paymentMethodInfo, ...data}
                    });
                enqueueSnackbar('Payment method updated successfully', { variant: 'success' })
                open()
            }
        },
        onError: async (error: any) => {
            enqueueSnackbar(error.message, { variant: 'error' })
        },
        onSettled: async () => {
            setLoading(false)
        }
    })

    const handleOrder = async (event: any) => {
        event.preventDefault()
        setLoading(true)
        if (validator.isCreditCard(paymentMethodInfo.cardNumber) && paymentMethod.id)
            update.mutate({
                token, paymentMethodInfo, paymentMethodId: paymentMethod.id
            })
        else {

            setLoading(false)
            enqueueSnackbar('CardNumber is not Valid', { variant: 'error' })
        }
    }

    return (
        <>
            <Grid container spacing={2} marginTop={1} justifyContent='center' sx={{ minHeight: 200 }}>
                <Grid item xs={12} md={12}>
                    <PaymentInputsWrapper {...wrapperProps} styles={style}>
                        <svg {...getCardImageProps({ images })} />
                        <input
                            // autoFocus
                            {...getCardNumberProps({
                                onChange: (e: any) => setPaymentMethodInfo({ ...paymentMethodInfo, cardNumber: e.target.value })
                            })} value={paymentMethodInfo?.cardNumber || ''} />
                    </PaymentInputsWrapper>
                </Grid>
                <Grid item xs={6}>
                    <PaymentInputsWrapper {...wrapperProps} styles={style}>
                        <input {...getExpiryDateProps({
                            onChange: (e: any) => setPaymentMethodInfo({ ...paymentMethodInfo, cardExpiryDate: e.target.value })
                        }
                        )}
                            value={paymentMethodInfo?.cardExpiryDate || ''} />

                    </PaymentInputsWrapper>
                </Grid>
                <Grid item xs={6}>
                    <PaymentInputsWrapper {...wrapperProps} styles={style}>
                        <input {...getCVCProps({
                            onChange: (e: any) => setPaymentMethodInfo({ ...paymentMethodInfo, cardCvc: e.target.value })
                        })}
                            value={paymentMethodInfo?.cardCvc || ''}
                        />
                    </PaymentInputsWrapper>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label='Address 1'
                        onChange={(e: any) => {
                            handleFormChange('address1', e.target.value.length === 0 ? commonDictionary[language]?.fieldIsRequired : '')
                            setPaymentMethodInfo({ ...paymentMethodInfo, address1: e.target.value })
                        }}
                        error={!!validateRst.address1}
                        helperText={validateRst.address1}
                        value={paymentMethodInfo?.address1 || ''}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label='Address 2'
                        onChange={(e: any) => {
                            handleFormChange('address2', e.target.value.length === 0 ? commonDictionary[language]?.fieldIsRequired : '')
                            setPaymentMethodInfo({ ...paymentMethodInfo, address2: e.target.value })
                        }}
                        error={!!validateRst.address2}
                        helperText={validateRst.address2}
                        value={paymentMethodInfo?.address2 || ''}
                    />
                </Grid>
                <Grid item xs={6} md={6}>
                    <TextField
                        label='City'
                        onChange={(e: any) => {
                            handleFormChange('city', e.target.value.length === 0 ? commonDictionary[language]?.fieldIsRequired : '')
                            setPaymentMethodInfo({ ...paymentMethodInfo, city: e.target.value })
                        }}
                        error={!!validateRst.city}
                        helperText={validateRst.city}
                        value={paymentMethodInfo?.city || ''}
                    />
                </Grid>
                <Grid item xs={6} md={6}>
                    <TextField
                        label='State/ Province'
                        onChange={(e: any) => {
                            handleFormChange('state', e.target.value.length === 0 ? commonDictionary[language]?.fieldIsRequired : '')
                            setPaymentMethodInfo({ ...paymentMethodInfo, state: e.target.value })
                        }}
                        error={!!validateRst.state}
                        helperText={validateRst.state}
                        value={paymentMethodInfo?.state || ''}
                    />
                </Grid>
                <Grid item xs={6} md={6}>
                    <TextField
                        label='Zip /Postal Code'
                        onChange={(e: any) => {
                            handleFormChange('postCode', e.target.value.length === 0 ? commonDictionary[language]?.fieldIsRequired : '')
                            setPaymentMethodInfo({ ...paymentMethodInfo, postCode: e.target.value })
                        }}
                        error={!!validateRst.postCode}
                        helperText={validateRst.postCode}
                        value={paymentMethodInfo?.postCode || ''}
                    />
                </Grid>
                <Grid item xs={6} md={6}>
                    <TextField
                        label='Country'
                        onChange={(e: any) => {
                            handleFormChange('postCode', e.target.value.length === 0 ? commonDictionary[language]?.fieldIsRequired : '')
                            setPaymentMethodInfo({ ...paymentMethodInfo, country: e.target.value })
                        }}
                        error={!!validateRst.country}
                        helperText={validateRst.country}
                        value={paymentMethodInfo?.country || ''}
                    />
                </Grid>
                <Grid item xs={12} md={12}>
                    <TextField
                        label='Phone Number'
                        onChange={(e: any) => {
                            handleFormChange('phone', e.target.value.length === 0 ? commonDictionary[language]?.fieldIsRequired : '')
                            setPaymentMethodInfo({ ...paymentMethodInfo, phone: e.target.value })
                        }}
                        error={!!validateRst.phone}
                        helperText={validateRst.phone}
                        value={paymentMethodInfo?.phone || ''}
                    />
                </Grid>
                {/* <Grid item xs={6} md={6}>
                    <TextField
                        label='Country'
                        onChange={(e: any) => handleFormChange('country', e.target.value.length === 0 ? commonDictionary[language]?.fieldIsRequired : '')}
                        error={!!validateRst.country}
                        helperText={validateRst.country}
                    />
                </Grid> */}
                {/* <Grid item xs={12} md={12}>
                    <TextField
                        label='Phone'
                        onChange={(e: any) => handleFormChange('phone', e.target.value.length === 0 ? commonDictionary[language]?.fieldIsRequired : '')}
                        error={!!validateRst.phone}
                        helperText={validateRst.phone}
                    />
                </Grid> */}
                <Grid item xs={12} sx={{ justifyContent: 'center', display: 'flex' }}>
                    <LoadingButton
                        onClick={handleOrder}
                        loading={loading}
                        variant='contained'
                    >
                        Update
                    </LoadingButton>
                </Grid>
            </Grid>
        </>
    );
}
