import {FC, useState, useRef} from 'react';
import Grid from '@mui/material/Grid';
import { MasterCardImg, LSShadowContainer, CGridRow, LSTitle, CText} from '../utils/Style';

import { LSBlueTextButton } from '../utils/Style';

import { useDialog } from '../utils/useDialog';
import { LSDialog } from '../molecules/LSDialog';
import { PaymentMethod } from '../../../molecules/PaymentMethod/PaymentMethod';
import { PaymentForm } from '../../../molecules/PaymentMethod/PaymentForm';
import { PaymentContainer } from '../../../molecules/PaymentMethod/Style';

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_RqGIvgu49sLej0wM4rycOkJh');
import masterCard from '../assets/MasterCard.svg';

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
        <CGridRow container>
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
        </CGridRow>
        <CGridRow container>
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
        </CGridRow>
    </LSShadowContainer>
  );
}

