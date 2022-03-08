/**
 * @author BruceLee
 * Component of selecteding collectible cards page
 */

import {FC, useRef, useEffect} from 'react';
import styled from 'styled-components';
import ReactLoading from 'react-loading';
import {ScreenSize} from '../../screenSize';
import {Gemcard} from './GemCard';
import {BasicColor} from 'views/Color';

interface TierCardProp {
  cards: {
    id: string;
    name: string;
    amount: number;
    image: string;
    owned: boolean;
    tier: string;
    description: string;
    category: {
      name: string;
    };
  }[];
}


export const TierCards: FC<TierCardProp> = ({cards}) => {
    // using ref to auto scroll to current component
    const loadingRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    useEffect(() => {
      if (loadingRef.current) {
        window.scrollTo({
          behavior: 'smooth',
          top: loadingRef.current.offsetTop + 500,
        });
      }
    }, [cards]);
  return (
    <Container>
      <p>{cards[0] ? cards[0].tier : null}</p>
      <GemCardsContainer ref={loadingRef}>
        {cards.map(card => {
          return (
            <Gemcard
              key={card.id}
              category={card.category.name}
              imgUrl={card.image}
              purchased={card.owned}
              amount={card.amount}
              name={card.name}
              description={card.description}
            />
          );
        })}
      </GemCardsContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    text-align: center;
    font-family: Montserrat;
    font-weight: 700;
    font-size: 20px;
  }
`;
const GemCardsContainer = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(6, 1fr);

  @media screen and (max-width: ${ScreenSize.tablet}) {
    margin-bottom: 10vh;
    grid-template-columns: repeat(2, 1fr);
    min-height: 20vh;
  }
`;
