import { FC, useEffect } from 'react';
import styled from 'styled-components';
import { ScreenSize } from 'constants/screenSize';
import { BoughtCard } from './BoughtCard';
import { Container, Grid, Paper } from '@mui/material';
import { LoadingSpinner } from 'views/atoms/Spinner';
import { SCREEN_MOBILE } from 'constants/common';

interface PurchaseCardProps {
  cards: {
    id: number
    name: string
    image: string
    category: {
      id: number
      firebaseName: string
      name: string
    }
    description: {
      key: string
      value: string
    }[]
  }[]
}

export const PurchasedCards: FC<PurchaseCardProps> = ({ cards }) => {

  const isMobile = window.innerWidth > SCREEN_MOBILE ? false : true
  return (
    <Container>
      <Grid container spacing={2} justifyContent='center'>
        {
          cards.map((card: any) => (
            <Grid item key={card.id} >
              <BoughtCard imgName={card.image} firebaseName={card.category.firebaseName} description={card.description} />
            </Grid>
          ))
        }

      </Grid>
    </Container>

    // <PurchasedCardsContainer>

    //   {
    //     urls.map((url: string, index: number) => (
    //       <BoughtCard key={index} imgUrl={url} />
    //     ))
    //   }
    // </PurchasedCardsContainer>
  );
};

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
