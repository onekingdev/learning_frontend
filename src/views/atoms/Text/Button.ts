import styled from 'styled-components';
import {BasicColor} from '../../Color';
import {Typography} from './typography';

type ButtonProps = {
  isDark?: boolean;
};

export const Button = styled.span<ButtonProps>`
  font-family: ${Typography.primary};
  color: ${props => (props.isDark ? BasicColor.black : BasicColor.white)};
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.75px;
  text-transform: capitalize;
  margin: 0;
`;
