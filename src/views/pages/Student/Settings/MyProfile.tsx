
import { FC, useContext, useEffect } from 'react';
import { StudentMenu } from 'views/pages/Student/Menus/StudentMenu';
import { LoadingContext } from 'react-router-loading';
import { Container, Stack, Grid } from '@mui/material';
import { PageTitle } from 'views/molecules/PageTitle';
import { BookShelf } from 'views/molecules/StudentProfile/Bookshelf';
import { AvatarSet } from 'views/molecules/Avatar/AvatarSet';
import { useSelector } from 'react-redux';
import { ProfileMobileTitle } from 'views/molecules/StudentProfile/ProfileMobileTitle'
import useMediaQuery from '@mui/material/useMediaQuery';
import { ScreenSize } from 'constants/screenSize';

export const MyProfile: FC = () => {
  const isMobile = useMediaQuery(`(max-width:${ScreenSize.phone})`);
  const loadingContext = useContext(LoadingContext);
  const avatar = useSelector((state: any) => state.avatar)
  const student = useSelector((state: any) => state.student);

  useEffect(() => {
    loadingContext.done();
  }, []);
  return (
    <StudentMenu>
      <Container >
        <div style={{display: isMobile ? 'none' : 'block'}}>
          <PageTitle title={student.firstName + '\'s profile'} />
        </div>
        <ProfileMobileTitle title={student.firstName + '\'s profile'} />
        <Grid container justifyContent={'center'}>
          <Grid item sm={3} sx={{display: isMobile ? 'none' : 'block'}}>
            <AvatarSet
              accessory={avatar.accessory ? avatar.accessory.image : ''}
              head={avatar.head ? avatar.head.image : ''}
              pants={avatar.pants ? avatar.pants.image : ''}
              body={avatar.clothes ? avatar.clothes.image : ''}
              skin={avatar.skin}
            />
          </Grid>
          <Grid item sx={{ marginLeft: isMobile ? 'auto' : '-10vw' }} sm={9} xs={12}>
            <BookShelf />
          </Grid>
        </Grid>
        <Stack direction='row' justifyContent='center' >
        </Stack>
      </Container>
    </StudentMenu>
  );
};
