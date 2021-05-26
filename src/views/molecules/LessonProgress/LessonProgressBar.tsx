import {FC} from 'react';
import styled from 'styled-components';
import {ScreenSize} from '../../screenSize';

type LessonProgressBarProps = {
  bgColor: string;
  finished?: boolean;
};

export const LessonProgressBar: FC<LessonProgressBarProps> = ({bgColor}) => {
  return <StyledLessonProgressBar bgColor={bgColor}></StyledLessonProgressBar>;
};

const StyledLessonProgressBar = styled.div<{bgColor: string}>`
  width: 100%;
  height: 100%;
  background-color: ${props => props.bgColor};
`;
