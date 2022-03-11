import {FC} from 'react';
import styled from 'styled-components';
import {BasicColor} from '../Color';
import upArrow from '../assets/upArrow.svg';
import {Typography} from '../atoms/Text/typography';
import {ScreenSize} from '../screenSize';
import {dictionary} from '../pages/StudentHome/dictionary';

type StartLessonProps = {
  onClick: () => void;
  isClose?: boolean;
};

export const StartLesson: FC<StartLessonProps> = ({onClick, isClose}) => {
  const language = 'en';
  return (
    <>
      <StartLessonStyles isClose={isClose}>
        <PlayLessonContainer onClick={onClick}>
          <PlayeLessonArrow src={upArrow} />
          <PlayLessonText>{dictionary[language].start}</PlayLessonText>
        </PlayLessonContainer>
      </StartLessonStyles>
    </>
  );
};

type StartLessonStylesProps = {
  isClose?: boolean;
};
const StartLessonStyles = styled.div<StartLessonStylesProps>`
  width: 100%;
  height: 120px;
  background-color: ${BasicColor.blue};
  margin: 0 auto;
  border-radius: 50px 50px 0 0;
  display: ${p =>
    window.location.pathname === '/home'
      ? p.isClose
        ? 'none'
        : 'flex'
      : 'none'};
  justify-content: center;
  color: ${BasicColor.white};
  position: fixed;
  bottom: 0;
  z-index: 1;
  @media screen and (min-width: ${ScreenSize.tablet}) {
    width: 90%;
    left: 5%;
    height: 70px;
  }

  @media screen and (min-width: ${ScreenSize.desktop}) {
    height: 60px;
  }
`;
const PlayLessonContainer = styled.div`
  width: 143px;
  height: 50px;
  text-align: center;
  cursor: pointer;
`;
const PlayeLessonArrow = styled.img`
  width: 30px;
  height: 10px;
  margin-top: 10px;
  @media screen and (min-width: ${ScreenSize.tablet}) {
    height: 15px;
  }
`;
const PlayLessonText = styled.p`
  font-family: ${Typography.primary};
  font-size: 14px;
  font-weight: 700;
  margin-top: 3px;

  @media screen and (min-width: ${ScreenSize.tablet}) {
    font-size: 20px;
  }
`;
