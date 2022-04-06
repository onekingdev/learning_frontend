import { FC } from 'react';
import { Container, Paper } from '@mui/material';
import { ProfileTitle } from 'views/molecules/ProfileTitle';
import {StudentSettingsAccordian} from './StudentSettingsAccordian';

export const StudentSettings: FC = () => {
  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <ProfileTitle title='Settings' />
      <Paper elevation={3} sx={{ padding: 1, marginBottom: 5, width: '100%' }}>
        <StudentSettingsAccordian />
      </Paper>
    </Container>
  );
};

