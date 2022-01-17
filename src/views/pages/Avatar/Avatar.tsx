import {FC} from 'react';
import {AvatarFavoritesTitle} from '../../molecules/Avatar/AvatarFavoritesTitle';
import {AvatarSelector} from '../../molecules/Avatar/Selector/AvatarSelector';
import {AvatarContainer, Wrapper} from './Style';
import {StudentMenu} from '../../templates/StudentMenu';

export const Avatar: FC = () => {
  return (
    <Wrapper>
      <StudentMenu>
        <AvatarContainer>
          <AvatarFavoritesTitle />
          <AvatarSelector />
        </AvatarContainer>
      </StudentMenu>
    </Wrapper>
  );
};
