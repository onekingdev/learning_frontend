import styled from 'styled-components';
import background from '../../assets/colored-shapes-bg.svg';
import {ScreenSize} from '../../screenSize';

export const CardCollectibleContainer = styled.div`
  display: grid;
  grid-template-rows: 60px 4fr 5fr;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  @media screen and (min-width: ${ScreenSize.tablet}) {
    grid-template-rows: 85px 200px 1fr;
  }
  @media screen and (min-width: ${ScreenSize.desktop}) {
    grid-template-rows: 110px 250px 1fr;
  }
`;
