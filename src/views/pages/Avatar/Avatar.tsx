import {FC} from 'react';
import {AvatarFavorites} from '../../molecules/Avatar/AvatarFavorites';
import {AvatarFavoritesTitle} from '../../molecules/Avatar/AvatarFavoritesTitle';
import {AvatarSelector} from '../../molecules/Avatar/AvatarSelector';
import {AvatarContainer} from './Style';

export const Avatar: FC = () => {
  return (
    <AvatarContainer>
      <AvatarFavoritesTitle />
      <AvatarFavorites />
      <AvatarSelector />
    </AvatarContainer>
  );
};
