import { FC, JSXElementConstructor, Key, ReactElement, useState } from 'react';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import { BasicColor } from 'views/Color';
import { LSLabel, LSButtonContainer } from './utils/Style';
import { LSFormControl, LSRadio, LSFormControlLabel } from './utils/Style';
import { doCancelBroughtPlan } from 'app/actions/guardianActions';
import { useSelector } from 'react-redux'
import { useSnackbar } from 'notistack';
import { LoadingSpinner } from 'views/atoms/Spinner';
import { CANCEL_REASONS } from 'constants/parent'
import { Button } from '@mui/material';
import { useQueryClient } from 'react-query';

interface ICancelFormProps {
  // onConfirm: (arg: string) => void
  open: () => void
  tag?: Number
  orderId: string
}


export const CancelPlanForm: FC<ICancelFormProps> = ({ open, orderId }) => {

  const {token, language} = useSelector((state: any) => state.user);
  const lang = language || 'en-us'

  const [value, setValue] = useState(CANCEL_REASONS[lang][0].value);
  const [loading, setLoading] = useState(false)
  const { enqueueSnackbar } = useSnackbar();
  const guardian = useSelector((state: any) => state.guardian);
  const queryClient = useQueryClient()

  const onSubmit = async () => {
    const reason = CANCEL_REASONS[lang].find((element: { value: any; }) => element.value === value)?.label
    setLoading(true)
    const res: any = await doCancelBroughtPlan(orderId || '0', reason ? reason : '', token)
    if (res.status === "success") {
      queryClient.setQueryData(['fetch-orders-list', guardian.id, token], res.guardian?.orderSet || [])
      enqueueSnackbar('Cancel children plan successfully', { variant: 'success' })
    } else {
      enqueueSnackbar('Cancel children plan failed', { variant: 'error' })
    }
    setLoading(false)
    open()
  }

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value)
  };

  return (
    loading ?
      <LoadingSpinner />
      :
      <LSFormControl variant='standard'>
        <FormLabel id="canceling-reason-label">
          <LSLabel>{'Please tell us why are you canceling.'}</LSLabel>
        </FormLabel>
        <RadioGroup
          aria-labelledby="canceling-reason-label"
          name="radio-buttons-group"
          color={BasicColor.green}
          value={value}
          onChange={handleRadioChange}
        >
          {
            CANCEL_REASONS[lang].map((row: { id: Key | null | undefined; value: unknown; label: string | number | ReactElement<any, string | JSXElementConstructor<any>>; }) => {
              return <LSFormControlLabel key={row.id} value={row.value} control={<LSRadio />} label={row.label} />
            })
          }
        </RadioGroup>
        <LSButtonContainer>
          <Button
            variant='contained'
            onClick={onSubmit}
          >
            {'Submit'}
          </Button>
        </LSButtonContainer>
      </LSFormControl>
  );
}

