import { FC } from 'react';
import { WardrobeSelector } from 'views/molecules/Avatar/Wardrobe/WardrobeSelector';
import { AvatarContainer, Wrapper } from './Style';
import { StudentMenu } from 'views/templates/StudentMenu';
import { PageTitle } from 'views/molecules/PageTitle';

export const Wardrobe: FC = () => {
  return (
    <Wrapper>
      <StudentMenu>
        <AvatarContainer>
          <PageTitle title='Wardrobe' />
          <WardrobeSelector />
        </AvatarContainer>
      </StudentMenu>
    </Wrapper>
  );
};
