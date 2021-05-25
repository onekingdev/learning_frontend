import styled from 'styled-components';
import {ScreenSize} from './../../screenSize';
import {BasicColor} from '../../Color';
import {Typography} from './typography';

type GeneralTextProps = {
  isDark?: boolean;
};

export const GeneralText = styled.span<GeneralTextProps>`
  font-family: ${Typography.primary};
  color: ${props => (props.isDark ? BasicColor.black : BasicColor.white)};
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  margin: 0;
  @media (max-width: ${ScreenSize.phone}) {
    font-size: 16px;
    line-height: 20px;
  }
`;
