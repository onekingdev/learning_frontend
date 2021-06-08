import {FC} from 'react';
import {AvatarFavorites} from '../../molecules/Avatar/AvatarFavorites';
import {AvatarSelector} from '../../molecules/Avatar/AvatarSelector';
import {AvatarContainer} from './Style';
import {MobileMenu} from '../../organisms/Menu/MobileMenu';

export const Avatar: FC = () => {
  return (
    <>
      <AvatarContainer>
        <AvatarFavorites />
        <AvatarSelector />
      </AvatarContainer>
      <MobileMenu />
    </>
  );
};
