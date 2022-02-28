import {FC} from 'react';
import {useHistory} from 'react-router-dom';
import {Wrapper} from './Style';
import styled from 'styled-components';

import {BasicColor} from '../../../Color';
import {ScreenSize} from 'views/screenSize';

import {PageTitle} from 'views/molecules/PageTitle';
import {StudentMenu} from '../../../templates/StudentMenu';
import {CardCategory} from '../../../molecules/StudentCard/CardsCategory';

export const Cards: FC = () => {
  const history = useHistory();

  return (
    <Wrapper>
      <StudentMenu>
        <div>
          <PageTitle title='Collectible Cards'/>
          <BtnContainer>
            <Button onClick={() => history.push('/collectibles/mycards')}>
              MY COLLECTION
            </Button>
          </BtnContainer>
          <CardCategory />
        </div>
      </StudentMenu>
    </Wrapper>
  );
};

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 3vh;
`

export const Button = styled.button`
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
    position: inherit;
    z-index: 1;
  }
`;
