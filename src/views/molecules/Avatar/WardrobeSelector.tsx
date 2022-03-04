import { FC, useContext, useEffect, useState } from 'react';
import { ScreenSize } from 'views/screenSize';
import styled from 'styled-components';
import { BasicColor } from 'views/Color';
import wardrobe from 'views/assets/wardrobe.svg';
import { RoundIcon } from 'views/atoms/Icon/Icon';
import drawer_accessories from 'views/assets/drawers/drawer_accessories.png';
import drawer_hairs from 'views/assets/drawers/drawer_hairs.png';
import drawer_clothes from 'views/assets/drawers/drawer_clothes.png';
import drawer_pants from 'views/assets/drawers/drawer_pants.png';
import wardrobe_icon from 'views/assets/wardrobe.png';
import register from 'views/assets/others/register.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAvatar } from 'app/actions';
import arrowUp from 'views/assets/arrows/arrowUp.svg';
import priceflag from 'views/assets/avatars/price-flag.png';
import { LoadingContext } from 'react-router-loading';
import { get } from 'api/queries/get';
import { AVATAR } from 'api/fragments/avatarFragments';
import { IAvatar } from 'app/entities/avatar';
import { AvatarSet } from './AvatarSet';
import IconButton from '@mui/material/IconButton';
import StarIcon from '@mui/icons-material/Star';
import { ColorPickerDropdown } from './ColorPickerDropdown';
import { numberWithCommas } from 'views/utils';

export const WardrobeSelector: FC = () => {
  const loadingContext = useContext(LoadingContext);
  const dispatch = useDispatch();
  const earning = useSelector((state: any) => state.earning);


  const [accessoryIndex, setAccessoryIndex] = useState(1);
  const [headerIndex, setHeaderIndex] = useState(1);
  const [bodyIndex, setBodyIndex] = useState(1);
  const [footerIndex, setFooterIndex] = useState(1);
  const [atomIndex, setAtomIndex] = useState(0);
  const [iconSize, setIconSize] = useState(80);
  const [atomSize, setAtomSize] = useState(113);
  const width = window.screen.width;
  const [avatarItems, setAvatarItems] = useState([]);

  const [accesoryRef, setAccesoryRef] = useState('');
  const [headRef, setHeadRef] = useState('');
  const [bodyRef, setBodyRef] = useState('');
  const [footRef, setFootRef] = useState('');

  const [accessoryPrice, setAccessoryPrice] = useState(0)
  const [headPrice, setHeadPrice] = useState(0)
  const [clothesPrice, setClothesPrice] = useState(0)
  const [pantsPrice, setPantsPrice] = useState(0)

  const [totalPrice, setTotalPrice] = useState(0)

  const [accessories, setAccessories] = useState<IAvatar[]>([]);
  const [headers, setHeaders] = useState<IAvatar[]>([]);
  const [bodies, setBodies] = useState<IAvatar[]>([]);
  const [footers, setFooters] = useState<IAvatar[]>([]);
  const selector = useSelector(store => store);

  const [skin, setSkin] = useState(0)

  const handleData = (data: any) => {
    setAvatarItems(data.data.avatars);
  };
  const handleError = (error: any) => {
    console.log(error);
  };

  const buyAvatarSet = () => {
    // sent buying action
    // get current wallet balance from redux
    // if it meets requirements, then send mutation and decrease wallet balance
    // else do nothing
    console.log(earning.balance > totalPrice)
    console.log('earning.balance > totalPrice')
  }

  const setFavorite = () => {
    console.log('set favorite')
  }

  const resetAvatarItems = () => {
    // sent buying action
    console.log('reset')
    setAccesoryRef('')
    setHeadRef('')
    setBodyRef('')
    setFootRef('')

    setAccessoryPrice(0)
    setHeadPrice(0)
    setClothesPrice(0)
    setPantsPrice(0)
  }

  useEffect(() => {
    setTotalPrice(+accessoryPrice + +headPrice + +clothesPrice + +pantsPrice);
  }, [accessoryPrice, headPrice, clothesPrice, pantsPrice])
  useEffect(() => {
    get('avatars', `{${AVATAR}}`, handleData, handleError);
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
  }, []);
  useEffect(() => {
    const accessoriesArray = avatarItems.filter(
      (item: any) => item.typeOf === 'ACCESSORIES'
    );
    const headersArray = avatarItems.filter(
      (item: any) => item.typeOf === 'HEAD'
    );
    const bodiesArray = avatarItems.filter(
      (item: any) => item.typeOf === 'CLOTHES'
    );
    const footersArray = avatarItems.filter(
      (item: any) => item.typeOf === 'PANTS'
    );
    setAccessories(accessoriesArray);
    setHeaders(headersArray);
    setBodies(bodiesArray);
    setFooters(footersArray);
    loadingContext.done();
  }, [avatarItems]);

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
            {accessories.map((item: any, i) => (
              <WardrobeAtom
                key={item.id}
                onClick={() => {
                  setAccesoryRef(accessories[i].image);
                  setAccessoryIndex(i);
                  setAccessoryPrice(item.price)
                }}
                isSelected={accessoryIndex === i ? true : false}
              >
                <AtomImg src={item.image} />
                <PriceContainer>
                  <PriceFlag src={priceflag} />
                  <Price>{Math.floor(item.price)}</Price>
                </PriceContainer>
              </WardrobeAtom>
            ))}
          </WardrobeScroll>
        );
      case 2:
        return (
          <WardrobeScroll>
            {headers.map((item: any, i) => (
              <WardrobeAtom
                key={item.id}
                onClick={() => {
                  setHeadRef(headers[i].image);
                  setHeaderIndex(i);
                  setHeadPrice(item.price)
                }}
                isSelected={headerIndex === i ? true : false}
              >
                <AtomImg src={item.image} />
                <PriceContainer>
                  <PriceFlag src={priceflag} />
                  <Price>{Math.floor(item.price)}</Price>
                </PriceContainer>
              </WardrobeAtom>
            ))}
          </WardrobeScroll>
        );
      case 3:
        return (
          <WardrobeScroll>
            {bodies.map((item: any, i: number) => (
              <WardrobeAtom
                key={item.id}
                onClick={() => {
                  setBodyIndex(i);
                  setBodyRef(bodies[i].image);
                  setClothesPrice(item.price)
                }}
                isSelected={bodyIndex === i ? true : false}
              >
                <AtomImg src={item.image} />
                <PriceContainer>
                  <PriceFlag src={priceflag} />
                  <Price>{Math.floor(item.price)}</Price>
                </PriceContainer>
              </WardrobeAtom>
            ))}
          </WardrobeScroll>
        );
      case 4:
        return (
          <WardrobeScroll>
            {footers.map((item: any, i) => (
              <WardrobeAtom
                key={item.id}
                onClick={() => {
                  setFooterIndex(i);
                  setFootRef(footers[i].image);
                  setPantsPrice(item.price)
                }}
                isSelected={footerIndex === i ? true : false}
              >
                <AtomImg src={item.image} />
                <PriceContainer>
                  <PriceFlag src={priceflag} />
                  <Price>{Math.floor(item.price)}</Price>
                </PriceContainer>
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
        <WardrobeContainer>
          <BodyPartWardrobe src={wardrobe} />
          <AtomsDrawer>
            <AtomsRoundIcon
              onClick={() => currentAtomIndex(1)}
              src={drawer_accessories}
              isSelected={atomIndex === 1 ? true : false}
            />
            <AtomsRoundIcon
              onClick={() => currentAtomIndex(2)}
              src={drawer_hairs}
              isSelected={atomIndex === 2 ? true : false}
            />
            <AtomsRoundIcon
              onClick={() => currentAtomIndex(3)}
              src={drawer_clothes}
              isSelected={atomIndex === 3 ? true : false}
            />
            <AtomsRoundIcon
              onClick={() => currentAtomIndex(4)}
              src={drawer_pants}
              isSelected={atomIndex === 4 ? true : false}
            />
          </AtomsDrawer>
        </WardrobeContainer>
        <WardrobeDrawer>
          {renderSwitch(atomIndex)}
          <ArrowsContainer>
            <ArrowImage src={arrowUp} />
          </ArrowsContainer>
        </WardrobeDrawer>
        <AvatarContainer >
          <div className='register'>
            <img src={register} onClick={resetAvatarItems}/>
            <TotalPrice>${numberWithCommas(totalPrice)}</TotalPrice>
          </div>
          <AvatarSet
            head={headRef}
            body={bodyRef}
            accessory={accesoryRef}
            pants={footRef}
            skin={skin}
          />
          <ColorPickerDropdown select={setSkin} />
          <div className='star'>
            <IconButton color='success' aria-label='set favorite' component='span' onClick={setFavorite}>
              {
                totalPrice === 0 && (headPrice || clothesPrice || pantsPrice || accessoryPrice) ?
                <Star /> :
                <Star className='disabled' />
              }
            </IconButton>
          </div>
          <div className='hanger'>

            <Link to={'/avatar'}>
              <ToggleWardrobe src={wardrobe_icon} />
            </Link>
            {
              earning.balance >= totalPrice ? (
                <Button onClick={buyAvatarSet} >Buy</Button>
              ) : <Button disabled>Buy</Button>
            }
          </div>
        </AvatarContainer>
      </SelectorGrid>
    </WardrobeModule>
  );
};

const WardrobeModule = styled.div`
  width: 90%
  margin: 0 auto;
`;

const Star = styled(StarIcon)`
  &.MuiSvgIcon-root  {
    transform: scale(1.5);
    fill: gold;
  }
  &.disabled {
    fill: gray;
    cursor: not-allowed;
    &.MuiSvgIcon-root  {
      transform: scale(1.5);
      fill: gray;
    }
  }
`

const SelectorGrid = styled.div`
  width: 100%;
  display: flex;
  align-items: end;
  justify-content: center;
  margin-top: 100px;
  @media screen and (min-width: ${ScreenSize.phone}) {
    margin-top: 20px;
  }
`;

const AvatarContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;

  .hanger {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }

  @media screen and (min-width: ${ScreenSize.desktop}) {
    flex-direction: column;
  }
  .register {
    display: flex;
    align-items: flex-end;

    img {
      &:hover {
        cursor: pointer;
        z-index: 10;
      }
    }

  }

  .star {
    position: absolute;
    bottom: 70px;
    right: 0;
  }
`;

const WardrobeContainer = styled.div`
  position: relative;
`;
const BodyPartWardrobe = styled.img`
  top: 0;
  position: absolute;
  z-index: -1;
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
  height: 480px;
  margin-right: 0;
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
  width: 450px;
  height: 400px;
  margin: 10px;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const WardrobeAtom = styled.div<{
  isSelected?: boolean;
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 110px;
  background-color: ${props =>
    props.isSelected ? BasicColor.gray40 : BasicColor.white};
  border: solid 8px
    ${props => (props.isSelected ? BasicColor.greenSoft : BasicColor.white)};
`;

const AtomImg = styled.img`
  margin: 0 auto;
  margin-top: 6px;
  width: 90%;
  height: 80px;
`;

const PriceContainer = styled.div`
  width: 100%;
  height: 25px;
  position: relative;
`;
const PriceFlag = styled.img`
  width: 80px;
  height: 25px;
  position: absolute;
  left: -8px;
`;

const Price = styled.p`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  font-family: QuickSand;
  font-size: 20px;
  font-weight: 400;
`;

const AtomsRoundIcon = styled(RoundIcon) <{
  isSelected: boolean;
}>`
  margin: auto;
  border: ${props => (props.isSelected ? 'solid 3px red' : 'none')};
  width: ${props => (props.isSelected ? '24px' : '30px')};
  height: ${props => (props.isSelected ? '24px' : '30px')};
  @media screen and (min-width: ${ScreenSize.phone}) {
    margin: auto;
    width: ${props => (props.isSelected ? '74px' : '80px')};
    height: ${props => (props.isSelected ? '74px' : '80px')};
    margin-left: calc(160px / 2 - 80px / 2);
    margin-right: calc(160px / 2 - 80px / 2);
  }
`;

const ToggleWardrobe = styled.img`
  width: 50px;
`;

const ArrowsContainer = styled.div`
  width: 40px;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
`;

const ArrowImage = styled.img`
  width: 30px;
`;
const TotalPrice = styled.p`
background: blue;
color: white;
background: #1771B9;
padding: 5px 20px;
width: 70px;
font-family: QuickSand;
text-align: center;
`;


const Button = styled.button`
  border: none;
  width: 100px;
  height: 40px;
  background: #FFB703;
  color: black;
  border-radius: 20px;
  cursor: pointer;
  transition: all 250ms ease-in-out;

  &:hover {
    box-shadow: 0 4px 1rem -4px #000;
  }
  @media screen and (max-width: ${ScreenSize.tablet}) {
    position: inherit;
    z-index: 1;
  }

  &:disabled {
    background: #dddddd;
    &:hover {
      box-shadow: none;
      cursor: not-allowed;
    }
  }
`;
