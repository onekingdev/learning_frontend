import {FC, useEffect, useState} from 'react';
import {ButtonColor} from '../../Color';
import {Button} from '../../molecules/Button';
import {LessonProgress} from '../../molecules/LessonProgress/LessonProgress';
import {
  BlackBoard,
  Container,
  Wrapper,
  ProgressWrapper,
  AssistorContainer,
  IconVideoContainer,
} from './Style';
import apple from '../../assets/apple.svg';
import {FinishLesson} from '../../organisms/FinishLesson';
import {StudentMenu} from '../../templates/StudentMenu';
import {MultipleChoiceText} from '../../molecules/QuestionTypes/MultipleChoiceText';
import {MultipleChoiceImage} from '../../molecules/QuestionTypes/MultipleChoiceImage';
import {VideoModalAssistor} from '../../organisms/VideoModalAssistor';
import {Icon} from '../../atoms/Icon/Icon';
import videoIcon from '../../assets/videoIcon.svg';
import video from '../../assets/video.svg';
import assistor from '../../assets/text-to-speech.svg';
import {IconSize} from '../../atoms/Icon/Size';
import { get } from '../../../api/queries/get';
import { BLOCK_PRESENTATION_QUERY } from '../../../api/queries/questions';
import { IAnswer, IBlockPresentation, IQuestion } from '../../../app/entities/block';
import { useDispatch, useSelector } from 'react-redux';
import { Store } from '../../../app/configureStore';
import { useParams } from 'react-router-dom';
import { Question as QuestionText } from '../../atoms/Text/Question';
import * as TYPE from '../../../app/types';
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
  const [questionCounter, setQuestionCounter] = useState(Number);
  const [isLessonFinished, setIsLessonFinished] = useState(false);

  const options = [
    {image: apple},
    {image: apple},
    {image: apple},
    {image: apple},
  ];
  const renderTypes = (question: IQuestion, type: string) => {
    const types = [
    {
      type: 'Text',
      component: <MultipleChoiceText options={question.answeroptionSet} />
    },
    {
      type: 'Image',
      component: <MultipleChoiceText options={question.answeroptionSet} />
    }]

    const filterType = types.find((item: any) => item.type === type)
    return filterType?.component
  }


  const [showAssistor, setShowAssistor] = useState(false);
  const onChange = (e:any) => {
    setValue(e.target.value);
  }

  const closeVideoModal = () => {
    setShowAssistor(!showAssistor);
  };

  const handleData = (data: any) => {
    setBlockPresentation(data.data.blockPresentationById);
    try {
      dispatch({ type: TYPE.SET_BLOCK_PRESENTATION, payload: data.data.blockPresentationById})
    } catch (error) {
      console.log('Error de dispatch',error)
    }
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
  },[blockPresentation,questionCounter])

  const handleNextQuestion = () => {
    if(blockPresentation){
      if(blockPresentation.block.questions.length < questionCounter + 2 ){
        setIsLessonFinished(true)
      }
    }
    const counter = questionCounter + 1;
    setQuestionCounter(counter)
  }
  return (
    <Wrapper>
      {
        isLessonFinished ? <StudentMenu>
          <FinishLesson tokens={10} energy={10}/>
        </StudentMenu>
        :
        blockPresentation && question ?
        <StudentMenu>
        {showAssistor ? <VideoModalAssistor onClick={closeVideoModal} /> : null}
        <ProgressWrapper>
          <LessonProgress
            currentQuestion={questionCounter + 1}
            topic={'Math'}
            totalQuestions={blockPresentation.block.questions.length}
          />
        </ProgressWrapper>
          <Container id="container">
            <BlackBoard>
              <IconVideoContainer>
                <Icon image={videoIcon} onClick={() => setShowAssistor(true)}/>
              </IconVideoContainer>
              <QuestionText>{question.questionText}</QuestionText>
              {renderTypes(question, blockPresentation.block.typeOf.name)}
              <AssistorContainer>
              <Button value={blockPresentation.block.questions.length < questionCounter + 2 ? 'Finish' : 'Next'} color={ButtonColor.next} onClick={handleNextQuestion} darkText/>
                <Icon image={assistor} />
              </AssistorContainer>
            </BlackBoard>
          </Container>
      </StudentMenu>
      :
      <StudentMenu>Loading</StudentMenu>
    }
    </Wrapper>
  );
};
function dispatch(arg0: { type: string; payload: any; }) {
  throw new Error('Function not implemented.');
}

