import {FC} from 'react';
import {useHistory} from 'react-router-dom';
import {CardCollectibleContainer, Wrapper} from './Style';
import styled from 'styled-components';

import {BasicColor} from '../../../Color';
import {ScreenSize} from 'views/screenSize';

import {CardCollectibleTitle} from '../../../molecules/CardCollectible/CardCollectibleTitle';
import {StudentMenu} from '../../../templates/StudentMenu';
import {CardCategory} from '../../../molecules/StudentCard/CardsCategory';
export const Cards: FC = () => {
  const history = useHistory();

  return (
    <Wrapper>
      <StudentMenu>
        <CardCollectibleContainer>
          <CardCollectibleTitle />
          <Button onClick={() => history.push('/collectibles/mycards')}>
            MY COLLECTION
          </Button>
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
  }
  @media screen and (max-width: ${ScreenSize.tablet}) {
    position: fixed;
    top: auto;
    right: 10px;
    bottom: 14%;
    z-index: 1;
  }
`;
