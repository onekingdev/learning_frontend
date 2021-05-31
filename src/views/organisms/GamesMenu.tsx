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

export const GamesMenu: FC = () => {
  return (
    <>
      <GamesMenuStyle>
        <GameMenuButton
          gameMode={'Arcade'}
          gameModeImage={arcade}
          color={BasicColor.red}
          onClick={() => console.log('Hella yes')}
        />
        <GameMenuButton
          gameMode={'Learning'}
          gameModeImage={learning}
          color={BasicColor.green}
          onClick={() => console.log('Hella yes')}
        />
        <GameMenuButton
          gameMode={'Adventure'}
          gameModeImage={adventure}
          color={BasicColor.aqua}
          onClick={() => console.log('Hella yes')}
        />
        <GameMenuButton
          gameMode={'Sport'}
          gameModeImage={sport}
          color={BasicColor.blue}
          onClick={() => console.log('Hella yes')}
        />
        <GameMenuButton
          gameMode={'Skill'}
          gameModeImage={skill}
          color={BasicColor.purple}
          onClick={() => console.log('Hella yes')}
        />
      </GamesMenuStyle>
    </>
  );
};

const GamesMenuStyle = styled.div`
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
