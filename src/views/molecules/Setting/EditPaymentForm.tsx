import { useState, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Button from 'views/molecules/MuiButton'
import TextField from 'views/molecules/MuiTextField'
import { css } from 'styled-components';
import { BasicColor } from 'views/Color';
import Grid from '@mui/material/Grid';
import { doChangePaymentMethod } from 'app/actions/paymentActions';
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import { useSnackbar } from 'notistack';
import { GUARDIAN_PAYMENT_METHOD_INFO } from 'app/types'
import { LoadingSpinner } from 'views/atoms/Spinner';

interface DialogProps {
    open: () => (void)
}

export const EditPaymentForm: FC<DialogProps> = ({ open }) => {
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const user = useSelector((state: any) => state.user);
    const guardian = useSelector((state: any) => state.guardian);
    const {
        wrapperProps,
        getCardNumberProps,
        getExpiryDateProps,
        getCVCProps
    } = usePaymentInputs();
    const [validateRst, setValidateRst] = useState({
        address1: null,
        address2: null,
        cardCvc: null,
        expiryDate: null,
        cardFirstName: null,
        cardLastName: null,
        cardNumber: null,
        city: null,
        country: null,
        id: '',
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
              border-radius: 25px;
              border-color: blue;
              border: unset;
              padding: 16.5px 14px;
              outline: 2px solid blue;
            `,
            errored: css`
              border-color: maroon;
            `,
            focused: css`
              border-color: unset;
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
              width: 15rem;
            `,
            expiryDate: css`
              width: 10rem;
            `,
            cvc: css`
              width: 5rem;
            `
        },
        errorText: {
            base: css`
              margin-left: 2vw;
              color: maroon;
            `
        }
    }
    const [paymentMethodInfo, setPaymentMethodInfo] = useState({
        address1: guardian.paymentMethod.address1,
        address2: guardian.paymentMethod.address2,
        cardCvc: guardian.paymentMethod.cardCvc,
        cardExpiryDate: guardian.paymentMethod.cardExpMonth + '/' + guardian.paymentMethod.cardExpYear,
        cardFirstName: guardian.paymentMethod.cardFirstName,
        cardLastName: guardian.paymentMethod.cardLastName,
        cardNumber: guardian.paymentMethod.cardNumber,
        city: guardian.paymentMethod.city,
        state: guardian.paymentMethod.state,
        postCode: guardian.paymentMethod.postCode,
        country: guardian.paymentMethod.country,
        phone: guardian.paymentMethod.phone,
    })

    // const fetchPaymentData = async (mounted: boolean) => {
    //     const guardianId = guardian.id
    //     const res = await doFetchPaymentMethod(guardianId, user.token)
    //     if (res !== null) {
    //         if (mounted)
    //             setPaymentMethodInfo(
    //                 {
    //                     ...validateRst,
    //                     cardExpiryDate: (+res.cardExpMonth < 10 ? '0' + res.cardExpMonth : res.cardExpMonth) + ' / ' + res.cardExpYear.slice(-2),
    //                     ...res
    //                 }
    //             )
    //     } else return
    // }

    const handleFormChange = (field: string, errMsg: string) => {
        setValidateRst({ ...validateRst, [field]: errMsg })
    }
    const handleReturn = (event: any) => {
        event.preventDefault()
        open()
    }

    const handleOrder = async (event: any) => {
        event.preventDefault()
        setLoading(true)

        const res = await doChangePaymentMethod(guardian.id, paymentMethodInfo, user.token)
        if (res.status) {
            enqueueSnackbar('Payment method updated successfully', { variant: 'success' })
            dispatch({
                type: GUARDIAN_PAYMENT_METHOD_INFO,
                payload: {
                    ...paymentMethodInfo,
                    cardExpMonth: paymentMethodInfo.cardExpiryDate.slice(0, 2),
                    cardExpYear: '20' + paymentMethodInfo.cardExpiryDate.slice(-2)
                }
            });
        }
        else
            enqueueSnackbar('Payment method update failed', { variant: 'error' })
        setLoading(false)
        open()
    }


    return (
        <>
            {loading &&
                <LoadingSpinner />
            }
            {!loading &&
                <Grid container spacing={2} marginTop={1}>
                    <Grid item xs={12} md={12}>
                        <PaymentInputsWrapper {...wrapperProps} styles={style}>
                            <input {...getCardNumberProps({
                                onChange: (e: any) => setPaymentMethodInfo({ ...paymentMethodInfo, cardNumber: e.target.value })
                            })} value={paymentMethodInfo.cardNumber} />
                            <input {...getExpiryDateProps({
                                onChange: (e: any) => setPaymentMethodInfo({ ...paymentMethodInfo, cardExpiryDate: e.target.value })
                            }
                            )}
                                value={paymentMethodInfo.cardExpiryDate} />
                            <input {...getCVCProps({
                                onChange: (e: any) => setPaymentMethodInfo({ ...paymentMethodInfo, cardCvc: e.target.value })
                            })}
                                value={paymentMethodInfo.cardCvc}
                            />
                        </PaymentInputsWrapper>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label='Address 1'
                            onChange={(e: any) => {
                                handleFormChange('address1', e.target.value.length === 0 ? 'Field is required' : '')
                                setPaymentMethodInfo({ ...paymentMethodInfo, address1: e.target.value })
                            }}
                            error={!!validateRst.address1}
                            helperText={validateRst.address1}
                            value={paymentMethodInfo.address1}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label='Address 2'
                            onChange={(e: any) => {
                                handleFormChange('address2', e.target.value.length === 0 ? 'Field is required' : '')
                                setPaymentMethodInfo({ ...paymentMethodInfo, address2: e.target.value })
                            }}
                            error={!!validateRst.address2}
                            helperText={validateRst.address2}
                            value={paymentMethodInfo.address2}
                        />
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <TextField
                            label='City'
                            onChange={(e: any) => {
                                handleFormChange('city', e.target.value.length === 0 ? 'Field is required' : '')
                                setPaymentMethodInfo({ ...paymentMethodInfo, city: e.target.value })
                            }}
                            error={!!validateRst.city}
                            helperText={validateRst.city}
                            value={paymentMethodInfo.city}
                        />
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <TextField
                            label='State/ Province'
                            onChange={(e: any) => {
                                handleFormChange('state', e.target.value.length === 0 ? 'Field is required' : '')
                                setPaymentMethodInfo({ ...paymentMethodInfo, state: e.target.value })
                            }}
                            error={!!validateRst.state}
                            helperText={validateRst.state}
                            value={paymentMethodInfo.state}
                        />
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <TextField
                            label='Zip /Postal Code'
                            onChange={(e: any) => {
                                handleFormChange('postCode', e.target.value.length === 0 ? 'Field is required' : '')
                                setPaymentMethodInfo({ ...paymentMethodInfo, postCode: e.target.value })
                            }}
                            error={!!validateRst.postCode}
                            helperText={validateRst.postCode}
                            value={paymentMethodInfo.postCode}
                        />
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <TextField
                            label='Country'
                            onChange={(e: any) => {
                                handleFormChange('postCode', e.target.value.length === 0 ? 'Field is required' : '')
                                setPaymentMethodInfo({ ...paymentMethodInfo, country: e.target.value })
                            }}
                            error={!!validateRst.country}
                            helperText={validateRst.country}
                            value={paymentMethodInfo.country}
                        />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextField
                            label='Phone Number'
                            onChange={(e: any) => {
                                handleFormChange('phone', e.target.value.length === 0 ? 'Field is required' : '')
                                setPaymentMethodInfo({ ...paymentMethodInfo, phone: e.target.value })
                            }}
                            error={!!validateRst.phone}
                            helperText={validateRst.phone}
                            value={paymentMethodInfo.phone}
                        />
                    </Grid>
                    {/* <Grid item xs={6} md={6}>
                    <TextField
                        label='Country'
                        onChange={(e: any) => handleFormChange('country', e.target.value.length === 0 ? 'Field is required' : '')}
                        error={!!validateRst.country}
                        helperText={validateRst.country}
                    />
                </Grid> */}
                    {/* <Grid item xs={12} md={12}>
                    <TextField
                        label='Phone'
                        onChange={(e: any) => handleFormChange('phone', e.target.value.length === 0 ? 'Field is required' : '')}
                        error={!!validateRst.phone}
                        helperText={validateRst.phone}
                    />
                </Grid> */}
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
                            onClick={handleReturn}
                            align='right'
                            value='Return'
                        />
                    </Grid>
                </Grid>
            }
        </>
    );
}
