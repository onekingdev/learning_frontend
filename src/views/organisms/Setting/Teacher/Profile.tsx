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
import { useSelector } from 'react-redux';
import { Button, Paper, TextField, useMediaQuery } from '@mui/material';
import { LSDialog } from 'views/molecules/Setting/LSDialog';
import { TeacherPwdResetForm } from './Forms/PwdResetFrom';
import { dictionary } from './dictionary'
import { PARENT_PAPER_STYLE } from 'views/MuiStyles';
import { ScreenSize } from 'constants/screenSize';


export const TeacherSettingProfile: FC = () => {
  const isMobile = useMediaQuery(`(max-width: ${ScreenSize.phone})`)
  const user = useSelector((state: any) => state.user);
  const [openPwdRstDg, setOpenPwdRstDg] = useState(false)
  const language: string = useSelector((state: any) => state.user.language) || 'en-us';

  const toggleOpenPwdRstDg = () => {
    setOpenPwdRstDg(!openPwdRstDg)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
      <Box component='form' onSubmit={handleSubmit} noValidate sx={{ flexGrow: 1 }}>
        <LSGridRow container>
          <Grid item lg={4} xs={12}>
            <LSLabel>
              {dictionary[language]?.name}
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
              {dictionary[language]?.currentEmail}
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
                <TeacherPwdResetForm open={toggleOpenPwdRstDg} />
              }
            />
            <Button onClick={toggleOpenPwdRstDg}>
              {dictionary[language]?.changePassword}
            </Button>
          </Grid>
        </LSGridRow>
        <LSButtonContainer>
          <Button
            type={dictionary[language]?.submit}
            variant='contained'
          >
            {dictionary[language]?.submit}
          </Button>
        </LSButtonContainer>
      </Box>
    </Paper>
  );
}

