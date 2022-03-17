import { Typography } from '../Text/typography';
import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Answer } from 'views/atoms/Text/Answer';
import { BasicColor } from 'views/Color';
import { ScreenSize } from 'constants/screenSize';
import audioCheck from 'views/assets/audios/check.mp3';
import audioError from 'views/assets/audios/error.wav';

interface BlockQuestionInput {
  question: number;
  answerOption: number;
  isCorrect: boolean;
}

type TextOptionProps = {
    answer: any;
    onClick: (result: BlockQuestionInput) => void
}

export const TextOption:FC<TextOptionProps> = ({answer,onClick}) => {

    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    useEffect(() => {
        setIsAnswered(false);
      }, [answer])

    useEffect(() => {
      console.log("initialized text option, isAnswered: ", isAnswered, "answer is ", answer)
    }, [answer])
    const handleAnswer = (e: any) => {
        console.log("handle answer")
        setIsCorrect(answer.isCorrect)
        setIsAnswered(true);
        const inputAnswer:BlockQuestionInput = {
          question : -1,
          answerOption: answer.id,
          isCorrect: answer.isCorrect
        };
        onClick(inputAnswer)
      }

    return(
        <>
        <audio
          src={isAnswered ?
                isCorrect ? audioCheck : audioError
                : ''}
          autoPlay={isAnswered ? true : false}
          />
            <TextOptionStyles
              onClick={(e) => handleAnswer(e)}
              isCorrect={isAnswered && answer?.isCorrect}
              isAnswered={isAnswered}
            >
              <Answer isDark >{answer?.answerText}</Answer>
            </TextOptionStyles>
        </>
    )
}

const TextOptionStyles = styled.div<{
    isCorrect?:boolean;
    isAnswered?:boolean;
  }>`
    width: 90%;
    margin: 20px auto;
    font-family: ${Typography.secondary};
    font-weight:500;
    padding:2px;

    background-color: ${props => props.isAnswered ?
                        props.isCorrect ? BasicColor.greenSoft :
                        BasicColor.red
                        :
                        BasicColor.white20};
    pointer-events: ${props => props.isAnswered ? 'none' : 'all'};
    cursor: pointer;
    line-height: 30px;
    border-radius: 5px;
    &:hover{
      box-shadow: 1px 4px 3px 2px ${BasicColor.black};
    }
    @media screen and (min-width: ${ScreenSize.tablet}) {
      height: 35px;
      line-height: 35px;
      padding: 10px;

    }
    @media screen and (min-width: ${ScreenSize.desktop}) {
      height: 40px;
      line-height: 40px;
    }
  `;
