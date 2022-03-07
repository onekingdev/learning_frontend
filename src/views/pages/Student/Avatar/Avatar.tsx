import {FC} from 'react';
import {AvatarSelector} from 'views/molecules/Avatar/Favorites/Favorites';
import {AvatarContainer, Wrapper} from './Style';
import {StudentMenu} from 'views/templates/StudentMenu';
import {PageTitle} from 'views/molecules/PageTitle';

export const Avatar: FC = () => {
  return (
    <Wrapper>
      <StudentMenu>
        <AvatarContainer>
          <PageTitle title="Your Favorites" />
          <AvatarSelector />
        </AvatarContainer>
      </StudentMenu>
    </Wrapper>
  );
};
