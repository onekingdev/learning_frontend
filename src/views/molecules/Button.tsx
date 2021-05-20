import {FC} from 'react';
import styled from 'styled-components';
import {BasicColor, shadeColor} from '../Color';
import {Button as ButtonText} from '../atoms/Text/Button';

const enum ButtonColors {
  login = BasicColor.greenSoft,
}

type ButtonProps = {
  value: string;
  color?: ButtonColors;
};

export const Button: FC<ButtonProps> = ({value, color}) => {
  return (
    <StyledButton color={color}>
      <ButtonText>{value}</ButtonText>
    </StyledButton>
  );
};

const StyledButton = styled.button<{color?: ButtonColors}>`
  background-color: ${props => props.color || BasicColor.greenSoft};
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
