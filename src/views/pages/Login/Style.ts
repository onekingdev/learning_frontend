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

export const DesktopWelcome = styled.div`
  display: none;
  @media (min-width: ${ScreenSize.desktop}) {
    display: block;
    margin-bottom: 4rem;
    text-align: center;
  }
`;

export const Card = styled.div`
  background-color: ${BasicColor.blue};
  border-radius: 32px 32px 0px 0px;
  @media (min-width: ${ScreenSize.tablet}) {
    width: 512px;
    border-radius: 32px;
    padding: 1rem;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  @media (min-width: ${ScreenSize.desktop}) {
    all: unset;
    background-color: ${BasicColor.blue};
  }
`;

export const Legal = styled.div`
  display: none;
  @media (min-width: ${ScreenSize.desktop}) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    position: absolute;
    bottom: 1rem;
    left: calc(50vw + 3rem);
  }
`;

export const LoginWrapper = styled.div`
  @media (min-width: ${ScreenSize.desktop}) {
    width: 60%;
    min-width: 550px;
    margin-top: 8rem;
    margin-left: 3rem;
  }
`;
