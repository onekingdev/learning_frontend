import {FC} from 'react';
import {ScreenSize} from '../../screenSize';
import styled from 'styled-components';
import myAvatar from '../../assets/avatars/girl-11.svg';
import arrowLeft from '../../assets/arrows/arrowLeft.svg';
import arrowRight from '../../assets/arrows/arrowRight.svg';
import favoriteEnabled from '../../assets/favorite_enabled.svg';
import wardrobe from '../../assets/wardrobe.svg';

export const AvatarSelector: FC = () => {
  return (
    <SelectorGrid>
      <LeftArrow src={arrowLeft}></LeftArrow>
      <CurrentAvatar src={myAvatar}></CurrentAvatar>
      <RightArrow src={arrowRight}></RightArrow>
      <FavoriteIcon src={favoriteEnabled}></FavoriteIcon>
      <Wardrobe src={wardrobe}></Wardrobe>
    </SelectorGrid>
  );
};

const SelectorGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: auto;
  align-content: center;
  justify-content: center;
  @media screen and (min-width: ${ScreenSize.phone}) {
    grid-template-columns: 2fr 1fr 2fr 1fr 2fr;
    grid-row: 2 / 3;
  }
`;

const CurrentAvatar = styled.img`
  width: 200px;
  margin: auto;
  @media screen and (min-width: ${ScreenSize.phone}) {
    grid-row: 1 / 2;
    grid-column: 3 / 4;
    width: 281px;
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
  width: 55px;
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

const Wardrobe = styled.img`
  position: relative;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  justify-self: end;
  align-self: end;
  height: 110px;
  @media screen and (min-width: ${ScreenSize.phone}) {
    grid-row: 1 / 2;
    height: 534px;
  }
`;
