import { FC, useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
import { useSelector } from 'react-redux'
import {
  LSButtonContainer, LSText,
  LSPaperMoney, LSLabel, LSInputBase
} from 'views/molecules/Setting/utils/Style';
import { useSnackbar } from 'notistack';
import { LoadingContainer } from 'views/atoms/Loading'
import ReactLoading from 'react-loading';
import { BasicColor } from 'views/Color';
import { doUpgradeOrderdetailById } from 'app/actions/paymentActions';
import { useMutation } from '@tanstack/react-query';
import { queryClient } from 'index';
import LoadingButton from '@mui/lab/LoadingButton';

interface IUpgradeProps {
  orderDetail: any
  close: () => void
}

const text = [
  'You are going to upgrade your current subscription to an ',
  'The first payment will be prorated according to your billing cycle.',
  'Your credit card on file will be charged for this upgrade.',
]

export const PlanUpgradeForm: FC<IUpgradeProps> = ({ orderDetail, close }) => {
  const guardian = useSelector((state: any) => state.guardian);
  const { id: teacherId } = useSelector((state: any) => state.teacher)
  const { token, language } = useSelector((state: any) => state.user);
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false)



  const upgradePlan = useMutation(() => doUpgradeOrderdetailById(orderDetail.id, 'YEARLY', 'https://www.return.com/', token), {
    onSuccess: async data => {
      if (data.message) {
        enqueueSnackbar(data.message, { variant: 'error' })
      }
      else {
        const orders = data.teacher?.orderSet
        if (orders)
          queryClient.setQueryData(['teacher-orders', teacherId], orders)
        enqueueSnackbar('Upgrade Plan Succeed', { variant: 'success' })
        close()
      }
    },
    onError: async (error: any) => {
      enqueueSnackbar(error.message, { variant: 'error' })
    },
    onSettled: async () => {
      setLoading(false)
    }
  })

  const onSubmitBtnClicked = async () => {
    setLoading(true)

    upgradePlan.mutate()
  }

  useEffect(() => {
  }, [])

  return (
    <div >
      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <LSText >{text[0]}</LSText>
        <LSLabel mt={0}>{'Annual Plan'}</LSLabel>
        <LSPaperMoney elevation={6}>
          <LSLabel fontSize={24} color='darkblue' >{orderDetail?.plan.priceYear}{orderDetail?.plan.currency}<span style={{ fontSize: '14px', color: 'black' }}>{'/year'}</span></LSLabel>
        </LSPaperMoney>
        <LSText mt={15} mb={20} textAlign='center'>{text[1]}</LSText>
        <LSText fontSize={15} margin={0} textAlign='center'>{text[2]}</LSText>
      </Box>
      <LSLabel >{'Card Number'}</LSLabel>
      <LSInputBase
        fullWidth
        disabled
        border='solid 2px darkblue'
        border_radius={10}
        pl={10}
        value={guardian.paymentMethod?.cardNumber}
      // endAdornment={<img src={masterCard} style={{ marginRight: '40px', height: '40px' }} />}
      />
      <LSButtonContainer style={{ marginTop: '32px' }}>
        <LoadingButton
          variant='contained'
          onClick={onSubmitBtnClicked}
          loading={loading}
        >
          {'Upgrade'}
        </LoadingButton>
      </LSButtonContainer>
    </div>
  );
}

export default PlanUpgradeForm
