import {FC, useEffect} from 'react';
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';

import { ThemeProvider } from '@mui/material';

import { settingPage } from './Theme';

import { CLabel, LSBlueTextButton } from './Style';
import { LSDialogTitle, LSDialogContent, LSDialogContentText, LSDialogActions } from './Style';
import { LSFormControl, LSRadio, LSFormControlLabel } from './Style';
import {  LSButton } from './Style';

import { dictionary } from './dictionary';

export const FormDialog:FC = () => {
  const [open, setOpen] = React.useState(false);
  const radiotexts = dictionary.en.randomText

  const handleCancelMemship = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={settingPage}>
      <LSBlueTextButton onClick={handleCancelMemship}>
        {'Cancel Membership'}
      </LSBlueTextButton>
      <Dialog open={open} onClose={handleClose}>
        <LSDialogTitle>{'Cancel Membership'}</LSDialogTitle>
        <LSDialogContent>
          <LSDialogContentText>
            {'Thank you for your plan. We are sorry to see you go'}
          </LSDialogContentText>
          <LSFormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              <CLabel>{'Please tell us why are you canceling.'}</CLabel>
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              color='success'
            >
              <LSFormControlLabel value="reason" control={<LSRadio />} label={radiotexts[0]} />
              <LSFormControlLabel value="male" control={<LSRadio />} label={radiotexts[1]} />
              <LSFormControlLabel value="other" control={<LSRadio />} label="Other" />
              <LSFormControlLabel value="dvd" control={<LSRadio />} label="Other" />
              <LSFormControlLabel value="erd" control={<LSRadio />} label="Other" />
            </RadioGroup>
          </LSFormControl>
        </LSDialogContent>
        <LSDialogActions sx={{justifyContent:'space-evenly'}}>
          <LSButton
          variant = 'contained'
          onClick={handleClose}
          >
            {'Submit'}
          </LSButton>
          <LSButton
            variant = 'contained'
            color="secondary"
            onClick={handleClose}
          >
          {'Cancel'}
          </LSButton>
        </LSDialogActions>
      </Dialog>
    </ThemeProvider>
  );
}
