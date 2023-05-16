import {FC} from 'react';
import styled from 'styled-components';
import {RoundIcon} from '../../atoms/Icon/Icon';
import {BasicColor} from '../../Color';
import {ScreenSize} from '../../screenSize';
import placeHolder from '../../assets/placeholder.png';

export const AvatarFavorites: FC = () => {
  const favorites = [];
  for (let i = 0; i < 4; i++) {
    favorites.push({image: placeHolder});
  }

  return (
    <FavoritesCloset>
      {favorites.map(favorite => (
        <FavoritesDrawer>
          <RoundIcon
            src={favorite.image}
            style={{width: '75px', height: '75px'}}
          ></RoundIcon>
        </FavoritesDrawer>
      ))}
    </FavoritesCloset>
  );
};

const FavoritesDrawer = styled.div`
  display: grid;
  background-color: ${BasicColor.brown};
  height: 85px;
  align-content: center;
  justify-content: center;
`;

const FavoritesCloset = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 7px;
  height: 85px;
  align-content: center;
  justify-content: center;
  background-color: ${BasicColor.darkBrown};
  @media screen and (min-width: ${ScreenSize.phone}) {
    display: none;
  }
`;
