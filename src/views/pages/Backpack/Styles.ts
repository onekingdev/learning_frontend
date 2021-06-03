import styled from 'styled-components';
import {BasicColor} from '../../Color';
import backpackBase from '../../assets/backpack-base.png';
import {ScreenSize} from '../../screenSize';

export const BackpackContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: flex-end;
`;
export const BackPackStyles = styled.div`
  width: 100%;
  height: 80%;
  position: relative;
`;
export const HookBracket = styled.div`
  width: 100%;
  height: 130px;
  background-color: ${BasicColor.brown};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${ScreenSize.tablet}) {
    height: 200px;
  }
`;
export const BackpackDecorationLeft = styled.img`
  display: none;
  @media screen and (min-width: ${ScreenSize.desktop}) {
    width: 215px;
    height: 380px;
    display: initial;
    position: absolute;
    left: 0;
    top: 70px;
  }
`;
export const BackpackDecorationRight = styled.img`
  display: none;
  @media screen and (min-width: ${ScreenSize.desktop}) {
    width: 215px;
    height: 380px;
    display: initial;
    position: absolute;
    right: 0;
    top: 70px;
  }
`;
export const BackpackHook = styled.img`
  width: 150px;
  height: 60px;

  @media screen and (min-width: ${ScreenSize.tablet}) {
    width: 170px;
    height: 70px;
  }
`;
export const BackpackBase = styled.div`
  width: 100%;
  height: 325px;
  background-image: url(${backpackBase});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0 auto;
  position: absolute;
  top: 45px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: ${ScreenSize.tablet}) {
    top: 80px;
    height: 400px;
  }
`;

export const BackpackLogoContainer = styled.div`
  width: 100px;
  height: 35px;
  border-radius: 15px;
  background-color: ${BasicColor.white};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  @media screen and (min-width: ${ScreenSize.tablet}) {
    width: 150px;
    height: 50px;
    margin-bottom: 40px;
  }
`;

export const BackpackLogo = styled.img`
  width: 90%;
`;

export const BackpackButtonsContainer = styled.div`
  width: 90%;
  height: 150px;
  display: flex;
  margin-left: 20px;
  justify-content: center;
  align-items: flex-start;
  padding-bottom: 20px;
  @media screen and (min-width: ${ScreenSize.tablet}) {
    height: 200px;
  }
`;

export const AvatarButtonContainer = styled.div`
  transform: rotate(-25deg);
`;
export const ControlButtonContainer = styled.div`
  transform: rotate(-45deg);
`;

export const BackpackFace = styled.img`
  width: 270px;
  position: absolute;
  bottom: 0;
  @media screen and (min-width: ${ScreenSize.tablet}) {
    width: 340px;
    bottom: -10px;
  }
`;
