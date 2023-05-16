import styled from 'styled-components';
import {ScreenSize} from './../../screenSize';
import {BasicColor} from '../../Color';
import {Typography} from './typography';

type LevelUpProps = {
  isDark?: boolean;
};

export const LevelUp = styled.h5<LevelUpProps>`
  font-family: ${Typography.primary};
  color: ${props => (props.isDark ? BasicColor.black : BasicColor.white)};
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.75px;
  text-transform: capitalize;
  @media (max-width: ${ScreenSize.phone}) {
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.75px;
    text-transform: capitalize;
  }
`;
