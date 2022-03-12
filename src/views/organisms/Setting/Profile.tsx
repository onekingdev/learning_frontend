import { FC } from 'react';
import * as React from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import {
  LSShadowContainer,
  LSButtonContainer,
  LSGridRow,
  LSTextField,
  LSTitle,
  LSText,
  LSLabel,
  LSButton,
  LSBlueTextButton
} from 'views/molecules/Setting/utils/Style';

import { dictionary } from 'views/molecules/Setting/utils/dictionary';

import { settingPage } from 'views/molecules/Setting/utils/Theme';
import { ThemeProvider } from '@mui/material';


export const SettingForm: FC = () => {
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
        <LSShadowContainer >
          <LSTitle>
            {'Profile and settings'}
          </LSTitle>
          <Box component='form' onSubmit={handleSubmit} noValidate sx={{ flexGrow: 1 }}>
            <LSGridRow container>
              <Grid item lg={4} xs={12}>
                <LSLabel>
                  {'Name'}
                </LSLabel>
              </Grid>
              <Grid item lg={8} xs={12}>
                <LSText pl={20} >
                  {'Lana Taylor James'}
                </LSText>
              </Grid>
            </LSGridRow>
            <LSGridRow container>
              <Grid item lg={4} xs={12}>
                <LSLabel>
                  {'Current e-mail'}
                </LSLabel>
              </Grid>
              <Grid item lg={8} xs={12}>
                <LSText pl={20}>
                  {words.currentEmail}
                </LSText>
              </Grid>
            </LSGridRow>
            <LSGridRow container>
              <Grid item lg={4} xs={12}>
                <LSLabel >
                  {'Change E-Mail'}
                </LSLabel>
              </Grid>
              <Grid item lg={8} xs={12}>
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
              <Grid item lg={4} xs={12}>
                <LSLabel >
                  {'Password'}
                </LSLabel>
              </Grid>
              <Grid item lg={8} xs={12}>
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
                variant='contained'
              >
                {'Cancel'}
              </LSButton>
            </LSButtonContainer>
          </Box>
        </LSShadowContainer>
      </Box>
    </ThemeProvider>
  );
}

