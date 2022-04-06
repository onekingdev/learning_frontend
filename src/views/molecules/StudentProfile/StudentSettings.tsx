import { FC } from 'react';
import { SettingBarColor } from 'views/Color';
import { SettingBar } from 'views/molecules/SettingBar';
import { Container, Paper } from '@mui/material';
import { ProfileTitle } from 'views/molecules/ProfileTitle';
import {StudentSettingsAccordian} from './StudentSettingsAccordian';

export const StudentSettings: FC = () => {
  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <ProfileTitle title='Settings' />
      <Paper elevation={2} sx={{ padding: 1, width: 300, marginBottom: 5 }}>
        <StudentSettingsAccordian />
      </Paper>
    </Container>
  );
};

