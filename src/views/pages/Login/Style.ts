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

export const Greet = styled.div``;

export const MobileWelcome = styled.div`
  padding: 4rem 1rem 2rem 1rem;
  text-align: center;
  @media (min-width: ${ScreenSize.tablet}) {
    display: none;
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
    bottom: 2rem;
    left: calc(50vw + 3rem);
  }
`;

export const Illustrations = styled.div`
  display: none;
  @media (min-width: ${ScreenSize.tablet}) {
    display: unset;
  }
`;

export const ClassroomIlustration = styled.img`
  @media (min-width: ${ScreenSize.tablet}) {
    width: 55%;
    position: absolute;
    bottom: 2rem;
    left: 3rem;
  }
  @media (min-width: ${ScreenSize.desktop}) {
    display: none;
  }
`;

export const GreetingIlustration = styled.img`
  display: none;
  @media (min-width: ${ScreenSize.desktop}) {
    display: unset;
    width: 35%;
    position: absolute;
    bottom: 2rem;
    left: 8rem;
  }
`;

export const Logo = styled.img`
  @media (min-width: ${ScreenSize.tablet}) {
    width: 12rem;
    position: absolute;
    top: 2rem;
    left: 3rem;
  }
  @media (min-width: ${ScreenSize.desktop}) {
    width: 15rem;
    position: absolute;
    top: 3rem;
    left: 8rem;
  }
`;

export const LoginWrapper = styled.div`
  @media (min-width: ${ScreenSize.desktop}) {
    width: 60%;
    min-width: 550px;
    margin-top: 15rem;
    margin-left: 3rem;
  }
`;
