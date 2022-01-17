import {FC, useEffect, useState} from 'react';
import {ScreenSize} from '../../screenSize';
import styled from 'styled-components';
import {BasicColor} from '../../Color';
import wardrobe from '../../assets/wardrobe.svg';
import {RoundIcon} from '../../atoms/Icon/Icon';
import drawer_accessories from '../../assets/drawers/drawer_accessories.png';
import drawer_hairs from '../../assets/drawers/drawer_hairs.png';
import drawer_clothes from '../../assets/drawers/drawer_clothes.png';
import drawer_pants from '../../assets/drawers/drawer_pants.png';
import {accessories, headers, bodies, footers} from '../../pages/Avatar/atoms';
// import data from '../../pages/Avatar/atoms';
export const WardrobeSelector: FC = () => {
  const serverUrl = 'http://91.92.109.140/';
  const placeHolder = serverUrl + 'assets/avatars/placeholder.png';
  const accessories_max = accessories.length;
  const headers_max = headers.length;
  const bodies_max = bodies.length;
  const footers_max = footers.length;

  const [accessoryIndex, setAccessoryIndex] = useState(1);
  const [headerIndex, setHeaderIndex] = useState(1);
  const [bodyIndex, setBodyIndex] = useState(1);
  const [footerIndex, setFooterIndex] = useState(1);
  const [atomIndex, setAtomIndex] = useState(0);
  const [iconSize, setIconSize] = useState(80);
  const [atomSize, setAtomSize] = useState(113);
  const width = window.screen.width;
  useEffect(() => {
    width > 420 ? setIconSize(80) : setIconSize(30);
    width > 420 ? setAtomSize(113) : setIconSize(83);
  }, []);
  const currentAtomIndex = (val: any) => {
    setAtomIndex(val);
  };

  const renderSwitch = (param: any) => {
    switch (param) {
      case 1:
        return (
          <WardrobeScroll>
            {accessories.map((item, i) => (
              <WardrobeAtom
                onClick={() => setAccessoryIndex(i)}
                style={
                  accessoryIndex === i
                    ? {
                        border: 'solid 5px red',
                        width: atomSize - 10 + 'px',
                        height: atomSize - 10 + 'px',
                        backgroundColor: '#ccc',
                      }
                    : {border: 'solid 0px red'}
                }
              >
                <AtomImg
                  src={serverUrl + item.image}
                  style={
                    accessoryIndex === i
                      ? {
                          width: atomSize - 20 + 'px',
                          height: atomSize - 20 + 'px',
                        }
                      : {
                          width: atomSize - 10 + 'px',
                          height: atomSize - 10 + 'px',
                        }
                  }
                />
              </WardrobeAtom>
            ))}
          </WardrobeScroll>
        );
      case 2:
        return (
          <WardrobeScroll>
            {headers.map((item, i) => (
              <WardrobeAtom
                onClick={() => setHeaderIndex(i)}
                style={
                  headerIndex === i
                    ? {
                        border: 'solid 5px red',
                        width: atomSize - 10 + 'px',
                        height: atomSize - 10 + 'px',
                        backgroundColor: '#ccc',
                      }
                    : {border: 'solid 0px red'}
                }
              >
                <AtomImg
                  src={serverUrl + item.image}
                  style={
                    headerIndex === i
                      ? {
                          width: atomSize - 20 + 'px',
                          height: atomSize - 20 + 'px',
                        }
                      : {
                          width: atomSize - 10 + 'px',
                          height: atomSize - 10 + 'px',
                        }
                  }
                />
              </WardrobeAtom>
            ))}
          </WardrobeScroll>
        );
      case 3:
        return (
          <WardrobeScroll>
            {bodies.map((item, i) => (
              <WardrobeAtom
                onClick={() => setBodyIndex(i)}
                style={
                  bodyIndex === i
                    ? {
                        border: 'solid 5px red',
                        width: atomSize - 10 + 'px',
                        height: atomSize - 10 + 'px',
                        backgroundColor: '#ccc',
                      }
                    : {border: 'solid 0px red'}
                }
              >
                <AtomImg
                  src={serverUrl + item.image}
                  style={
                    bodyIndex === i
                      ? {
                          width: atomSize - 20 + 'px',
                          height: atomSize - 20 + 'px',
                        }
                      : {
                          width: atomSize - 10 + 'px',
                          height: atomSize - 10 + 'px',
                        }
                  }
                />
              </WardrobeAtom>
            ))}
          </WardrobeScroll>
        );
      case 4:
        return (
          <WardrobeScroll>
            {footers.map((item, i) => (
              <WardrobeAtom
                onClick={() => setFooterIndex(i)}
                style={
                  footerIndex === i
                    ? {
                        border: 'solid 5px red',
                        width: atomSize - 10 + 'px',
                        height: atomSize - 10 + 'px',
                        backgroundColor: '#ccc',
                      }
                    : {border: 'solid 0px red'}
                }
              >
                <AtomImg
                  src={serverUrl + item.image}
                  style={
                    footerIndex === i
                      ? {
                          width: atomSize - 20 + 'px',
                          height: atomSize - 20 + 'px',
                        }
                      : {
                          width: atomSize - 10 + 'px',
                          height: atomSize - 10 + 'px',
                        }
                  }
                />
              </WardrobeAtom>
            ))}
          </WardrobeScroll>
        );
      default:
        return (
          <WardrobeScroll>
            {Array.from(Array(9), (e, i) => (
              <WardrobeAtom />
            ))}
          </WardrobeScroll>
        );
    }
  };

  return (
    <WardrobeModule>
      <SelectorGrid>
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
        <WardrobeDrawer>{renderSwitch(atomIndex)}</WardrobeDrawer>
      </SelectorGrid>
    </WardrobeModule>
  );
};

const WardrobeModule = styled.div``;

const SelectorGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: auto;
  align-content: center;
  justify-content: center;
  margin-top: 100px;
  @media screen and (min-width: ${ScreenSize.phone}) {
    grid-template-columns: 2fr 1fr 2fr;
    grid-row: 2 / 3;
    margin-top: 20px;
  }
  @media screen and (min-width: ${ScreenSize.tablet}) {
    grid-template-columns: 3fr 2fr 3fr;
    grid-row: 2 / 3;
    margin-top: 20px;
  }
  @media screen and (min-width: ${ScreenSize.desktop}) {
    grid-template-columns: 2fr 1fr 2fr;
    margin-top: 20px;
  }
`;

const CurrentAvatar = styled.div`
  width: 200px;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 138px 100px 130px;
  @media screen and (min-width: ${ScreenSize.phone}) {
    grid-row: 1 / 2;
    grid-column: 3 / 4;
    width: 200px;
    align-self: end;
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

const WardrobeDrawer = styled.div`
  display: none;
  background-color: #5c2b0c;
  width: 420px;
  height: 420px;
  align-self: end;
  margin: 10px 20px;
  @media screen and (min-width: ${ScreenSize.phone}) {
    grid-template-rows: repeat(4, 1fr);
    display: grid;
    align-content: center;
    justify-content: start;
    grid-row: 1 / 2;
    grid-column: 2 / 3;
  }
`;

const WardrobeScroll = styled.div`
  width: 400px;
  height: 400px;
  margin: 10px;
  display: grid;
  grid-template-columns: auto auto auto;
  max-height: 400px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const WardrobeAtom = styled.div`
  margin: auto;
  position: relative;
  z-index: 999;
  width: 113px;
  height: 113px;
  background-color: #fff;
  margin: 10px;
`;

const AtomImg = styled.img`
  margin: auto;
  position: relative;
  z-index: 999;
  width: 100px;
  height: 100px;
  margin: 5px;
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
