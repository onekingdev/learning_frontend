import styled from 'styled-components';
import {ScreenSize} from '../../screenSize';
import background from '../../assets/colored-shapes-bg.svg';

export const Container = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
`;
export const IslandGreen = styled.img`
    position: absolute;
    left: 0;
    top: 0;
`
export const IslandYellow = styled.img`
    position: absolute;
    right: 0;
    bottom: 0;
`
export const LogoTitle = styled.img`
    position: absolute;
    left: 300px;
    top: 90px
`
export const Planet = styled.img`
    position: absolute;
    top: 152px;
    left: 217px;
`
export const Mess = styled.img`
    position: absolute;
    top: 413px;
    left: 69px;
`

export const ColorPanel = styled.img`
    position: absolute;
    top: 708px;
    left: 132px;
`

export const Triangle = styled.img`
    position: absolute;
    top: 175px;
    right: 192px;
`

export const Pencil = styled.img`
    position: absolute;
    top: 471px;
    right: 277px;
`

export const GateWay = styled.img`
    position: absolute;
    top: 600px;
    right: 90px;
`
export const NoteBook = styled.img`
    position: absolute;
    top: 600px;
    right: 90px;
`

export const Center = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
