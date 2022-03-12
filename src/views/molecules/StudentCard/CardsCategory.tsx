/**
 * @author BruceLee
 * Component of buying collectible cards page
 */

import {FC, useEffect, useState} from 'react';
import styled from 'styled-components';
import {Card} from './Card';
import ReactLoading from 'react-loading';
import {ScreenSize} from '../../../constants/screenSize';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux'


// Get file storage link
import {
  buyCardsWithFilenames,
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
  const dispatch = useDispatch();

  const user = useSelector((state: any) => state.user);
  const student = useSelector((state: any) => state.student);

  // Toggle state when user clicks buy button to make sure send request again.
  const [buy, setBuy] = useState(false);

  // State to store currently selected card
  const [card, setCard] = useState('');
  const [cardId, setCardId] = useState(0);

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
    const cardPrice = cards.find(x => x.name === card)?.price
    setIsLoading(true);
    try{
      const names = await purchaseCardPack(cardId, student.id, user.token, dispatch, cardPrice ? cardPrice: 0);
      if (names.msg) {
        setPurchasedItems([]);
        console.log(names.msg);
      } else {
        await buyCardsWithFilenames(names, card, setPurchasedItems);
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

    // only fetch image data when current state card is set
    if (card) fetchData().catch(console.error);
  }, [buy]);

  useEffect(() => {
    // to avoid react error "Warning: Can't perform a React state update on an unmounted component."
    // Download files for category image links
    // getCardCategories(setCateItems, cards);
  },[cards])
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
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            price={card.price}
            buy={callback}
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
          purchasedItems.map((url: string, index: number) => (
            <BoughtCard key={index} imgUrl={url} />
          ))
        ) : null}
      </PurchasedCardsContainer>
    </div>
  );
};

export const CardCategory: FC = () => {
  const user = useSelector((state: any) => state.user);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let ignore = false;

    const fetchCategories = async () => {
      const names = await getCardPacksInfo(user.token);

      // make sure to update state when component is mounted.
      if(!ignore){
        if (names.msg) {
          setCategories([]);
          console.log('message:', names.msg);
        } else {
          setCategories(names);
          setLoading(false)
        }
      }
    };

    fetchCategories()
    return () => {
      ignore = true
    }
  }, []);

  return (
    <>
      {
        loading ?
        <LoadingContainer>
          <ReactLoading type="bars" color={BasicColor.green} />
        </LoadingContainer>
        :
        <CardContainer cards={categories} />
      }
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
