import { FC, useEffect, useState } from 'react';
import styled                      from 'styled-components';
import { useSelector }             from 'react-redux';
import { ScreenSize }              from 'constants/screenSize';
import { MyCard }                  from './MyCard';
import { Gems }                    from './Gems';
import {
  getCardPacksInfo,
  getCollectibleCards,
  getProgressPurchasedCount,
  getProgressTotalCount,
} from 'app/actions/collectibleActions';
import { TierCards } from './TierCards';
import { GemProgressBar } from './GemProgressBar';

interface CardPropArray {
  cards: {
    name: string;
    id: number;
    owned: boolean
    firebaseName: string
  }[];
}

const MyCardsCategory: FC<CardPropArray> = ({cards}) => {
  const user = useSelector((state: any) => state.user);

  // state to store all links for current category cards
  const [allCards, setAllCards] = useState<
    Array<{tier: string; category: {name: string}; owned: boolean}>
  >([]);

  // get all cards from server on page loading
  useEffect(() => {
    let ignore = false;
    const fetchUserOwnedCards = async () => {
      const collectibles = await getCollectibleCards(user.token);
      if (!ignore) {
        if (collectibles.msg) {
          setAllCards([]);
        } else {
          setAllCards(collectibles);
        }
      }
    };

    fetchUserOwnedCards();
    return () => {
      ignore = true;
    };
  }, []);

  // State to store currently selected card
  const [card, setCard] = useState('');

  // state to store all cards of given gem
  const [gemcards, setGemcards] = useState<Array<any>>([]);

  // set gem state when user clicks one of 4 gems
  const callbackGem = (gem: string) => {
    const tiers = allCards.filter(
      (gemcard: {tier: string; category: {name: string}}) => {
        return gemcard.tier === gem && gemcard.category.name === card;
      }
    );
    setGemcards(tiers);
  };

  // get total count and gained count of selected category, this is for progress bar
  const fetchProgressData = async (category: string) => {
    const card_id = cards.find(x => x.name === category)?.id;
    const total = await getProgressTotalCount(
      card_id ? card_id : 0,
      user.token
    );
    const purchased = await getProgressPurchasedCount(
      card_id ? card_id : 0,
      user.token
    );
    total.msg ? setTotalCount(0) : setTotalCount(total);
    purchased.msg ? setGainedCount(0) : setGainedCount(purchased);
  };

  const [gemActives, setGemActives] = useState<Array<boolean>>([]);
  const getGemActiveStatus = () => {
    const gemTitles = ['LEGENDARY', 'EPIC', 'RARE', 'COMMON'];
    const tempActives = [];
    for (const gemtitle of gemTitles) {
      const active: boolean = allCards.some(
        allcard => allcard.tier === gemtitle && allcard.owned === true
      );
      tempActives.push(active);
    }
    setGemActives(tempActives);
  };
  // This function is called from child, this is passed as prop to child component
  const callbackCardSelect = (category: string) => {
    setCard(category);
    setGemcards([]);
    fetchProgressData(category);
    getGemActiveStatus();
  };

  // states to store total purchased and current purchased amount
  const [gainedCount, setGainedCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);



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
        {cards.map((item) => (
          <MyCard
            key={item.id}
            select={callbackCardSelect}
            category={item.name}
            purchased={item.owned}
            isSelected={item.name === card}
            firebaseName={item.firebaseName}
          />
        ))}
      </StyledCardContainer>
      <GemProgressBar
        totalCount={totalCount}
        gainedCount={gainedCount}
        category={card}
      />
      <Gems select={callbackGem} actives={gemActives} />
      <TierCards cards={gemcards} />
    </div>
  );
};

export const MyCards: FC = () => {
  const user = useSelector((state: any) => state.user);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let ignore = false;
    const fetchCategories = async () => {
      const names = await getCardPacksInfo(user.token);
      if (!ignore) {
        if (names.msg) {
          setCategories([]);
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

  return <MyCardsCategory cards={categories} />;
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
