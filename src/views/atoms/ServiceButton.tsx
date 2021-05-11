import {FC} from 'react';
import styled from 'styled-components';
import {BasicColor, shadeColor} from '../Color';

type ServiceButtonProps = {
  value: string;
  icon: string;
  onClick: () => void;
};

export const ServiceButton: FC<ServiceButtonProps> = ({
  value,
  onClick,
  icon,
}) => {
  return (
    <StyledServiceButton icon={icon} onClick={onClick}>
      {value}
    </StyledServiceButton>
  );
};

const StyledServiceButton = styled.button<{icon: string}>`
  background-color: ${BasicColor.white};
  color: ${BasicColor.black};
  font-family: Montserrat;
  padding: 6px 20px;
  width: 262px;
  height: 49px;
  border-radius: 20px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  background-position: center;
  transition: background 800ms;
  border: none;
  &:hover {
    background: ${shadeColor(BasicColor.white, -10)}
      radial-gradient(circle, transparent 1%, ${BasicColor.white} 1%)
      center/15000%;
  }
  &:active {
    background-color: ${shadeColor(BasicColor.white, -5)};
    background-size: 100%;
    transition: background 0s;
  }
  &::before {
    content: '';
    display: block;
    background: url(${p => p.icon}) no-repeat;
    width: 20px;
    height: 20px;
    float: left;
    margin: 0 6px 0 0;
  }
`;
