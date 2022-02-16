/**
 * @author BruceLee
 * Component of buying collectible cards page
 */

import { FC, useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Card } from './Card';
import axios from 'axios';
import ReactLoading from 'react-loading'
import { ScreenSize } from '../../screenSize';

// Get file storage link
import { buyCardsWithFilenames, getBoughtCards, getCardCategories } from '../../../app/firebase';
import { BasicColor } from '../../Color';
import { BoughtCard } from './BoughtCard';

interface CardPropArray {
  cards: {
    category: string
    id: number
    price: number
  }[];
}

const CardContainer: FC<CardPropArray> = ({ cards }) => {

  // Toggle state when user clicks buy button to make sure send request again.
  const [buy, setBuy] = useState(false)

  // State to store currently selected card
  const [card, setCard] = useState('');

  // state used for card categories
  const [cateItems, setCateItems] = useState([])

  // states used for bought cards
  const [purchasedItems, setPurchasedItems] = useState([])

  // loading state for card categories
  const [isLoading, setIsLoading] = useState(false)

  // This function is called from child, this is passed as prop to child component
  const callback = (category: string) => {
    setCard(category);
    setBuy(!buy)
  }

  // Get category images after u click one of category images.
  const fetchData = async (card: string) => {
    setIsLoading(true)

    // Buy cards with file names
    // const filenames = ['ARIES.png', 'ASTROID.png']
    // const dirname = 'Space'
    // buyCardsWithFilenames(filenames, dirname, setPurchasedItems)

    // Get random 3 urls of current category
    await getBoughtCards(card, setPurchasedItems)
    setIsLoading(false)
  }

  useEffect(() => {
    // to avoid react error "Warning: Can't perform a React state update on an unmounted component."
    // Download files for category image links on component loading
    getCardCategories(setCateItems)

    // only fetch image data when current state card is set
    if (card)
      fetchData(card).catch(console.error)

  }, [buy]);

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 'auto' }}
    >
      <StyledCardContainer>
        {cards.map((card, index) => (
          <Card
            key={index}
            id={card.id}
            price={card.price}
            buy={callback}
            imgUrl={cateItems[index]}
            category={card.category}
          />
        ))}
      </StyledCardContainer>
      <div style={{ height: 300, display: 'flex', alignItems: 'center' }}>
        {
          isLoading && card ?
            <ReactLoading type='bars' color={BasicColor.green} /> :
            card ?
              purchasedItems.map(
                (
                  (category: string, index: number) => (
                    <BoughtCard key={index} imgUrl={category} />
                  )
                )
              )
              :
              <p>Please select card category you want to buy!</p>
        }
      </div>
    </div>
  );
};

export const CardCategory: FC = () => {
  const cardsData = [
    {
      id: 1,
      category: 'Dinosaur',
      price: 200,
    },
    {
      id: 2,
      category: 'Dragon',
      price: 300,
    },
    {
      id: 3,
      category: 'Healthcare',
      price: 400,
    },
    {
      id: 4,
      category: 'Mythology',
      price: 500,
    },
    {
      id: 5,
      category: 'President',
      price: 250,
    },
    {
      id: 6,
      category: 'Space',
      price: 350,
    },
  ];

  useEffect(() => { }, []);

  return (
    <>
      <CardContainer cards={cardsData} />
    </>
  );
};

const StyledCardContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: ${ScreenSize.tablet}) {
    margin: 0;
  }
`;
