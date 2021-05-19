import styled from 'styled-components';
import {ScreenSize} from './../../screenSize';
import {BasicColor} from '../../Color';
import {Typography} from './typography';

type HeaderProps = {
  isDark?: boolean;
};

export const Header = styled.h1<HeaderProps>`
  font-family: ${Typography.primary};
  color: ${props => (props.isDark ? BasicColor.black : BasicColor.white)};
  font-weight: 800;
  font-size: 40px;
  line-height: 49px;
  @media (max-width: ${ScreenSize.phone}) {
    font-size: 24px;
    line-height: 22px;
    letter-spacing: 0.1px;
  }
`;