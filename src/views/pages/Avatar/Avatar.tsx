import {FC} from 'react';
import {AvatarFavorites} from '../../molecules/Avatar/AvatarFavorites';
import {AvatarFavoritesTitle} from '../../molecules/Avatar/AvatarFavoritesTitle';
import {AvatarSelector} from '../../molecules/Avatar/AvatarSelector';
import {AvatarContainer} from './Style';
import {StudentMenu} from '../../templates/StudentMenu';

export const Avatar: FC = () => {
  return (
    <StudentMenu>
      <AvatarContainer>
        <AvatarFavoritesTitle />
        <AvatarFavorites />
        <AvatarSelector />
      </AvatarContainer>
    </StudentMenu>
  );
};
