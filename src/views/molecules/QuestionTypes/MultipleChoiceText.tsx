import {FC, useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Store } from '../../../app/configureStore';
import { IAnswer, IQuestion } from '../../../app/entities/block';
import { Answer } from '../../atoms/Text/Answer';
import { BasicColor, ButtonColor } from '../../Color';
import {ScreenSize} from '../../screenSize';
import { Typography } from '../../atoms/Text/typography';
import { Question } from '../../atoms/Text/Question';
import { Icon } from '../../atoms/Icon/Icon';
import videoIcon from '../../assets/videoIcon.svg';
import { Button } from '../Button';
import assistor from '../../assets/text-to-speech.svg';
import ice from '../../assets/ice-cream.svg';
import { IconSize } from '../../atoms/Icon/Size';
import { TextOption } from '../../atoms/QuestionOptions/Textoption';



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

  const state = useSelector((state: Store) => state.blockPresentation)
  const [isAnswered, setIsAnswered] = useState<boolean>(false)
  useEffect(() => {
    setIsAnswered(false);
  }, [question.answeroptionSet])
  const handleAnswer = () => {
    setIsAnswered(true)
  };

  return (
    <>
      <BlackBoard>
        <IconVideoContainer>
          <Icon image={videoIcon} />
        </IconVideoContainer>
        <Question>{question.questionText}</Question>
        <AnswersContainer>
        <TextOptionsList>
          <BlockAnswers isAnswered={isAnswered}/>
          {question.answeroptionSet.map((option, i) => (
            <TextOption
              answer={option.isCorrect}
              answerText={option.answerText}
              key={i}
              onClick={handleAnswer}
            />

          ))}
        </TextOptionsList>
        <ImageAssetContainer imageLength={question.questionImageAssets.length}>
          {
            question.questionImageAssets.map(item =>
              <ImageAsset src={item.image} alt="" />)
          }
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
    grid-gap: 10px;
  }
`
const ImageAssetContainer = styled.div<{
  imageLength?: number,
}>`
  display: ${(props: any) => props.imageLength > 0 ? 'grid' : 'none'};
  grid-template-columns: repeat(auto-fit, minmax(110px, 300px));
  justify-content: center;
  width: 100%;
  grid-gap: 10px;
  margin: 10px auto;
  @media screen and (min-width: ${ScreenSize.desktop}){
    width: 50%;
  }
`;
const ImageAsset = styled.img`
  width: 100%;
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
const BlockAnswers = styled.div<{
  isAnswered:boolean;
}>`
  width: 100%;
  height: 100%;
  position: absolute;
  padding-left: 5px;
  display: ${props => props.isAnswered ? 'initial' : 'none'};
`;
const TextOptionsList = styled.div`
  width: 90%;
  margin: 20px auto;
  position: relative;
  text-align: left;
  @media screen and (min-width: ${ScreenSize.desktop}) {
    height: 50%;
    margin: 50px auto;
    width: 70%;
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
