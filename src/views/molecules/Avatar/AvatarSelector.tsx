import {FC, useEffect, useState} from 'react';
import {ScreenSize} from '../../screenSize';
import styled from 'styled-components';
import {BasicColor} from '../../Color';
import arrowLeft from '../../assets/arrows/arrowLeft.svg';
import arrowRight from '../../assets/arrows/arrowRight.svg';
import favoriteEnabled from '../../assets/favorite_enabled.svg';
import favoriteDisabled from '../../assets/favorite_disabled.svg';
import wardrobe from '../../assets/wardrobe.svg';
import {RoundIcon} from '../../atoms/Icon/Icon';
import drawer_accessories from '../../assets/drawers/drawer_accessories.png';
import drawer_hairs from '../../assets/drawers/drawer_hairs.png';
import drawer_clothes from '../../assets/drawers/drawer_clothes.png';
import drawer_pants from '../../assets/drawers/drawer_pants.png';
import data from '../../pages/Avatar/atoms';

export const AvatarSelector: FC = () => {
  const serverUrl = 'http://91.92.109.140/';
  const placeHolder = serverUrl + 'assets/avatars/placeholder.png';
  const {
    accessories,
    headers,
    bodies,
    footers,
  } = data;
  const accessories_max = accessories.length;
  const headers_max = headers.length;
  const bodies_max = bodies.length;
  const footers_max = footers.length;
  const [accessoryIndex, setAccessoryIndex] = useState(1);
  const [headerIndex, setHeaderIndex] = useState(1);
  const [bodyIndex, setBodyIndex] = useState(1);
  const [footerIndex, setFooterIndex] = useState(1);
  const [atomIndex, setAtomIndex] = useState(0);
  const [favoriteImage, setFavoriteImage] = useState(favoriteDisabled);
  const [accessoryFavorite, setAccessoryFavorite] = useState(placeHolder);
  const [headerFavorite, setHeaderFavorite] = useState(placeHolder);
  const [bodyFavorite, setBodyFavorite] = useState(placeHolder);
  const [footerFavorite, setFooterFavorite] = useState(placeHolder);
  const [iconSize, setIconSize] = useState(80);
  const width = window.screen.width;
  useEffect(() => {
    width > 420 ? setIconSize(80) : setIconSize(30);
    console.log(accessories);
  }, []);
  const currentAtomIndex = (val: any) => {
    setAtomIndex(val);
    switch (val) {
      case 1:
        accessoryFavorite === placeHolder
          ? setFavoriteImage(favoriteDisabled)
          : setFavoriteImage(favoriteEnabled);
        break;
      case 2:
        headerFavorite === placeHolder
          ? setFavoriteImage(favoriteDisabled)
          : setFavoriteImage(favoriteEnabled);
        break;
      case 3:
        bodyFavorite === placeHolder
          ? setFavoriteImage(favoriteDisabled)
          : setFavoriteImage(favoriteEnabled);
        break;
      case 4:
        footerFavorite === placeHolder
          ? setFavoriteImage(favoriteDisabled)
          : setFavoriteImage(favoriteEnabled);
        break;
    }
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
  const setFavorite = () => {
    switch (atomIndex) {
      case 1:
        setAccessoryFavorite(serverUrl + accessories[accessoryIndex].image);
        accessories[accessoryIndex].image === placeHolder
          ? setFavoriteImage(favoriteDisabled)
          : setFavoriteImage(favoriteEnabled);
        break;
      case 2:
        setHeaderFavorite(serverUrl + headers[headerIndex].image);
        headers[headerIndex].image === placeHolder
          ? setFavoriteImage(favoriteDisabled)
          : setFavoriteImage(favoriteEnabled);
        break;
      case 3:
        setBodyFavorite(serverUrl + bodies[bodyIndex].image);
        bodies[bodyIndex].image === placeHolder
          ? setFavoriteImage(favoriteDisabled)
          : setFavoriteImage(favoriteEnabled);
        break;
      case 4:
        setFooterFavorite(serverUrl + footers[footerIndex].image);
        footers[footerIndex].image === placeHolder
          ? setFavoriteImage(favoriteDisabled)
          : setFavoriteImage(favoriteEnabled);
        break;
    }
  };

  return (
    <AvatarModule>
      <FavoritesCloset>
        <MobileFavoritesDrawer>
          <RoundIcon
            src={accessoryFavorite}
            style={{width: '75px', height: '75px', background: '#fff'}}
          ></RoundIcon>
        </MobileFavoritesDrawer>
        <MobileFavoritesDrawer>
          <RoundIcon
            src={headerFavorite}
            style={{width: '75px', height: '75px', background: '#fff'}}
          ></RoundIcon>
        </MobileFavoritesDrawer>
        <MobileFavoritesDrawer>
          <RoundIcon
            src={bodyFavorite}
            style={{width: '75px', height: '75px', background: '#fff'}}
          ></RoundIcon>
        </MobileFavoritesDrawer>
        <MobileFavoritesDrawer>
          <RoundIcon
            src={footerFavorite}
            style={{width: '75px', height: '75px', background: '#fff'}}
          ></RoundIcon>
        </MobileFavoritesDrawer>
      </FavoritesCloset>
      <SelectorGrid>
        <LeftArrow onClick={currentIndexPrev} src={arrowLeft}></LeftArrow>
        <CurrentAvatar>
          <CurrentAccessory
            src={serverUrl + accessories[accessoryIndex].image}
            style={{
              width: accessories[accessoryIndex].scale * 160 + 'px',
              top: accessories[accessoryIndex].top + 'px',
              left: accessories[accessoryIndex].left + 'px',
            }}
          />
          <CurrentHeader
            src={serverUrl + headers[headerIndex].image}
            style={{
              width: headers[headerIndex].scale * 160 + 'px',
              top: headers[headerIndex].top + 'px',
              left: headers[headerIndex].left + 'px',
            }}
          />
          <CurrentBody src={serverUrl + bodies[bodyIndex].image} />
          <CurrentFooter src={serverUrl + footers[footerIndex].image} />
        </CurrentAvatar>
        <RightArrow onClick={currentIndexNext} src={arrowRight}></RightArrow>
        <FavoriteIcon onClick={setFavorite} src={favoriteImage}></FavoriteIcon>
        <BodyPartWardrobe src={wardrobe}></BodyPartWardrobe>
        <AtomsDrawer>
          <AtomsRoundIcon
            onClick={() => currentAtomIndex(1)}
            src={drawer_accessories}
            style={
              atomIndex === 1
                ? {
                    border: 'solid 3px red',
                    width: iconSize - 6 + 'px',
                    height: iconSize - 6 + 'px',
                  }
                : {border: 'solid 0px red'}
            }
          />
          <AtomsRoundIcon
            onClick={() => currentAtomIndex(2)}
            src={drawer_hairs}
            style={
              atomIndex === 2
                ? {
                    border: 'solid 3px red',
                    width: iconSize - 6 + 'px',
                    height: iconSize - 6 + 'px',
                  }
                : {border: 'solid 0px red'}
            }
          />
          <AtomsRoundIcon
            onClick={() => currentAtomIndex(3)}
            src={drawer_clothes}
            style={
              atomIndex === 3
                ? {
                    border: 'solid 3px red',
                    width: iconSize - 6 + 'px',
                    height: iconSize - 6 + 'px',
                  }
                : {border: 'solid 0px red'}
            }
          />
          <AtomsRoundIcon
            onClick={() => currentAtomIndex(4)}
            src={drawer_pants}
            style={
              atomIndex === 4
                ? {
                    border: 'solid 3px red',
                    width: iconSize - 6 + 'px',
                    height: iconSize - 6 + 'px',
                  }
                : {border: 'solid 0px red'}
            }
          />
        </AtomsDrawer>
        <AvatarWardrobe src={wardrobe}></AvatarWardrobe>
        <FavoritesDrawer>
          <CenteredRoundIcon src={accessoryFavorite}></CenteredRoundIcon>
          <CenteredRoundIcon src={headerFavorite}></CenteredRoundIcon>
          <CenteredRoundIcon src={bodyFavorite}></CenteredRoundIcon>
          <CenteredRoundIcon src={footerFavorite}></CenteredRoundIcon>
        </FavoritesDrawer>
      </SelectorGrid>
    </AvatarModule>
  );
};

const AvatarModule = styled.div``;

const SelectorGrid = styled.div`
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
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  @media screen and (min-width: ${ScreenSize.phone}) {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
  }
`;

const CurrentHeader = styled.img`
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

const CurrentBody = styled.img`
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

const CurrentFooter = styled.img`
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
    grid-column: 4 / 5;
    justify-self: start;
  }
`;

const BodyPartWardrobe = styled.img`
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

const AtomsDrawer = styled.div`
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
  background-color: #fff;
  width: 75px;
  height: 75px;
  padding: 5px;
  margin: auto;
  margin-left: calc(160px / 2 - 85px / 2);
  margin-right: calc(160px / 2 - 85px / 2);
`;

const AtomsRoundIcon = styled(RoundIcon)`
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

const MobileFavoritesDrawer = styled.div`
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
