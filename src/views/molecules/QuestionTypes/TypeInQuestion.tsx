import { FC, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IAIBlock, IAIQuestion, ITypeInAnswerOptionInput } from 'app/entities/block';
import { BasicColor, ButtonColor } from 'views/Color';
import { Icon } from 'views/atoms/Icon/Icon';
import videoIcon from 'views/assets/others/video-assistor.png';
import assistor from 'views/assets/text-to-speech.svg';
import { VideoModalAssistor } from 'views/organisms/VideoModalAssistor';
import Button from 'views/molecules/MuiButton';
import { dictionary } from 'views/pages/Student/Question/dictionary'
import { TypoGeneralText } from 'views/atoms/Text';
import { BlackBoard, AnswersContainer, AssistorContainer } from './Styles'
import { TextField } from '@mui/material';
import { QuestionBoxTitle } from './QuestionBoxTitle';
import { styled } from '@mui/material/styles';

type ChoiceTextProps = {
  question: IAIQuestion;
  nextQuestion: () => void;
  totalQuestions: number;
  questionCounter: number;
  blockPresentation: IAIBlock;
  onAnswer: (result: {
    typeInAnswerOption: ITypeInAnswerOptionInput,
    question: string
  }, isCorrect: boolean) => void;
};


export const TypeInQuestion: FC<ChoiceTextProps> = ({
  question,
  nextQuestion,
  totalQuestions,
  questionCounter,
  blockPresentation,
  onAnswer,
}) => {
  let language: string = useSelector((state: any) => state.user.language);
  language = language ? language : 'en-us'
  const [showAssistor, setShowAssistor] = useState(false);

  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [typedAnswer, setTypedAnswer] = useState('')
  const [disabled, setDisabled] = useState(false)
  const questionSoundURI = `${process.env.REACT_APP_SERVER_URL}${question.questionAudioUrl}`;

  useEffect(() => {
    setIsAnswered(false);
    setTypedAnswer('')
    setDisabled(false)
  }, [question]);

  const handleNextButtonClicked = () => {
    if (isAnswered)
      nextQuestion()
    else if (typedAnswer) {
      setIsAnswered(true)
      const answer: ITypeInAnswerOptionInput = {
        answerOption: +question.answerOptions[0].id,
        typedAnswer: typedAnswer
      }
      onAnswer({
        question: question.id,
        typeInAnswerOption: answer
      },
        question.answerOptions[0].caseSensitive ?
          typedAnswer === question.answerOptions[0].answerText :
          typedAnswer.toLowerCase() === question.answerOptions[0].answerText.toLowerCase()
      )
    }
  }
  const closeVideoModal = () => {
    setShowAssistor(!showAssistor);
  };
  // const readAnswer = (answerOption: any) => {
  //   const answerSoundURI = `${process.env.REACT_APP_SERVER_URL}${answerOption.answerAudioUrl}`;
  //   const audio = new Audio(answerSoundURI);
  //   audio.play();
  // };

  const readQuestion = () => {
    const audio = new Audio(questionSoundURI);
    audio.play();
  };


  return (
    <>
      {(showAssistor && blockPresentation?.block?.topicGrade?.topic?.videoAssistor) ? (
        <VideoModalAssistor
          onClick={closeVideoModal}
          source={
            blockPresentation
              ? blockPresentation?.block?.topicGrade?.topic?.videoAssistor
              : ''
          }
        />
      ) : null}
      <BlackBoard>
        <QuestionBoxTitle
          title={question.questionText}
          audioFile={
            question.questionAudioAssets[0]?.audioFile
          }
        />
        <AnswersContainer>
          <input
            disabled={disabled}
            style={{ width: 200, fontSize: 25, padding: 5, textAlign: 'end' }}
            value={typedAnswer}
            onChange={(e: any) => setTypedAnswer(e.target.value)}
            autoFocus
          />
          <TypoGeneralText style={{ color: 'white' }}>
            .
          </TypoGeneralText>
        </AnswersContainer>
        <AssistorContainer>
          <Button
            bgColor={!isAnswered ? ButtonColor.login : ButtonColor.next}
            onClick={handleNextButtonClicked}
            fullWidth={true}
            color={BasicColor.black}
            value={
              isAnswered ?
                totalQuestions === questionCounter + 1 ?
                  dictionary[language]?.finish :
                  dictionary[language]?.next
                :
                'Check'
            }
          />
          <Icon image={assistor} onClick={readQuestion} />
          {
            blockPresentation?.block?.topicGrade?.topic?.videoAssistor &&
            <Icon image={videoIcon} onClick={closeVideoModal} />
          }
        </AssistorContainer>
      </BlackBoard>
    </>
  );
};
