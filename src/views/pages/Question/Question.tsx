import {FC, useEffect, useState, useContext} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {LessonProgress} from '../../molecules/LessonProgress/LessonProgress';
import {Container, Wrapper, ProgressWrapper} from './Style';
import {FinishLesson} from '../../organisms/FinishLesson';
import {StudentMenu} from '../../templates/StudentMenu';
import {MultipleChoiceText} from '../../molecules/QuestionTypes/MultipleChoiceText';
import {get} from '../../../api/queries/get';
import {BLOCK_PRESENTATION_QUERY} from '../../../api/queries/questions';
import {IBlockPresentation, IQuestion} from '../../../app/entities/block';
import {Store} from '../../../app/configureStore';
import {useParams} from 'react-router-dom';
import * as TYPE from '../../../app/types';
import {LoadingContext} from 'react-router-loading';

interface RoutePresentationParams {
  presentationId: string;
}

export const Question: FC = () => {
  // TODO answers and options must come from DB
  // TODO and the type should be much more roboust
  const {presentationId} = useParams<RoutePresentationParams>();
  const state = useSelector((state: Store) => state);
  const dispatch = useDispatch();
  const [blockPresentation, setBlockPresentation] =
    useState<IBlockPresentation>();
  const [question, setQuestion] = useState<IQuestion>();
  const [questionCounter, setQuestionCounter] = useState(Number);
  const [isLessonFinished, setIsLessonFinished] = useState(false);
  const [answerResult, setAnswerResult] = useState<boolean[]>([]);
  const [pointUnit, setPointUnit] = useState<number>(0);
  const [points, setPoints] = useState<number>(0);
  const loadingContext = useContext(LoadingContext);

  const renderTypes = (
    question: IQuestion,
    type: string,
    totalQuestions: number,
    blockPresentation: IBlockPresentation
  ) => {
    const types = [
      {
        type: 'Text',
        component: (
          <MultipleChoiceText
            question={question}
            nextQuestion={handleNextQuestion}
            totalQuestions={totalQuestions}
            questionCounter={questionCounter}
            onAnswer={onAnswer}
            blockPresentation={blockPresentation}
          />
        ),
      },
    ];

    const filterType = types.find((item: any) => item.type === type);
    return filterType?.component;
  };

  useEffect(() => {
    upgradeEnergy();
  }, [answerResult]);

  const onAnswer = (result: boolean) => {
    console.log('answered', result);
    setAnswerResult([...answerResult, result]);
    if (result) setPoints(points + pointUnit);
  };

  const upgradeEnergy = () => {
    if (!answerResult[answerResult.length - 1]) {
      dispatch({type: TYPE.EARNING_ENERGY_RESET});
      return;
    }
    let corrCount = 0;
    for (let i = answerResult.length - 1; i >= 0; i--) {
      console.log(answerResult[i]);
      if (answerResult[i]) {
        corrCount = answerResult.length - i;
      } else break;
    }
    if (corrCount < 1) corrCount = 1;
    dispatch({type: TYPE.EARNING_ENERGY_SET, payload: corrCount - 1});
  };

  const handleData = (data: any) => {
    setBlockPresentation(data.data.blockPresentationById);
    setPointUnit(data.data.blockPresentationById.points);
    // loadingContext.done()
    try {
      dispatch({
        type: TYPE.SET_BLOCK_PRESENTATION,
        payload: data.data.blockPresentationById,
      });
      loadingContext.done()
    } catch (error) {
      console.log('Error de dispatch', error);
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
    setQuestion(blockPresentation?.block.questions[questionCounter]);
    console.log(
      'question is ',
      blockPresentation?.block.questions[questionCounter]
    );
  }, [blockPresentation, questionCounter]);

  const handleNextQuestion = () => {
    if (blockPresentation) {
      if (blockPresentation.block.questions.length < questionCounter + 2) {
        setIsLessonFinished(true);
      }
    }
    const counter = questionCounter + 1;
    setQuestionCounter(counter);
  };
  return (
    <Wrapper>
      {isLessonFinished ? (
        <StudentMenu>
          <FinishLesson
            tokens={points}
            energy={(state.earning.energyCharge * pointUnit * 10) / 100}
          />
        </StudentMenu>
      ) : blockPresentation && question ? (
        <StudentMenu>
          <ProgressWrapper>
            <LessonProgress
              currentQuestion={questionCounter + 1}
              topic={'Math'}
              totalQuestions={blockPresentation.block.questions.length}
              answerResult={answerResult}
            />
          </ProgressWrapper>
          <Container id="container">
            {renderTypes(
              question,
              blockPresentation.block.typeOf.name,
              blockPresentation.block.questions.length,
              blockPresentation
            )}
          </Container>
        </StudentMenu>
      ) : null}
    </Wrapper>
  );
};
