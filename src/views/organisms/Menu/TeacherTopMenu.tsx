import { FC, useEffect, useState } from 'react';
import Sidebar from 'views/organisms/Menu/TeacherSidebar';
import logoTitle from 'views/assets/logo-learn.svg'
import avatar from 'views/assets/profile-icon.svg'
import {
  AppBar,
  Avatar,
  Box,
  useMediaQuery
} from '@mui/material';
import { ScreenSize } from 'constants/screenSize';
import { BasicColor } from 'views/Color';

type TopMenuProps = {
  data?: any
};

export const TopMenu: FC<TopMenuProps> = ({
  data = null
}) => {
  const isMobile = useMediaQuery(`(max-width: ${ScreenSize.phone})`)

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
        Candy Rosenberg
        <Avatar sx={{ bgcolor: '#22BAAF', height: '60px', width: '60px', marginLeft: '15px' }} alt='Remy Sharp' src={avatar} />
      </Box>
    </AppBar >
  );
};
