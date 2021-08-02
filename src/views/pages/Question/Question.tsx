import {FC, useState} from 'react';
import {Lesson} from '../../atoms/Text/Lesson';
import {ButtonColor} from '../../Color';
import {Button} from '../../molecules/Button';
import {LessonProgress} from '../../molecules/LessonProgress/LessonProgress';
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
  TextOptionsList,
  TextOptionItem,
  AnswerForm,
} from './Style';
import apple from '../../assets/apple.svg';
import {FinishLesson} from '../../organisms/FinishLesson';
import {StudentMenu} from '../../templates/StudentMenu';
import {TextInput} from '../../atoms/Text/TextInput';

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

  const [answerType, setAnswerType] = useState('button');
  const [questioType, setQuestionType] = useState('image');

  const isLessonFinished = false;
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
        {isLessonFinished ? (
          <FinishLesson tokens={10} energy={1} />
        ) : (
          <Container id="container">
            <BlackBoard>
              <Lesson>Which of these is not an apple?</Lesson>
              {questioType === 'image' ? (
                <Options>
                  {options.map(option => (
                    <OptionWrapper>
                      <Option src={option.image} />
                    </OptionWrapper>
                  ))}
                </Options>
              ) : (
                <TextOptionsList>
                  <TextOptionItem>
                    <Lesson>
                      Hellaaaaaaaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaaa
                    </Lesson>
                  </TextOptionItem>
                  <TextOptionItem>
                    <Lesson>
                      Hellaaaaaaaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaaa
                    </Lesson>
                  </TextOptionItem>
                  <TextOptionItem>
                    <Lesson>
                      Hellaaaaaaaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaaa
                    </Lesson>
                  </TextOptionItem>
                  <TextOptionItem>
                    <Lesson>
                      Hellaaaaaaaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaaa
                    </Lesson>
                  </TextOptionItem>
                </TextOptionsList>
              )}
            </BlackBoard>
            <AnswerWrapper>
              <Lesson>What is the answer?</Lesson>
              <Answers>
                {answerType === 'button' ? (
                  answers.map(answer => (
                    <Button
                      value={answer.value}
                      color={ButtonColor.google}
                      darkText={true}
                    />
                  ))
                ) : (
                  <AnswerForm>
                    <TextInput label="" />
                  </AnswerForm>
                )}
              </Answers>
              <Submit>
                <Button value={'validate'} />
              </Submit>
            </AnswerWrapper>
          </Container>
        )}
      </StudentMenu>
    </Wrapper>
  );
};
