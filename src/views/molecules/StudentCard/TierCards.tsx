/**
 * @author BruceLee
 * Component of selecteding collectible cards page
 */

import {FC, useEffect, useState} from 'react';
import styled from 'styled-components';
// import usePromise from 'promise-hook'
import {getDownUrlByFilename} from 'app/firebase';

import ReactLoading from 'react-loading';
import {ScreenSize} from '../../screenSize';
import {Gemcard} from './GemCard';
import {BasicColor} from 'views/Color';

interface TierCardProp {
  cards: {
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
  title: string
}

export const TierCards: FC<TierCardProp> = ({cards, title}) => {
  const [urls, setUrls] = useState<Array<string>>([]);
  const [loading, setLoading] = useState(false);



  const fetchFirebaseUrls = async () => {
    setLoading(true);
    const firebaseUrls = [];

    // const myurls = cards.map(async card => await getDownUrlByFilename(card))
    for (const card of cards) {
      firebaseUrls.push(await getDownUrlByFilename(card));
    }

    setUrls(firebaseUrls);
    setLoading(false);
  };

  useEffect(() => {
    fetchFirebaseUrls();
  }, [cards]);

  return (
    <Container >
      <p>{title}</p>
      {loading ? (
        <ReactLoading
          type="spinningBubbles"
          color={BasicColor.green}
          height={200}
        />
      ) : (
        <GemCardsContainer>
          {cards.map((card, index) => {
            return (
              <Gemcard
                key={index}
                imgUrl={urls[index]}
                purchased={card.owned}
                amount={card.amount}
                name={card.name}
                description={card.description}
              />
            );
          })}
        </GemCardsContainer>
      )}
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
`
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
