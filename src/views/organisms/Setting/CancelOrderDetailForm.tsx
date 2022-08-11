import { FC, JSXElementConstructor, Key, ReactElement, useState } from 'react';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import { BasicColor } from 'views/Color';
import { LSLabel, LSButtonContainer } from 'views/molecules/Setting/utils/Style';
import { useSelector } from 'react-redux'
import { useSnackbar } from 'notistack';
import { CANCEL_REASONS } from 'constants/parent'
import { FormControl, FormControlLabel, Radio } from '@mui/material';
import { doCancelOrderDetail } from 'app/actions/paymentActions';
import { useMutation } from '@tanstack/react-query';
import LoadingButton from '@mui/lab/LoadingButton';
import { queryClient } from 'index';
import { USER_TYPE } from 'constants/common';

interface ICancelFormProps {
  orderDetailId: number | string
  close: () => void
}


export const CancelOrderDetailForm: FC<ICancelFormProps> = ({ orderDetailId, close }) => {

  const { language, token, profile } = useSelector((state: any) => state.user);
  const { id: teacherId } = useSelector((state: any) => state.teacher)
  const { id: guardianId } = useSelector((state: any) => state.guardian)

  const [value, setValue] = useState(CANCEL_REASONS[language][0].value);
  const [loading, setLoading] = useState(false)
  const { enqueueSnackbar } = useSnackbar();

  const cancelOrderDetail = useMutation((reason: string) => doCancelOrderDetail(orderDetailId,
    reason,
    token), {
    onSuccess: async data => {
      if (data.message) {
        enqueueSnackbar(data.message, { variant: 'error' })
      }
      else {
        switch (profile.role) {
          case USER_TYPE.teacher:
            queryClient.invalidateQueries(['teacher-orders', teacherId])
            break;
          case USER_TYPE.guardian:
            queryClient.invalidateQueries(['guardian-orders', guardianId])
            break;
          default: break
        }
        enqueueSnackbar('Cancel Plan Succeed', { variant: 'success' })
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

  const onSubmit = async () => {
    const reason = CANCEL_REASONS[language].find((element: { value: any; }) => element.value === value)?.label
    setLoading(true)
    cancelOrderDetail.mutate(reason)
  }

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value)
  };

  return (
    <FormControl variant='standard'>
      <FormLabel id='canceling-reason-label'>
        <LSLabel>{'Please tell us why are you canceling.'}</LSLabel>
      </FormLabel>
      <RadioGroup
        aria-labelledby='canceling-reason-label'
        name='radio-buttons-group'
        color={BasicColor.green}
        value={value} // id of selected reason
        onChange={handleRadioChange}
      >
        {
          CANCEL_REASONS[language].map((row: { id: Key | null | undefined; value: unknown; label: string | number | ReactElement<any, string | JSXElementConstructor<any>>; }) => {
            return <FormControlLabel key={row.id} value={row.value} control={<Radio />} label={row.label} />
          })
        }
      </RadioGroup>
      <LSButtonContainer>
        <LoadingButton
          variant='contained'
          onClick={onSubmit}
          loading={loading}
        >
          {'Submit'}
        </LoadingButton>
      </LSButtonContainer>
    </FormControl>
  );
}

export default CancelOrderDetailForm
