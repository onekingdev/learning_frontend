import {FC} from 'react';
import styled from 'styled-components';
import {Title} from '../../atoms/Text/Title';
import {BasicColor} from '../../Color';
import {ScreenSize} from '../../screenSize';
import ribbon from '../../assets/ribbon.svg';

export const AvatarFavoritesTitle: FC = () => {
  return (
    <FavoritesTitle>
      <Title isDark={true}>Your Favorites</Title>
    </FavoritesTitle>
  );
};

const FavoritesTitle = styled.div`
  display: grid;
  background-color: ${BasicColor.yellow};
  height: 100%;
  text-align: center;
  align-content: center;
  text-transform: uppercase;
  @media screen and (min-width: ${ScreenSize.phone}) {
    width: auto;
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    background-color: transparent;
    background-image: url(${ribbon});
    background-repeat: no-repeat;
    background-position: center;
  }
  @media screen and (min-width: ${ScreenSize.desktop}) {
    width: auto;
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    background-size: 400px 70px;
  }
`;
