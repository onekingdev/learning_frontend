import { FC } from 'react';
import { TopMenu } from 'views/organisms/Menu/TeacherTopMenu';
import { USER_AVATAR_SIZE } from 'constants/common';
import { useMediaQuery } from '@mui/material';
import { ScreenSize } from 'constants/screenSize';

export const TeacherMenu: FC = ({ children }) => {
  const isMobile = useMediaQuery(`(max-width: ${ScreenSize.phone})`)

  return (
    <div>
      <TopMenu
      />
      <div style={{
        height: USER_AVATAR_SIZE + 10,
        display: isMobile ? 'none' : 'flex',
      }} />
      <div>
        {children}
      </div>
    </div>
  );
};

export default TeacherMenu;

