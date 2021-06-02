import styled from 'styled-components';
import {BasicColor} from '../../Color';
import backpackBase from '../../assets/backpack-base.png';

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
`;

export const BackpackHook = styled.img`
  width: 150px;
  height: 60px;
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
`;

export const BackpackLogoContainer = styled.div`
  width: 100px;
  height: 35px;
  border-radius: 15px;
  background-color: ${BasicColor.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BackpackLogo = styled.img`
  width: 90%;
`;

export const BackpackButtonsContainer = styled.div`
  width: 100%;
  display: flex;
`;
