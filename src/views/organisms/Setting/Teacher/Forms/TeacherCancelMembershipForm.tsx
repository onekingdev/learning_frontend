import { FC, JSXElementConstructor, Key, ReactElement, useState } from 'react';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import { BasicColor } from 'views/Color';
import { LSLabel } from 'views/molecules/Setting/utils/Style';
import { useSelector } from 'react-redux'
import { CANCEL_REASONS } from 'constants/parent'
import { dictionary } from './dictionary'
import { DialogActions, FormControl, FormControlLabel, Radio } from '@mui/material';
import { doCancelMembership } from 'app/actions/paymentActions';
import { useMutation } from '@tanstack/react-query';
import { useSnackbar } from 'notistack';
import { queryClient } from 'index';
import LoadingButton from '@mui/lab/LoadingButton';


export const TeacherCancelMembershipForm: FC<{ open: () => void }> = ({ open }) => {

  const { language, token } = useSelector((state: any) => state.user);

  const [value, setValue] = useState(CANCEL_REASONS[language][0].value);
  const [loading, setLoading] = useState(false)
  const { enqueueSnackbar } = useSnackbar();
  const { id: teacherId } = useSelector((state: any) => state.teacher)

  const cancelMemebership = useMutation((reason: string) => doCancelMembership(
    token,
    reason), {
    onSuccess: async data => {
      if (data.message) {
        enqueueSnackbar(data.message, { variant: 'error' })
      }
      else {
        if (data === 'success')
          queryClient.invalidateQueries(['teacher-orders', teacherId])

        enqueueSnackbar('Cancel Membership Succeed', { variant: 'success' })
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

    cancelMemebership.mutate('some reason')
  }

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value)
  };

  return (
    <>
      <FormControl>
        <FormLabel id='canceling-reason-label'>
          <LSLabel>{dictionary[language]?.pleaseTellUsWhyAreYouCanceling}</LSLabel>
        </FormLabel>
        <RadioGroup
          aria-labelledby='canceling-reason-label'
          name='radio-buttons-group'
          color={BasicColor.green}
          value={value}
          onChange={handleRadioChange}
        >
          {
            CANCEL_REASONS[language].map((row: { id: Key | null | undefined; value: unknown; label: string | number | ReactElement<any, string | JSXElementConstructor<any>>; }) => {
              return <FormControlLabel key={row.id} value={row.value} control={<Radio />} label={row.label} />
            })
          }
        </RadioGroup>
      </FormControl>
      <DialogActions sx={{ justifyContent: 'center' }}>
        <LoadingButton
          variant='contained'
          onClick={onSubmit}
          loading={loading}
        >
          {dictionary[language]?.submit}
        </LoadingButton>
      </DialogActions>
    </>
  );
}

