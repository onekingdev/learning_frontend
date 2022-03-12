import styled from 'styled-components';
import {ScreenSize} from 'constants/screenSize';
import {BasicColor} from 'views/Color';
import {Typography} from './typography';

// Roboto:wght@100;300;400;500;700;900

type TextProps = {
  isDark?: boolean;
};

export const Header = styled.h1<TextProps>`
  font-family: ${Typography.primary};
  color: ${props => (props.isDark ? BasicColor.black : BasicColor.white)};
  font-weight: 700;
  font-size: 40px;
  @media (max-width: ${ScreenSize.phone}) {
    letter-spacing: 0.1px;
    line-height: 22px;
    letter-spacing: 0.1px;
  }
`;

export const Subheader = styled.h3<TextProps>`
  font-family: ${Typography.primary};
  color: ${props => (props.isDark ? BasicColor.black : BasicColor.white)};
  font-size: 24px;
  font-weight: 400;
  margin: 0;
  @media (max-width: ${ScreenSize.phone}) {
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.75px;
    text-transform: capitalize;
  }
`;

export const Title = styled.h2<TextProps>`
  font-family: ${Typography.secondary};
  color: ${props => (props.isDark ? BasicColor.black : BasicColor.white)};
  font-weight: bold;
  letter-spacing: 0.25px;
  margin: 0;
  font-size: 40px;
  font-weight: 500;

  @media (min-width: ${ScreenSize.desktop}) {
    font-size: 34px;
    line-height: 50px;
  }
`;

export const TypoIcon = styled.p`
  font-family: ${Typography.primary};
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: 1.5px;
  @media (max-width: ${ScreenSize.phone}) {
    font-size: 9px;
  }
`
// please add "Typo" prefix to all texts newly defined.
