import {FC} from 'react';
import {AvatarFavorites} from '../../molecules/Avatar/AvatarFavorites';
import {AvatarFavoritesTitle} from '../../molecules/Avatar/AvatarFavoritesTitle';
import {AvatarSelector} from '../../molecules/Avatar/AvatarSelector';
import {AvatarContainer, Wrapper} from './Style';
import {StudentMenu} from '../../templates/StudentMenu';

export const Avatar: FC = () => {
  return (
    <Wrapper>
      <StudentMenu>
        <AvatarContainer>
          <AvatarFavoritesTitle />
          <AvatarFavorites />
          <AvatarSelector />
        </AvatarContainer>
      </StudentMenu>
    </Wrapper>
  );
};
