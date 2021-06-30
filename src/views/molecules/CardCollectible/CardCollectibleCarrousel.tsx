import {FC} from 'react';
import styled from 'styled-components';
import arrowLeft from '../../assets/arrows/arrowLeft.svg';
import arrowRight from '../../assets/arrows/arrowRight.svg';
import {ScreenSize} from '../../screenSize';
import {CardCollectible} from './CardCollectible';

export const CardCollectibleCarrousel: FC = () => {
  const handleMoveRight = () => {
    const carousel = document.getElementById('carousel');
    if (carousel) {
      return (carousel.scrollLeft += carousel.offsetWidth);
    }
    return null;
  };
  const handleMoveLeft = () => {
    const carousel = document.getElementById('carousel');
    if (carousel) {
      return (carousel.scrollLeft -= carousel.offsetWidth);
    }
    return null;
  };

  return (
    <>
      <CarrouselContainer>
        <div>
          <LeftArrow src={arrowLeft} onClick={handleMoveLeft} />
        </div>
        <CardCarrousel id="carousel">
          <CardCollectible></CardCollectible>
          <CardCollectible></CardCollectible>
          <CardCollectible></CardCollectible>
          <CardCollectible></CardCollectible>
          <CardCollectible></CardCollectible>
          <CardCollectible></CardCollectible>
          <CardCollectible></CardCollectible>
          <CardCollectible></CardCollectible>
          <CardCollectible></CardCollectible>
        </CardCarrousel>
        <div>
          <RightArrow src={arrowRight} onClick={handleMoveRight} />
        </div>
      </CarrouselContainer>
    </>
  );
};

const CarrouselContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  @media screen and (min-width: ${ScreenSize.tablet}) {
    width: 80%;
  }
`;
const CardCarrousel = styled.div`
  display: flex;
  height: 230px;
  width: 100%;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0 auto;
  align-items: center;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  scroll-behavior: smooth;
  @media screen and (min-width: ${ScreenSize.tablet}) {
    height: 250px;
  }
`;

const LeftArrow = styled.img`
  width: 25px;
  margin: 0 15px;
  @media screen and (min-width: ${ScreenSize.tablet}) {
    width: 32px;
    margin: 0 20px;
  }
  @media screen and (min-width: ${ScreenSize.desktop}) {
    width: 40px;
    cursor: pointer;
    &: hover {
      transform: scale(1.1);
    }
  }
`;

const RightArrow = styled.img`
  width: 25px;
  margin: 0 15px;
  @media screen and (min-width: ${ScreenSize.tablet}) {
    width: 32px;
    margin: 0 20px;
  }
  @media screen and (min-width: ${ScreenSize.desktop}) {
    width: 40px;
    cursor: pointer;
    &: hover {
      transform: scale(1.1);
    }
   
    
`;
