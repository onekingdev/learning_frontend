import {FC, useEffect, useState} from 'react';
import styled from 'styled-components';
import {LessonProgressTitle} from './LessonProgressTitle';
import {LessonProgressBar} from './LessonProgressBar';
import {ScreenSize} from '../../screenSize';
import {BasicColor} from '../../Color';
import lightening from 'views/assets/lightning.svg';
import { LessonProgressLightening } from './LessonProgressLightening';

type LessonProgressProps = {
  topic: string;
  currentQuestion: number;
  totalQuestions: number;
  finished?: boolean;
  answerResult?: boolean[];
  combocount: number;
};

type ProgressBar = {
  color: BasicColor | null;
};

export const LessonProgress: FC<LessonProgressProps> = ({
  topic,
  currentQuestion,
  totalQuestions,
  finished,
  answerResult = [],
  combocount
}) => {
  // !! Added bar array builder function
  const buildBars = (totalQuestions: number, answerResult: boolean[]) => {
    const bars = [];
    // TODO add logic inside this loop to build a
    // TODO proper progress bar
    for (let i = 0; i < totalQuestions; i++) {
      if (answerResult[i] === true) bars.push({color: BasicColor.green});
      else if (answerResult[i] === false) bars.push({color: BasicColor.red});
      else bars.push({color: null});
    }
    return bars;
  };

  useEffect(() => {}, [currentQuestion]);

  return (
    <StyledLessonProgressWrapper>
      <LessonProgressTitle
        topic={topic}
        currentQuestion={currentQuestion}
        totalQuestions={totalQuestions}
        finished={finished}
      ></LessonProgressTitle>
      <StyledLessonProgressBarWrapper>
        {buildBars(totalQuestions, answerResult).map(
          (bar: ProgressBar, i: number) => (
            <LessonProgressBar bgColor={bar.color} key={i}></LessonProgressBar>
          )
        )}
        <div className='lightening' style={combocount?{}:{display: 'none'}}>
          <LessonProgressLightening combocount={combocount}/>
        </div>
      </StyledLessonProgressBarWrapper>
    </StyledLessonProgressWrapper>
  );
};

const StyledLessonProgressWrapper = styled.div`
  position: fixed;
  z-index: 100;
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
  position: relative;

  .lightening {
    display: flex;
    justify-content: space-between;
    position: absolute;
    right: 0;
  }
  @media screen and (min-width: ${ScreenSize.phone}) {
    height: 57px;
  }
`;
