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
import { IAnswer, IBlockPresentation, IQuestion } from '../../../app/entities/block';
import { useSelector } from 'react-redux';
import { Store } from '../../../app/configureStore';
import { useParams } from 'react-router-dom';
//import * as TYPE from '../../../app/types';
interface RoutePresentationParams {
  presentationId: string;
}

export const Question: FC = () => {
  // TODO answers and options must come from DB
  // TODO and the type should be much more roboust
  const [value, setValue] = useState('');
  const {presentationId} = useParams<RoutePresentationParams>();
  const state = useSelector((state: Store) => state)
  const [isFinished, setIsFinished] = useState(false);
  //const dispatch = useDispatch();
  const [blockPresentation, setBlockPresentation] = useState<IBlockPresentation>();
  const [question, setQuestion] = useState<IQuestion>();
  const [answer, setAnswer] = useState<IAnswer>()
  const [questionCounter, setQuestionCounter] = useState(0);
  const handleDataa = (data: any) => {
    console.log("Data is", data);
  }

  const options = [
    {image: apple},
    {image: apple},
    {image: apple},
    {image: apple},
  ];

  const optionsText = [
    {value: 'Hello friend'},
    {value: 'Hello'},
    {value: 'Hello hella'},
    {value: 'Hello f'},
  ];
  const answerText = true;
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
    //dispatch({ type: TYPE.SET_BLOCK_PRESENTATION, payload: data.data.blockPresentationById})
  };

  const handleError = (error: any) => {
    console.error(error);
  };
  useEffect(() => {
    get(
      `blockPresentationById(id:"${presentationId}")`,
      BLOCK_PRESENTATION_QUERY,
      handleData,
      handleError
    );
  }, [presentationId]);

  useEffect(() => {
     setQuestion(blockPresentation?.block.questions[questionCounter])
     console.log(blockPresentation)
  },[blockPresentation,questionCounter])

  const handleNextQuestion = () => {

    const counter = questionCounter + 1;
    setQuestionCounter(counter)

  }
  return (
    <Wrapper>
      {
        blockPresentation && question ?
        <StudentMenu>
        {showAssistor ? <VideoModalAssistor onClick={closeVideoModal} /> : null}
        <ProgressWrapper>
          <LessonProgress
            currentQuestion={questionCounter + 1}
            topic={'Math'}
            totalQuestions={blockPresentation?.block.questions.length}
          />
        </ProgressWrapper>
        {isLessonFinished ? (
          <FinishLesson tokens={10} energy={10} />
        ) : (
          <Container id="container">
            <BlackBoard>
              <Lesson>{question.questionText}</Lesson>
              {blockPresentation?.block.typeOf.name === 'image' ? (
                <MultipleChoiceImage options={options} />
              ) : (
                <MultipleChoiceText options={question.answeroptionSet} />
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
           { <AnswerWrapper>
              <Lesson>What is the answer?</Lesson>
              <Answers>
                {answerText ? (
                  question.answeroptionSet.map((answer, i) => (
                    <Button
                      key={i}
                      value={answer.answerText}
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
                <Button value={'validate'} onClick={handleNextQuestion} />
              </Submit>
            </AnswerWrapper>}
          </Container>
        )}
      </StudentMenu>
      :
      <StudentMenu>Loading</StudentMenu>
    }
    </Wrapper>
  );
};
