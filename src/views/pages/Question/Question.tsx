import {FC, useEffect, useState} from 'react';
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
import { get } from '../../../api/queries/get';
import { BLOCK_PRESENTATION_QUERY } from '../../../api/queries/questions';
import { IBlockPresentation } from '../../../app/entities/block';
import { useDispatch, useSelector } from 'react-redux';
import { Store } from '../../../app/configureStore';
import * as TYPE from '../../../app/types';


export const Question: FC = () => {
  // TODO answers and options must come from DB
  // TODO and the type should be much more roboust
  const [value, setValue] = useState('');
  const state = useSelector((state: Store) => state)
  const dispatch = useDispatch();
  const [blockPresentation, setBlockPresentation] = useState<IBlockPresentation>();
  const [answer, setAnswer] = useState('');
  const [question, setQuestion] = useState('')

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
  const answerText = false;
  const questionType = 'image';
  const [showAssistor, setShowAssistor] = useState(false);
  const onChange = (e:any) => {
    setValue(e.target.value);
  }

  const closeVideoModal = () => {
    setShowAssistor(!showAssistor);
  };
  const isLessonFinished = false;
  const handleData = (data: any) => {
    setBlockPresentation(data.data.blockPresentationById);
    dispatch({ type: TYPE.SET_BLOCK_PRESENTATION, payload: data.data.blockPresentationById})
  };

  const handleError = (error: any) => {
    console.error(error);
  };
  useEffect(() => {
    get(
      'blockPresentationById(id:"1")',
      BLOCK_PRESENTATION_QUERY,
      handleData,
      handleError
    );
      console.log(state.blockPresentation,'blokkkkkk')
  }, [])

  const handleQuestion = () => {
    const topics = blockPresentation?.block
    const questions = topics?.questions[0]
    const answer = questions?.answeroptionSet[0].answerText
    console.log(blockPresentation?.block)
    if(value === answer){
      console.log('correct')
    }
  }
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
              <Lesson>{state.blockPresentation?.block.questions[0].questionText}</Lesson>
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
                {answerText ? (
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
                    <TextInput label="Answer" onChange={onChange}/>
                  </AnswerForm>
                )}
              </Answers>
              <Submit>
                <Button value={'validate'} onClick={handleQuestion} />
              </Submit>
            </AnswerWrapper>
          </Container>
        )}
      </StudentMenu>
    </Wrapper>
  );
};
