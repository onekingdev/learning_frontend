import {FC, useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Store } from '../../../app/configureStore';
import { IAnswer, IQuestion } from '../../../app/entities/block';
import { Answer } from '../../atoms/Text/Answer';
import { BasicColor, ButtonColor } from '../../Color';
import {ScreenSize} from '../../screenSize';
import audioCheck from '../../assets/audios/check.mp3';
import audioError from '../../assets/audios/error.wav';
import { Typography } from '../../atoms/Text/typography';
import { Question } from '../../atoms/Text/Question';
import { Icon } from '../../atoms/Icon/Icon';
import videoIcon from '../../assets/videoIcon.svg';
import { Button } from '../Button';
import assistor from '../../assets/text-to-speech.svg';
import ice from '../../assets/ice-cream.svg';
import { IconSize } from '../../atoms/Icon/Size';



type ChoiceTextProps = {
  question: IQuestion;
  nextQuestion: () => void;
  totalQuestions : number;
  questionCounter: number;
};

export const MultipleChoiceText: FC<ChoiceTextProps> = (
    {
      question,
      nextQuestion,
      totalQuestions,
      questionCounter
    }) => {
  const [isCorrect, setIsCorrect] = useState(Boolean);
  const [isAnswered, setIsAnswered] = useState(false);
  const [questionImageAssetSet,setQuestionImageAssetSet] = useState('')
  const state = useSelector((state: Store) => state.blockPresentation)

  useEffect(() => {
    setIsAnswered(false);
  }, [question.answeroptionSet])

  const handleAnswer = (answer: boolean) => {
    setIsCorrect(answer)
    setIsAnswered(!isAnswered);
  }
  return (
    <>
      <BlackBoard>
        <IconVideoContainer>
          <Icon image={videoIcon} />
        </IconVideoContainer>
        <Question>{question.questionText}</Question>
        <AnswersContainer>
        <TextOptionsList>
        <audio
          src={isAnswered ?
                isCorrect ? audioCheck : audioError
                : ''}
          autoPlay={isAnswered ? true : false}
          />
          {question.answeroptionSet.map((option, i) => (
            <TextOptionItem key={i}
              onClick={() => handleAnswer(option.isCorrect)}
              isCorrect={isCorrect}
              isAnswered={isAnswered}
            >
              <Answer isDark>{option.answerText}</Answer>
            </TextOptionItem>
          ))}
        </TextOptionsList>
        <ImageAssetContainer isImageExist={questionImageAssetSet}>
          <ImageAsset src={questionImageAssetSet} alt="" />
        </ImageAssetContainer>
        </AnswersContainer>
        <AssistorContainer>
          <Button
            darkText
            color={ButtonColor.next}
            onClick={nextQuestion}
            value={totalQuestions === questionCounter + 1 ? 'Finish' : 'Next'}/>
          <Icon image={assistor}/>
        </AssistorContainer>
      </BlackBoard>
    </>
  );
};

const BlackBoard = styled.div`
  background-color: #13705f;
  border: 7px solid #5c2100;
  border-radius: 16px;
  @media (min-width: ${ScreenSize.tablet}) {
    margin: 1rem;
    margin-top: 5rem;
    height: auto;
  }
  @media screen and (min-width: ${ScreenSize.desktop}) {
    height: 100%;
  }
`;
const AnswersContainer = styled.div`
  width: 90%;
  display: flex; 
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  @media screen and (min-width: ${ScreenSize.desktop}){
    flex-direction: row;
  }
`
const ImageAssetContainer = styled.div<{
  isImageExist: string,
}>`
  display: ${props => props.isImageExist ? 'initial' : 'none'};
  width: 40%;
`;
const ImageAsset = styled.img`
  width: 250px;
`
const IconVideoContainer = styled.div`
  width: 90%;
  margin: 5px auto;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;

  @media screen and (min-width: ${ScreenSize.desktop}){
    justify-content: left;
  }
`;

const TextOptionsList = styled.div`
  width: 90%;
  margin: 20px auto;
  text-align: left;
  @media screen and (min-width: ${ScreenSize.desktop}) {
    height: 50%;
    margin: 50px auto;
    width: 70%;
  }
`;
const TextOptionItem = styled.div<{
  isCorrect?:boolean;
  isAnswered?:boolean;
}>`
  width: 100%;
  margin-bottom: 20px;
  font-family: ${Typography.secondary};
  font-weight:500;
  padding:2px;
  padding-left: 5px;
  background-color: ${props => props.isAnswered ?
                      props.isCorrect ? BasicColor.greenSoft :
                      BasicColor.red
                      :
                      BasicColor.white20};
  pointer-events: ${props => props.isAnswered ? 'none' : 'all'};
  cursor: pointer;
  height: 30px;
  line-height: 30px;
  border-radius: 5px;
  &:hover{
    box-shadow: 1px 4px 3px 2px ${BasicColor.black};
  }
  @media screen and (min-width: ${ScreenSize.tablet}) {
    height: 35px;
    line-height: 35px;
    padding: 10px;
    padding-left:20px;
  }
  @media screen and (min-width: ${ScreenSize.desktop}) {
    height: 40px;
    line-height: 40px;
  }
`;

const AssistorContainer = styled.div`
  width: 95%;
  max-width: 400px;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  grid-gap: 40px;
  margin: 30px auto;
`;
