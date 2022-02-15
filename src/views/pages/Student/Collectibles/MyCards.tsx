import { FC } from 'react';
import {
  CardCollectibleContainer,
  Wrapper,
} from './Style';
import { BasicColor } from '../../../Color';
import styled from 'styled-components'

import { CardCollectibleTitle2 } from '../../../molecules/CardCollectible/CardCollectibleTitle';
import { StudentMenu } from '../../../templates/StudentMenu';
import { MyCardCategory } from 'views/molecules/StudentCard/MyCardsCategory';
export const MyCardCollection: FC = () => {
  return (
    <Wrapper>
      <StudentMenu>
        <CardCollectibleContainer>
          <CardCollectibleTitle2 />
          <MyCardCategory />
        </CardCollectibleContainer>
      </StudentMenu>
    </Wrapper>
  );
};
