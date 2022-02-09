import { FC } from 'react';
import {
  CardCollectibleContainer,
  Wrapper,
} from './Style';

import { CardCollectibleTitle } from '../../../molecules/CardCollectible/CardCollectibleTitle';
import { CardCollectibleCarrousel } from '../../../molecules/CardCollectible/CardCollectibleCarrousel';
import { StudentMenu } from '../../../templates/StudentMenu';
import { CardCategory } from '../../../molecules/StudentCard/CardsCategory'

export const Cards: FC = () => {
  return (
    <Wrapper>
      <StudentMenu>
        <CardCollectibleContainer>
          <CardCollectibleTitle />
          <CardCategory />
          <CardCollectibleCarrousel></CardCollectibleCarrousel>
        </CardCollectibleContainer>
      </StudentMenu>
    </Wrapper>
  );
};
