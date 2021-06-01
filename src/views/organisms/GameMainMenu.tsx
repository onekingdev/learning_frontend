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

export const GameMainMenu: FC = () => {
  return (
    <>
      <GameMainMenuStyle>
        <GameMenuButton
          gameMode={'Arcade'}
          gameModeImage={arcade}
          color={BasicColor.red}
          onClick={() => console.log('Hella yes')}
          isButton={true}
        />
        <GameMenuButton
          gameMode={'Learning'}
          gameModeImage={learning}
          color={BasicColor.green}
          onClick={() => console.log('Hella yes')}
          isButton={true}
        />
        <GameMenuButton
          gameMode={'Adventure'}
          gameModeImage={adventure}
          color={BasicColor.aqua}
          onClick={() => console.log('Hella yes')}
          isButton={true}
        />
        <GameMenuButton
          gameMode={'Sport'}
          gameModeImage={sport}
          color={BasicColor.blue}
          onClick={() => console.log('Hella yes')}
          isButton={true}
        />
        <GameMenuButton
          gameMode={'Skill'}
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
