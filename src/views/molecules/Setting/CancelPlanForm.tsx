import { FC, useState }                               from 'react';
import FormLabel                                      from '@mui/material/FormLabel';
import RadioGroup                                     from '@mui/material/RadioGroup';
import { BasicColor }                                 from 'views/Color';
import { LSLabel, LSButtonContainer, LSButton }       from './utils/Style';
import { LSFormControl, LSRadio, LSFormControlLabel } from './utils/Style';
import { doCancelBroughtPlan } from 'app/actions/guardianActions';
import { useSelector }         from 'react-redux'
import { useSnackbar }         from 'notistack';
import { LoadingSpinner }      from 'views/atoms/Spinner';
import { CANCEL_REASONS }      from 'constants/parent'

interface ICancelFormProps {
  // onConfirm: (arg: string) => void
  open: () => void
  tag?: Number
  plan: any
  refresh: () => void
}


export const CancelPlanForm: FC<ICancelFormProps> = ({ open, plan, refresh }) => {
  const [value, setValue] = useState(CANCEL_REASONS[0].value);
  const user = useSelector((state: any) => state.user);
  const [loading, setLoading] = useState(false)
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = async () => {
    const reason = CANCEL_REASONS.find(element => element.value === value)?.label
    setLoading(true)
    const res:any = await doCancelBroughtPlan(plan.id, reason?reason:'', user.token)
    if(res.status){
      enqueueSnackbar('Cancel children plan successfully', { variant: 'success' })
      refresh()
    } else{
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
          CANCEL_REASONS.map((row) => {
            return <LSFormControlLabel key={row.id} value={row.value} control={<LSRadio />} label={row.label} />
          })
        }
      </RadioGroup>
      <LSButtonContainer>
        <LSButton
          variant='contained'
          onClick={onSubmit}
        >
          {'Submit'}
        </LSButton>
      </LSButtonContainer>
    </LSFormControl>
  );
}

