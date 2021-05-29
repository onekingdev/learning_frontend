import {FC} from 'react';
import {Title} from '../../atoms/Text/Title';
import {MobileMenu} from '../../organisms/Menu/MobileMenu';
import {TopMenu} from '../../organisms/Menu/TopMenu';
import arcade from '../../assets/arcade.svg';
import adventure from '../../assets/adventure.svg';
import learging from '../../assets/learn.svg';
import sport from '../../assets/sports.svg';
import skill from '../../assets/skills.svg';

import {
  CardGame,
  CardGameImage,
  GamesContainer,
  GamesStyle,
  GamesTitle,
} from './Style';
import {BasicColor} from '../../Color';

export const Games: FC = () => {
  return (
    <>
      <TopMenu
        rank={10}
        level={190}
        exp={100}
        expMax={200}
        icon={''}
        userName={'Elliot Alderson'}
        progress={50}
        energyCharge={1}
        balance={1999}
      />
      <GamesContainer>
        <GamesTitle>
          <Title isDark={true}>Games</Title>
        </GamesTitle>
        <GamesStyle>
          <CardGame color={BasicColor.red}>
            <Title>Arcade</Title>
            <CardGameImage src={arcade} />
          </CardGame>
          <CardGame color={BasicColor.green}>
            <Title>Learning</Title>
            <CardGameImage src={learging} />
          </CardGame>
          <CardGame color={BasicColor.aqua}>
            <Title>Adventure</Title>
            <CardGameImage src={adventure} />
          </CardGame>
          <CardGame color={BasicColor.blue}>
            <Title>Sport</Title>
            <CardGameImage src={sport} />
          </CardGame>
          <CardGame color={BasicColor.purple}>
            <Title>Skill</Title>
            <CardGameImage src={skill} />
          </CardGame>
        </GamesStyle>
      </GamesContainer>
      <MobileMenu />
    </>
  );
};
