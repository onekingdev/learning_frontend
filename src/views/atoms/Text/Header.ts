import styled from 'styled-components';
import {BasicColor} from '../../Color';
import {Typography} from './typography';

type HeadProps = {
  isDark?: boolean;
};

export const Head = styled.h1<HeadProps>`
  font-family: ${Typography.primary};
  font-weight: 800;
  font-size: 40px;
  line-height: 49px;
  color: ${props => (props.isDark ? BasicColor.black : BasicColor.white)};
`;
