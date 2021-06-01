import styled from 'styled-components';
import {ScreenSize} from '../../screenSize';

export const GamesMenuContainer = styled.div`
  width: 95%;
  margin: 10px auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  grid-gap: 15px;

  @media screen and (min-width: ${ScreenSize.tablet}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: ${ScreenSize.desktop}) {
    grid-template-columns: repeat(6, 1fr);
  }
`;
