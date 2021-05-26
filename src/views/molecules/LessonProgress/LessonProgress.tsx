import {FC} from 'react';
import styled from 'styled-components';
import {LessonProgressTitle} from './LessonProgressTitle';
import {LessonProgressBar} from './LessonProgressBar';

type LessonProgressProps = {
  topic: string;
  current_question: number;
  total_questions: number;
  bgColorTopic: string;
  width: number;
};

export const LessonProgress: FC<LessonProgressProps> = ({
  topic,
  current_question,
  total_questions,
  bgColorTopic,
  width,
}) => {
  return (
    <LessonProgressWrapper>
      <LessonProgressTitle
        topic={topic}
        current_question={current_question}
        total_questions={total_questions}
        bgColor={bgColorTopic}
        width={width}
      ></LessonProgressTitle>
      <LessonProgressBar
        width={width}
        bgColor={bgColorTopic}
      ></LessonProgressBar>
    </LessonProgressWrapper>
  );
};

const LessonProgressWrapper = styled.div`
  width: 500px;
`;
