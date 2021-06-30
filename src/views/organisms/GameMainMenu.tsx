import {FC} from 'react';
import styled from 'styled-components';
import {ScreenSize} from '../screenSize';
import {GameMenuButton} from '../molecules/GameMenuButton';
import {BasicColor} from '../Color';
import arcade from '../assets/arcade.svg';
import learning from '../assets/learn.svg';
import adventure from '../assets/adventure.svg';
import sport from '../assets/sports.svg';
import skill from '../assets/skills.svg';
import {dictionary} from '../pages/Games/dictionary';

export const GameMainMenu: FC = () => {
  const language = 'en';
  return (
    <>
      <GameMainMenuStyle>
        <GameMenuButton
          gameMode={dictionary[language].arcade}
          gameModeImage={arcade}
          color={BasicColor.red}
          onClick={() => console.log('Hella yes')}
          isButton={true}
        />
        <GameMenuButton
          gameMode={dictionary[language].learning}
          gameModeImage={learning}
          color={BasicColor.green}
          onClick={() => console.log('Hella yes')}
          isButton={true}
        />
        <GameMenuButton
          gameMode={dictionary[language].adventure}
          gameModeImage={adventure}
          color={BasicColor.aqua}
          onClick={() => console.log('Hella yes')}
          isButton={true}
        />
        <GameMenuButton
          gameMode={dictionary[language].sport}
          gameModeImage={sport}
          color={BasicColor.blue}
          onClick={() => console.log('Hella yes')}
          isButton={true}
        />
        <GameMenuButton
          gameMode={dictionary[language].skill}
          gameModeImage={skill}
          color={BasicColor.purple}
          onClick={() => console.log('Hella yes')}
          isButton={true}
        />
      </GameMainMenuStyle>
    </>
  );
};

const GameMainMenuStyle = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  justify-items: center;
  align-items: center;
  margin-top: 20px;
  @media screen and (min-width: ${ScreenSize.desktop}) {
    width: 70%;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0;
  }
`;
