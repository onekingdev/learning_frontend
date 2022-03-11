import styled from 'styled-components';
import background from '../../assets/colored-shapes-bg.svg';
import {ScreenSize} from '../../screenSize';

export const ProgressBackground = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;

export const ProgressStyle = styled.div`
  width: 100%;
  display: flex;
  grid-gap: 20px;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 80px;
  @media screen and (min-width: ${ScreenSize.tablet}) {
    flex-direction: row-reverse;
    justify-content: center;
    margin-top: 70px;
    grid-gap: 40px;
    align-items: flex-end;
  }
  @media screen and (min-width: ${ScreenSize.desktop}) {
    margin: 10px auto;
  }
`;
export const ProgressTitle = styled.div`
  width: 50%;
  margin: 20px auto;

  @media screen and (min-width: ${ScreenSize.tablet}) {
    width: 30%;
  }
  @media screen and (min-width: ${ScreenSize.desktop}) {
    margin-top: 5px;
    margin-bottom: 15px;
  }
`;

export const ProgressCharacter = styled.img`
  display: none;

  @media screen and (min-width: ${ScreenSize.desktop}) {
    display: initial;
    width: 194px;
  }
`;
