import { FC }               from 'react';
import { AvatarSelector }   from 'views/molecules/Avatar/Favorites/Favorites';
import { AvatarContainer, Wrapper }
                            from './Style';
import { StudentMenu }      from 'views/pages/Student/Menus/StudentMenu';
import { PageTitle }        from 'views/molecules/PageTitle';

export const Avatar: FC = () => {
  return (
    <Wrapper>
      <StudentMenu>
        <AvatarContainer>
          <PageTitle title="YOUR FAVORITES" />
          <AvatarSelector />
        </AvatarContainer>
      </StudentMenu>
    </Wrapper>
  );
};
