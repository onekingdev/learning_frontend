import { FC, useEffect, useState } from 'react';
import Sidebar from 'views/organisms/Menu/TeacherSidebar';
import logoTitle from 'views/assets/logo-learn.svg'
import {
  AppBar,
  Box,
  Typography,
  useMediaQuery
} from '@mui/material';
import { ScreenSize } from 'constants/screenSize';
import { BasicColor } from 'views/Color';
import { useSelector } from 'react-redux';
import { AccountMenuTeacher } from './TeacherProfileMenu';


export const TopMenu: FC = () => {
  const isMobile = useMediaQuery(`(max-width: ${ScreenSize.phone})`)
  const { firstName, lastName, profile } = useSelector((state: any) => state.user)
  const { school } = useSelector((state: any) => state)

  const [navOp, setNavOp] = useState(true)
  const changeNavBarOpacity = () => {
    const posY = window.scrollY
    if (posY < 40) {
      setNavOp(true)
    } else setNavOp(false)
  }
  useEffect(() => {
    changeNavBarOpacity()
    window.addEventListener('scroll', changeNavBarOpacity)
  }, [])

  return (
    <AppBar
      position='fixed'
      sx={{
        top: isMobile ? 'unset' : 0,
        bottom: isMobile ? 0 : 'unset',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        background: isMobile ? BasicColor.blue :
          navOp ? '#FFFFFF00' : '#FFFFFF',
        color: 'black',
        transition: 'background 0.5s, box-shadow 0.5s',
        padding: 2,
        borderTopLeftRadius: isMobile ? 10 : 0,
        borderTopRightRadius: isMobile ? 10 : 0,
      }}>
      <Sidebar />
      <img src={logoTitle} />
      <Box display={isMobile ? 'none' : 'flex'} alignItems='center' >
        <Box>
          <Typography textAlign={'end'} fontWeight='bold'>
            {firstName} {lastName}
          </Typography>
        </Box>
        <AccountMenuTeacher
          firstName={firstName}
          lastName={lastName}
          role={profile?.role || ''}
          schoolName={school.name}
        />
      </Box>
    </AppBar >
  );
};
