import {FC} from 'react';
import {WardrobeTitle} from '../../molecules/Avatar/WardrobeTitle';
import {WardrobeSelector} from '../../molecules/Avatar/WardrobeSelector/WardrobeSelector';
import {AvatarContainer, Wrapper} from './Style';
import {StudentMenu} from '../../templates/StudentMenu';

export const Wardrobe: FC = () => {
  return (
    <Wrapper>
      <StudentMenu>
        <AvatarContainer>
          <WardrobeTitle />
          <WardrobeSelector />
        </AvatarContainer>
      </StudentMenu>
    </Wrapper>
  );
};
