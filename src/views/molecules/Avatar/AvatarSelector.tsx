import {FC} from 'react';
import {ScreenSize} from '../../screenSize';
import styled from 'styled-components';
import myAvatar from '../../assets/avatars/girl-11.svg';
import arrowLeft from '../../assets/arrows/arrowLeft.svg';
import arrowRight from '../../assets/arrows/arrowRight.svg';
import favoriteEnabled from '../../assets/favorite_enabled.svg';
import wardrobe from '../../assets/wardrobe.svg';
import {RoundIcon} from '../../atoms/Icon/Icon';

export const AvatarSelector: FC = () => {
  const favorites = [];
  for (let i = 0; i < 4; i++) {
    favorites.push({image: 'https://via.placeholder.com/75'});
  }
  return (
    <SelectorGrid>
      <LeftArrow src={arrowLeft}></LeftArrow>
      <CurrentAvatar src={myAvatar}></CurrentAvatar>
      <RightArrow src={arrowRight}></RightArrow>
      <FavoriteIcon src={favoriteEnabled}></FavoriteIcon>
      <BodyPartWardrobe src={wardrobe}></BodyPartWardrobe>
      <AvatarWardrobe src={wardrobe}></AvatarWardrobe>
      <FavoritesDrawer>
        {favorites.map(favorite => (
          <CenteredRoundIcon src={favorite.image}></CenteredRoundIcon>
        ))}
      </FavoritesDrawer>
    </SelectorGrid>
  );
};

const SelectorGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: auto;
  align-content: center;
  justify-content: center;
  margin-top: 15px;
  @media screen and (min-width: ${ScreenSize.phone}) {
    grid-template-columns: 2fr 1fr 2fr 1fr 2fr;
    grid-row: 2 / 3;
  }
  @media screen and (min-width: ${ScreenSize.tablet}) {
    grid-template-columns: 3fr 1fr 2fr 1fr 3fr;
    grid-row: 2 / 3;
  }
  @media screen and (min-width: ${ScreenSize.desktop}) {
    grid-template-columns: 2fr 100px 1fr 100px 2fr;
  }
`;

const CurrentAvatar = styled.img`
  width: 200px;
  margin: auto;
  @media screen and (min-width: ${ScreenSize.phone}) {
    grid-row: 1 / 2;
    grid-column: 3 / 4;
    width: 200px;
  }
`;

const LeftArrow = styled.img`
  width: 37px;
  margin: auto;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  @media screen and (min-width: ${ScreenSize.phone}) {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
  }
`;

const RightArrow = styled.img`
  width: 37px;
  margin: auto;
  grid-column: 3 / 4;
  grid-row: 1 / 2;
  @media screen and (min-width: ${ScreenSize.phone}) {
    grid-row: 1 / 2;
    grid-column: 4 / 5;
  }
`;

const FavoriteIcon = styled.img`
  position: relative;
  width: 50px;
  grid-column: 3 / 4;
  grid-row: 1 / 2;
  justify-self: start;
  align-self: end;
  @media screen and (min-width: ${ScreenSize.phone}) {
    grid-row: 1 / 2;
    grid-column: 3 / 4;
    justify-self: end;
  }
`;

const BodyPartWardrobe = styled.img`
  position: relative;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  justify-self: end;
  align-self: end;
  height: 110px;
  @media screen and (min-width: ${ScreenSize.phone}) {
    grid-row: 1 / 2;
    height: 100%;
    max-height: 480px;
  }
`;

const AvatarWardrobe = styled.img`
  display: none;
  justify-self: start;
  align-self: start;
  @media screen and (min-width: ${ScreenSize.phone}) {
    display: block;
    grid-row: 1 / 2;
    grid-column: 5 / 6;
    height: 100%;
    max-height: 480px;
  }
`;

const FavoritesDrawer = styled.div`
  display: none;
  @media screen and (min-width: ${ScreenSize.phone}) {
    grid-template-rows: repeat(4, 1fr);
    display: grid;
    align-content: center;
    justify-content: start;
    grid-row: 1 / 2;
    grid-column: 5 / 6;
  }
`;

const CenteredRoundIcon = styled(RoundIcon)`
  margin: auto;
  margin-left: calc(160px / 2 - 75px / 2);
`;
