import { FC, useState, useRef } from 'react';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import { useDialog } from 'views/molecules/Setting/utils/useDialog';
import {
  LSShadowContainer,
  LSGridRow,
  LSTitle,
  LSText,
  LSBlueTextButton
} from 'views/molecules/Setting/utils/Style';
import { LSDialog } from 'views/molecules/Setting/LSDialog';
import { PaymentForm } from 'views/molecules/PaymentMethod/PaymentForm';
import { EditPaymentForm } from 'views/molecules/Setting/EditPaymentForm';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import masterCard from 'views/assets/MasterCard.svg'

const stripePromise = loadStripe('pk_test_RqGIvgu49sLej0wM4rycOkJh');
interface PaymentFormFunc {
  handleOrder(): void;
  handleUpdate(): void;
}

export const Payment: FC = () => {
  const { isOpen, open } = useDialog()
  const [isEdit, edit] = useState(false)

  const openEdit = () => edit(!isEdit);

  const onEditConfirm = () => {
    openEdit()
  }
  const paymentFormRef = useRef<PaymentFormFunc>(null)

  const handleOrder = () => {
    paymentFormRef?.current?.handleOrder()
  }

  const onConfirm = (reason: string) => {
    // setReason(reason)

    console.log('Uhhahaha')
    open()
  }

  const onCancel = () => open();

  return (
    <LSShadowContainer>
      <LSTitle>
        {'Your payment method'}
      </LSTitle>
      <LSGridRow container>
        <Grid item lg={4} xs={4}>
          <MasterCardImg src={masterCard} />
        </Grid>
        <Grid item lg={8} xs={8}>
          <LSText>
            {'Mastercard ending in 4583'}
          </LSText>
          <LSText>
            {'Expires 3/25 Josie Turner'}
          </LSText>
        </Grid>
      </LSGridRow>
      <LSGridRow container>
        <Grid item lg={4} xs={4}>
          <LSBlueTextButton onClick={open}>
            {'Add new'}
          </LSBlueTextButton>
          <LSDialog
            isOpen={isOpen}
            open={open}
            dialogContent={
              <Elements stripe={stripePromise}>
                <PaymentForm isUpdate={true} ref={paymentFormRef} handleOrder={onConfirm} handleUpdate={onCancel} />
              </Elements>
            }
          />
        </Grid>
        <Grid item lg={8} xs={8}>
          <LSBlueTextButton onClick={() => edit(true)}>{'Edit'}</LSBlueTextButton>
        </Grid>
        <LSDialog
          isOpen={isEdit}
          title={'Edit Payment Method'}
          open={openEdit}
          dialogContent={
            <Elements stripe={stripePromise}>
              <EditPaymentForm isUpdate={true} ref={paymentFormRef} handleOrder={onConfirm} handleUpdate={onCancel} />
            </Elements>
          }
        />
      </LSGridRow>
    </LSShadowContainer>
  );
}

const MasterCardImg = styled.img`
  @media screen and (max-width: 540px) {
  }
`;
