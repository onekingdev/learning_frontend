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
  getBoughtCards,
  getCardCategories,
} from 'app/firebase';
import {BasicColor} from '../../Color';
import {BoughtCard} from './BoughtCard';

import mutation from 'api/mutations/get';
import query from 'api/queries/get';
import {COLLECTIBLE_CATEGORY_QUERY} from 'api/queries/collectibles';
import {PURCHASE_CARD_PACK} from 'api/mutations/collectibles';
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

  // state used for card categories
  const [cateItems, setCateItems] = useState([]);

  // states used for bought cards
  const [purchasedItems, setPurchasedItems] = useState([]);

  // loading state for card categories
  const [isLoading, setIsLoading] = useState(false);

  // state to check whether it is mobile or desktop
  const [isMobile, setMobile] = useState(false)

  // This function is called from child, this is passed as prop to child component
  const callback = (category: string) => {
    setCard(category);

    // toggle state to make sure buy card every time user clicks buy button.
    setBuy(!buy);
  };

  // Get category images after u click one of category images.
  const fetchData = async (card: string) => {



    // window.addEventListener('resize', handleResize)
    setIsLoading(true);
    // send mutation for purchase
    // console.log('user:', user);
    // try {
    //   const res: any = await mutation(PURCHASE_CARD_PACK(9, 3, 1), user.token);
    //   const names = await res.json();
    //   if (names.data){
    //     await buyCardsWithFilenames(
    //       names.data.purchaseCollectiblePack,
    //       card,
    //       setPurchasedItems
    //     )
    //   }
    //   else {
    //     setPurchasedItems([])
    //   }
    // } catch (e) {
    //   console.log(e);
    // }
    // setIsLoading(false);
    // // Buy cards with file names
    // // const filenames = ['ARIES.png', 'ASTROID.png']
    // // buyCardsWithFilenames(names.data.purchaseCollectibleCategory, card, setPurchasedItems)

    // Get random 3 urls of current category
    await getBoughtCards(card, setPurchasedItems)
    setIsLoading(false);

  };

  useEffect(() => {

    const handleResize = () => {
      if(window.innerWidth > 767) {
        setMobile(false)
      } else setMobile(true)
    }
    // to avoid react error "Warning: Can't perform a React state update on an unmounted component."
    // Download files for category image links on component loading
    getCardCategories(setCateItems);
    handleResize()

    // only fetch image data when current state card is set
    if (card) fetchData(card).catch(console.error);
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
      <StyledCardContainer style={(isLoading || purchasedItems.length) && isMobile ? {display:'none'}:{}}>
        {cards.map((card, index) => (
          <Card
            key={index}
            id={card.id}
            price={200}
            buy={callback}
            imgUrl={cateItems[index]}
            category={card.name}
          />
        ))}
      </StyledCardContainer>
      <PurchasedCardsContainer >
        {isLoading && card ? (
          <div style={{display:'flex', justifyContent: 'center', width: '100%', gridColumnStart: 1, gridColumnEnd: 4, alignItems: 'center', height: '50vh'}}>

            <ReactLoading type="bars" color={BasicColor.green} />
          </div>
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
    const res: any = await query(
      'collectiblesCategory',
      COLLECTIBLE_CATEGORY_QUERY,
      user.token
    ).catch(e => ({success: false}));

    const result = await res.json();
    if (result.errors) {
      console.log('error:', result.errors);
      setCategories([]);
    } else {
      setCategories(result.data.collectiblesCategory);
    }
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
