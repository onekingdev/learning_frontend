import {FC} from 'react';
import styled from 'styled-components';
import {ScreenSize} from '../screenSize';

type LessonProgressBarProps = {
  bgColor: string;
  width: number;
};

export const LessonProgressBar: FC<LessonProgressBarProps> = ({
  bgColor,
  width,
}) => {
  return (
    <StyledLessonProgressBarWrapper>
      <StyledLessonProgressBar
        width={width}
        bgColor={bgColor}
      ></StyledLessonProgressBar>
      <StyledLessonProgressBar
        width={width}
        bgColor={bgColor}
      ></StyledLessonProgressBar>
      <StyledLessonProgressBar
        width={width}
        bgColor={bgColor}
      ></StyledLessonProgressBar>
      <StyledLessonProgressBar
        width={width}
        bgColor={bgColor}
      ></StyledLessonProgressBar>
      <StyledLessonProgressBar
        width={width}
        bgColor={bgColor}
      ></StyledLessonProgressBar>
    </StyledLessonProgressBarWrapper>
  );
};

const StyledLessonProgressBarWrapper = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  @media screen and (min-width: ${ScreenSize.phone}) {
    height: 57px;
  }
`;

const StyledLessonProgressBar = styled.div<{width: number; bgColor: string}>`
  width: ${props => props.width}px;
  height: 100%;
  background-color: ${props => props.bgColor};
  border-left: 1px solid white;
  border-right: 1px solid white;
`;
