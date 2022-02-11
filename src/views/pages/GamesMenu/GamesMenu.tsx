import {FC, useContext, useEffect} from 'react';
import {GamesMenuContainer, GamesMenuTitleContainer, Wrapper} from './Styles';
import {GameCardPresentation} from '../../molecules/GameCardPresentation';
import imagen from '../../assets/apple.svg';
import {GameMenuButton} from '../../molecules/GameMenuButton';
import arcade from '../../assets/arcade.svg';
import {BasicColor} from '../../Color';
import {StudentMenu} from '../../templates/StudentMenu';
import {dictionary} from './dictionary';
import {LoadingContext} from 'react-router-loading';

export const GamesMenu: FC = () => {
  const loadingContext = useContext(LoadingContext);
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
              gameMode={dictionary[lenguage].arcade}
              gameModeImage={arcade}
              color={BasicColor.red}
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
