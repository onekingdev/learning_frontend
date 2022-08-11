import { FC, useState } from 'react';
import styled from 'styled-components';
import { LSDialog } from 'views/molecules/Setting/LSDialog';
import { EditPaymentForm } from 'views/molecules/Setting/EditPaymentForm';
import { useSelector } from 'react-redux'
import payment from 'views/assets/payment/payment.jpg'
import creditCardType from 'credit-card-type'
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import { PARENT_PAPER_STYLE } from 'views/MuiStyles';
import { useSocratesMediaQuery } from 'hooks/useSocratesMediaQuery';
import commonDictionary from 'constants/commonDictionary';

interface PaymentInfoProps {
  paymentMethod: any
}
export const PaymentInfo: FC<PaymentInfoProps> = ({ paymentMethod }) => {
  const isMobile = useSocratesMediaQuery('xs')
  const [isEdit, edit] = useState(false)
  // const cardType = creditCardType(paymentMethod.cardNumber)
  const language = useSelector((state: any) => state.user.language);

  const openEdit = () => edit(!isEdit);

  return (
    <Paper
      elevation={5}
      sx={{
        ...PARENT_PAPER_STYLE,
        width: isMobile ? '100%' : 640
      }}
    >
      <Typography variant='h5' fontWeight={'bold'}>
        {commonDictionary[language]?.yourPaymentMethod}
      </Typography>
      <Grid container mt={2}>
        <Grid item xs={4}>
          <MasterCardImg src={payment} />
        </Grid>
        <Grid container item xs={8}>
          <Grid item xs={12}>
            <Typography >
              {creditCardType(paymentMethod.cardNumber)[0]?.niceType + ' card ending in ' + paymentMethod.cardNumber?.slice(-4)}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              {commonDictionary[language]?.expires + ' ' + paymentMethod?.cardExpMonth + '/' + paymentMethod?.cardExpYear}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Box display={'flex'} justifyContent='center' alignItems='center'>
        {/* <Grid item lg={4} xs={4}>
          <Button onClick={open}>
            {commonDictionary[language]?.addNew}
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
          <Button onClick={() => edit(true)}>{commonDictionary[language]?.edit}</Button>
        </Grid>
      </Box>
      <LSDialog
        isOpen={isEdit}
        title={commonDictionary[language]?.editPaymentMethod}
        open={openEdit}
        dialogContent={
          <EditPaymentForm open={openEdit} paymentMethod={paymentMethod} />
        }
      />
    </Paper>
    //  : null
  );
}

const MasterCardImg = styled.img`
  height: 60px;
`;
