import { FC } from 'react';
import { BasicColor } from 'views/Color';
import { ScreenSize } from 'constants/screenSize';
import { useHistory } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery'
import BottomNavigation from '@mui/material/BottomNavigation';
import { Box } from '@mui/material';
import TeacherSidebar from './TeacherSidebar';


export const MobileMenuTeacher: FC = () => {
  const mobile = useMediaQuery(`(max-width: ${ScreenSize.phone})`)

  return (
    <Box>
      {mobile && <Box sx={{ height: 70, width: '100%' }} />}
      <BottomNavigation
        sx={{
          display: mobile ? 'flex' : 'none',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          backgroundColor: BasicColor.blue,
          position: 'fixed',
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: 1000,
          padding: 1,
          justifyContent: 'start',
        }}
      >
        <TeacherSidebar />
      </BottomNavigation>
    </Box>
  );
};
