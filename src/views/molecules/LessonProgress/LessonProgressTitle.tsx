import {FC} from 'react';
import styled from 'styled-components';
import {BasicColor} from '../../Color';
import {LevelUp} from '../../atoms/Text/LevelUp';
import {ScreenSize} from '../../screenSize';

type LessonProgressTitleProps = {
  topic: string;
  currentQuestion: number;
  totalQuestions: number;
  finished?: boolean;
};

export const LessonProgressTitle: FC<LessonProgressTitleProps> = ({
  topic,
  currentQuestion,
  totalQuestions,
  finished,
}) => {
  const questionText = finished
    ? 'Good job!'
    : 'Question ' + currentQuestion + ' of ' + totalQuestions;
  return (
    <LessonProgressTitleWrapper>
      <LessonProgressTopic>
        <LevelUp>{topic}</LevelUp>
      </LessonProgressTopic>
      <TriangleRight></TriangleRight>
      <LessonProgressQuestion>
        <LevelUp>{questionText}</LevelUp>
      </LessonProgressQuestion>
    </LessonProgressTitleWrapper>
  );
};

const TriangleRight = styled.div`
  width: 0;
  height: 0;
  border-top: 35px solid transparent;
  border-left: 35px solid ${BasicColor.blue};
  border-bottom: 35px solid transparent;
  @media (max-width: ${ScreenSize.phone}) {
    border-top: 17px solid transparent;
    border-left: 17px solid ${BasicColor.blue};
    border-bottom: 17px solid transparent;
  }
`;

const LessonProgressTopic = styled.div`
  height: 100%;
  display: grid;
  background-color: ${BasicColor.blue};
  align-content: center;
  padding-left: 45px;
  @media (max-width: ${ScreenSize.phone}) {
    padding-left: 14px;
  }
`;

const LessonProgressQuestion = styled.div`
  height: 100%;
  display: grid;
  align-content: center;
  justify-self: end;
  padding-right: 45px;
  @media (max-width: ${ScreenSize.phone}) {
    padding-right: 14px;
  }
`;

const LessonProgressTitleWrapper = styled.div`
  width: 100%;
  height: 70px;
  display: grid;
  grid-template-columns: 4fr auto 6fr;
  align-content: center;
  background-color: ${BasicColor.aqua};
  border-bottom: 1px solid white;
  @media (max-width: ${ScreenSize.phone}) {
    height: 34px;
  }
`;
