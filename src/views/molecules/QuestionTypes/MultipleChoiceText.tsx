import {FC, useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Store } from '../../../app/configureStore';
import { IAnswer } from '../../../app/entities/block';
import { Answer } from '../../atoms/Text/Answer';
import { BasicColor } from '../../Color';
import {ScreenSize} from '../../screenSize';
import {AudioQuestion} from '../AudioQuestion';
import audioCheck from '../../assets/audios/check.mp3';
import audioError from '../../assets/audios/error.mp3';
import { Typography } from '../../atoms/Text/typography';

type ChoiceTextProps = {
  options: IAnswer[];
};

export const MultipleChoiceText: FC<ChoiceTextProps> = ({options}) => {
  const [isCorrect, setIsCorrect] = useState(Boolean);
  const [isAnswered, setIsAnswered] = useState(false);
  const state = useSelector((state: Store) => state.blockPresentation)

  useEffect(() => {
    setIsAnswered(false);
    console.log(state)
  }, [options])

  const handleAnswer = (answer: boolean) => {
    setIsCorrect(answer)
    setIsAnswered(!isAnswered);
  }
  return (
    <>
      <TextOptionsList>
      <audio
        src={isAnswered ?
              isCorrect ? audioCheck : audioError
              : ''}
        autoPlay={isAnswered ? true : false}
        />
        {options.map((option, i) => (
          <TextOptionItem key={i}
            onClick={() => handleAnswer(option.isCorrect)}
            isCorrect={isCorrect}
            isAnswered={isAnswered}
          >
            <Answer isDark>{option.answerText}</Answer>
          </TextOptionItem>
        ))}
      </TextOptionsList>
    </>
  );
};

const TextOptionsList = styled.div`
  width: 90%;
  margin: 20px auto;
  text-align: left;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: ${ScreenSize.tablet}) {
    grid-gap: 20px;
  }
  @media screen and (min-width: ${ScreenSize.desktop}) {
    grid-template-columns: repeat(2,1fr);
    height: 50%;
    grid-gap: 40px;
  }
`;
const TextOptionItem = styled.div<{
  isCorrect?:boolean;
  isAnswered?:boolean;
}>`
  width: 100%;
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
