import { FC, MouseEvent, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { USER_TYPE } from 'constants/common';
import { useHistory } from 'react-router-dom';
import { Link, ListItemText } from '@mui/material';

import logout_icon from 'views/assets/teacher-profile-menu-icons/logout.svg'
import help_icon from 'views/assets/teacher-profile-menu-icons/help.svg'
// import payment_icon from 'views/assets/teacher-profile-menu-icons/payment.svg'
import settings_icon from 'views/assets/classroom-menu/settings-active.svg'
import classrooms_icon from 'views/assets/teacher-profile-menu-icons/classrooms.svg'
import school_icon from 'views/assets/teacher-profile-menu-icons/school.svg'
import teachers_icon from 'views/assets/teacher-profile-menu-icons/teachers.svg'
import { MenuItemIcon } from './Elements/MenuItemIcon';

interface AccountMenuTeacherProps {
  firstName: string
  lastName: string
  role: string
  schoolName?: string
}

export const AccountMenuTeacher: FC<AccountMenuTeacherProps> = ({
  firstName,
  lastName,
  role,
  schoolName
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const history = useHistory();
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSettingClicked = () => {
    switch (role) {
      case USER_TYPE.teacher:
        history.push('/teacher/settings')
        break;
      case USER_TYPE.subscriber:
        history.push('/subscriber/settings')
        break;
      default:
        history.push('/subscriber/settings')
        break;
    }
  }
  return (
    <>
      <Tooltip title='Account settings'>
        <IconButton
          onClick={handleClick}
          size='small'
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
        >
          <Avatar sx={{ bgcolor: '#22BAAF' }}>{firstName?.charAt(0)}{lastName?.charAt(0)}</Avatar>
          {/* <Avatar sx={{ bgcolor: '#22BAAF', height: '60px', width: '60px', marginLeft: '15px' }} alt='Remy Sharp' src={avatar} /> */}
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id='account-menu'
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: "''",
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {
          role === USER_TYPE.teacher &&
          <MenuItem onClick={() => history.push('/teacher/classrooms')}>
            <MenuItemIcon image={classrooms_icon} />
            <ListItemText primary='Classrooms' />
          </MenuItem>
        }
        {
          role === USER_TYPE.subscriber &&
          <MenuItem onClick={() => history.push('/subscriber/schools')}>
            <MenuItemIcon image={school_icon} />
            <ListItemText primary='Schools' />
          </MenuItem>}
        {
          (role === USER_TYPE.subscriber || role === USER_TYPE.adminTeacher) && schoolName &&
          <MenuItem onClick={() => history.push('/admin/schoolTeachers')}>
            <MenuItemIcon image={teachers_icon} />
            <ListItemText primary={schoolName + ' Teachers'} />
          </MenuItem>
        }
        <Divider />

        <MenuItem onClick={handleSettingClicked}>
          <MenuItemIcon image={settings_icon} />
          <ListItemText primary='Settings' />
        </MenuItem>

        <MenuItem >
          <MenuItemIcon image={help_icon} />
          <Link href='https://www.withsocrates.com/contact/' target='_blank' sx={{ width: '100%', textAlign: 'start', textDecoration: 'none' }} color='inherit'>Help</Link>
        </MenuItem>

        <MenuItem onClick={() => history.push('/')}>
          <MenuItemIcon image={logout_icon} />
          <ListItemText primary='Logout' />
        </MenuItem>
      </Menu>
    </>
  );
}
