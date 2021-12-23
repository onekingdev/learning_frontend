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
  Submit,
  Wrapper,
  ProgressWrapper,
  AnswerForm,
  AssistorContainer,
} from './Style';
import apple from '../../assets/apple.svg';
import {FinishLesson} from '../../organisms/FinishLesson';
import {StudentMenu} from '../../templates/StudentMenu';
import {TextInput} from '../../atoms/Text/TextInput';
import {MultipleChoiceText} from '../../molecules/QuestionTypes/MultipleChoiceText';
import {MultipleChoiceImage} from '../../molecules/QuestionTypes/MultipleChoiceImage';
import {VideoModalAssistor} from '../../organisms/VideoModalAssistor';
import {Icon} from '../../atoms/Icon/Icon';
import video from '../../assets/video.svg';
import assistor from '../../assets/text-to-speech.svg';
import {IconSize} from '../../atoms/Icon/Size';

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
  const optionsText = [
    {value: 'Hello friend'},
    {value: 'Hello friend'},
    {value: 'Hello friend'},
    {value: 'Hello friend'},
  ];
  const answerType = 'button';
  const questionType = 'image';
  const [showAssistor, setShowAssistor] = useState(false);

  const closeVideoModal = () => {
    setShowAssistor(!showAssistor);
    console.log('Hella');
  };
  const isLessonFinished = false;
  return (
    <Wrapper>
      <StudentMenu>
        {showAssistor ? <VideoModalAssistor onClick={closeVideoModal} /> : null}
        <ProgressWrapper>
          <LessonProgress
            currentQuestion={1}
            topic={'Math'}
            totalQuestions={10}
          />
        </ProgressWrapper>
        {isLessonFinished ? (
          <FinishLesson tokens={10} energy={10} />
        ) : (
          <Container id="container">
            <BlackBoard>
              <Lesson>Which of these is not an apple?</Lesson>
              {questionType !== 'image' ? (
                <MultipleChoiceImage options={options} />
              ) : (
                <MultipleChoiceText options={optionsText} />
              )}
              <AssistorContainer>
                <Icon image={assistor} />
                <Icon
                  image={video}
                  onClick={closeVideoModal}
                  size={IconSize.small}
                />
              </AssistorContainer>
            </BlackBoard>
            <AnswerWrapper>
              <Lesson>What is the answer?</Lesson>
              <Answers>
                {answerType === 'button' ? (
                  answers.map((answer, i) => (
                    <Button
                      key={i}
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
