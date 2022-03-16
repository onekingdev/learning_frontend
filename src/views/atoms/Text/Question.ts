import styled from 'styled-components';
import {ScreenSize} from '../../screenSize';
import {BasicColor} from '../../Color';
import {Typography} from './typography';

type BodyProps = {
  isDark?: boolean;
};

export const Question = styled.h3<BodyProps>`
  font-family: ${Typography.primary};
  color: ${props => (props.isDark ? BasicColor.black : BasicColor.white)};
  font-size: 28px;
  line-height: 36px;
  font-style: normal;
  font-weight: 700;
  margin: 0;
  @media (max-width: ${ScreenSize.phone}) {
    font-size: 16px;
    line-height: 20px;
  }
`;
