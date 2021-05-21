import {FC} from 'react';
import styled from 'styled-components';
import {BasicColor, shadeColor} from '../Color';
import {Button as ButtonText} from '../atoms/Text/Button';

export enum ButtonColors {
  login = BasicColor.greenSoft,
}

type ButtonProps = {
  value: string;
  color?: ButtonColors;
};

export const Button: FC<ButtonProps> = ({value, color}) => {
  return (
    <StyledButton bgColor={color}>
      <ButtonText>{value}</ButtonText>
    </StyledButton>
  );
};

type StyledButtonProps = {
  bgColor?: ButtonColors;
};

const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${props => props.bgColor || BasicColor.greenSoft};
  color: ${BasicColor.white};
  padding: 18px 32px;
  height: 49px;
  border-radius: 20px;
  text-align: center;
  border: none;
  &:hover {
    background: ${p => shadeColor(p.color || BasicColor.greenSoft, 10)}
      radial-gradient(circle, transparent 1%, ${p => p.color} 1%) center/15000%;
  }
  &:active {
    background-color: ${p => shadeColor(p.color || BasicColor.greenSoft, 15)};
    background-size: 100%;
    transition: background 0s;
  }
`;
