
import { FC, useContext, useEffect } from 'react';
import { StudentMenu } from 'views/pages/Student/Menus/StudentMenu';
import { LoadingContext } from 'react-router-loading';
import { Container, Stack } from '@mui/material';
import { PageTitle } from 'views/molecules/PageTitle';
import { BookShelf } from 'views/molecules/StudentProfile/Bookshelf';
import { AvatarSet } from 'views/molecules/Avatar/AvatarSet';
import { useSelector } from 'react-redux';

export const MyProfile: FC = () => {
  const loadingContext = useContext(LoadingContext);
  const avatar = useSelector((state: any) => state.avatar)

  useEffect(() => {
    loadingContext.done();
  }, []);
  return (
    <StudentMenu>
      <Container>
        <PageTitle title='My profile' />
        <Stack direction='row' justifyContent='center' >
          <AvatarSet
            accessory={avatar.accessory ? avatar.accessory.image : ''}
            head={avatar.head ? avatar.head.image : ''}
            pants={avatar.pants ? avatar.pants.image : ''}
            body={avatar.clothes ? avatar.clothes.image : ''}
            skin={avatar.skin}
          />
          <BookShelf />
        </Stack>
      </Container>
    </StudentMenu>
  );
};
