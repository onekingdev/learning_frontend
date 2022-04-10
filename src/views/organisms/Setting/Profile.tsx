import { FC, useState } from 'react';
import * as React from 'react';
import { doUpdateGuardianEmailPassword } from 'app/actions/guardianActions';
// import { validate } from 'email-validator';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import validator                   from 'validator'
import {GUARDIAN_UPDATE_EMAIL_PWD} from 'app/types'
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
import { settingPage }             from 'views/molecules/Setting/utils/Theme';
import { useDispatch, useSelector }from 'react-redux';
import { ThemeProvider }           from '@mui/material';
import { LSDialog }                from 'views/molecules/Setting/LSDialog';
import { PwdResetForm }            from './PwdResetFrom';
import { useSnackbar }             from 'notistack';


export const SettingForm: FC = () => {
  const user = useSelector((state: any) => state.user);
  const [openPwdRstDg, setOpenPwdRstDg] = useState(false)
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  const toggleOpenPwdRstDg = () => {
    setOpenPwdRstDg(!openPwdRstDg)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email')?.toString()
    const newEmail = email ? email : ''
    if (validator.isEmail(newEmail)) {
      const res: any = await doUpdateGuardianEmailPassword(newEmail, user.username, 'pwd.password', user.token)
      if (res === null)
        enqueueSnackbar('Email is not valid! ', { variant: 'error' })
      else {
        dispatch({
          type: GUARDIAN_UPDATE_EMAIL_PWD,
          payload: { email: newEmail }
        });
        enqueueSnackbar('Email updated successfully! ', { variant: 'success' })
      }
    }
    else
      enqueueSnackbar('Email is not valid! ', { variant: 'error' })
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
                  {user.username}
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
                  {user.email}
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
                <LSDialog
                  isOpen={openPwdRstDg}
                  open={toggleOpenPwdRstDg}
                  title='Change Password'
                  // contentText='Input new password'
                  dialogContent={
                    <PwdResetForm open={toggleOpenPwdRstDg} />
                  }
                />
                <LSBlueTextButton onClick={toggleOpenPwdRstDg}>
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
            </LSButtonContainer>
          </Box>
        </LSShadowContainer>
      </Box>
    </ThemeProvider>
  );
}

