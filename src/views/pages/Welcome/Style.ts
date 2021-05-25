import styled from 'styled-components';
import background from '../../assets/colored-shapes-bg.svg';
// import {BasicColor} from '../../Color';
import {ScreenSize} from '../../screenSize';

export const Wrapper = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;

export const Logo = styled.img`
  width: 15rem;
  position: absolute;
  top: 1.2rem;
  left: 1rem;
`;

export const Legal = styled.div`
  display: none;
  @media (min-width: ${ScreenSize.desktop}) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    position: absolute;
    bottom: 2rem;
    left: calc(50vw + 3rem);
  }
`;
