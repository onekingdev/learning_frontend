import { FC, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components'
import {Card} from './Card'

interface CardPropArray {
  cards: {
    imgUrl: string
    alt?: string
    title?: string
    content?: string
    id: number
  }[]
}

const CardContainer: FC<CardPropArray> = ({ cards }) => {
  const [card, setCard] = useState(1)

  // This function is called from child, this is passed as prop to child component
  const callback = useCallback((id: number) => {
    setCard(id)
  }, [])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <StyledCardContainer >
        {
          cards.map((card) => (
            <Card title={card.title}
              key={card.title}
              content={card.content}
              id={card.id}
              openCardGroup={callback}
              imgUrl={card.imgUrl} />
          ))
        }
      </StyledCardContainer>
      <h1>{card}</h1>
    </div>
  )
}

export const CardCategory: FC = () => {

  const cardsData = [
    { id: 1, title: 'CARD 1', content: 'Clark Kent', imgUrl: 'https://unsplash.it/160/210' },
    { id: 2, title: 'CARD 2', content: 'Bruce Wayne', imgUrl: 'https://unsplash.it/161/210' },
    { id: 3, title: 'CARD 3', content: 'Peter Parker', imgUrl: 'https://unsplash.it/159/210' },
    { id: 4, title: 'CARD 4', content: 'Tony Stark', imgUrl: 'https://unsplash.it/160/211' },
    { id: 5, title: 'CARD 5', content: 'Reed Richards', imgUrl: 'https://unsplash.it/160/209' },
    { id: 6, title: 'CARD 6', content: 'Wade Wilson', imgUrl: 'https://unsplash.it/161/211' },
  ]


  useEffect(() => {
  }, []);

  return (
    <>
      <StyledContainer>
        <CardContainer cards={cardsData} />
      </StyledContainer>
    </>
  );
};


const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  margin: auto;
`
const StyledCardContainer = styled.div`
display: flex;
border-radius: 6px;
color: #333;
// background: #000;
padding: 1rem;
// box-shadow: 0 0 1rem #000 inset;
overflow-x: auto;
position: relative;

&::-webkit-scrollbar {
  // display: none;
}
`
