import {FC} from 'react';
import styled from 'styled-components';
import {LessonProgressTitle} from './LessonProgressTitle';
import {LessonProgressBar} from './LessonProgressBar';
import {ScreenSize} from '../../screenSize';

type LessonProgressProps = {
  topic: string;
  currentQuestion: number;
  totalQuestions: number;
  finished?: boolean;
};

export const LessonProgress: FC<LessonProgressProps> = ({
  topic,
  currentQuestion,
  totalQuestions,
}) => {
  return (
    <StyledLessonProgressWrapper>
      <LessonProgressTitle
        topic={topic}
        currentQuestion={currentQuestion}
        totalQuestions={totalQuestions}
      ></LessonProgressTitle>
      <StyledLessonProgressBarWrapper>
        <LessonProgressBar bgColor={'blue'}></LessonProgressBar>
        <LessonProgressBar bgColor={'blue'}></LessonProgressBar>
        <LessonProgressBar bgColor={'blue'}></LessonProgressBar>
        <LessonProgressBar bgColor={'blue'}></LessonProgressBar>
        <LessonProgressBar bgColor={'blue'}></LessonProgressBar>
      </StyledLessonProgressBarWrapper>
    </StyledLessonProgressWrapper>
  );
};

const StyledLessonProgressWrapper = styled.div`
  width: 100%;
  @media screen and (min-width: ${ScreenSize.phone}) {
    width: 1366px;
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
