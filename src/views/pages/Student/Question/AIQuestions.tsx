import { FC, useEffect, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { LessonProgress } from 'views/molecules/LessonProgress/LessonProgress';
import { useParams } from 'react-router-dom';
import { LoadingContext } from 'react-router-loading';
import {
  Container,
  Wrapper,
  ProgressWrapper,
} from './Style';
import { FinishLesson } from 'views/organisms/FinishLesson';
import { StudentMenu } from 'views/pages/Student/Menus/StudentMenu';
import { LevelUpDgContent } from 'views/atoms/ParticlgBg';
import { MultipleChoiceText } from 'views/molecules/QuestionTypes/MultipleChoiceText';
import { MultipleChoiceSightWord } from 'views/molecules/QuestionTypes/MultipleChoiceSightWord';
import { CardDialog } from 'views/molecules/StudentCard/MyCards/CardDialog';
import { createNewAiBlock, finishBlock } from 'app/actions/blockActions';
import { IAIBlock, IAIQuestion, IQuestion } from 'app/entities/block';
import { Store } from 'app/configureStore';
import * as TYPE from 'app/types';
import { getNextLevel } from 'app/actions/userActions';
import { QUESTION_POINT_UNIT } from 'constants/common';
import { NewMultipleChoiceText } from 'views/molecules/QuestionTypes/MultipleChoiceTextNew';

interface RoutePresentationParams {
  mode: string;
  aokId: string;       //Area of Knowledge Id on AI or Path mode, BlockPresentationId on BlockID mode
}

interface BlockQuestionInput {
  question: number;
  answerOption: number;
  isCorrect: boolean;
}

const EXP_UNIT = 5;

export const AIQuestion: FC = () => {

  const earning = useSelector((state: any) => state.earning);
  const user = useSelector((state: any) => state.user);
  const student = useSelector((state: any) => state.student)
  const state = useSelector((state: Store) => state);
  const loadingContext = useContext(LoadingContext);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const { aokId } = useParams<RoutePresentationParams>();
  const [aiBlock, setAiBlock] = useState<IAIBlock>();
  const [question, setQuestion] = useState<IAIQuestion>();
  const [questions, setQuestions] = useState<Array<IAIQuestion>>();
  const [questionCounter, setQuestionCounter] = useState(0);
  const [isLessonFinished, setIsLessonFinished] = useState(false);
  const [answerResult, setAnswerResult] = useState<BlockQuestionInput[]>([]);
  const [points, setPoints] = useState<number>(0);
  const [loading, setLoading] = useState(false)
  const [nextMaxExp, setNextMaxExp] = useState(0)
  const [openDg, setOpenDg] = useState(false);
  const [bonusCoins, setBonusCoins] = useState(0)


  const renderQuestion = (
    question: IAIQuestion,
    block: IAIBlock,
    length: number
  ) => {
    let component: any
    switch (question.questionType) {
      case 'MC':
        component = (
          <NewMultipleChoiceText
            question={question}
            nextQuestion={handleNextQuestion}
            totalQuestions={length}
            questionCounter={questionCounter}
            onAnswer={onAnswer}
            blockPresentation={block}
          />
        )
        break
      case 'MS':
        component = (
          <p>MS</p>
        )
        break
      case 'O':
        component = (
          <p>O</p>
        )
        break
      case 'R':
        component = (
          <p>R</p>
        )
        break
      case 'T':
        component = (
          <p>T</p>
        )
        break
      default:
        break

    }
    return component
  }

  const updateNextLevel = async (currentLevelAmount: number) => {
    const res: any = await getNextLevel(currentLevelAmount, user.token, dispatch)
    if (res.msg) setNextMaxExp(earning.expMax)
    else setNextMaxExp(res)
  }

  const onAnswer = (result: BlockQuestionInput) => {
    //test
    // result.isCorrect = true;
    increaseExp(result.isCorrect);

    setAnswerResult([...answerResult, result]);
    if (result.isCorrect) {
      setPoints(points + QUESTION_POINT_UNIT);
    }
  };

  const increaseExp = async (isCorrect: boolean) => {
    const currentExp = earning.exp + (isCorrect ? EXP_UNIT : 1);
    const expMax = earning.expMax

    if (currentExp > expMax) {
      dispatch({ type: TYPE.EXP_UPDATE, payload: { exp: currentExp - expMax, expMax: nextMaxExp } });
      dispatch({ type: TYPE.EXP_LEVEL_UP });
      congratulations();

      const nextLevelMax: any = await updateNextLevel(earning.level)
      if (nextLevelMax.msg) {
        console.log(nextLevelMax.msg)
      } else setNextMaxExp(nextLevelMax)
    } else dispatch({ type: TYPE.EXP_UPDATE, payload: { exp: currentExp, expMax: expMax } });
  };

  // Open Congratulations dialog when user passes the max exp of current level.
  const congratulations = () => {
    setOpenDg(!openDg);
  };

  const upgradeEnergy = () => {
    const currentResult = answerResult[answerResult.length - 1]?.isCorrect;
    console.log('Answer Result: ', answerResult)
    console.log('current Result is: ', currentResult);
    if (currentResult === false) dispatch({ type: TYPE.EARNING_ENERGY_RESET });
    if (answerResult.length < 2) {
      if (earning.energyCharge > 0 && currentResult) {
        dispatch({ type: TYPE.EARNING_ENERGY_UP });
        setBonusCoins(bonusCoins + (earning.energyCharge > 9 ? 10 : ((earning.energyCharge + 1) * QUESTION_POINT_UNIT / 10)))
        console.log('bonus coins is ', bonusCoins)
      }
      return
    }
    const lastResult = answerResult[answerResult.length - 2]?.isCorrect;
    if (currentResult) {
      if (!lastResult) return;
      else {
        dispatch({ type: TYPE.EARNING_ENERGY_UP });
        setBonusCoins(bonusCoins + (earning.energyCharge > 9 ? 10 : ((earning.energyCharge + 1) * QUESTION_POINT_UNIT / 10)))
      }
    }
    // console.log('bonus coins is ', bonusCoins)
  };

  const setQuestionsInAI = async (mounted: boolean) => {
    const res: any = await createNewAiBlock(
      11, // parseInt(aokId),
      15, // student.id,
      user.token,
    );
    if (!res.success) {
      enqueueSnackbar(res.msg, { variant: 'error' });
      return false;
    }
    if (mounted) {
      console.log(res)
      setAiBlock(res);
      setQuestions(res.block.questions)
      loadingContext.done()
    }
    return true;
  }

  const onNextLesson = () => {
    setQuestionCounter(0);
    setIsLessonFinished(false)
    setAnswerResult([]);
    setPoints(0)
    setBonusCoins(0)
  }

  const arrObjToString = (arrObj: any) => {
    let str = '[';
    for (const obj of arrObj) {
      str += '{'
      for (const key in obj) {
        if (key === 'isCorrect') continue;
        str += key
        str += ': '
        if (typeof (obj[key]) === 'string') str += '"' + obj[key] + '"'
        else str += obj[key]
        str += ','
      }
      str += '},'
    }
    str += ']'
    return str;
  }

  const handleNextQuestion = async () => {

    if (aiBlock) {
      if (aiBlock.block.questions.length < questionCounter + 2) {
        setLoading(true)
        setIsLessonFinished(true);
        setLoading(true);
        let correctCount = 0;
        let wrongCount = 0;
        for (const data of answerResult) {
          if (data.isCorrect) correctCount++;
          else wrongCount++;
        }
        const finishBlockResult = await finishBlock(
          aiBlock.id,
          earning.energyCharge,
          correctCount,
          wrongCount,
          bonusCoins,
          state.earning,
          arrObjToString(answerResult),
          state.user.token,
          dispatch
        );

        await setQuestionsInAI(true);

        setLoading(false);
      }
    }
    // const counter = questionCounter + 1;
    setQuestionCounter(questionCounter + 1);
  };

  useEffect(() => {

    setNextMaxExp(student.nextLevel.pointsRequired)
    let mounted = true
    setQuestionsInAI(mounted)

    return () => {
      mounted = false
    }
  }, [])

  // useEffect(() => {
  //   console.log('qustions;',questions)
  //   console.log('Qustions block',aiBlock)
  // }, [questions])

  useEffect(() => {
    setQuestion(aiBlock?.block.questions[questionCounter]);
  }, [aiBlock, questionCounter]);

  useEffect(() => {
    upgradeEnergy();
  }, [answerResult]);

  return (
    <Wrapper>
      <StudentMenu>
        {isLessonFinished ? (
          <FinishLesson
            loading={loading}
            tokens={points}
            energy={bonusCoins}
            onNextLesson={onNextLesson}
          />
        ) : aiBlock && questions ? (
          <>
            <ProgressWrapper id='lesson-progress'>
              <LessonProgress
                currentQuestion={questionCounter + 1}
                topic={aiBlock.block.topicGrade.topic.name}
                totalQuestions={questions.length}
                questions={questions}
                answerResult={answerResult}
                combocount={state.earning.energyCharge}
              />
            </ProgressWrapper>
            <CardDialog
              isOpen={openDg}
              open={congratulations}
              dialogContent={<LevelUpDgContent close={congratulations} />}
              fullWidth="true"
            />
            <Container id="container">
              {renderQuestion(
                questions[questionCounter],
                aiBlock,
                questions.length
              )}
            </Container>
          </>
        ) : null}
      </StudentMenu>
    </Wrapper>
  );
};
