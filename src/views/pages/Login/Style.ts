import styled from 'styled-components';
import {BasicColor} from '../../Color';
import background from '../../assets/colored-shapes-bg.svg';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 57% 43%;
  height: 100vh;
`;
export const LoginContainer = styled.div`
  background-color: ${BasicColor.blue};
`;

export const SocratesLogo = styled.img`
  width: 15rem;
  height: 15rem;
  margin-left: 25%;
`;

export const GreetingIllustration = styled.img`
  display: block;
  margin-left: 40%;
  width: 50%;
`;

export const LoginHeader = styled.div`
  padding-bottom: 1rem;
  text-align: center;
`;

export const Login = styled.div`
  padding: 10rem 33% 0 4rem;
`;

export const GreetContainer = styled.div`
  background-image: url(${background});
`;

export const Actions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Services = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Legal = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-content: space-between;
  bottom: 5%;
`;
