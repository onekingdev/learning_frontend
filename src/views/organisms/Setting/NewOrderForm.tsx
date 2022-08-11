import * as React from 'react';
import { FC, useState } from 'react';
import { Box, FormControlLabel, Grid, Radio, Switch, TextField, Typography } from '@mui/material';
import RadioGroup from '@mui/material/RadioGroup';
import { dictionary } from 'views/pages/Parent/Settings/dictionary';
import commonDictionary from 'constants/commonDictionary'
import { confirmPaymentOrder, doFetchPlanTypes } from 'app/actions/guardianActions';
import { useSelector } from 'react-redux'
import { useSnackbar } from 'notistack';
import { LoadingSpinner } from 'views/atoms/Spinner';
import { useMutation, useQuery } from '@tanstack/react-query'
import { any2String } from 'views/utils';
import LoadingButton from '@mui/lab/LoadingButton';
import { useHistory } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';
import { doAddOrder } from 'app/actions/paymentActions';
import { queryClient } from 'index';
import { ChildCounter } from 'views/molecules/ChildCounter';
import { ErrorMessage } from 'views/atoms/ErrorMessage';
import { USER_TYPE } from 'constants/common';


interface IAddOrder {
  token: string,
  orderDetailInput: {
    planId: number | string,
    quantity: number,
    period: 'YEARLY' | 'MONTHLY'
  },
  schoolId?: number | string,
}

interface ITeacherAddOrderForm {
  close: () => void
}
export const NewOrderForm: FC<ITeacherAddOrderForm> = ({ close }) => {

  const history = useHistory();
  const [yearly, setYearly] = useState(true)
  const { token, language, profile } = useSelector((state: any) => state.user);
  const { id: teacherId } = useSelector((state: any) => state.teacher);
  const { id: schoolId } = useSelector((state: any) => state.school);
  const paymentCardNum = useSelector((state: any) => state.guardian.paymentMethod?.cardNumber) || '';
  const { enqueueSnackbar } = useSnackbar();

  const [selected, setSelected] = useState<any>(null)
  const [childrenCount, setChildrenCount] = useState(0)
  const [loading, setLoading] = useState(false)
  const { data: allPlans, isLoading, error } = useQuery(['plan-types', token], () => doFetchPlanTypes(token))
  const [plans, setPlans] = useState<any>([])

  const createPlan = useMutation(({ token, orderDetailInput, schoolId }: IAddOrder) => doAddOrder(
    token,
    any2String(orderDetailInput),
    schoolId,
  ), {
    onSuccess: async data => {
      if (data.message) {
        enqueueSnackbar(data.message, { variant: 'error' })
      }
      else {
        // Send confirm mutation on createPayment order succeed.
        const confirm = await confirmPaymentOrder(data, token)
        if (confirm.msg) {
          enqueueSnackbar(confirm.msg, { variant: 'error' })
        }
        // Redirect to new kid page on success
        else if (confirm.status === 'success') {
          enqueueSnackbar(commonDictionary[language]?.success + ', discounted ' + confirm.order.total + 'USD' + commonDictionary[language]?.from_your_account, { variant: 'success' })
          switch (profile.role) {
            case USER_TYPE.teacher:
              queryClient.invalidateQueries(['teacher-orders', teacherId])
              break;
            case USER_TYPE.guardian:
              history.push('/kids/new')
              break;
            default: break;
          }

          close()
        }
        else {
          enqueueSnackbar(commonDictionary[language]?.failed_to_confirm_a_new_plan, { variant: 'error' })
        }
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

    setLoading(true)
    createPlan.mutate(
      {
        token,
        orderDetailInput: { planId: selected.id, quantity: childrenCount, period: yearly ? 'YEARLY' : 'MONTHLY' },
        schoolId,
      }
    )
  }

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value
    const temp = plans.find((item: any) => item.id === value)
    setSelected(temp)
  };

  React.useEffect(() => {
    if (allPlans) {
      if (allPlans.message) setPlans([])
      switch (profile.role) {
        case USER_TYPE.teacher:
          setPlans(allPlans.filter((item: any) => item.name === 'Classroom'))
          break;
        case USER_TYPE.guardian:
          setPlans(allPlans.filter((item: any) => item.name !== 'Classroom' && item.name !== 'School'))
          break;
        default:
          setPlans([])
          break;
      }
    }
  }, allPlans)
  return (
    <Box>
      <Box display='flex' justifyContent={'space-between'} alignItems='center'>
        <Typography>{commonDictionary[language]?.select_one_of_the_following_plans}</Typography>
        <FormControlLabel control={<Switch checked={yearly} onChange={() => setYearly(!yearly)} />} label={'Yearly'} />
      </Box>
      {
        isLoading ? <LoadingSpinner /> :
          error ? <ErrorMessage error={error} /> :
            plans && allPlans.message ? <ErrorMessage error={allPlans} /> :
              <RadioGroup
                aria-labelledby="canceling-reason-label"
                name="radio-buttons-group"
                color='success'
                value={selected?.id || ''}
                onChange={handleRadioChange}
              >{
                  plans.map((plan: any) => {
                    return <Grid container alignItems='center' key={plan.id}>
                      <Grid item xs={12} sm={6}>
                        <FormControlLabel value={plan.id} control={<Radio />} label={commonDictionary[language]?.[plan.slug as keyof Object] || ''} />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography variant='body1' textAlign='center'>{yearly ? plan.priceYear : plan.priceMonth}<span style={{ fontSize: '0.8rem' }}>{plan.currency}/{yearly ? commonDictionary[language]?.annually : commonDictionary[language]?.monthly}</span></Typography>
                      </Grid>
                    </Grid>
                  })
                }
              </RadioGroup>
      }
      <ChildCounter count={childrenCount} update={setChildrenCount} />
      {
        selected &&
        <Typography variant='h6' color='orange' textAlign='center' mt={2}>You will be charged ${((yearly ? selected.priceYear : selected.priceMonth) * childrenCount).toFixed(2)}</Typography>
      }
      <Typography mt={5}>{dictionary[language]?.paymentCardMessage}</Typography>
      <TextField
        fullWidth
        disabled
        // border='solid 2px darkblue'
        // border_radius={10}
        // pl={10}
        value={paymentCardNum}
      // endAdornment={<img src={masterCard} style={{ marginRight: '40px', height: '40px' }} />}
      />
      <Box display='flex' justifyContent={'center'} padding={2}>
        <LoadingButton
          disabled={!selected}
          loading={loading}
          onClick={onSubmit}
          variant='contained'
          loadingPosition='end'
          endIcon={<SendIcon />}
        >
          {commonDictionary[language]?.submit}
        </LoadingButton>
      </Box>
    </Box>
  );
}

export default NewOrderForm
