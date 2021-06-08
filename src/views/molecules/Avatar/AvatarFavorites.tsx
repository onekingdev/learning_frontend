import {FC} from 'react';
import styled from 'styled-components';
import {Title} from '../../atoms/Text/Title';
import {RoundIcon} from '../../atoms/Icon/Icon';
import {BasicColor} from '../../Color';
import {ScreenSize} from '../../screenSize';

export const AvatarFavorites: FC = () => {
  const favorites = [];
  for (let i = 0; i < 4; i++) {
    favorites.push({image: 'https://via.placeholder.com/75'});
  }

  return (
    <>
      <FavoritesTitle>
        <Title isDark={true}>Your Favorites</Title>
      </FavoritesTitle>
      <FavoritesCloset>
        {favorites.map(favorite => (
          <FavoritesDrawer>
            <RoundIcon src={favorite.image}></RoundIcon>
          </FavoritesDrawer>
        ))}
      </FavoritesCloset>
    </>
  );
};

const FavoritesTitle = styled.div`
  display: grid;
  background-color: ${BasicColor.yellow};
  height: 37px;
  text-align: center;
  align-content: center;
  text-transform: uppercase;
  @media screen and (min-width: ${ScreenSize.phone}) {
    visibility: hidden;
  }
`;

const FavoritesDrawer = styled.div`
  display: grid;
  background-color: ${BasicColor.brown};
  height: 85px;
  align-content: center;
  justify-content: center;
`;

const FavoritesCloset = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 7px;
  height: 85px;
  align-content: center;
  justify-content: center;
  background-color: ${BasicColor.darkBrown};
`;
