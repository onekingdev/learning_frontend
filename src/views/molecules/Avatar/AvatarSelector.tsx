import {FC, useEffect, useState} from 'react';
import {ScreenSize} from '../../screenSize';
import styled from 'styled-components';
import myAvatar from '../../assets/avatars/girl-11.svg';
import arrowLeft from '../../assets/arrows/arrowLeft.svg';
import arrowRight from '../../assets/arrows/arrowRight.svg';
import favoriteEnabled from '../../assets/favorite_enabled.svg';
import wardrobe from '../../assets/wardrobe.svg';
import {RoundIcon} from '../../atoms/Icon/Icon';
import drawer_accessories from '../../assets/drawers/drawer_accessories.png';
import drawer_hairs from '../../assets/drawers/drawer_hairs.png';
import drawer_clothes from '../../assets/drawers/drawer_clothes.png';
import drawer_pants from '../../assets/drawers/drawer_pants.png';

type AvatarSelectorProps = {
  accessories: any[];
  headers: any[];
  bodies: any[];
  footers: any[];
};

export const AvatarSelector: FC<AvatarSelectorProps> = ({
  accessories,
  headers,
  bodies,
  footers,
}) => {
  const favorites = [];
  for (let i = 0; i < 4; i++) {
    favorites.push({image: 'https://via.placeholder.com/75'});
  }
  const accessories_max = accessories.length;
  const headers_max = headers.length;
  const bodies_max = bodies.length;
  const footers_max = footers.length;
  const [accessoryIndex, setAccessoryIndex] = useState(1);
  const [headerIndex, setHeaderIndex] = useState(1);
  const [bodyIndex, setBodyIndex] = useState(1);
  const [footerIndex, setFooterIndex] = useState(1);
  const [atomIndex, setAtomIndex] = useState(0);
  const currentAtomIndex = (val: any) => {
    setAtomIndex(val);
    console.log('Current Atom Index', val);
  };
  const currentIndexNext = () => {
    switch (atomIndex) {
      case 1:
        accessoryIndex + 1 < accessories_max
          ? setAccessoryIndex(accessoryIndex + 1)
          : null;
        break;
      case 2:
        headerIndex + 1 < headers_max ? setHeaderIndex(headerIndex + 1) : null;
        break;
      case 3:
        bodyIndex + 1 < bodies_max ? setBodyIndex(bodyIndex + 1) : null;
        break;
      case 4:
        footerIndex + 1 < footers_max ? setFooterIndex(footerIndex + 1) : null;
        break;
    }
  };
  const currentIndexPrev = () => {
    switch (atomIndex) {
      case 1:
        accessoryIndex - 1 < 0 ? null : setAccessoryIndex(accessoryIndex - 1);
        break;
      case 2:
        headerIndex - 1 < 0 ? null : setHeaderIndex(headerIndex - 1);
        break;
      case 3:
        bodyIndex - 1 < 0 ? null : setBodyIndex(bodyIndex - 1);
        break;
      case 4:
        footerIndex - 1 < 0 ? null : setFooterIndex(footerIndex - 1);
        break;
    }
  };
  return (
    <SelectorGrid>
      <LeftArrow onClick={currentIndexPrev} src={arrowLeft}></LeftArrow>
      <CurrentAvatar>
        <CurrentAccessory
          src={accessories[accessoryIndex].image}
          style={{
            width: accessories[accessoryIndex].scale * 160 + 'px',
            top: accessories[accessoryIndex].top + 'px',
            left: accessories[accessoryIndex].left + 'px',
          }}
        />
        <CurrentHeader
          src={headers[headerIndex].image}
          style={{
            width: headers[headerIndex].scale * 160 + 'px',
            top: headers[headerIndex].top + 'px',
            left: headers[headerIndex].left + 'px',
          }}
        />
        <CurrentBody src={bodies[bodyIndex].image} />
        <CurrentFooter src={footers[footerIndex].image} />
      </CurrentAvatar>
      <RightArrow onClick={currentIndexNext} src={arrowRight}></RightArrow>
      <FavoriteIcon src={favoriteEnabled}></FavoriteIcon>
      <BodyPartWardrobe src={wardrobe}></BodyPartWardrobe>
      <AtomsDrawer>
        <AtomsRoundIcon
          onClick={() => currentAtomIndex(1)}
          src={drawer_accessories}
          style={
            atomIndex === 1
              ? {border: 'solid 3px red'}
              : {border: 'solid 0px red'}
          }
        />
        <AtomsRoundIcon
          onClick={() => currentAtomIndex(2)}
          src={drawer_hairs}
          style={
            atomIndex === 2
              ? {border: 'solid 3px red'}
              : {border: 'solid 0px red'}
          }
        />
        <AtomsRoundIcon
          onClick={() => currentAtomIndex(3)}
          src={drawer_clothes}
          style={
            atomIndex === 3
              ? {border: 'solid 3px red'}
              : {border: 'solid 0px red'}
          }
        />
        <AtomsRoundIcon
          onClick={() => currentAtomIndex(4)}
          src={drawer_pants}
          style={
            atomIndex === 4
              ? {border: 'solid 3px red'}
              : {border: 'solid 0px red'}
          }
        />
      </AtomsDrawer>
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

const CurrentAvatar = styled.div`
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

const CurrentAccessory = styled.img`
  margin: auto;
  position: relative;
  z-index: 999;
  @media screen and (min-width: ${ScreenSize.phone}) {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
  }
`;

const CurrentHeader = styled.img`
  position: relative;
  width: 160px;
  margin: auto;
  @media screen and (min-width: ${ScreenSize.phone}) {
    width: 160px;
    grid-row: 1 / 2;
    grid-column: 1 / 2;
  }
`;

const CurrentBody = styled.img`
  height: 100px;
  margin: auto;
  z-index: 99;
  @media screen and (min-width: ${ScreenSize.phone}) {
    height: 100px;
    grid-row: 2 / 3;
    grid-column: 1 / 2;
  }
`;

const CurrentFooter = styled.img`
  height: 138px;
  margin: auto;
  @media screen and (min-width: ${ScreenSize.phone}) {
    height: 138px;
    grid-row: 3 / 4;
    grid-column: 1 / 2;
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

const AtomsDrawer = styled.div`
  display: none;
  @media screen and (min-width: ${ScreenSize.phone}) {
    grid-template-rows: repeat(4, 1fr);
    display: grid;
    align-content: center;
    justify-content: end;
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    z-index: 9;
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
  margin-right: calc(160px / 2 - 75px / 2);
`;

const AtomsRoundIcon = styled(RoundIcon)`
  margin: auto;
  width: 80px;
  height: 80px;
  margin-left: calc(160px / 2 - 86px / 2);
  margin-right: calc(160px / 2 - 86px / 2);
`;
