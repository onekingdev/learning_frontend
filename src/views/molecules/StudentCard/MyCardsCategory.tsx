/**
 * @author BruceLee
 * Component of selecteding collectible cards page
 */

import {FC, useCallback, useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import ReactLoading from 'react-loading';
import ProgressBar from '@ramonak/react-progress-bar';
import {ScreenSize} from '../../screenSize';

// Get file storage link
import {
  getCardBacks,
  getCardCategories,
  getGemCards,
} from '../../../app/firebase';
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
  const [cateBacks, setCateBacks] = useState([]);

  // This function is called from child, this is passed as prop to child component
  const callback = (category: string) => {
    setCard(category);
    // setGem('')
  };

  // This function is called from child, this is passed as prop to child component
  // set gem state when user clicks one of 4 gems, also send gql query to get image filenames
  const callbackGem = (gem: string) => {
    setGem(gem);

    // send Graphql query to get array of image file names
    filenames = ['', ''];
  };

  // Get gem images after u click one of gems.
  const fetchGemCards = async () => {
    setIsLoading(true);

    await getGemCards(card, gem, setGemcards);
    setIsLoading(false);
  };

  // Get gem images after u click one of gems.
  const fetchCateCards = async () => {
    // Get urls for images
    await getCardCategories(setCateItems);
    await getCardBacks(setCateBacks);
  };
  // download category images from firebase
  useEffect(() => {
    // to avoid react error "Warning: Can't perform a React state update on an unmounted component."
    // Download files for category image links on component loading
    fetchCateCards().catch(console.error)
  }, []);

  // set gem image links when gem is selected
  useEffect(() => {
    // send query to get all images and gained states of currently selected gem, for current user
    // request: card, gem
    // response array of {id:number, filename: string, purchased: boolean}

    // this is just for test

    fetchGemCards().catch(console.error);
  }, [gem, card]);

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
      <ProgressBarContainer >
        <div style={{width: '80%'}}>
          <StyledProgressLabel>
            {gainedCount}/{totalCount}
          </StyledProgressLabel>
          <div
            style={{
              border: 'solid 3px green',
              borderRadius: '50px',
              padding: '2px',
              margin: '5px',
              width: '100%'
            }}
          >
            <ProgressBar
              completed={gainedCount}
              width="100%"
              bgColor={BasicColor.green}
              baseBgColor={BasicColor.gray40}
              height="30px"
              maxCompleted={totalCount}
              isLabelVisible={false}
              animateOnRender={true}
            />
          </div>
        </div>
        <img src={cateBacks[cards.findIndex(item => item.category === card)]} style={{width: '60px', margin: '5px'}} />
      </ProgressBarContainer>
      <Gems select={callbackGem} />
      <div>
        {isLoading && card && gem ? (
          <div style={{margin: '5em'}}>
            <ReactLoading type="bars" color={BasicColor.green} />
          </div>
        ) : card && gem ? (
          <GemsContainer >
            {gemcards.map((card, index) => (
              <Gemcard
                key={index}
                imgUrl={card}
                purchased={index % 2 === 0 ? true : false}
              />
            ))}
          </GemsContainer>
        ) : <div style={{minHeight: 100}}></div>}
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
margin: 1rem;
position: relative;

@media screen and (max-width: ${ScreenSize.tablet}) {
  display: grid;
  width: 80vw;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
  padding: 0;
  margin: 0;
}
`;

const ProgressBarContainer = styled.div`
display: flex;
justify-content: space-evenly;
align-items: flex-end;
padding: 1rem;
margin: 1rem;
position: relative;
width: 40vw;
@media screen and (max-width: ${ScreenSize.tablet}) {
  flex-direction: column-reverse;
  width: 100%;
  align-items: center;
}
`;

const GemsContainer = styled.div`
display: grid;
place-items: center;
grid-template-columns: repeat(6, 1fr);

@media screen and (max-width: ${ScreenSize.tablet}) {
  margin-bottom: 10vh;
  grid-template-columns: repeat(3, 1fr);
  min-height: 20vh;
}
`;

const StyledProgressLabel = styled.p`
  font-family: Montserrat;
  text-align: end;
  margin: 0;
  font-weight: 700;
  margin-right: 3vw;
  @media screen and (max-width: ${ScreenSize.tablet}) {
    text-align: center;
    margin: 0;
  }
`;
