import {FC, useContext, useEffect} from 'react';
import {GamesMenuContainer, GamesMenuTitleContainer, Wrapper} from './Styles';
import {GameCardPresentation} from '../../molecules/GameCardPresentation';
import imagen from '../../assets/apple.svg';
import {GameMenuButton} from '../../molecules/GameMenuButton';
import arcade from '../../assets/arcade.svg';
import learning from '../../assets/learn.svg';
import adventure from '../../assets/adventure.svg';
import sport from '../../assets/sports.svg';
import skill from '../../assets/skills.svg';
import strategy from '../../assets/strategy.svg'
import {BasicColor} from '../../Color';
import {StudentMenu} from '../../templates/StudentMenu';
import {dictionary} from './dictionary';
import {LoadingContext} from 'react-router-loading';
import {useParams, useHistory} from 'react-router-dom';

interface GameCategoryParams {
  category: "arcade" | "learning" | "adventure" | "sport" | "skill" | "strategy";
}

export const GamesMenu: FC = () => {

  const loadingContext = useContext(LoadingContext);
  const {category} = useParams<GameCategoryParams>();

  const gameMenuImgs = {
    arcade : arcade,
    learning : learning,
    adventure : adventure,
    sport : sport,
    skill : skill,
    strategy : strategy,
  }

  const gameMenuColor = {
    arcade : BasicColor.red,
    learning : BasicColor.green,
    adventure : BasicColor.aqua,
    sport : BasicColor.blue,
    skill : BasicColor.purple,
    strategy: BasicColor.yellow,
  }

  const gameCards = [
    {
      gameTitle: 'PRINCESS GOLDBLADE',
      image: imagen,
      gamePrice: 100,
    },
    {
      gameTitle: 'PRINCESS GOLDBLADE',
      image: imagen,
      gamePrice: 10,
    },
    {
      gameTitle: 'PRINCESS GOLDBLADE',
      image: imagen,
      gamePrice: 10,
    },
    {
      gameTitle: 'PRINCESS GOLDBLADE',
      image: imagen,
      gamePrice: 10,
    },
    {
      gameTitle: 'PRINCESS GOLDBLADE',
      image: imagen,
      gamePrice: 10,
    },
    {
      gameTitle: 'PRINCESS GOLDBLADE',
      image: imagen,
      gamePrice: 10,
    },
    {
      gameTitle: 'PRINCESS GOLDBLADE',
      image: imagen,
      gamePrice: 10,
    },
    {
      gameTitle: 'PRINCESS GOLDBLADE',
      image: imagen,
      gamePrice: 10,
    },
    {
      gameTitle: 'PRINCESS GOLDBLADE',
      image: imagen,
      gamePrice: 10,
    },
    {
      gameTitle: 'PRINCESS GOLDBLADE',
      image: imagen,
      gamePrice: 10,
    },
    {
      gameTitle: 'PRINCESS GOLDBLADE',
      image: imagen,
      gamePrice: 10,
    },
  ];
  const lenguage = 'en';
  useEffect(() => {
    loadingContext.done();
  }, []);
  return (
    <>
      <Wrapper>
        <StudentMenu>
          <GamesMenuTitleContainer>
            <GameMenuButton
              gameMode={dictionary[lenguage][category]}
              gameModeImage={gameMenuImgs[category]}
              color={gameMenuColor[category]}
              isButton={false}
            />
          </GamesMenuTitleContainer>
          <GamesMenuContainer>
            {gameCards.map((item, i) => (
              <GameCardPresentation
                gameName={item.gameTitle}
                gameImage={item.image}
                price={item.gamePrice}
                key={i}
              />
            ))}
          </GamesMenuContainer>
        </StudentMenu>
      </Wrapper>
    </>
  );
};
