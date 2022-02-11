import { FC, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Card } from './Card';
import axios from 'axios';
import ReactLoading from 'react-loading'
import { ScreenSize } from '../../screenSize';

// Get file storage link
import { getBoughtCards, getCardCategories } from '../../../app/firebase';
import { BasicColor } from '../../Color';
import { BoughtCard } from './BoughtCard';

interface CardPropArray {
  cards: {
    category: string
    alt?: string
    title?: string
    content?: string
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
  const [isCateLoading, setIsCateLoading] = useState(false)
  const [cateItems, setCateItems] = useState([])

  // states used for bought cards
  const [buyLinks, setBuyLinks] = useState([])
  const [buyIds, setBuyIds] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  // This function is called from child, this is passed as prop to child component
  const callback = (category: string) => {
    setCard(category);
    setBuy(!buy)
  }

  // Get category images after u click one of category images.
  const fetchData = async () => {
    setIsLoading(true)
    await getBoughtCards(card, setBuyLinks, setBuyIds)
    setIsLoading(false)
  }

  useEffect(() => {
    // Download files for category image links
    getCardCategories(setCateItems)

    if(card)
    fetchData().catch(console.error)
  }, [buy]);

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 'auto' }}
    >

      <StyledCardContainer>
        {cards.map((card, index) => (
          <Card
            title={card.title}
            key={card.title}
            content={card.content}
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
            buyLinks.map(
              (
                (category, index) => (
                  <BoughtCard key={buyIds[index]} imgUrl={category} />
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
      title: 'CARD 1',
      content: 'Clark Kent',
      category: 'Dinosaur',
      price: 200,
    },
    {
      id: 2,
      title: 'CARD 2',
      content: 'Bruce Wayne',
      category: 'Dragon',
      price: 300,
    },
    {
      id: 3,
      title: 'CARD 3',
      content: 'Peter Parker',
      category: 'Healthcare',
      price: 400,
    },
    {
      id: 4,
      title: 'CARD 4',
      content: 'Tony Stark',
      category: 'Mythology',
      price: 500,
    },
    {
      id: 5,
      title: 'CARD 5',
      content: 'Reed Richards',
      category: 'President',
      price: 250,
    },
    {
      id: 6,
      title: 'CARD 6',
      content: 'Wade Wilson',
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
