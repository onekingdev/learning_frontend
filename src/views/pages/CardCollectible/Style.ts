import styled from 'styled-components';
import background from '../../assets/colored-shapes-bg.svg';
import {ScreenSize} from '../../screenSize';

export const Wrapper = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;
export const CardCollectibleContainer = styled.div`
  display: grid;
  width: 90%;
  margin: 0 auto;
  grid-template-rows: 60px 4fr 5fr;
  height: 100%;
  @media screen and (min-width: ${ScreenSize.tablet}) {
    grid-template-rows: 85px 200px 1fr;
  }
`;
