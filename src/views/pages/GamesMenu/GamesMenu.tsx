import {FC} from 'react';
import {GamesMenuContainer, GamesMenuTitleContainer} from './Styles';
import {GameCardPresentation} from '../../molecules/GameCardPresentation';
import {MobileMenu} from '../../organisms/Menu/MobileMenu';
import imagen from '../../assets/apple.svg';
import {TopMenu} from '../../organisms/Menu/TopMenu';
import {GameMenuButton} from '../../molecules/GameMenuButton';
import arcade from '../../assets/arcade.svg';
import {BasicColor} from '../../Color';

export const GamesMenu: FC = () => {
  const gameCards = [
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
    {
      gameTitle: 'PRINCESS GOLDBLADE',
      image: imagen,
      gamePrice: 10,
    },
  ];
  return (
    <>
      <TopMenu
        rank={3}
        level={3}
        exp={40}
        expMax={50}
        userName={'Elliot Alderson'}
        icon={''}
        progress={20}
        energyCharge={2}
        balance={200}
      />
      <GamesMenuTitleContainer>
        <GameMenuButton
          gameMode={'Arcade'}
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
      <MobileMenu />
    </>
  );
};
