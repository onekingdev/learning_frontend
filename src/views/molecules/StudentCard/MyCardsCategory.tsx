/**
 * @author BruceLee
 * Component of selecteding collectible cards page
 */

import {FC, useCallback, useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';

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
import {getCardPacksInfo, getUserOwnedCards} from 'app/actions/collectibleActions';

interface CardPropArray {
  cards: {
    name: string;
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

  const student = useSelector((state: any) => state.student);
  const user = useSelector((state: any) => state.user);

  // state to store all links for current category cards
  const [allCards, setAllCards] = useState([]);

  useEffect(() => {
    let ignore = false
    const fetchUserOwnedCards = async () => {
      const filenames = await getUserOwnedCards(student.id, user.token);
      if(!ignore){
        if(filenames.msg){
          console.log('message from all cards:', filenames.msg)
          setAllCards([])
        } else {
          setAllCards(filenames)
          console.log('length of filenames:', filenames.length)
        }
      }
    }

    fetchUserOwnedCards()
    return () => {
      ignore = true
    }
  }, [])

  // State to store currently selected card
  const [card, setCard] = useState('Dinosaur');

  // state to store currently selected gem title
  const [gem, setGem] = useState('');

  // state to store currently selected gem title
  const [gemcards, setGemcards] = useState([]);

  // state used for card categories fore image and back image
  const [cateItems, setCateItems] = useState([]);
  const [cateBacks, setCateBacks] = useState([]);

  // Get gem images after u click one of gems.
  const fetchCateCards = async () => {
    // Get urls for images
    await getCardCategories(setCateItems, cards);
    await getCardBacks(setCateBacks, cards);
  };

  // download category images from firebase
  useEffect(() => {
    // Download files for category image links on component loading
    fetchCateCards().catch(console.error);
  }, [cards]);

  // This function is called from child, this is passed as prop to child component
  const callback = (category: string) => {
    setCard(category);
    // setGem('')
  };

  // This function is called from child, this is passed as prop to child component
  // set gem state when user clicks one of 4 gems, also send gql query to get image filenames
  let filenames: Array<string> = [];
  const callbackGem = (gem: string) => {
    setGem(gem);

    // const gemCards = allCards.filter((card:{tire: string}) => {
    //   return card.tire === gem
    // })

    // console.log(gemCards)

    // send Graphql query to get array of image file names
    filenames = ['', ''];
  };

  // Get gem images after u click one of gems.
  const fetchGemCards = async () => {
    setIsLoading(true);

    await getGemCards(card, gem, setGemcards);
    setIsLoading(false);
  };

  // set gem image links when gem is selected
  useEffect(() => {
    // send query to get all images and gained states of currently selected gem, for current user
    // request: card, gem
    // response array of {id:number, filename: string, purchased: boolean}

    // this is just for test

    fetchGemCards().catch(console.error);
  }, [gem, card]);

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
            category={item.name}
            isSelected={item.name === card}
          />
        ))}
      </StyledCardContainer>
      <ProgressBarContainer>
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
              width: '100%',
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
        <img
          src={cateBacks[cards.findIndex(item => item.name === card)]}
          style={{width: '60px', margin: '5px'}}
        />
      </ProgressBarContainer>
      <Gems select={callbackGem} />
      <div>
        {isLoading && card && gem ? (
          <div style={{margin: '5em'}}>
            <ReactLoading type="bars" color={BasicColor.green} />
          </div>
        ) : card && gem ? (
          <GemsContainer>
            {gemcards.map((card, index) => (
              <Gemcard
                key={index}
                imgUrl={card}
                purchased={index % 2 === 0 ? true : false}
              />
            ))}
          </GemsContainer>
        ) : (
          <div style={{minHeight: 100}}></div>
        )}
      </div>
    </div>
  );
};

export const MyCardCategory: FC = () => {
  const user = useSelector((state: any) => state.user);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let ignore = false;
    console.log('buy collection page is loading...');
    const fetchCategories = async () => {
      const names = await getCardPacksInfo(user.token);
      console.log('names:', names);
      if (!ignore) {
        if (names.msg) {
          setCategories([]);
          console.log('message:', names.msg);
        } else {
          setCategories(names);
        }
      }
    };

    fetchCategories();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <>
      <MyCardsCategory cards={categories} />
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
    grid-template-columns: repeat(2, 1fr);
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
