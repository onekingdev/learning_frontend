import styled from 'styled-components';
import {BasicColor, ButtonColor, shadeColor} from '../Color';

type ButtonWrapperProps = {
  bgColor?: ButtonColor;
  onClick?: () => void;
};

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  background-color: ${props => props.bgColor || BasicColor.greenSoft};
  color: ${BasicColor.white};
  padding: 18px 32px;
  height: 49px;
  border-radius: 20px;
  width: 100%;
  text-align: center;
  border: none;
  &:hover {
    background: ${p => shadeColor(p.bgColor || BasicColor.greenSoft, 10)}
      radial-gradient(circle, transparent 1%, ${p => p.bgColor} 1%)
      center/15000%;
  }
  &:active {
    background-color: ${p => shadeColor(p.bgColor || BasicColor.greenSoft, 15)};
    background-size: 100%;
  }
`;
