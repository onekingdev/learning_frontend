import {FC} from 'react';
import styled from 'styled-components';
import {Title} from '../../atoms/Text/Title';
import ribbon from '../../assets/ribbon.svg';
import {ScreenSize} from '../../screenSize';

export const CardCollectibleTitle: FC = () => {
  return (
    <CardTitle>
      <h1>Collectible Cards</h1>
    </CardTitle>
  );
};
export const CardCollectibleTitle2: FC = () => {
  return (
    <CardTitle>
      <h1>MY COLLECTION</h1>
    </CardTitle>
  );
};

const CardTitle = styled.div`
  display: flex;
  justify-content: center;
  background-image: url(${ribbon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  padding: 15px;
  margin-top: 3vh;
  h1 {
    font-family: Montserrat;
    margin: 0;
  }

  @media screen and (max-width: ${ScreenSize.tablet}) {
    h1 {
      font-size: 18px;
    }
    padding: 10px;
  }
`;
