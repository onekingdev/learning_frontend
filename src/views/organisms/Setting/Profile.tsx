import {FC, useEffect} from 'react';
import * as React from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import {
  FormContainer, LSButtonContainer, LSGridRow, LSTextField, LSTitle, CText, CLabel,
  CIntentText,  TextGroup, LSButton,LSBlueTextButton
 } from '../../molecules/Setting/utils/Style';

import { dictionary } from '../../molecules/Setting/utils/dictionary';

import { settingPage } from '../../molecules/Setting/utils/Theme';
import { ThemeProvider } from '@mui/material';


export const SettingForm:FC = () => {
  const language = 'en';
  const words = dictionary[language].form

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={settingPage}>
      <Box>
      <FormContainer>
        <LSTitle>
          {'Profile and settings'}
        </LSTitle>
        <Box component='form' onSubmit={handleSubmit} noValidate sx={{ flexGrow: 1 }}>
          <LSGridRow container>
            <Grid item lg={4} sm={12}>
              <CLabel>
              {'Name'}
              </CLabel>
            </Grid>
            <Grid item lg={8} sm={12}>
              <CIntentText>
                {'Lana Taylor James'}
              </CIntentText>
            </Grid>
          </LSGridRow>
          <LSGridRow container>
            <Grid item lg={4} sm={12}>
              <CLabel>
              {'Current e-mail'}
              </CLabel>
            </Grid>
            <Grid item lg={8} sm={12}>
              <CIntentText>
              {words.currentEmail}
              </CIntentText>
            </Grid>
          </LSGridRow>
          <LSGridRow container>
            <Grid item lg={4} sm={12}>
              <CLabel >
              {'Change E-Mail'}
              </CLabel>
            </Grid>
            <Grid item lg={8} sm={12}>
              <LSTextField
              margin='normal'
              required
              size='small'
              id='email'
              label={'e-mail address'}
              name='email'
              autoComplete='email'
              />
            </Grid>
          </LSGridRow>
          <LSGridRow container>
            <Grid item lg={4} sm={12}>
              <CLabel >
              {'Password'}
              </CLabel>
            </Grid>
            <Grid item lg={8} sm={12}>
              <LSBlueTextButton >
              {'Change Password'}
              </LSBlueTextButton>
            </Grid>
          </LSGridRow>
          <LSButtonContainer>
            <LSButton
              type='submit'
              variant='contained'
            >
              {'Submit'}
            </LSButton>
            <LSButton
              color="secondary"
              variant = 'contained'
            >
            {'Cancel'}
            </LSButton>
          </LSButtonContainer>
        </Box>
      </FormContainer>
      </Box>
    </ThemeProvider>
  );
}

