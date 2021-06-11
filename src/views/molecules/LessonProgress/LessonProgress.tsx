import {FC} from 'react';
import styled from 'styled-components';
import {LessonProgressTitle} from './LessonProgressTitle';
import {LessonProgressBar} from './LessonProgressBar';
import {ScreenSize} from '../../screenSize';
import {BasicColor} from '../../Color';

type LessonProgressProps = {
  topic: string;
  currentQuestion: number;
  totalQuestions: number;
  finished?: boolean;
};

type ProgressBar = {
  color: BasicColor;
};

export const LessonProgress: FC<LessonProgressProps> = ({
  topic,
  currentQuestion,
  totalQuestions,
  finished,
}) => {
  // !! Added bar array builder function
  const buildBars = (totalQuestions: number) => {
    const bars = [];
    // TODO add logic inside this loop to build a
    // TODO proper progress bar
    for (let i = 0; i < totalQuestions; i++) {
      bars.push({color: BasicColor.green});
    }
    return bars;
  };

  return (
    <StyledLessonProgressWrapper>
      <LessonProgressTitle
        topic={topic}
        currentQuestion={currentQuestion}
        totalQuestions={totalQuestions}
        finished={finished}
      ></LessonProgressTitle>
      {/* // !! Changed hardcoded bars for a map */}
      <StyledLessonProgressBarWrapper>
        {buildBars(totalQuestions).map((bar: ProgressBar) => (
          <LessonProgressBar bgColor={bar.color}></LessonProgressBar>
        ))}
      </StyledLessonProgressBarWrapper>
    </StyledLessonProgressWrapper>
  );
};

const StyledLessonProgressWrapper = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: ${ScreenSize.phone}) {
    max-width: 1366px;
  }
`;

const StyledLessonProgressBarWrapper = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  grid-gap: 1px;
  @media screen and (min-width: ${ScreenSize.phone}) {
    height: 57px;
  }
`;
