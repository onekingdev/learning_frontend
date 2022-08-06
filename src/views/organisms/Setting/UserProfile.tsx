import { FC, useState } from 'react';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {
  LSButtonContainer,
  LSGridRow,
  LSTitle,
  LSText,
  LSLabel,
} from 'views/molecules/Setting/utils/Style';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Paper, TextField, useMediaQuery } from '@mui/material';
import { LSDialog } from 'views/molecules/Setting/LSDialog';
import { dictionary } from './Teacher/dictionary'
import { PARENT_PAPER_STYLE } from 'views/MuiStyles';
import { ScreenSize } from 'constants/screenSize';
import { useMutation } from '@tanstack/react-query';
import { doUpdateUserEmailPassword } from 'app/actions/guardianActions';
import { useSnackbar } from 'notistack';
import { USER_SET_EMAIL } from 'app/types';
import isEmail from 'validator/lib/isEmail'
import LoadingButton from '@mui/lab/LoadingButton';
import { PwdResetForm } from './PwdResetFrom';


export const UserProfile: FC = () => {
  const isMobile = useMediaQuery(`(max-width: ${ScreenSize.phone})`)
  const { language, username, email, token } = useSelector((state: any) => state.user);
  const [openPwdRstDg, setOpenPwdRstDg] = useState(false)
  const [loading, setLoading] = useState(false)
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();


  const toggleOpenPwdRstDg = () => {
    setOpenPwdRstDg(!openPwdRstDg)
  }


  const updateEmail = useMutation((email: string) => doUpdateUserEmailPassword(token, email
  ), {
    onSuccess: async data => {
      if (data.message) {
        enqueueSnackbar(data.message, { variant: 'error' })
      }
      else {
        console.log({ data })
        dispatch({
          type: USER_SET_EMAIL,
          payload: data.email
        });
        enqueueSnackbar('Update email success!', { variant: 'success' })
      }
    },
    onError: async (error: any) => {
      enqueueSnackbar(error.message, { variant: 'error' })
    },
    onSettled: async () => {
      setLoading(false)
    }
  })

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email')?.toString()
    const newEmail = email ? email : ''
    if (isEmail(newEmail)) {
      setLoading(true)
      updateEmail.mutate(newEmail)
    }
    else
      enqueueSnackbar(dictionary[language]?.emailIsNotValid, { variant: 'error' })
  };

  return (
    <Paper
      elevation={5}
      sx={{
        ...PARENT_PAPER_STYLE,
        width: isMobile ? '100%' : 640
      }}>
      <LSTitle>
        {dictionary[language]?.profileAndSettings}
      </LSTitle>
      <Box component='form' onSubmit={handleSubmit} noValidate>
        <LSGridRow container>
          <Grid item lg={4} xs={12}>
            <LSLabel>
              {dictionary[language]?.name}
            </LSLabel>
          </Grid>
          <Grid item lg={8} xs={12}>
            <LSText pl={20} >
              {username}
            </LSText>
          </Grid>
        </LSGridRow>
        <LSGridRow container>
          <Grid item lg={4} xs={12}>
            <LSLabel>
              {dictionary[language]?.currentEmail}
            </LSLabel>
          </Grid>
          <Grid item lg={8} xs={12}>
            <LSText pl={20}>
              {email}
            </LSText>
          </Grid>
        </LSGridRow>
        <LSGridRow container>
          <Grid item lg={4} xs={12}>
            <LSLabel >
              {dictionary[language]?.changeEMail}
            </LSLabel>
          </Grid>
          <Grid item lg={8} xs={12}>
            <TextField
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
              {dictionary[language]?.password}
            </LSLabel>
          </Grid>
          <Grid item lg={8} xs={12}>
            <LSDialog
              isOpen={openPwdRstDg}
              open={toggleOpenPwdRstDg}
              title={dictionary[language]?.changePassword}
              dialogContent={
                <PwdResetForm open={toggleOpenPwdRstDg} />
              }
            />
            <Button onClick={toggleOpenPwdRstDg}>
              {dictionary[language]?.changePassword}
            </Button>
          </Grid>
        </LSGridRow>
        <LSButtonContainer>
          <LoadingButton
            type={dictionary[language]?.submit}
            variant='contained'
            loading={loading}
          >
            {dictionary[language]?.submit}
          </LoadingButton>
        </LSButtonContainer>
      </Box>
    </Paper>
  );
}

