/**
 * @author BruceLee
 * Component of buying collectible cards page
 */

import {FC, useCallback, useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import {Card} from './Card';
import axios from 'axios';
import ReactLoading from 'react-loading';
import {ScreenSize} from '../../screenSize';
import {useSelector} from 'react-redux';

// Get file storage link
import {
  buyCardsWithFilenames,
  getCardCategories,
} from 'app/firebase';
import {BasicColor} from '../../Color';
import {BoughtCard} from './BoughtCard';

import {
  getCardPacksInfo,
  purchaseCardPack,
} from 'app/actions/collectibleActions';
interface CardPropArray {
  cards: {
    name: string;
    id: number;
    price: number;
  }[];
}

const CardContainer: FC<CardPropArray> = ({cards}) => {
  const user = useSelector((state: any) => state.user);

  // Toggle state when user clicks buy button to make sure send request again.
  const [buy, setBuy] = useState(false);

  // State to store currently selected card
  const [card, setCard] = useState('');
  const [cardId, setCardId] = useState(0);

  // state used for card categories
  const [cateItems, setCateItems] = useState([]);

  // states used for bought cards
  const [purchasedItems, setPurchasedItems] = useState([]);

  // loading state for card categories
  const [isLoading, setIsLoading] = useState(false);

  // state to check whether it is mobile or desktop
  const [isMobile, setMobile] = useState(false);

  // This function is called from child, this is passed as prop to child component
  const callback = (category: string, id: number) => {
    setCard(category);
    setCardId(id)
    // toggle state to make sure buy card every time user clicks buy button.
    setBuy(!buy);
  };

  // Get category images after u click one of category images.
  const fetchData = async () => {
    setIsLoading(true);
    try{
      console.log('user:', user)
      const names = await purchaseCardPack(cardId, 3, user.token);
      if (names.msg) {
        setPurchasedItems([]);
        console.log(names.msg);
      } else {
        await buyCardsWithFilenames(names.slice(0, 3), card, setPurchasedItems);
      }
    } catch{
      setPurchasedItems([])
    }
    setIsLoading(false);
  };

  useEffect(() => {

    // check device is mobile, do mobile view
    const handleResize = () => {
      if (window.innerWidth > 767) {
        setMobile(false);
      } else setMobile(true);
    };
    handleResize();

    // to avoid react error "Warning: Can't perform a React state update on an unmounted component."
    // Download files for category image links on component loading
    getCardCategories(setCateItems);

    // only fetch image data when current state card is set
    if (card) fetchData().catch(console.error);
  }, [buy]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 'auto',
      }}
    >
      <StyledCardContainer
        style={
          (isLoading || purchasedItems.length) && isMobile
            ? {display: 'none'}
            : {}
        }
      >
        {cards.map((card, index) => (
          <Card
            key={index}
            id={card.id}
            price={card.price}
            buy={callback}
            imgUrl={cateItems[index]}
            category={card.name}
          />
        ))}
      </StyledCardContainer>
      <PurchasedCardsContainer>
        {isLoading && card ? (
          <LoadingContainer>
            <ReactLoading type="bars" color={BasicColor.green} />
          </LoadingContainer>
        ) : purchasedItems && card ? (
          purchasedItems.map((category: string, index: number) => (
            <BoughtCard key={index} imgUrl={category} />
          ))
        ) : null}
      </PurchasedCardsContainer>
    </div>
  );
};

export const CardCategory: FC = () => {
  const user = useSelector((state: any) => state.user);
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    const names = await getCardPacksInfo(user.token);
    if (names.msg) {
      setCategories([]);
      console.log(names.msg);
    } else setCategories(names);
  };

  useEffect(() => {
    fetchCategories().catch(console.error);
  }, []);

  return (
    <>
      <CardContainer cards={categories} />
    </>
  );
};

const StyledCardContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  margin: 1rem;
  position: relative;

  @media screen and (max-width: ${ScreenSize.tablet}) {
    display: grid;
    width: 80vw;
    place-items: center;
    grid-template-columns: repeat(2, 1fr);
  }
`;
const PurchasedCardsContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  heigth: 300px;
  margin: 1rem;
  position: relative;
  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: ${ScreenSize.tablet}) {
    display: grid;
    width: 80vw;
    place-items: center;
    padding: 0;
    grid-template-columns: 1fr 1fr;
  }
`;
const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  grid-column-start: 1;
  grid-column-end: 4;
  alignItems: center;
  @media screen and (max-width: ${ScreenSize.tablet}) {
    height: 80vh;
  }
`;
