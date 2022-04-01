import styled         from 'styled-components';
import { ScreenSize } from 'constants/screenSize';
import { BasicColor } from 'views/Color';
import { Typography } from './typography';

type AnswerProps = {
  isDark?: boolean;
};

export const Answer = styled.h3<AnswerProps>`
  font-family: ${Typography.primary};
  color: ${props => (props.isDark ? BasicColor.black : BasicColor.white)};
  font-size: 28px;
  font-weight: normal;
  margin: 0;
  @media (max-width: ${ScreenSize.phone}) {
    font-size: 16px;
    line-height: 34px;
  }
`;
