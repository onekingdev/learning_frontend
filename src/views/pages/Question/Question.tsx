import {FC, useEffect, useState, useContext} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {LessonProgress} from '../../molecules/LessonProgress/LessonProgress';
import {
  Container,
  Wrapper,
  ProgressWrapper,
} from './Style';
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
import {finishBlock} from '../../../app/actions/blockActions';
import {CardDialog} from 'views/molecules/StudentCard/CardDialog';

import {LevelUpDgContent} from 'views/atoms/ParticlgBg';
import { getNextLevel } from 'app/actions/userActions';

interface RoutePresentationParams {
  presentationId: string;
}

const EXP_UNIT = 5;

export const Question: FC = () => {
  const earning = useSelector((state: any) => state.earning);
  const user = useSelector((state: any) => state.user);
  const student = useSelector((state: any) => state.student)

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
  // const [loading, setLoading] = useState(false);
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


  const [nextMaxExp, setNextMaxExp] = useState(0)
  const updateNextLevel = async (currentLevelAmount: number) => {
    const res:any = await getNextLevel(currentLevelAmount, user.token, dispatch)
    if(res.msg) setNextMaxExp(earning.expMax)
    else setNextMaxExp(res)
  }
  useEffect(() => {
    setNextMaxExp(student.nextLevel.pointsRequired)
  }, [])

  const onAnswer = (result: boolean) => {
    increaseExp();
    setAnswerResult([...answerResult, result]);
    if (result) {
      setPoints(points + pointUnit);
    }
  };

  const increaseExp = async () => {
    const currentExp = earning.exp + EXP_UNIT;
    const expMax = earning.expMax

    if (currentExp > expMax) {
      dispatch({type: TYPE.EXP_UPDATE, payload: {exp: currentExp - expMax, expMax: nextMaxExp}});
      dispatch({type: TYPE.EXP_LEVEL_UP});
      congratulations();

      const nextLevelMax: any = await updateNextLevel(earning.level)
      if(nextLevelMax.msg) {
        console.log('fetch next level max exp failed.')
      } else setNextMaxExp(nextLevelMax)
    } else dispatch({type: TYPE.EXP_UPDATE, payload: {exp: currentExp, expMax: expMax}});
  };

  // state to open and close congratulations pop up
  const [openDg, setOpenDg] = useState(false);
  const congratulations = () => {
    setOpenDg(!openDg);
  };

  const upgradeEnergy = () => {
    if (!answerResult[answerResult.length - 1]) {
      dispatch({type: TYPE.EARNING_ENERGY_RESET});
      return;
    }
    let corrCount = 0;
    for (let i = answerResult.length - 1; i >= 0; i--) {
      // console.log(answerResult[i]);
      if (answerResult[i]) {
        corrCount = answerResult.length - i;
      } else break;
    }
    if (corrCount < 1) corrCount = 1;
    if (corrCount > 11) return;
    dispatch({type: TYPE.EARNING_ENERGY_SET, payload: corrCount - 1});
  };

  const handleData = (data: any) => {
    setBlockPresentation(data.data.blockPresentationById);
    setPointUnit(10);
    // loadingContext.done()
    try {
      dispatch({
        type: TYPE.SET_BLOCK_PRESENTATION,
        payload: data.data.blockPresentationById,
      });
      loadingContext.done();
    } catch (error) {
      console.log('Error de dispatch', error);
    }
  };

  const handleError = (error: any) => {
    console.error(error);
  };

  useEffect(() => {
    get(
      `blockPresentationById(id:${presentationId})`,
      BLOCK_PRESENTATION_QUERY,
      handleData,
      handleError
    );
  }, [presentationId]);

  useEffect(() => {
    setQuestion(blockPresentation?.block.questions[questionCounter]);
    // console.log(
    //   'question is ',
    //   blockPresentation?.block.questions[questionCounter]
    // );
  }, [blockPresentation, questionCounter]);

  const handleNextQuestion = async () => {
    if (blockPresentation) {
      if (blockPresentation.block.questions.length < questionCounter + 2) {
        setIsLessonFinished(true);
        // setLoading(true);
        let correctCount = 0;
        let wrongCount = 0;
        console.log(answerResult);
        for (const data of answerResult) {
          console.log(data);
          if (data) correctCount++;
          else wrongCount++;
        }
        await finishBlock(
          blockPresentation.id,
          correctCount,
          wrongCount,
          (state.earning.energyCharge * pointUnit * 10) / 100,
          state.earning,
          state.user.token,
          dispatch
        );
        // setLoading(false);
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
              combocount={state.earning.energyCharge}
            />
          </ProgressWrapper>
          <button onClick={congratulations}>CONGRATULATIONS</button>
          <CardDialog
            isOpen={openDg}
            open={congratulations}
            dialogContent={<LevelUpDgContent token={200} energy={100} close={congratulations}/>}
            fullWidth="true"
          />
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
