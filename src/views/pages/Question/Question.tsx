import {FC} from 'react';
import styled from 'styled-components';
import {Lesson} from '../../atoms/Text/Lesson';
import {BasicColor, ButtonColor} from '../../Color';
import {Button} from '../../molecules/Button';
import {LessonProgress} from '../../molecules/LessonProgress/LessonProgress';
import {MobileMenu} from '../../organisms/Menu/MobileMenu';
import {
  Answers,
  AnswerWrapper,
  BlackBoard,
  Container,
  Options,
  Option,
  Submit,
  Wrapper,
} from './Style';
import apple from '../../assets/apple.svg';

export const Question: FC = () => {
  // TODO answers and options must come from DB
  // TODO and the type should be much more roboust
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
          <Options>
            {options.map((option, index) => (
              <Option>
                <img src={option.image} alt="correct answer" />
                <Lesson>{++index}</Lesson>
              </Option>
            ))}
          </Options>
        </BlackBoard>
        <AnswerWrapper>
          <Lesson>What is the answer?</Lesson>
          <Answers>
            {answers.map(answer => (
              <Button
                value={answer.value}
                color={ButtonColor.google}
                darkText={true}
              />
            ))}
          </Answers>
          <Submit>
            <Button value={'validate'} />
          </Submit>
        </AnswerWrapper>
      </Container>
      <MobileMenu />
    </Wrapper>
  );
};
