import {FC} from 'react';
import {LessonProgress} from '../../molecules/LessonProgress/LessonProgress';

export const Testing: FC = () => {
  return (
    <div>
      <LessonProgress
        topic={'Math'}
        currentQuestion={3}
        totalQuestions={10}
      ></LessonProgress>
    </div>
  );
};
