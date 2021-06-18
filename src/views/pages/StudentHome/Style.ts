import styled from 'styled-components';
import {ScreenSize} from '../../screenSize';

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
