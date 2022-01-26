import {FC, useState, useRef} from 'react';
import Grid from '@mui/material/Grid';
import { LSBlueTextButton } from '../../pages/Settings/Style';
import { useDialog } from '../../molecules/Setting/utils/useDialog';
import { LSShadowContainer, MasterCardImg, LSGridRow, LSTitle, CText } from '../../molecules/Setting/utils/Style';
import { LSDialog } from '../../molecules/Setting/LSDialog';
import { PaymentForm } from '../../molecules/PaymentMethod/PaymentForm';

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import masterCard from '../../assets/MasterCard.svg'

const stripePromise = loadStripe('pk_test_RqGIvgu49sLej0wM4rycOkJh');
interface PaymentFormFunc {
  handleOrder(): void;
  handleUpdate(): void;
}

export const Payment:FC = () => {
  const {isOpen, open} = useDialog()
  const paymentFormRef = useRef<PaymentFormFunc>(null)

  const handleOrder = (event: any) => {
    paymentFormRef?.current?.handleOrder()
  }

  const onConfirm = (reason: string) => {
    // setReason(reason)

    console.log("Uhhahaha")
    open()
  }

  const onCancel = () => open();

  return (
    <LSShadowContainer>
      <LSTitle>
        {'Your payment method'}
      </LSTitle>
        <LSGridRow container>
          <Grid item lg={2} sm={12}>
            <MasterCardImg src={masterCard}/>
          </Grid>
          <Grid item lg={10} sm={12}>
            <CText>
              {'Mastercard ending in 4583'}
            </CText>
            <CText>
              {'Expires 3/25 Josie Turner'}
            </CText>
          </Grid>
        </LSGridRow>
        <LSGridRow container>
          <Grid item lg={2} sm={12}>
            <LSBlueTextButton onClick={open}>
              {'Add new'}
            </LSBlueTextButton>
            <LSDialog
            isOpen = {isOpen}
            open = {open}
            dialogContent = {
              <Elements stripe={stripePromise}>
                <PaymentForm isUpdate={true} ref={paymentFormRef} handleOrder= {onConfirm} handleUpdate = {onCancel}/>
              </Elements>
            }
            />
          </Grid>
          <Grid item lg={10} sm={12}>
            <LSBlueTextButton>{'Edit'}</LSBlueTextButton>
          </Grid>
        </LSGridRow>
    </LSShadowContainer>
  );
}

