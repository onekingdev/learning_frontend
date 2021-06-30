import styled from 'styled-components';
import {BasicColor} from '../../Color';
import background from '../../assets/colored-shapes-bg.svg';
import {ScreenSize} from '../../screenSize';

export const Wrapper = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  position: absolute;
  width: 100%;
  z-index: -1;
`;
export const StudentHomeStyle = styled.div`
  width: 100%;
  height: 80vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media screen and (min-width: ${ScreenSize.tablet}) {
    justify-content: flex-start;
  }
`;
export const CharacterContainer = styled.div`
  width: 100%;
  height: 70vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;

  @media screen and (min-width: ${ScreenSize.tablet}) {
    align-items: center;
    margin-top: 50px;
    height: 80vh;
  }

  @media screen and (min-width: ${ScreenSize.desktop}) {
    width: 85%;
    margin-top: 0;
    grid-template-columns: 300px 1fr 400px;
    justify-items: flex-end;
  }
`;

export const RankContainer = styled.div`
  display: none;
  @media screen and (min-width: ${ScreenSize.desktop}) {
    display: initial;
  }
`;
export const BackgroundHome = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  align-items: flex-end;
  position: absolute;
  z-index: -1;
  bottom: 0;

  @media screen and (min-width: ${ScreenSize.desktop}) {
    height: 80vh;
  }
`;
export const MyProgressContainer = styled.div`
  display: none;
  @media screen and (min-width: ${ScreenSize.desktop}) {
    display: flex;
  }
`;
export const BackgroundHomeFloor = styled.div`
  width: 100%;
  height: 50%;
  position: absolute;
  bottom: 0;
  background-color: ${BasicColor.brown};
  z-index: -10;
  display: ${window.location.pathname === '/home' ? 'static' : 'none'};
  @media screen and (min-width: ${ScreenSize.tablet}) {
    height: 35%;
  }
  @media screen and (min-width: ${ScreenSize.desktop}) {
    width: 90%;
    height: 30%;
  }
`;
