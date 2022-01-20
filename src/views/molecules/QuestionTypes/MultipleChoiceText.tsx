import {FC} from 'react';
import styled from 'styled-components';
import { IAnswer } from '../../../app/entities/block';
import { BasicColor } from '../../Color';
import {ScreenSize} from '../../screenSize';

type ChoiceTextProps = {
  options: IAnswer[];
};

export const MultipleChoiceText: FC<ChoiceTextProps> = ({options}) => {
  return (
    <>
      <TextOptionsList>
        {options.map((option, i) => (
          <TextOptionItem key={i} onClick={() => console.log(option.answerText)}>
            {option.answerText}
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
    grid-gap: 30px;
  }
  @media screen and (min-width: ${ScreenSize.desktop}) {
    grid-template-columns: repeat(2,1fr);
    height: 50%;
    margin: 50px auto;
    grid-gap: 40px;
  }
`;
const TextOptionItem = styled.div`
  width: 100%;
  padding: 2px;
  background-color: ${BasicColor.white20};
  cursor: pointer;
  height: 30px;
  line-height: 30px;
  border-radius: 5px;
  &:hover{
    background-color: ${BasicColor.gray30};
  }
  @media screen and (min-width: ${ScreenSize.tablet}) {
    height: 35px;
    line-height: 35px;
  }
  @media screen and (min-width: ${ScreenSize.desktop}) {
    height: 40px;
    line-height: 40px;
  }
`;
