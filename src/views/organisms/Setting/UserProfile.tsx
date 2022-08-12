import { FC, useState } from 'react';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {
  LSButtonContainer,
  LSGridRow,
  LSTitle,
} from 'views/molecules/Setting/utils/Style';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Paper, TextField, Typography, useMediaQuery } from '@mui/material';
import { LSDialog } from 'views/molecules/Setting/LSDialog';
import { PARENT_PAPER_STYLE } from 'views/MuiStyles';
import { ScreenSize } from 'constants/screenSize';
import { useMutation } from '@tanstack/react-query';
import { doUpdateUserNameEmailPassword } from 'app/actions/guardianActions';
import { useSnackbar } from 'notistack';
import { USER_SET_DATA, USER_SET_TOKEN } from 'app/types';
import isEmail from 'validator/lib/isEmail'
import LoadingButton from '@mui/lab/LoadingButton';
import { PwdResetForm } from './PwdResetFrom';
import commonDictionary from 'constants/commonDictionary';

interface IMutationProps {
  email?: string
  username?: string
  token: string
}

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


  const updateEmail = useMutation(({ username, email, token }: IMutationProps) => doUpdateUserNameEmailPassword(token, email, username
  ), {
    onSuccess: async data => {
      if (data.message) {
        enqueueSnackbar(data.message, { variant: 'error' })
      }
      else {
        console.log({ data })
        dispatch({
          type: USER_SET_DATA,
          payload: data.user
        });
        dispatch({
          type: USER_SET_TOKEN,
          payload: data.token
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

    const email = data.get('email')?.toString()?.trim() || ''
    const username = data.get('username')?.toString()?.trim() || ''
    if (isEmail(email)) {
      setLoading(true)
      updateEmail.mutate({ token, email, username })
    }
    else
      enqueueSnackbar(commonDictionary[language]?.email_is_not_valid, { variant: 'error' })
  };

  return (
    <Paper
      elevation={5}
      sx={{
        ...PARENT_PAPER_STYLE,
        width: isMobile ? '100%' : 640
      }}>
      <LSTitle>
        {commonDictionary[language]?.profile_and_settings}
      </LSTitle>
      <Box component='form' onSubmit={handleSubmit} noValidate>
        <LSGridRow container>
          <Grid item lg={4} xs={12}>
            <Typography variant='h6' width='100%'>
              {commonDictionary[language]?.username}
            </Typography>
          </Grid>
          <Grid item lg={8} xs={12}>
            <Typography width='100%'>
              {username}
            </Typography>
          </Grid>
        </LSGridRow>

        <LSGridRow container>
          <Grid item lg={4} xs={12}>
            <Typography variant='h6' width='100%'>
              {'New username'}
            </Typography>
          </Grid>
          <Grid item lg={8} xs={12}>
            <TextField
              margin='normal'
              size='small'
              id='new-username'
              label={'New username'}
              name='username'
              autoComplete='text'
              defaultValue={username}
            />
          </Grid>
        </LSGridRow>

        <LSGridRow container>
          <Grid item lg={4} xs={12}>
            <Typography variant='h6' width='100%'>
              {commonDictionary[language]?.current_email}
            </Typography>
          </Grid>
          <Grid item lg={8} xs={12}>
            <Typography width='100%'>
              {email}
            </Typography>
          </Grid>
        </LSGridRow>

        <LSGridRow container>
          <Grid item lg={4} xs={12}>
            <Typography variant='h6' width='100%'>
              {commonDictionary[language]?.change_email}
            </Typography>
          </Grid>
          <Grid item lg={8} xs={12}>
            <TextField
              margin='normal'
              size='small'
              id='email'
              label={'e-mail address'}
              name='email'
              autoComplete='email'
              defaultValue={email}
            />
          </Grid>
        </LSGridRow>
        <LSGridRow container>
          <Grid item lg={4} xs={12} >
            <Typography variant='h6' width='100%'>
              {commonDictionary[language]?.password}
            </Typography>
          </Grid>
          <Grid item lg={8} xs={12} width='100%'>

            <Button onClick={toggleOpenPwdRstDg} >
              {commonDictionary[language]?.change_password}
            </Button>
          </Grid>
        </LSGridRow>
        <LSDialog
          isOpen={openPwdRstDg}
          open={toggleOpenPwdRstDg}
          title={commonDictionary[language]?.change_password}
          dialogContent={
            <PwdResetForm open={toggleOpenPwdRstDg} />
          }
        />
        <LSButtonContainer>
          <LoadingButton
            type={commonDictionary[language]?.submit}
            variant='contained'
            loading={loading}
          >
            {commonDictionary[language]?.submit}
          </LoadingButton>
        </LSButtonContainer>
      </Box>
    </Paper>
  );
}

