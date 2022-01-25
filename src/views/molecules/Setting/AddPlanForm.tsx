import * as React from 'react';
import { FC, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Checkbox, Radio } from '@mui/material';
import RadioGroup from '@mui/material/RadioGroup';
import { FormGroup } from '@mui/material';

import { LSFormControl, LSRadio, LSFormControlLabel } from './utils/Style';

import { dictionary } from '../../pages/Settings/dictionary';


interface ICancelFormProps {
  onConfirm: (arg: string) => void
  onCancel: () => void
}

export const AddPlanForm: FC<ICancelFormProps> = ({ onConfirm, onCancel }) => {

  const comboChildren = dictionary.en.combo
  const parents = dictionary.en.planRadios

  const [parentState, setParentState] = useState('')
  const [soloState, setSoloState] = useState('')
  const [checked, setChecked] = useState([false, false, false, false, false]);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setParentState((event.target as HTMLInputElement).value)
  };

  const handleSoloChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSoloState((event.target as HTMLInputElement).value)
    setParentState(parents[2].value)
  };

  const handleCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const tempArray = [...checked]
    const idx = comboChildren.findIndex(x => x.value === event.target.value)
    tempArray[idx] = event.target.checked
    setChecked(tempArray)
    setParentState(parents[1].value)
  };

  useEffect(() => {
    console.log(checked)
  }, [])


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
    <div>
      <RadioGroup
        aria-labelledby="canceling-reason-label"
        name="radio-buttons-group"
        color='success'
        value={parentState}
        onChange={handleRadioChange}
      >
      <LSFormControlLabel value={parents[0].value} control={<LSRadio />} label={parents[0].label} />
      <LSFormControlLabel value={parents[1].value} control={<LSRadio />} label={parents[1].label} />
      {renderComboChildren(comboChildren)}
      <LSFormControlLabel value={parents[2].value} control={<LSRadio />} label={parents[2].label} />
      {renderSoloChildren(comboChildren)}
      </RadioGroup>
    </div>
  );
}
