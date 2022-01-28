import * as React from 'react';
import { FC, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Checkbox, Radio } from '@mui/material';
import RadioGroup from '@mui/material/RadioGroup';
import { FormGroup } from '@mui/material';
import { BasicColor } from '../../Color';

import Button from '../../molecules/MuiButton'
import { LSButtonContainer, LSButton, LSRadio, LSFormControlLabel, CLabel } from './utils/Style';

import { dictionary } from '../../pages/Settings/dictionary';


interface IAddPlanProps {
  onConfirm: () => void
  onCancel: () => void
}

export const AddPlanForm: FC<IAddPlanProps> = ({ onConfirm, onCancel }) => {

  const comboChildren = dictionary.en.combo
  const parents = dictionary.en.planRadios

  const [parentState, setParentState] = useState(parents[0].value)
  const [soloState, setSoloState] = useState('')
  const [checked, setChecked] = useState([false, false, false, false, false]);

  const onSubmit = () => {
    if(parentState === 'solo') {

      console.log(soloState)
    }
    else if(parentState === 'combo') {
      if(checked.indexOf(true) === -1)
      console.log("No data")
      else{
        let combo = ''
        for(let i = 0 ; i < checked.length; i ++){
          if(checked[i] === true) combo += i + ','
        }
        console.log(combo)
      }
    }
    else console.log(parentState)

    onConfirm()
  }

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value
    if(value !== parents[1].value)
    setChecked([false, false, false, false, false])

    if(value !== parents[2].value)
    setSoloState('')

    setParentState(value)
  };

  const handleSoloChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSoloState((event.target as HTMLInputElement).value)
    setParentState(parents[2].value)

    if((event.target as HTMLInputElement).value !== parents[1].value)
    setChecked([false, false, false, false, false])
  };

  // get count of occurences of certain value in an array
  const countOccurrences = (arr:Array<boolean>, val:boolean) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

  const handleCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const tempArray = [...checked]

    // if checked count is bigger than 2, then selecting another one is impossible.
    const counts = countOccurrences(checked, true)
    if(!(event.target.checked === true && counts === 2)){

      const idx = comboChildren.findIndex(x => x.value === event.target.value)
      tempArray[idx] = event.target.checked
      setChecked(tempArray)
      setParentState(parents[1].value)

      setSoloState('')
    }
  };

  useEffect(() => {
  }, [checked])

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
    sx = {{marginLeft: 3}}
    >
      {
        comboChildren.map((comboChild, index) => (
          <FormControlLabel
            label = {comboChild.label}
            value = {comboChild.value}
            control={<Radio />}
          />
        ))
      }
    </RadioGroup>
  }

  const renderComboChildren = (comboChildren: Array<ChildrenProps>) => {
    return <FormGroup sx={{marginLeft: 3}}>
      {
        comboChildren.map((comboChild, index) => (
          <FormControlLabel
            label = {comboChild.label}
            value = {comboChild.value}
            control={<Checkbox checked={checked[index]} onChange={handleCheckChange} />}
          />
        ))
      }
    </FormGroup>
  }

  return (
    <div >
      <RadioGroup
        aria-labelledby="canceling-reason-label"
        name="radio-buttons-group"
        color='success'
        value={parentState}
        onChange={handleRadioChange}
      >
        <Box sx={{display:'flex', justifyContent:'space-between'}}>
          <LSFormControlLabel value={parents[0].value} control={<LSRadio />} label={parents[0].label} />
          <CLabel>{parents[0].price}</CLabel>
        </Box>
        <Box sx={{display:'flex', justifyContent:'space-between'}}>
          <LSFormControlLabel value={parents[1].value} control={<LSRadio checked={checked[0] || checked[1] || checked[2] || checked[3] || checked[4]}/>} label={parents[1].label} />
          <CLabel>{parents[1].price}</CLabel>
        </Box>
        {renderComboChildren(comboChildren)}
        <Box sx={{display:'flex', justifyContent:'space-between'}}>
          <LSFormControlLabel value={parents[2].value} control={<LSRadio />} label={parents[2].label} />
          <CLabel>{parents[2].price}</CLabel>
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
          onClick={onCancel}
          value={'Cancel'}
          />
      </LSButtonContainer>
    </div>
  );
}