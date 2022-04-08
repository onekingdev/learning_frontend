import { FC }               from 'react';
import { AvatarSelector }   from 'views/molecules/Avatar/Favorites/Favorites';
import { StudentMenu }      from 'views/pages/Student/Menus/StudentMenu';
import { PageTitle }        from 'views/molecules/PageTitle';
import { AvatarContainer, Wrapper
} from './Style';

export const Avatar: FC = () => {
  return (
    <Wrapper>
      <StudentMenu>
        <AvatarContainer>
          <PageTitle title="My Avatar" />
          <AvatarSelector />
        </AvatarContainer>
      </StudentMenu>
    </Wrapper>
  );
};
