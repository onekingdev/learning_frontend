import {FC} from 'react';
import {Lesson} from '../../atoms/Text/Lesson';
import {ButtonColor} from '../../Color';
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
  OptionWrapper,
  ProgressWrapper,
} from './Style';
import apple from '../../assets/apple.svg';
import {TopMenu} from '../../organisms/Menu/TopMenu';
import {StudentMenu} from '../../templates/StudentMenu';

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
      <StudentMenu>
        <ProgressWrapper>
          <LessonProgress
            currentQuestion={1}
            topic={'Math'}
            totalQuestions={10}
          />
        </ProgressWrapper>
        <Container id="container">
          <BlackBoard>
            <Lesson>Which of these is not an apple?</Lesson>
            <Options>
              {options.map((option, index) => (
                <OptionWrapper>
                  <Option src={option.image} alt="correct answer" />
                  <Lesson>{++index}</Lesson>
                </OptionWrapper>
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
      </StudentMenu>
    </Wrapper>
  );
};
