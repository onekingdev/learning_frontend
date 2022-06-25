import * as React from 'react';
import { FC, useState } from 'react';
import { Grid } from '@mui/material';
import RadioGroup from '@mui/material/RadioGroup';
import { BasicColor } from 'views/Color';
import Button from 'views/molecules/MuiButton';
import { LSButtonContainer, LSRadio, LSFormControlLabel, LSInputBase } from './utils/Style';
import { dictionary } from 'views/pages/Parent/Settings/dictionary';
import { doAddStudentPlan, doFetchPlanTypes } from 'app/actions/guardianActions';
import { useSelector } from 'react-redux'
import { useSnackbar } from 'notistack';
import { LoadingSpinner } from 'views/atoms/Spinner';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ScreenSize } from 'constants/screenSize';
import { TypoBtn, TypoDescription } from 'views/atoms/Text';
import { useQuery } from 'react-query'

interface IAddPlanProps {
  open: () => void
  refresh: () => void
}


export const AddSimplePlanForm: FC<IAddPlanProps> = ({ open, refresh }) => {

  const isMobile = useMediaQuery(`(max-width:${ScreenSize.phone})`);
  const width = isMobile ? 300 : 500
  const user = useSelector((state: any) => state.user);
  const guardian = useSelector((state: any) => state.guardian);
  const { enqueueSnackbar } = useSnackbar();
  let language: string = useSelector((state: any) => state.user.language);
  language = language ? language : 'en-us'

  const [parentState, setParentState] = useState('')
  const [loading, setLoading] = useState(false)
  const { data: plans, isLoading, error } = useQuery(['fetch-plans-list', user.token], () => doFetchPlanTypes(user.token))

  const onSubmit = async () => {

    setLoading(true)
    const res: any = await doAddStudentPlan(guardian.id, plans.find((element: any) => element.name === parentState).id, user.token)
    if (res.status) {
      enqueueSnackbar('Student Package added successfully', { variant: 'success' })
      refresh()
    } else
      enqueueSnackbar(res.msg, { variant: 'error' })

    setLoading(false)
    open()
  }

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value
    setParentState(value)
  };


  return (
    isLoading || loading ? <LoadingSpinner /> :
      <div style={{ width: width }}>
        <RadioGroup
          aria-labelledby="canceling-reason-label"
          name="radio-buttons-group"
          color='success'
          value={parentState}
          onChange={handleRadioChange}
        >{
            plans.map((plan: any) => {
              return <Grid container alignItems='center'>
                <Grid item xs={6}>
                  <LSFormControlLabel value={plan.name} control={<LSRadio />} label={dictionary[language]?.radioLabelGold} />
                </Grid>
                <Grid item xs={3}>
                  <TypoBtn>${plan.priceMonth}/Month</TypoBtn>
                </Grid>
                <Grid item xs={3}>
                  <TypoBtn>${plan.priceYear}/Year</TypoBtn>
                </Grid>
              </Grid>
            })
          }
        </RadioGroup>
        <TypoDescription >{dictionary[language]?.paymentCardMessage}</TypoDescription>
        <LSInputBase
          fullWidth
          disabled
          border='solid 2px darkblue'
          border_radius={10}
          pl={10}
          value={guardian.paymentMethod?.cardNumber}
        // endAdornment={<img src={masterCard} style={{ marginRight: '40px', height: '40px' }} />}
        />
        <LSButtonContainer>
          <Button
            bgColor={BasicColor.green}
            onClick={onSubmit}
            value={dictionary[language]?.submit}
          />
        </LSButtonContainer>
      </div>
  );
}
