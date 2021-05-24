import styled from 'styled-components';
// import {BasicColor} from '../../Color';
import background from '../../assets/colored-shapes-bg.svg';
import {BasicColor} from '../../Color';
import {ScreenSize} from '../../screenSize';

export const Login = styled.div`
  background-image: url(${background});
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
`;

export const Greet = styled.div``;

export const MobileWelcome = styled.div`
  padding: 4rem 1rem 2rem 1rem;
  text-align: center;
  @media (min-width: ${ScreenSize.phone}) {
    display: none;
  }
`;

export const Card = styled.div`
  background-color: ${BasicColor.blue};
  border-radius: 32px 32px 0px 0px;
`;

export const Form = styled.div`
  padding: 2rem;
  width: 300px;
  margin: auto;
`;

export const Field = styled.div`
  margin-top: 11px;
  margin-bottom: 11px;
`;

export const Action = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const Actions = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-left: 3rem;
  margin-right: 3rem;
`;

export const Legal = styled.div``;
