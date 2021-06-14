import styled from 'styled-components';
import background from '../../assets/colored-shapes-bg.svg';
import {ScreenSize} from '../../screenSize';

export const Wrapper = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  display: grid;
  grid-template-rows: repeat(4, 1fr) 3rem;
`;

export const Logo = styled.img`
  width: 15rem;
  padding-left: 1rem;
  padding-top: 1.2rem;
  @media (min-width: ${ScreenSize.tablet}) {
    width: 35rem;
    padding-top: 6rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: ${ScreenSize.desktop}) {
    width: 15rem;
  }
`;

export const Illustration = styled.img`
  width: 95vw;
  display: block;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: ${ScreenSize.desktop}) {
    width: 32rem;
  }
`;

export const Body = styled.div`
  margin-top: 1.2rem;
  padding: 2rem;
  text-align: center;
  @media (min-width: ${ScreenSize.tablet}) {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
  @media (min-width: ${ScreenSize.desktop}) {
    margin-top: 2rem;
    margin-bottom: 2rem;
    margin-top: 1rem;
  }
`;

export const Actions = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  width: 215px;
  margin-top: 3rem;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: ${ScreenSize.tablet}) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 114px;
    width: 534px;
    margin-top: 5rem;
  }
  @media (min-width: ${ScreenSize.tablet}) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 114px;
    width: 534px;
    margin-top: 3rem;
  }
`;

export const Legal = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 85vw;
  margin-left: 7.5vw;
`;

export const Description = styled.div`
  margin-top: 1.2rem;
`;
