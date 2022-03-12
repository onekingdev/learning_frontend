import styled from 'styled-components';
import background from '../../../assets/colored-shapes-bg.svg';
import {ScreenSize} from '../../../screenSize';

export const Wrapper = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;
export const CardCollectibleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  @media screen and (min-width: ${ScreenSize.tablet}) {
    margin: 0;
  }
`;
