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
  const options = [
    {image: apple},
    {image: apple},
    {image: apple},
    {image: apple},
  ];
  const answers = [
    {value: 'apple'},
    {value: 'apple'},
    {value: 'apple'},
    {value: 'apple'},
  ];

  return (
    <Wrapper>
      <LessonProgress currentQuestion={1} topic={'Math'} totalQuestions={10} />
      <Container>
        <BlackBoard>
          <Lesson>Which of these is not an apple?</Lesson>
          {options.map(option => (
            <img src={option.image} alt="correct answer" />
          ))}
        </BlackBoard>
        <AnswerWrapper>
          <Lesson>What is the answer?</Lesson>
          <AnswersWrapper>
            {answers.map(answer => (
              <Button
                value={answer.value}
                color={ButtonColor.google}
                darkText={true}
              />
            ))}
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
