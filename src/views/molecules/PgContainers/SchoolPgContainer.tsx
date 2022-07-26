import { FC, ReactChildren, ReactChild } from 'react';
import Menu from 'views/pages/Teacher/Menus/TeacherMenu';
import logo from 'views/assets/socrates-logo.svg';
import { TeacherPgWrapper } from 'views/atoms/TeacherPgWrapper';
import {
  Box,
  Container,
  ThemeProvider,
} from '@mui/material';
import { themeTeacher } from 'views/Theme';
import { TeacherPageTitle } from '../PageTitle';
import { USER_AVATAR_SIZE } from 'constants/common';
import { ClassroomMenu } from 'views/organisms/Menu/ClassroomMenu';
import { useSocratesMediaQuery } from 'hooks/useSocratesMediaQuery';

type SchoolPgContainerProps = {
  onlyLogoImgNav: boolean;
  children: ReactChild | ReactChildren;
  title?: string
  current?: string
};

export const SchoolPageContainer: FC<SchoolPgContainerProps> = ({ onlyLogoImgNav, title, current, children = (<></>) }) => {
  const isMobile = useSocratesMediaQuery('xs')

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
          {current && <ClassroomMenu current={current} />}
          <Box mt={5} mb={5}>
            {children}
          </Box>
          <Box height={USER_AVATAR_SIZE + 10} width={100} display={isMobile ? 'block' : 'none'} />
        </Container>
      </TeacherPgWrapper>
    </ThemeProvider>
  );
};
