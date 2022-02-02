import styled from 'styled-components';
import {ScreenSize} from '../../screenSize';
import background from '../../assets/colored-shapes-bg.svg';
import background_mobile from '../../assets/colored-shapes-bg.svg';

export const Container = styled.div`
    position: relative;
    width: 100vw;
    min-height: 100vh;
    @media screen and (max-width: ${ScreenSize.tablet}) {
        background: url(${background_mobile}), #FFFFFF;
        background-position-x: right;
    }
`;

export const IslandGreen = styled.img`
    position: absolute;
    left: 0;
    top: 0;
    @media screen and (max-width: ${ScreenSize.tablet}) {
        display:none
      }
    @media screen and (max-width: ${ScreenSize.desktop}) {
        right: 0;
    }
`;

export const IslandYellow = styled.img`
    position: absolute;
    right: 0;
    bottom: 0;
    @media screen and (max-width: ${ScreenSize.tablet}) {
        display:none
    }
`;

export const LogoTitle = styled.img`
    position: absolute;
    left: 300px;
    top: 90px
`;

export const Planet = styled.img`
    position: absolute;
    top: 152px;
    left: 217px;
    @media screen and (max-width: ${ScreenSize.tablet}) {
        display:none
    }
`;

export const Mess = styled.img`
    position: absolute;
    top: 413px;
    left: 69px;
    @media screen and (max-width: ${ScreenSize.tablet}) {
        display:none
    }
`;

export const ColorPanel = styled.img`
    position: absolute;
    top: 708px;
    left: 132px;
    @media screen and (max-width: ${ScreenSize.tablet}) {
        display:none
    }
`;

export const Triangle = styled.img`
    position: absolute;
    top: 175px;
    right: 192px;
    @media screen and (max-width: ${ScreenSize.tablet}) {
        display:none
    }
`;

export const Pencil = styled.img`
    position: absolute;
    top: 471px;
    right: 277px;
    @media screen and (max-width: ${ScreenSize.tablet}) {
        display:none
    }
`;

export const GateWay = styled.img`
  position: absolute;
  top: 600px;
  right: 90px;
  @media screen and (max-width: ${ScreenSize.tablet}) {
    display: none;
  }
  z-index: -1;
`;
export const NoteBook = styled.img`
  position: absolute;
  top: 870px;
  right: 196px;
  @media screen and (max-width: ${ScreenSize.tablet}) {
    display: none;
  }
  z-index: -1;
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
