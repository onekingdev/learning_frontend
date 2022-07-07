import { FC, useState } from 'react';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import {
  LSGridRow,
  LSTitle, LSText,
} from 'views/molecules/Setting/utils/Style';
import { LSDialog } from 'views/molecules/Setting/LSDialog';
import { EditPaymentForm } from 'views/molecules/Setting/EditPaymentForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useSelector } from 'react-redux'
import payment from 'views/assets/payment/payment.jpg'
import creditCardType from 'credit-card-type'
import { dictionary } from './dictionary'
import { Button, Paper, useMediaQuery } from '@mui/material';
import { PARENT_PAPER_STYLE } from 'views/MuiStyles';
import { ScreenSize } from 'constants/screenSize';
import { LANGUAGES } from 'constants/common';

const stripePromise = loadStripe('pk_test_RqGIvgu49sLej0wM4rycOkJh');

export const TeacherPaymentInfo: FC = () => {
  const isMobile = useMediaQuery(`(max-width: ${ScreenSize.phone})`)
  const [isEdit, edit] = useState(false)
  const guardian = useSelector((state: any) => state.guardian);
  const cardType = creditCardType(guardian.paymentMethod.cardNumber)
  const language: string = useSelector((state: any) => state.user.language) || LANGUAGES[0].value;

  const openEdit = () => edit(!isEdit);

  return (
    <Paper
      elevation={5}
      sx={{
        ...PARENT_PAPER_STYLE,
        width: isMobile ? '100%' : 640
      }}
    >
      <LSTitle>
        {dictionary[language]?.yourPaymentMethod}
      </LSTitle>
      <LSGridRow container>
        <Grid item lg={4} xs={4}>
          <MasterCardImg src={payment} />
        </Grid>
        <Grid item lg={8} xs={8}>
          <LSText>
            {cardType[0]?.niceType + ' card ending in ' + guardian.paymentMethod.cardNumber?.slice(-4)}
          </LSText>
          <LSText>
            {dictionary[language]?.expires + ' ' + guardian.paymentMethod?.cardExpMonth + '/' + guardian.paymentMethod?.cardExpYear}
          </LSText>
        </Grid>
      </LSGridRow>
      <LSGridRow container>
        {/* <Grid item lg={4} xs={4}>
          <Button onClick={open}>
            {dictionary[language]?.addNew}
          </Button>
          <LSDialog
            isOpen={isOpen}
            open={open}
            dialogContent={
              <Elements stripe={stripePromise}>
                <PaymentForm isUpdate={true} ref={paymentFormRef} handleOrder={onConfirm} handleUpdate={onCancel} />
              </Elements>
            }
          />
        </Grid> */}
        <Grid item lg={8} xs={8}>
          <Button onClick={() => edit(true)}>{dictionary[language]?.edit}</Button>
        </Grid>
        <LSDialog
          isOpen={isEdit}
          title={dictionary[language]?.editPaymentMethod}
          open={openEdit}
          dialogContent={
            <Elements stripe={stripePromise}>
              <EditPaymentForm open={openEdit} />
            </Elements>
          }
        />
      </LSGridRow>
    </Paper>
    //  : null
  );
}

const MasterCardImg = styled.img`
  height: 60px;
`;
