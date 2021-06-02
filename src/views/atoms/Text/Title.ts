import styled from 'styled-components';
import {BasicColor} from '../../Color';
import {ScreenSize} from '../../screenSize';
import {Typography} from './typography';

type TitleProps = {
  isDark?: boolean;
};

export const Title = styled.h2<TitleProps>`
  font-family: ${Typography.primary};
  color: ${props => (props.isDark ? BasicColor.black : BasicColor.white)};
  font-weight: bold;
  letter-spacing: 0.25px;
  margin: 0;
  font-size: 24px;
  line-height: 20px;

  @media (min-width: ${ScreenSize.desktop}) {
    font-size: 40px;
    line-height: 50px;
  }
`;
