import {FC} from 'react';
import styled from 'styled-components';
import {Title} from '../../atoms/Text/Title';
import {BasicColor} from '../../Color';
import {ScreenSize} from '../../screenSize';

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
    visibility: hidden;
  }
`;
