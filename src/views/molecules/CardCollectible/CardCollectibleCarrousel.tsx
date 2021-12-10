import {FC, useEffect, useState} from 'react';
import styled from 'styled-components';
import arrowLeft from '../../assets/arrows/arrowLeft.svg';
import arrowRight from '../../assets/arrows/arrowRight.svg';
import {ScreenSize} from '../../screenSize';
import {CardCollectible} from './CardCollectible';
import {get} from '../../../api/queries/get';
import {COLLECTIBLE} from '../../../api/fragments/progressFragments';
import {useParams, useHistory} from 'react-router-dom';

type CarouselProps = {
  onClick?: () => void;
};

interface RouteCollectibleParams {
  categoryId: string;
}

export const CardCollectibleCarrousel: FC<CarouselProps> = ({onClick}) => {
  const [collectibles, getCollectibles] = useState([]);
  const {categoryId} = useParams<RouteCollectibleParams>();
  const history = useHistory();
  const handleData = (data: any) => {
    console.log(data);
    getCollectibles(data.data.collectibles);
  };
  const handleError = (error: any) => {
    console.error(error);
  };

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

  const handleClick = (item: any) => {
    history.push(`/collectibles/category_${categoryId}/${item.id}`);
  };

  useEffect(() => {
    get('collectibles', `{${COLLECTIBLE}}`, handleData, handleError);
  }, []);

  return (
    <>
      <CarrouselContainer>
        <div>
          <LeftArrow src={arrowLeft} onClick={handleMoveLeft} />
        </div>
        <CardCarrousel id="carousel">
          {collectibles.map((item: {image: ''}, i: any) => (
            <CardCollectible
              onClick={() => handleClick(item)}
              image={`http://143.244.183.24/media/${item.image}`}
              key={i}
            />
          ))}
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
  @media screen and (min-width: ${ScreenSize.desktop}) {
    width: 80%;
  }
`;

const LeftArrow = styled.img`
  display: none;
  @media screen and (min-width: ${ScreenSize.desktop}) {
    width: 40px;
    display: initial;
    cursor: pointer;
    margin: 0 20px;
    &: hover {
      transform: scale(1.1);
    }
  }
`;

const RightArrow = styled.img`
  display: none;
  @media screen and (min-width: ${ScreenSize.desktop}) {
    width: 40px;
    display: initial;
    cursor: pointer;
    margin: 0 20px;
    &: hover {
      transform: scale(1.1);
    }
  }
`;
