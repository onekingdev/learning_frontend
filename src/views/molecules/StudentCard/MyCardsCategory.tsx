/**
 * @author BruceLee
 * Component of selecteding collectible cards page
 */

import {FC, useCallback, useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ReactLoading from 'react-loading';
import ProgressBar from '@ramonak/react-progress-bar';
import {ScreenSize} from '../../screenSize';

// Get file storage link
import {getCardCategories, getGemCards} from '../../../app/firebase';
import {MyCard} from './MyCard';
import {BasicColor} from 'views/Color';
import {Gems} from './Gems';
import {Gemcard} from './GemCard';

interface CardPropArray {
  cards: {
    category: string;
    id: number;
    price: number;
  }[];
}

const MyCardsCategory: FC<CardPropArray> = ({cards}) => {
  // loading state for card categories
  const [isLoading, setIsLoading] = useState(false);

  // states to store total purchased and current purchased amount
  const [gainedCount, setGainedCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  // state to store all links for current category cards
  const [allCards, setAllCards] = useState([]);
  let filenames: Array<string> = [];

  // State to store currently selected card
  const [card, setCard] = useState('Dinosaur');

  // state to store currently selected gem title
  const [gem, setGem] = useState('');

  // state to store currently selected gem title
  const [gemcards, setGemcards] = useState([]);

  // state used for card categories
  const [cateItems, setCateItems] = useState([]);

  // state to store image links for img next to progress bar
  const [cateProgressImgs, setProgressImgs] = useState([]);

  // This function is called from child, this is passed as prop to child component
  const callback = (category: string) => {
    setCard(category);
  };

  // This function is called from child, this is passed as prop to child component
  // set gem state when user clicks one of 4 gems, also send gql query to get image filenames
  const callbackGem = (gem: string) => {
    setGem(gem);

    // send Graphql query to get array of image file names
    filenames = ['', ''];
  };

  // Get gem images after u click one of gems.
  const fetchData = async () => {
    setIsLoading(true);

    await getGemCards(card, gem, setGemcards);
    setIsLoading(false);
  };
  // download category images from firebase
  useEffect(() => {
    // to avoid react error "Warning: Can't perform a React state update on an unmounted component."
    // Download files for category image links on component loading
    getCardCategories(setCateItems);
  }, []);

  // set gem image links when gem is selected
  useEffect(() => {
    // send query to get all images and gained states of currently selected gem, for current user
    // request: card, gem
    // response array of {id:number, filename: string, purchased: boolean}

    // this is just for test

    fetchData().catch(console.error);
  }, [gem]);

  // get data for progress bar
  useEffect(() => {
    // get total count and gaid count with query
  }, [card]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 'auto',
      }}
    >
      <StyledCardContainer>
        {cards.map((item, index) => (
          <MyCard
            key={index}
            id={item.id}
            price={item.price}
            select={callback}
            imgUrl={cateItems[index]}
            category={item.category}
            isSelected={item.category === card}
          />
        ))}
      </StyledCardContainer>
      <div
        style={{
          width: '500px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}
      >
        <div>
          <StyledProgressLabel>
            {gainedCount}/{totalCount}
          </StyledProgressLabel>
          <div
            style={{
              border: 'solid 3px green',
              borderRadius: '50px',
              padding: '2px',
              margin: '5px',
            }}
          >
            <ProgressBar
              completed={gainedCount}
              width="20vw"
              bgColor={BasicColor.green}
              baseBgColor={BasicColor.gray40}
              height="40px"
              maxCompleted={totalCount}
              isLabelVisible={false}
              animateOnRender={true}
            />
          </div>
        </div>
        <img src={cateItems[0]} style={{width: '60px', margin: '5px'}} />
      </div>
      <Gems select={callbackGem} />
      <div

      >
        {isLoading && card && gem ? (
          <div style={{margin: '10em'}}>
            <ReactLoading type="bars" color={BasicColor.green} />
          </div>
        ) : card && gem ? (
          <div
          style={{
            display: 'grid',
            width: '80vw',
            placeItems: 'center',
            gridTemplateColumns: 'repeat(auto-fill, minmax(11rem, 1fr))',
          }}
          >
            {gemcards.map((card, index) => (
              <Gemcard key={index} imgUrl={card} purchased={index % 2 === 0 ? true : false}/>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export const MyCardCategory: FC = () => {
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

  useEffect(() => {}, []);

  return (
    <>
      <MyCardsCategory cards={cardsData} />
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

const StyledProgressLabel = styled.p`
  font-family: Montserrat;
  text-align: end;
  margin: 0;
  font-weight: 700;
  margin-right: 3vw;
`;
