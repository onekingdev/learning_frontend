import styled from         'styled-components';
import background from     'views/assets/colored-shapes-bg.svg';
import { ScreenSize } from 'constants/screenSize';

export const Wrapper = styled.div`
  background-image:  url(${background});
  background-repeat: no-repeat;
  background-size:   cover;
  height:            100vh;
`;
export const CardCollectibleContainer = styled.div`
  display:           flex;
  flex-direction:    column;
  justify-content:   center;
  margin:            0 auto;
  @media screen and (min-width: ${ScreenSize.tablet}) {
    margin: 0;
  }
`;
