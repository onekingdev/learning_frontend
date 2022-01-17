import styled from 'styled-components';
import {ScreenSize} from '../../../screenSize';
import {BasicColor} from '../../../Color';
import { RoundIcon } from '../../../atoms/Icon/Icon';

export const AvatarModule = styled.div``;

export const SelectorGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: auto;
  align-content: center;
  justify-content: center;
  margin-top: 100px;
  @media screen and (min-width: ${ScreenSize.phone}) {
    grid-template-columns: 2fr 1fr 2fr 1fr 2fr;
    grid-row: 2 / 3;
    margin-top: 20px;
  }
  @media screen and (min-width: ${ScreenSize.tablet}) {
    grid-template-columns: 3fr 1fr 2fr 1fr 3fr;
    grid-row: 2 / 3;
    margin-top: 20px;
  }
  @media screen and (min-width: ${ScreenSize.desktop}) {
    grid-template-columns: 2fr 100px 1fr 100px 2fr;
    margin-top: 20px;
  }
`;

export const CurrentAvatar = styled.div`
  width: 200px;
  margin: auto;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 138px 100px 130px;
  @media screen and (min-width: ${ScreenSize.phone}) {
    grid-row: 1 / 2;
    grid-column: 3 / 4;
    width: 200px;
  }
`;

export const CurrentAccessory = styled.img`
  margin: auto;
  position: relative;
  z-index: 999;
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  @media screen and (min-width: ${ScreenSize.phone}) {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
  }
`;

export const CurrentHeader = styled.img`
  position: relative;
  width: 160px;
  margin: auto;
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  @media screen and (min-width: ${ScreenSize.phone}) {
    width: 160px;
    grid-row: 1 / 2;
    grid-column: 1 / 2;
  }
`;

export const CurrentBody = styled.img`
  height: 100px;
  margin: auto;
  z-index: 99;
  grid-row: 2 / 3;
  grid-column: 1 / 2;
  @media screen and (min-width: ${ScreenSize.phone}) {
    height: 100px;
    grid-row: 2 / 3;
    grid-column: 1 / 2;
  }
`;

export const CurrentFooter = styled.img`
  height: 138px;
  margin: auto;
  grid-row: 3 / 4;
  grid-column: 1 / 2;
  @media screen and (min-width: ${ScreenSize.phone}) {
    height: 138px;
    grid-row: 3 / 4;
    grid-column: 1 / 2;
  }
`;

export const LeftArrow = styled.img`
  width: 37px;
  margin: auto;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  @media screen and (min-width: ${ScreenSize.phone}) {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
  }
`;

export const RightArrow = styled.img`
  width: 37px;
  margin: auto;
  grid-column: 3 / 4;
  grid-row: 1 / 2;
  @media screen and (min-width: ${ScreenSize.phone}) {
    grid-row: 1 / 2;
    grid-column: 4 / 5;
  }
`;

export const FavoriteIcon = styled.img`
  position: relative;
  width: 50px;
  grid-column: 3 / 4;
  grid-row: 1 / 2;
  justify-self: start;
  align-self: end;
  @media screen and (min-width: ${ScreenSize.phone}) {
    grid-row: 1 / 2;
    grid-column: 4 / 5;
    justify-self: start;
  }
`;

export const BodyPartWardrobe = styled.img`
  position: relative;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  justify-self: end;
  align-self: end;
  height: 130px;
  @media screen and (min-width: ${ScreenSize.phone}) {
    grid-row: 1 / 2;
    height: 100%;
    max-height: 480px;
  }
`;

export const AtomsDrawer = styled.div`
  grid-template-rows: repeat(4, 1fr);
  display: grid;
  align-content: center;
  justify-content: end;
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  z-index: 9;
  height: 130px;
  align-self: end;
  margin-right: 7px;
  @media screen and (min-width: ${ScreenSize.phone}) {
    grid-template-rows: repeat(4, 1fr);
    display: grid;
    align-content: center;
    justify-content: end;
    height: 480px;
    align-self: center;
    margin-right: 0;
  }
`;

export const AvatarWardrobe = styled.img`
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

export const FavoritesDrawer = styled.div`
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

export const CenteredRoundIcon = styled(RoundIcon)`
  background-color: #fff;
  width: 75px;
  height: 75px;
  padding: 5px;
  margin: auto;
  margin-left: calc(160px / 2 - 85px / 2);
  margin-right: calc(160px / 2 - 85px / 2);
`;

export const AtomsRoundIcon = styled(RoundIcon)`
  margin: auto;
  width: 30px;
  height: 30px;
  @media screen and (min-width: ${ScreenSize.phone}) {
    margin: auto;
    width: 80px;
    height: 80px;
    margin-left: calc(160px / 2 - 80px / 2);
    margin-right: calc(160px / 2 - 80px / 2);
  }
`;

export const MobileFavoritesDrawer = styled.div`
  display: grid;
  background-color: ${BasicColor.brown};
  height: 85px;
  align-content: center;
  justify-content: center;
`;

export const FavoritesCloset = styled.div`
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
