import styled from 'styled-components';
import {ScreenSize} from '../../screenSize';
import {BasicColor} from '../../Color';
import {Typography} from './typography';

type BodyProps = {
  isDark?: boolean;
};

export const Body = styled.h3<BodyProps>`
  font-family: ${Typography.primary};
  color: ${props => (props.isDark ? BasicColor.black : BasicColor.white)};
  font-size: 24px;
  line-height: 29px;
  font-style: normal;
  font-weight: 600;
  margin: 0;
  @media (max-width: ${ScreenSize.phone}) {
    font-size: 16px;
    line-height: 20px;
  }
`;
