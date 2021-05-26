import styled from 'styled-components';
import {BasicColor} from '../../Color';
import locker from '../../assets/locker.png';
import {ScreenSize} from '../../screenSize';

export const StudentHomeStyle = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media screen and (min-width: ${ScreenSize.tablet}) {
    justify-content: flex-start;
  }
`;
export const CharacterContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
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

export const BackgroundLocker = styled.div`
  width: 100%;
  height: 310px;
  background-image: url(${locker});
  background-position: center top;
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  top: -30px;
  @media screen and (min-width: ${ScreenSize.tablet}) {
    top: 20px;
    height: 400px;
    background-position: left center;
  }
  @media screen and (min-width: ${ScreenSize.desktop}) {
    background-size: cover;
    left: 20%;
    width: 500px;
    height: 310px;
    top: 15%;
  }
`;
export const BackgroundHomeFloor = styled.div`
  width: 100%;
  height: 80%;
  background-color: ${BasicColor.brown};

  @media screen and (min-width: ${ScreenSize.tablet}) {
    height: 50%;
  }
`;
