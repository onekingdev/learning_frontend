import styled from 'styled-components';
import {BasicColor} from '../../Color';
import {ScreenSize} from '../../screenSize';
import {Typography} from './typography';

type TitleProps = {
  isDark?: boolean;
};

export const Title = styled.h2<TitleProps>`
  font-family: ${Typography.secondary};
  color: ${props => (props.isDark ? BasicColor.black : BasicColor.white)};
  font-weight: bold;
  font-size: 40px;
  line-height: 50px;
  letter-spacing: 0.25px;
  margin: 0;
  @media (max-width: ${ScreenSize.phone}) {
    font-size: 24px;
    line-height: 20px;
  }
`;
