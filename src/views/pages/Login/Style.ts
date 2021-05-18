import styled from 'styled-components';
import {BasicColor} from '../../Color';
import background from '../../assets/colored-shapes-bg.svg';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background-image: url(${background});
  height: 100vh;
  @media (min-width: 768px) {
    height: 100vh;
    flex-direction: column;
    grid-template-columns: 55% 45%;
  }
`;

export const LoginContainer = styled.div`
  background-color: ${BasicColor.blue};
  @media (max-width: 768px) {
    border-top-left-radius: 32px;
    border-top-right-radius: 32px;
  }
`;

export const SocratesLogo = styled.img`
  display: none;
  @media (min-width: 768px) {
    width: 15rem;
    height: 15rem;
    margin-left: 25%;
    display: unset;
  }
`;

export const GreetingIllustration = styled.img`
  display: none;
  @media (min-width: 768px) {
    display: block;
    margin-left: 40%;
    width: 50%;
    display: unset;
  }
`;

export const LoginHeader = styled.div`
  text-align: center;
  padding-bottom: 2rem;
  display: none;
  @media (min-width: 768px) {
    display: unset;
  }
`;

export const LoginHeaderMobile = styled.div`
  text-align: center;
  visibility: visible;
  @media (min-width: 768px) {
    visibility: hidden;
  }
`;

export const Card = styled.div`
  padding: 1rem 2rem 0 2rem;
  @media (min-width: 768px) {
    padding-top: 10rem;
    width: 60%;
  }
`;

export const Actions = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 0 1fr;
  }
`;

export const Services = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const ServicesMobile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const Legal = styled.div`
  position: absolute;
  display: none;
  grid-template-columns: 1fr 1fr 1fr;
  align-content: space-between;
  bottom: 1%;
  text-align: center;
  @media (min-width: 768px) {
    display: grid;
  }
`;
