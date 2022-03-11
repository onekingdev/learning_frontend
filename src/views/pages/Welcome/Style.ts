import styled from 'styled-components';
import background from '../../assets/colored-shapes-bg.svg';
import {BasicColor} from '../../Color';
import {ScreenSize} from '../../screenSize';

export const Wrapper = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr repeat(3, 2fr) 3rem;
`;

export const Logo = styled.img`
  width: 15rem;
  padding-left: 1rem;
  padding-top: 1.2rem;
  @media (min-width: ${ScreenSize.tablet}) {
    width: 35rem;
    padding-top: 2rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: ${ScreenSize.desktop}) {
    width: 14rem;
  }
`;

export const Illustration = styled.img`
  width: 95vw;
  display: block;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: ${ScreenSize.desktop}) {
    width: 29rem;
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
    margin-top: 0.5rem;
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
    margin-top: 1rem;
  }
`;

export const Legal = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 85vw;
  margin-left: 7.5vw;
  margin-top: 0.5rem;
`;

export const Description = styled.div`
  margin-top: 1rem;
`;
export const ModalContent = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  background-color: ${BasicColor.background40};
`;
export const ModalStyles = styled.div`
  width: 80%;
  height: 270px;
  margin: 0 auto;
  background-color: ${BasicColor.blue};
  border-radius: 40px;
  @media screen and (min-width: ${ScreenSize.tablet}) {
    height: 290px;
  }
  @media screen and (min-width: ${ScreenSize.desktop}) {
    width: 500px;
  }
`;
export const ModalItemsContainer = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  grid-gap: 15px;
  justify-content: center;
  align-content: center;
  text-align: center;
  font-size: 14px;
`;
