import * as React from 'react';
import { FC, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Checkbox, Radio } from '@mui/material';
import RadioGroup from '@mui/material/RadioGroup';
import { FormGroup } from '@mui/material';
import { BasicColor } from 'views/Color';
import Button from 'views/molecules/MuiButton';
import { LSButtonContainer, LSRadio, LSFormControlLabel, LSLabel } from './utils/Style';
import { dictionary } from 'views/pages/Settings/dictionary';
import { doAddStudentPlan, doFetchPlans } from 'app/actions/guardianActions';
import { useDispatch, useSelector } from 'react-redux'
import ReactLoading from 'react-loading';
import { LoadingContainer } from 'views/atoms/Loading'
import { useSnackbar } from 'notistack';
import LoadingOverlay from 'react-loading-overlay';

interface IAddPlanProps {
  open: () => void
  refresh: () => void
}

const combo = [
  {
    label: 'Math',
    value: 'combo_math'
  },
  {
    label: 'ELA + Sight Words',
    value: 'combo_esw'
  },
  {
    label: 'Science',
    value: 'combo_science'
  },
  {
    label: 'Financial Literacy',
    value: 'combo_finance'
  },
  {
    label: 'Health & Safety',
    value: 'combo_health'
  },
]

export const AddSimplePlanForm: FC<IAddPlanProps> = ({ open, refresh }) => {

  const user = useSelector((state: any) => state.user);
  const guardian = useSelector((state: any) => state.guardian);
  const { enqueueSnackbar } = useSnackbar();
  const comboChildren = dictionary.en.combo
  const parents = dictionary.en.planRadios
  const [plans, setPlans] = useState<Array<any>>([])

  const [parentState, setParentState] = useState('')
  const [soloState, setSoloState] = useState('')
  const [checked, setChecked] = useState(new Array(combo.length).fill(false));
  const [loading, setLoading] = useState(false)


  const fetchPlans = async (mounted: boolean) => {

    const res = await doFetchPlans(user.token)
    if (res !== null) {
      if (mounted)
        setPlans(res)
    }
  }

  const onSubmit = async () => {

    setLoading(true)
    const res: any = await doAddStudentPlan(guardian.id, plans.find(element => element.name === parentState).id, user.token)
    if (res.status) {
      enqueueSnackbar('Student Package added successfully', { variant: 'success' })
      refresh()
    } else
      enqueueSnackbar('Student Package add failed', { variant: 'error' })

    setLoading(false)
    // if (parentState === 'solo') {

    //   console.log(soloState)
    // }
    // else if (parentState === 'combo') {
    //   if (checked.indexOf(true) === -1)
    //     console.log('No data')
    //   else {
    //     let combo = ''
    //     for (let i = 0; i < checked.length; i++) {
    //       if (checked[i] === true) combo += i + ','
    //     }
    //     console.log(combo)
    //   }
    // }
    // else console.log(parentState)

    open()
  }

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value
    if (value !== plans[1].name)
      setChecked(new Array(checked.length).fill(false))

    if (value !== plans[2].name)
      setSoloState('')

    setParentState(value)
  };

  const handleSoloChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSoloState((event.target as HTMLInputElement).value)
    setParentState(plans[2].name)

    if ((event.target as HTMLInputElement).value !== plans[1].name)
      setChecked(new Array(checked.length).fill(false))
  };

  // get count of occurences of certain value in an array
  const countOccurrences = (arr: Array<boolean>, val: boolean) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

  const handleCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const tempArray = [...checked]

    // if checked count is bigger than 2, then selecting another one is impossible.
    const counts = countOccurrences(checked, true)
    if (!(event.target.checked === true && counts === 2)) {

      const idx = comboChildren.findIndex(x => x.value === event.target.value)
      tempArray[idx] = event.target.checked
      setChecked(tempArray)
      setParentState(plans[1].name)

      setSoloState('')
    }
  };

  useEffect(() => {
    let mounted = true
    fetchPlans(mounted)
    return () => {
      mounted = false
    }
  }, []);
  interface ChildrenProps {
    label: string
    value: string
  }

  const renderSoloChildren = (comboChildren: Array<ChildrenProps>) => {
    return <RadioGroup
      aria-labelledby="canceling-reason-label"
      name="radio-buttons-group"
      color='success'
      value={soloState}
      onChange={handleSoloChange}
      sx={{ marginLeft: 3 }}
    >
      {
        comboChildren.map((comboChild, index) => (
          <FormControlLabel
            key={index}
            label={comboChild.label}
            value={comboChild.value}
            control={<Radio />}
          />
        ))
      }
    </RadioGroup>
  }

  const renderComboChildren = (comboChildren: Array<ChildrenProps>) => {
    return <FormGroup sx={{ marginLeft: 3 }}>
      {
        comboChildren.map((comboChild, index) => (
          <FormControlLabel
            key={index}
            label={comboChild.label}
            value={comboChild.value}
            control={<Checkbox checked={checked[index]} onChange={handleCheckChange} />}
          />
        ))
      }
    </FormGroup>
  }

  return (
    <LoadingOverlay
    active={loading}
    spinner
    text='Adding plan...'
  >
    {plans.length ?
      <div >
        <RadioGroup
          aria-labelledby="canceling-reason-label"
          name="radio-buttons-group"
          color='success'
          value={parentState}
          onChange={handleRadioChange}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <LSFormControlLabel value={plans[0]?.name} control={<LSRadio />} label={plans[0]?.name} />
            <LSLabel>{plans[0]?.priceMonth}</LSLabel>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <LSFormControlLabel value={plans[1]?.name} control={<LSRadio checked={checked[0] || checked[1] || checked[2] || checked[3] || checked[4]} />} label={plans[1]?.name} />
            <LSLabel>{plans[1]?.priceMonth}</LSLabel>
          </Box>
          {renderComboChildren(comboChildren)}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <LSFormControlLabel value={plans[2]?.name} control={<LSRadio />} label={plans[2]?.name} />
            <LSLabel>{plans[2]?.priceMonth}</LSLabel>
          </Box>
          {renderSoloChildren(comboChildren)}
        </RadioGroup>
        <LSButtonContainer>
          <Button
            bgColor={BasicColor.green}
            onClick={onSubmit}
            value={'Submit'}
          />
          <Button
            bgColor={BasicColor.gray60}
            onClick={open}
            value={'Cancel'}
          />
        </LSButtonContainer>
      </div> :
      <LoadingContainer>
        <ReactLoading type="spinningBubbles" color={BasicColor.green} />
      </LoadingContainer>}
    </LoadingOverlay>
  );
}
