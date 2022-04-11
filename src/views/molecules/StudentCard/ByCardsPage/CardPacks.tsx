import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Card } from './Card';
import ReactLoading from 'react-loading';
import { ScreenSize } from 'constants/screenSize';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { buyCardsWithFilenames } from 'app/firebase';
import { BasicColor } from 'views/Color';
import { BoughtCard } from './BoughtCard';
import { purchaseCardPack } from 'app/actions/collectibleActions';
import { LoadingSpinner } from 'views/atoms/Spinner';
import { PurchasedCards } from './BoughtCards';
import { useSnackbar } from 'notistack';

interface CardPropArray {
  cards: {
    name: string;
    id: number;
    price: number;
    firebaseName: string
  }[];
}

export const CardPacks: FC<CardPropArray> = ({ cards }) => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const user = useSelector((state: any) => state.user);
  const student = useSelector((state: any) => state.student);

  // Toggle state when user clicks buy button to make sure send request again.
  const [buy, setBuy] = useState(false);

  // State to store currently selected card
  const [card, setCard] = useState('');
  const [cardId, setCardId] = useState(0);

  // states used for bought cards
  const [purchasedItems, setPurchasedItems] = useState<Array<any>>([]);

  // loading state for card categories
  const [isLoading, setIsLoading] = useState(false);

  // state to check whether it is mobile or desktop
  const [isMobile, setMobile] = useState(false);

  // This function is called from child, this is passed as prop to child component
  // const callback = (category: string, id: number, price: number) => {
  const callback = async (cateId: number, price: number) => {
    // setCard(category);
    // setCardId(id)
    // toggle state to make sure buy card every time user clicks buy button.
    // setBuy(!buy);
    console.log('purchase button clicked', cateId, price)
    setIsLoading(true);
    await purchaseCards(cateId, price)
    setIsLoading(false);
  };

  // Get category images after u click one of category images.
  const purchaseCards = async (cateId: number, price: number) => {
    try {
      const res = await purchaseCardPack(cateId, student.id, user.token, dispatch, price);
      if (res.msg) {
        setPurchasedItems([]);
        enqueueSnackbar(res.msg, { variant: 'error' })
      } else {
        setPurchasedItems(res)
        console.log(res)
        enqueueSnackbar('Card Purchase Success!', { variant: 'success' })
        // await buyCardsWithFilenames(res, card, setPurchasedItems);
      }
    } catch {
      setPurchasedItems([])
    }
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
    // if (card) purchaseCards().catch(console.error);
  }, []);

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
      // style={
      //   // (isLoading || purchasedItems.length) && isMobile
      //   isMobile ? { display: 'none' } : {}
      // }
      >
        {cards.map((card) => (
          <Card
            firebaseName={card.firebaseName}
            key={card.id}
            id={card.id}
            price={card.price}
            buy={callback}
            category={card.name}
          />
        ))}
      </StyledCardContainer>
      {
        isLoading ?
          <LoadingSpinner />
          :
          <PurchasedCards cards={purchasedItems} />
      }
    </div>
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
