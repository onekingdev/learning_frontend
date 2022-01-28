import * as React from 'react';
import {FC, useEffect} from 'react';

import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';

import { LSLabel, LSButtonContainer, LSButton } from './utils/Style';
import { LSFormControl, LSRadio, LSFormControlLabel } from './utils/Style';

import { dictionary } from './utils/dictionary';


interface ICancelFormProps {
  onConfirm: (arg: string) => void
  onCancel: () => void
  tag?: Number
}

export const CancelForm:FC<ICancelFormProps> = ({ onConfirm, onCancel, tag}) => {
  const radiotexts = dictionary.en.randomText
  const [value, setValue] = React.useState('reason1');

  const onSubmit = () => {
    onConfirm(value)
    console.log(tag)
    console.log(value)
  }

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value)
  };

  return (
    <LSFormControl variant='standard'>
      <FormLabel id="canceling-reason-label">
        <LSLabel>{'Please tell us why are you canceling.'}</LSLabel>
      </FormLabel>
      <RadioGroup
        aria-labelledby="canceling-reason-label"
        name="radio-buttons-group"
        color='success'
        value={value}
        onChange={handleRadioChange}
      >
        <LSFormControlLabel value="reason1" control={<LSRadio />} label={radiotexts[0]} />
        <LSFormControlLabel value="reason2" control={<LSRadio />} label={radiotexts[1]} />
        <LSFormControlLabel value="reason3" control={<LSRadio />} label={radiotexts[2]} />
        <LSFormControlLabel value="reason4" control={<LSRadio />} label={radiotexts[3]} />
        <LSFormControlLabel value="reason5" control={<LSRadio />} label={radiotexts[4]} />
      </RadioGroup>
      <LSButtonContainer>
        <LSButton
          variant = 'contained'
          onClick={onSubmit}
          >
          {'Submit'}
          </LSButton>
          <LSButton
            variant = 'contained'
            color="secondary"
            onClick={onCancel}
          >
          {'Cancel'}
        </LSButton>
      </LSButtonContainer>
    </LSFormControl>
  );
}

