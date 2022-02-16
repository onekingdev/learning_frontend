import { FC } from 'react';
import {
  CardCollectibleContainer,
  Wrapper,
} from './Style';
import { BasicColor } from '../../../Color';
import styled from 'styled-components'

import { CardCollectibleTitle } from '../../../molecules/CardCollectible/CardCollectibleTitle';
import { StudentMenu } from '../../../templates/StudentMenu';
import { CardCategory } from '../../../molecules/StudentCard/CardsCategory'

export const Cards: FC = () => {
  return (
    <Wrapper>
      <StudentMenu>
        <Button >MY COLLECTION</Button>
        <CardCollectibleContainer>
          <CardCollectibleTitle />
          <CardCategory />
        </CardCollectibleContainer>
      </StudentMenu>
    </Wrapper>
  );
};

const Button = styled.button`
border: none;
width: 200px;
height: 40px;
background: ${BasicColor.aqua};
color: white;
border-radius: 20px;
position: absolute;
cursor: pointer;
top: 16vh;
right: 15vw;
transition: all 250ms ease-in-out;

&:hover {
  box-shadow: 0 4px 1rem -4px #000;
`
