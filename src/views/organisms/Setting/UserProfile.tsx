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
import { PARENT_PAPER_STYLE } from 'views/MuiStyles';
import { ScreenSize } from 'constants/screenSize';
import { useMutation } from '@tanstack/react-query';
import { doUpdateUserEmailPassword } from 'app/actions/guardianActions';
import { useSnackbar } from 'notistack';
import { USER_SET_EMAIL } from 'app/types';
import isEmail from 'validator/lib/isEmail'
import LoadingButton from '@mui/lab/LoadingButton';
import { PwdResetForm } from './PwdResetFrom';
import commonDictionary from 'constants/commonDictionary';


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

    const email = data.get('email')?.toString()?.trim() || ''
    if (isEmail(email)) {
      setLoading(true)
      updateEmail.mutate(email)
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
            <LSLabel>
              {commonDictionary[language]?.name}
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
              {commonDictionary[language]?.current_email}
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
              {commonDictionary[language]?.change_email}
            </LSLabel>
          </Grid>
          <Grid item lg={8} xs={12}>
            <TextField
              margin='normal'
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
              {commonDictionary[language]?.password}
            </LSLabel>
          </Grid>
          <Grid item lg={8} xs={12}>
            <LSDialog
              isOpen={openPwdRstDg}
              open={toggleOpenPwdRstDg}
              title={commonDictionary[language]?.change_password}
              dialogContent={
                <PwdResetForm open={toggleOpenPwdRstDg} />
              }
            />
            <Button onClick={toggleOpenPwdRstDg}>
              {commonDictionary[language]?.change_password}
            </Button>
          </Grid>
        </LSGridRow>
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

