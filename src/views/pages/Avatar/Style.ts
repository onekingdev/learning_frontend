import styled from 'styled-components';
import background from '../../assets/colored-shapes-bg.svg';
import {ScreenSize} from '../../screenSize';

export const Wrapper = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;
export const AvatarContainer = styled.div`
  display: grid;
  @media screen and (min-width: ${ScreenSize.phone}) {
    width: auto;
    grid-template-rows: 186px auto;
  }
  @media screen and (min-width: ${ScreenSize.desktop}) {
    width: auto;
    grid-template-rows: 100px 1fr;
  }
`;
