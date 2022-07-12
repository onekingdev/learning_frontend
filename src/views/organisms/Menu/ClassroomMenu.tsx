import { FC, useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useHistory } from 'react-router-dom';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';
import GroupsIcon from '@mui/icons-material/Groups';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import { useMediaQuery } from '@mui/material';
import { ScreenSize } from 'constants/screenSize';

export const ClassroomMenu: FC<{ current: string }> = ({ current }) => {

  const isMobile = useMediaQuery(`(max-width: ${ScreenSize.phone})`)
  const history = useHistory()
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    history.push('/teacher/' + newValue)
  };

  return (
    <Box width={'100%'} display='flex' justifyContent={'center'}>
      <Tabs
        value={current}
        onChange={handleChange}
        aria-label="classroom tabs"
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
      >
        <Tab icon={<SchoolIcon />} aria-label="students"
          label='Students'
          value='students' />
        <Tab icon={<GroupsIcon />} aria-label="groups"
          label='Groups'
          value='groups' />
        <Tab icon={<NoteAddIcon />}
          aria-label="notes"
          label='Notes'
          value='notes' />
        <Tab icon={<CardGiftcardIcon />}
          aria-label="certificates"
          label='Certificates'
          value='certificates' />
        <Tab icon={<AssignmentIcon />}
          aria-label="assignment"
          label='Assignments'
          value='assignments' />
        <Tab icon={<DashboardIcon />}
          aria-label="dashboard"
          label='Dashboard'
          value='dashboard' />
        <Tab icon={<SettingsIcon />}
          aria-label="settings"
          label='Settings'
          value='classroomSettings' />
      </Tabs>
    </Box>
  );
}
