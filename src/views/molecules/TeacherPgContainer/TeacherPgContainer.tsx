import { FC, ReactChildren, ReactChild } from 'react';
import Menu from 'views/pages/Teacher/Menus/TeacherMenu';
import logo from 'views/assets/socrates-logo.svg';
import { TeacherPgWrapper } from 'views/atoms/TeacherPgWrapper';
import {
  Box,
  Container,
  ThemeProvider,
  useMediaQuery,
} from '@mui/material';
import { themeTeacher } from 'views/Theme';
import { ScreenSize } from 'constants/screenSize';
import { TeacherPageTitle } from '../PageTitle';
import { USER_AVATAR_SIZE } from 'constants/common';

type ParentPgContainerProps = {
  onlyLogoImgNav: boolean;
  children: ReactChild | ReactChildren;
  title?: string
};

export const TeacherPgContainer: FC<ParentPgContainerProps> = ({ onlyLogoImgNav, title, children = (<></>) }) => {
  const isMobile = useMediaQuery(`(max-width: ${ScreenSize.phone})`)

  return (
    <ThemeProvider theme={themeTeacher}>
      <TeacherPgWrapper>
        <Container maxWidth='xl' sx={{ padding: 0, paddingBottom: 5, minHeight: '100vh' }}>
          {onlyLogoImgNav ?
            <Box
              id='socrates-logo-container'
              pl={isMobile ? 0 : 20}
              mb={isMobile ? 2 : 10}
            >
              <img src={logo} style={{
                height: isMobile ? 40 : 'auto',
                padding: 40
              }} />
            </Box>
            :
            <Menu />}
          {title && <TeacherPageTitle title={title} />}
          <Box>
            {children}
          </Box>
          <Box height={USER_AVATAR_SIZE + 10} width={100} display={isMobile ? 'block' : 'none'} />
        </Container>
      </TeacherPgWrapper>
    </ThemeProvider>
  );
};
