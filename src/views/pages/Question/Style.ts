import styled from 'styled-components';
import background from '../../assets/colored-shapes-bg.svg';
import {BasicColor} from '../../Color';
import {ScreenSize} from '../../screenSize';

export const Login = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
  @media (min-width: ${ScreenSize.desktop}) {
    display: grid;
    grid-template-rows: unset;
    grid-template-columns: 1fr 1fr;
  }
`;
