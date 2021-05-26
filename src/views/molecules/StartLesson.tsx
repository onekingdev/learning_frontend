import {FC} from 'react';
import styled from 'styled-components';
import {BasicColor} from '../Color';
import upArrow from '../assets/upArrow.svg';
import {Typography} from '../atoms/Text/typography';

type StartLessonProps = {
  onClick: () => void;
};

export const StartLesson: FC<StartLessonProps> = ({onClick}) => {
  return (
    <>
      <StartLessonStyles>
        <PlayLessonContainer onClick={onClick}>
          <PlayeLessonArrow src={upArrow} />
          <PlayLessonText>Start</PlayLessonText>
        </PlayLessonContainer>
      </StartLessonStyles>
    </>
  );
};

const StartLessonStyles = styled.div`
  width: 75%;
  height: 170px;
  background-color: ${BasicColor.blue};
  margin: 0 auto;
  border-radius: 82px 82px 0 0;
  display: flex;
  justify-content: center;
  color: ${BasicColor.white};
`;
const PlayLessonContainer = styled.div`
  width: 143px;
  height: 63px;
  text-align: center;
  cursor: pointer;
`;
const PlayeLessonArrow = styled.img`
  width: 60px;
  height: 21px;
  margin-top: 15px;
`;
const PlayLessonText = styled.p`
  font-family: ${Typography.primary};
  font-size: 22px;
  font-weight: 700;
  margin-top: 5px;
`;
