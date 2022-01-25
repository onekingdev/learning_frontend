import {FC} from 'react';
import styled from 'styled-components';
import {Lesson} from '../../atoms/Text/Lesson';
import {ScreenSize} from '../../screenSize';

type ChoiceTextProps = {
  options: {value: string}[];
};

export const MultipleChoiceText: FC<ChoiceTextProps> = ({options}) => {
  return (
    <>
      <TextOptionsList>
        {options.map((option, i) => (
          <TextOptionItem key={i}>
            <Lesson>{option.value}</Lesson>
          </TextOptionItem>
        ))}
      </TextOptionsList>
    </>
  );
};

const TextOptionsList = styled.ol`
  width: 100%;
  list-style-type: upper-latin;
  text-align: left;
  display: flex;
  flex-direction: column;
  grid-gap: 10px;

  @media screen and (min-width: ${ScreenSize.tablet}) {
    grid-gap: 30px;
  }
`;
const TextOptionItem = styled.li`
  width: 100%;
`;
