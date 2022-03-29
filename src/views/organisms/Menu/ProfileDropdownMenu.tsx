import { FC, useState }  from 'react';
import * as React        from 'react';
import Button            from '@mui/material/Button';
import Menu              from '@mui/material/Menu';
import MenuItem          from '@mui/material/MenuItem';
import { useHistory }    from 'react-router-dom';
import { ImageAvatar }   from 'views/molecules/Avatar/DefaultAvatar';
import { useSelector }   from 'react-redux'
import styled            from 'styled-components';
import { ScreenSize }    from 'constants/screenSize';

export const ProfileDropDownMenu: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const history = useHistory();
  const student = useSelector((state: any) => state.student);
  const avatar = useSelector((state: any) => state.avatar);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <ChartHeaderContrainer>
          <ImageAvatar
          firstName={student.firstName}
          lastName={student.lastName}
          accessory={avatar.accessory?avatar.accessory:null}
          head={avatar.head?avatar.head:null}
          skinTone={avatar.skin?avatar.skin:null}
          size={60}
          />
        </ChartHeaderContrainer>
        {/* <img style={{width: ICON_SIZE.medium}} src={icon} /> */}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => history.push('/avatar')}>Profile</MenuItem>
        <MenuItem onClick={() => history.push('/')}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

const ChartHeaderContrainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 1rem;
    @media (min-width: ${ScreenSize.phone}) {
        flex-direction: row;
        background: transparent;
    }
`;



