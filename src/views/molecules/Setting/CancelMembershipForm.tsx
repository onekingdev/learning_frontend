import { FC, JSXElementConstructor, Key, ReactElement, useState } from 'react';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import { BasicColor } from 'views/Color';
import { LSLabel, LSButtonContainer } from './utils/Style';
import { LSFormControl, LSRadio, LSFormControlLabel } from './utils/Style';
import { doCancelMembership } from 'app/actions/guardianActions'
import { useSelector } from 'react-redux'
import { useSnackbar } from 'notistack';
import { LoadingSpinner } from 'views/atoms/Spinner';
import { CANCEL_REASONS } from 'constants/parent'
import { dictionary } from './dictionary'
import { Button } from '@mui/material';
import { useMutation, } from 'react-query'
import { useQueryClient } from 'react-query';

interface ICancelFormProps {
  open: () => void
}


export const CancelMembershipForm: FC<ICancelFormProps> = ({ open }) => {

  let language: string = useSelector((state: any) => state.user.language);
  language = language ? language : 'en-us'

  const [value, setValue] = useState(CANCEL_REASONS[language][0].value);
  const [loading, setLoading] = useState(false)
  const guardian = useSelector((state: any) => state.guardian);
  const user = useSelector((state: any) => state.user);
  const { enqueueSnackbar } = useSnackbar();
  const queryClient = useQueryClient()

  const cancelMembership = useMutation((reason: string) => doCancelMembership(
    guardian.id, reason, user.token
  ), {
    onSuccess: async data => {
      // console.log({ data })
      if (data.message) {
        enqueueSnackbar(data.message, { variant: 'error' })
      } else {
        queryClient.setQueryData(['fetch-orders-list', guardian.id, user.token], data.cancelMembership?.guardian?.orderSet || [])
        enqueueSnackbar(dictionary[language]?.membershipCanceledSuccessfully, { variant: 'success' })
        open()
      }
    },
    onError: async (error: any) => {
      enqueueSnackbar(error.message, { variant: 'error' })
    },
    onSettled: async () => {
      setLoading(false)
    }
  })

  const onSubmit = () => {
    setLoading(true)
    const reason = CANCEL_REASONS[language].find((element: { value: any; }) => element.value === value)?.label
    cancelMembership.mutate(reason)
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
          <LSLabel>{dictionary[language]?.pleaseTellUsWhyAreYouCanceling}</LSLabel>
        </FormLabel>
        <RadioGroup
          aria-labelledby="canceling-reason-label"
          name="radio-buttons-group"
          color={BasicColor.green}
          value={value}
          onChange={handleRadioChange}
        >
          {
            CANCEL_REASONS[language].map((row: { id: Key | null | undefined; value: unknown; label: string | number | ReactElement<any, string | JSXElementConstructor<any>>; }) => {
              return <LSFormControlLabel key={row.id} value={row.value} control={<LSRadio />} label={row.label} />
            })
          }
        </RadioGroup>
        <LSButtonContainer>
          <Button
            variant='contained'
            onClick={onSubmit}
          >
            {dictionary[language]?.submit}
          </Button>
        </LSButtonContainer>
      </LSFormControl>
  );
}

