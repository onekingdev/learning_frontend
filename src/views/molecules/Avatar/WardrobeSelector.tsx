import {FC, useContext, useEffect, useState} from 'react';
import {ScreenSize} from '../../screenSize';
import styled from 'styled-components';
import {BasicColor} from '../../Color';
import wardrobe from '../../assets/wardrobe.svg';
import {RoundIcon} from '../../atoms/Icon/Icon';
import drawer_accessories from '../../assets/drawers/drawer_accessories.png';
import drawer_hairs from '../../assets/drawers/drawer_hairs.png';
import drawer_clothes from '../../assets/drawers/drawer_clothes.png';
import drawer_pants from '../../assets/drawers/drawer_pants.png';
import {accessories, headers, footers} from '../../pages/Avatar/atoms';
import {getAvatarAsset, getAvatarDir} from '../../../app/firebase';
import axios from 'axios';
import wardrobe_icon from '../../assets/wardrobe.png';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {
  setAvatar
} from 'app/actions';
import arrowUp from '../../assets/arrows/arrowUp.svg';
import priceflag from '../../assets/price-flag.svg';
import {LoadingContext} from 'react-router-loading';

// import data from '../../pages/Avatar/atoms';
export const WardrobeSelector: FC = () => {
  const loadingContext = useContext(LoadingContext);
  // const accessories_max = accessories.length;
  // const headers_max = headers.length;
  // const bodies_max = bodies.length;
  // const footers_max = footers.length;
  const dispatch = useDispatch();
  const [accessoryIndex, setAccessoryIndex] = useState(1);
  const [headerIndex, setHeaderIndex] = useState(1);
  const [bodyIndex, setBodyIndex] = useState(1);
  const [footerIndex, setFooterIndex] = useState(1);
  const [atomIndex, setAtomIndex] = useState(0);
  const [iconSize, setIconSize] = useState(80);
  const [atomSize, setAtomSize] = useState(113);
  const width = window.screen.width;

  const [accesoryRef, setAccesoryRef] = useState('');
  const [headRef, setHeadRef] = useState('');
  const [bodyRef, setBodyRef] = useState('');
  const [footRef, setFootRef] = useState('');

  const [accessories, setAccessories] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [bodies, setBodies] = useState([]);
  const [footers, setFooters] = useState([]);
  const selector = useSelector(store => store);

  useEffect(() => {
    const params = window.location.pathname.split('/')[2];

    switch (params) {
      case 'accessories':
        currentAtomIndex(1);
        break;
      case 'head':
        currentAtomIndex(2);
        break;
      case 'body':
        currentAtomIndex(3);
        break;
      case 'pants':
        currentAtomIndex(4);
        break;
      default:
        break;
    }
    console.log(params);

    getAvatarDir('accessories', setAccessories);
    getAvatarDir('heads', setHeaders);
    getAvatarDir('bodies', setBodies);
    getAvatarDir('pants', setFooters);

    axios({
      url: 'https://api.withsocrates.com/graphql/',
      method: 'post',
      data: {
        query: `
        {
          studentById(id: "1") {
            avatarAccessories {
                image
            }
            avatarHead {
              image
            }
            avatarClothes {
              image
            }
            avatarPants {
              image
            }
          }
        }
          `,
      },
    }).then((result: any) => {
      loadingContext.done();
      console.log('result', result.data.data);

      const accesory = result.data.data.studentById.avatarAccessories.image;
      const head = result.data.data.studentById.avatarHead.image;
      const body = result.data.data.studentById.avatarClothes.image;
      const foot = result.data.data.studentById.avatarPants.image;

      setAccesoryRef(accesory);
      setHeadRef(head);
      setBodyRef(body);
      setFootRef(foot);
    });
  }, []);
  console.log(selector);
  const setAccessory = (i: number) => {
    const head = accessories[i];
    setAccesoryRef(head);
  };

  const setHeader = (i: number) => {
    const head = headers[i];
    setHeadRef(head);
  };

  const setBody = (i: number) => {
    const head = bodies[i];
    setBodyRef(head);
  };

  const setFooter = (i: number) => {
    const head = footers[i];
    setFootRef(head);
  };

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
                onClick={() => {
                  setAccessory(i);
                  setAccessoryIndex(i);
                }}
                isSelected={accessoryIndex === i ? true: false}
              >
                <AtomImg src={item}/>
                <PriceContainer>
                  <PriceFlag src={priceflag}/>
                </PriceContainer>
              </WardrobeAtom>
            ))}
          </WardrobeScroll>
        );
      case 2:
        return (
          <WardrobeScroll>
            {headers.map((item, i) => (
              <WardrobeAtom
                onClick={() => {
                  setHeader(i);
                  setHeaderIndex(i);
                }}
                isSelected={headerIndex === i ? true: false}
              >
                <AtomImg
                  src={item}
                />
              </WardrobeAtom>
            ))}
          </WardrobeScroll>
        );
      case 3:
        return (
          <WardrobeScroll>
            {bodies.map((item: string, i: number) => (
              <WardrobeAtom
                onClick={() => {
                  setBodyIndex(i);
                  setBody(i);
                }}
                isSelected={bodyIndex === i ? true: false}
              >
                <AtomImg
                  src={item}
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
                onClick={() => {
                  setFooterIndex(i);
                  setFooter(i);
                }}
                isSelected={footerIndex === i ? true: false}
              >
                <AtomImg
                  src={item}
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
          <Link to="/avatar">
            <ToggleWardrobe src={wardrobe_icon} />
          </Link>
          <CurrentAccessory
            src={accesoryRef}
            style={{
              width: 1 * 160 + 'px',
              top: '-55px',
              left: '0px',
            }}
          />
          {console.log('header', headers)}
          <CurrentHeader
            src={headRef}
          />
          <CurrentBody src={bodyRef} />
          <CurrentFooter src={footRef} />
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
        <WardrobeDrawer>
          {renderSwitch(atomIndex)}
          <ArrowsContainer>
            <ArrowImage src={arrowUp}/>
          </ArrowsContainer>
        </WardrobeDrawer>
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
  z-index: 100;
  top: -50px;
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  @media screen and (min-width: ${ScreenSize.phone}) {
    width: 160px;
    grid-row: 1 / 2;
    grid-column: 1 / 2;
  }
`;

const CurrentBody = styled.img`
  height: 105px;
  margin: auto;
  z-index: 99;
  grid-row: 2 / 3;
  grid-column: 1 / 2;
  @media screen and (min-width: ${ScreenSize.phone}) {
    height: 105px;
    grid-row: 2 / 3;
    grid-column: 1 / 2;
  }
`;

const CurrentFooter = styled.img`
  height: 140px;
  margin: auto;
  grid-row: 3 / 4;
  grid-column: 1 / 2;
  @media screen and (min-width: ${ScreenSize.phone}) {
    height: 140px;
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
  height: 420px;
  align-self: end;
  margin: 10px 20px;
  @media screen and (min-width: ${ScreenSize.phone}) {  
    width: 90%;  
    max-width: 550px;
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: 1fr 60px;
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
  justify-items:center;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const WardrobeAtom = styled.div<{
  isSelected?:boolean
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 90%;
  background-color: ${props => props.isSelected ? BasicColor.gray40 : BasicColor.white};
  border: solid 8px ${props => props.isSelected ? BasicColor.greenSoft : BasicColor.white};
`;

const AtomImg = styled.img`
  margin: 0 auto;
  width: 80px;
  height: 80px;
`;

const PriceContainer = styled.div`
  width: 100%;
  position: relative;
`
const PriceFlag = styled.img`
  width:55px;
  height: 25px;
`

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

const ToggleWardrobe = styled.img`
  width: 50px;
`;

const ArrowsContainer = styled.div`
  width: 40px;
  display:grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
`;

const ArrowImage = styled.img`
  width:30px;
`
