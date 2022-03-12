import { Typography } from '../Text/typography';
import {FC, useEffect, useState} from 'react';
import styled from 'styled-components';
import { Answer } from '../Text/Answer';
import { BasicColor } from '../../Color';
import { ScreenSize } from '../../screenSize';
import audioCheck from '../../assets/audios/check.mp3';
import audioError from '../../assets/audios/error.wav';

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

    const [isCorrect, setIsCorrect] = useState(Boolean);
    const [isAnswered, setIsAnswered] = useState(false);

    useEffect(() => {
        setIsAnswered(false);
      }, [answer.answerText])

    const handleAnswer = (e: any) => {
        setIsCorrect(answer.isCorrect)
        setIsAnswered(!isAnswered);
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
              isCorrect={answer?.isCorrect}
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
      
    }
    @media screen and (min-width: ${ScreenSize.desktop}) {
      height: 40px;
      line-height: 40px;
    }
  `;
