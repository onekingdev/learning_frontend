import {FC, useEffect} from 'react';
import {BasicColor, shadeColor} from '../Color';
import styled from 'styled-components';

type ButtonProps = {
  value: string;
  onClick?: () => void;
  color?: BasicColor.orange | BasicColor.green | BasicColor.greenSoft;
};

export const Button: FC<ButtonProps> = ({
  value,
  onClick = () => {},
  color = BasicColor.green,
}) => {
  useEffect(() => {
    console.log(color, shadeColor(color, 5));
  }, []);
  return (
    <StyledButton color={color} onClick={onClick}>
      {value}
    </StyledButton>
  );
};

const StyledButton = styled.button<{
  color: BasicColor.orange | BasicColor.green | BasicColor.greenSoft;
}>`
  background-color: ${p => p.color};
  color: ${BasicColor.white};
  font-family: Montserrat;
  padding: 6px 20px;
  width: 215px;
  height: 49px;
  border-radius: 20px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  background-position: center;
  transition: background 800ms;
  border: none;
  &:hover {
    background: ${p => shadeColor(p.color, 10)}
      radial-gradient(circle, transparent 1%, ${p => p.color} 1%) center/15000%;
  }
  &:active {
    background-color: ${p => shadeColor(p.color, 15)};
    background-size: 100%;
    transition: background 0s;
  }
`;
