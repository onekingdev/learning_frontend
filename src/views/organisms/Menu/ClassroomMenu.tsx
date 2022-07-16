import { FC } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import { useHistory } from 'react-router-dom';

import student_icon from 'views/assets/classroom-menu/student.svg'
import student_active from 'views/assets/classroom-menu/student-active.svg'

import group_icon from 'views/assets/classroom-menu/group.svg'
import group_active from 'views/assets/classroom-menu/group-active.svg'

import notes_icon from 'views/assets/classroom-menu/notes.svg'
import notes_active from 'views/assets/classroom-menu/notes-active.svg'

import cert_icon from 'views/assets/classroom-menu/cert.svg'
import cert_active from 'views/assets/classroom-menu/cert-active.svg'

import assignment_icon from 'views/assets/classroom-menu/assignment.svg'
import assignment_active from 'views/assets/classroom-menu/assignment-active.svg'

import review_icon from 'views/assets/classroom-menu/review.svg'
import review_active from 'views/assets/classroom-menu/review-active.svg'

import dashboard_icon from 'views/assets/classroom-menu/dashboard.svg'
import dashboard_active from 'views/assets/classroom-menu/dashboard-active.svg'

import settings_icon from 'views/assets/classroom-menu/setting.svg'
import settings_active from 'views/assets/classroom-menu/settings-active.svg'


export const ClassroomMenu: FC<{ current: string }> = ({ current }) => {

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
        <Tab icon={<img src={current === 'students' ? student_active : student_icon} />} aria-label="students"
          label='Students'
          value='students'
          sx={{
            '&.Mui-selected': {
              color: 'green'
            }
          }}
        />
        <Tab icon={<img src={current === 'groups' ? group_active : group_icon} />} aria-label="groups"
          label='Groups'
          value='groups' />
        <Tab icon={<img src={current === 'notes' ? notes_active : notes_icon} />}
          aria-label="notes"
          label='Notes'
          value='notes' />
        <Tab icon={<img src={current === 'certificates' ? cert_active : cert_icon} />}
          aria-label="certificates"
          label='Certificates'
          value='certificates' />
        <Tab icon={<img src={current === 'assignments' ? assignment_active : assignment_icon} />}
          aria-label="assignment"
          label='Assignments'
          value='assignments' />
        <Tab icon={<img src={current === 'results' ? review_active : review_icon} />}
          aria-label="review"
          label='Review'
          value='results' />
        <Tab icon={<img src={current === 'dashboard' ? dashboard_active : dashboard_icon} />}
          aria-label="dashboard"
          label='Dashboard'
          value='dashboard' />
        <Tab icon={<img src={current === 'classroomSettings' ? settings_active : settings_icon} />}
          aria-label="settings"
          label='Settings'
          value='classroomSettings' />
      </Tabs>
    </Box>
  );
}
