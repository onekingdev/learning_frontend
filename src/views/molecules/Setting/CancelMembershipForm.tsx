import { FC, useState }                               from 'react';
import FormLabel                                      from '@mui/material/FormLabel';
import RadioGroup                                     from '@mui/material/RadioGroup';
import { BasicColor }                                 from 'views/Color';
import { LSLabel, LSButtonContainer, LSButton }       from './utils/Style';
import { LSFormControl, LSRadio, LSFormControlLabel } from './utils/Style';
import { doCancelMembership }                         from 'app/actions/guardianActions'
import { useSelector }                                from 'react-redux'
import { useSnackbar }                                from 'notistack';
import { LoadingSpinner }                             from 'views/atoms/Spinner';
import { CANCEL_REASONS }                             from 'constants/parent'

interface ICancelFormProps {
  open: () => void
  refresh: () => void
}


export const CancelMembershipForm: FC<ICancelFormProps> = ({ open, refresh }) => {
  const [value, setValue] = useState(CANCEL_REASONS[0].value);
  const [loading, setLoading] = useState(false)
  const guardian = useSelector((state: any) => state.guardian);
  const user = useSelector((state: any) => state.user);
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = () => {
    setLoading(true)
    const reason = CANCEL_REASONS.find(element => element.value === value)?.label
    // TODO: send cancel membership mutation
    const res: any = doCancelMembership(guardian.id, reason ? reason : '', user.token)
    if (res.status) {
      enqueueSnackbar('Membership canceled successfully', { variant: 'success' })
    } else
    enqueueSnackbar('Membership cancelations failed', { variant: 'error' })

    setLoading(false)
    open()
    refresh()
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

