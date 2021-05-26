import {FC} from 'react';
import styled from 'styled-components';
import {Lesson} from '../../atoms/Text/Lesson';
import {BasicColor, ButtonColor} from '../../Color';
import {Button} from '../../molecules/Button';
import {LessonProgress} from '../../molecules/LessonProgress/LessonProgress';
import {MobileMenu} from '../../organisms/Menu/MobileMenu';
import {Wrapper} from './Style';
import apple from '../../assets/apple.svg';

export const Question: FC = () => {
  return (
    <Wrapper>
      {/* <LessonProgress
        bgColorTopic={BasicColor.blue}
        currentQuestion={1}
        topic={'Math'}
        totalQuestions={10}
        width={20}
      /> */}
      <Container>
        <BlackBoard>
          <Lesson>Which of these is not an apple?</Lesson>
          <img src={apple} alt="correct answer" />
          <img src={apple} alt="correct answer" />
          <img src={apple} alt="correct answer" />
          <img src={apple} alt="correct answer" />
        </BlackBoard>
        <AnswerWrapper>
          <Lesson>What is the answer?</Lesson>
          <AnswersWrapper>
            <Button
              value={'apple'}
              color={ButtonColor.google}
              darkText={true}
            />
            <Button
              value={'apple'}
              color={ButtonColor.google}
              darkText={true}
            />
            <Button
              value={'apple'}
              color={ButtonColor.google}
              darkText={true}
            />
            <Button
              value={'apple'}
              color={ButtonColor.google}
              darkText={true}
            />
          </AnswersWrapper>
          <Button value={'validate'} />
        </AnswerWrapper>
      </Container>
      <MobileMenu />
    </Wrapper>
  );
};

const BlackBoard = styled.div`
  background-color: #13705f;
  border: 7px solid #5c2100;
  height: 25vh;
`;

const AnswerWrapper = styled.div`
  background-color: #3f3f3f;
  height: 25vh;
`;

const Container = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: 1fr;
`;

const AnswersWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
