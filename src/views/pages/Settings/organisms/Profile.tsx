import {FC, useEffect} from 'react';
import * as React from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { CIntentText, FormContainer, LSButtonContainer, CGridRow, LSTextField, LSTitle, CText, CLabel, TextGroup} from '../utils/Style';
import { LSButton,LSBlueTextButton } from '../utils/Style';

import {dictionary} from '../dictionary';

import { settingPage } from '../utils/Theme';
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
          <CGridRow container>
            <Grid item lg={4} sm={12}>
              <CLabel>
              {'First Name'}
              </CLabel>
            </Grid>
            <Grid item lg={8} sm={12}>
              <LSTextField
              margin='normal'
              required
              size='small'
              id='first_name'
              label={'First Name'}
              name='firstName'
              autoFocus
              />
            </Grid>
          </CGridRow>
          <CGridRow container>
            <Grid item lg={4} sm={12}>
              <CLabel>
              {'Last Name'}
              </CLabel>
            </Grid>
            <Grid item lg={8} sm={12}>
              <LSTextField
              margin='normal'
              required
              size='small'
              variant='outlined'
              id='last_name'
              label={'Last Name'}
              name='lastName'
              />
            </Grid>
          </CGridRow>
          <CGridRow container>
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
          </CGridRow>
          <CGridRow container>
            <Grid item lg={4} sm={12}>
              <CLabel >
              {'E-Mail Address'}
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
          </CGridRow>
          <CGridRow container>
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
          </CGridRow>
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
        <TextGroup>
          <CLabel>{'Questions? '}</CLabel>
          <CText>{' Reach us and we will help you'}</CText>
          <LSBlueTextButton href='#'>{' Contact'}</LSBlueTextButton>
        </TextGroup>
      </Box>
    </ThemeProvider>
  );
}

