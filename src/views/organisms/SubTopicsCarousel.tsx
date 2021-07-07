import {FC} from 'react';
import styled from 'styled-components';
import {Header} from '../atoms/Text/Header';
import {BasicColor} from '../Color';
import {SubTopicCard} from '../molecules/SubTopicCard';
import {ScreenSize} from '../screenSize';
import rightArrow from '../assets/right-arrow.svg';
import leftArrow from '../assets/left-arrow.svg';
import {useHistory} from 'react-router-dom';

type SubTopicProps = {
  name: string;
};

export const SubTopicsCarousel: FC<SubTopicProps> = ({name}) => {
  const handleMoveRight = () => {
    const carousel = document.getElementById(`${name}`);
    if (carousel) {
      return (carousel.scrollLeft += carousel.offsetWidth);
    }
    return;
  };
  const handleMoveLeft = () => {
    const carousel = document.getElementById(`${name}`);
    if (carousel) {
      return (carousel.scrollLeft -= carousel.offsetWidth);
    }
    return;
  };
  const history = useHistory();
  return (
    <>
      <SubTopicContainer>
        <CarouselTitle onClick={handleMoveRight}>
          <Header isDark={true}>Lorem ipsum dolor </Header>
        </CarouselTitle>
        <CarouselContainer>
          <CarouselButton onClick={handleMoveLeft}>
            <img src={leftArrow} />
          </CarouselButton>
          <CarouselStyle id={name}>
            <SubTopicCard onClick={() => history.push('/question')} />{' '}
            <SubTopicCard onClick={() => history.push('/question')} />{' '}
            <SubTopicCard onClick={() => history.push('/question')} />{' '}
            <SubTopicCard onClick={() => history.push('/question')} />
            <SubTopicCard onClick={() => history.push('/question')} />{' '}
            <SubTopicCard onClick={() => history.push('/question')} />{' '}
            <SubTopicCard onClick={() => history.push('/question')} />{' '}
            <SubTopicCard onClick={() => history.push('/question')} />
            <SubTopicCard onClick={() => history.push('/question')} />
            <SubTopicCard onClick={() => history.push('/question')} />
            <SubTopicCard onClick={() => history.push('/question')} />
            <SubTopicCard onClick={() => history.push('/question')} />
            <SubTopicCard onClick={() => history.push('/question')} />
            <SubTopicCard onClick={() => history.push('/question')} />{' '}
            <SubTopicCard onClick={() => history.push('/question')} />{' '}
            <SubTopicCard onClick={() => history.push('/question')} />{' '}
            <SubTopicCard onClick={() => history.push('/question')} />
            <SubTopicCard onClick={() => history.push('/question')} />{' '}
            <SubTopicCard onClick={() => history.push('/question')} />{' '}
            <SubTopicCard onClick={() => history.push('/question')} />{' '}
            <SubTopicCard onClick={() => history.push('/question')} />
            <SubTopicCard onClick={() => history.push('/question')} />{' '}
            <SubTopicCard onClick={() => history.push('/question')} />
            <SubTopicCard onClick={() => history.push('/question')} />
            <SubTopicCard onClick={() => history.push('/question')} />
            <SubTopicCard onClick={() => history.push('/question')} />
            <SubTopicCard onClick={() => history.push('/question')} />
            <SubTopicCard onClick={() => history.push('/question')} />
          </CarouselStyle>
          <CarouselButton onClick={handleMoveRight}>
            <img src={rightArrow} />
          </CarouselButton>
        </CarouselContainer>
      </SubTopicContainer>
    </>
  );
};

const SubTopicContainer = styled.div`
  width: 90%;
  margin: 30px auto;
  border-bottom: 1px solid ${BasicColor.black};
`;

const CarouselTitle = styled.div`
  margin: 20px 0;
  padding-left: 10px;
`;

const CarouselContainer = styled.div`
  display: flex;
  grid-gap: 10px;
`;

const CarouselStyle = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  overflow-x: scroll;
  scroll-behavior: smooth;
  grid-gap: 10px 15px;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (min-width: ${ScreenSize.tablet}) {
    height: 200px;
  }
`;
const CarouselButton = styled.div`
  display: none;

  @media screen and (min-width: ${ScreenSize.desktop}) {
    width: 50px;
    height: 160px;

    display: flex;
    justify-content: center;
    align-items: center;
    transform: scale(0.5);
    cursor: pointer;
    &: hover {
      transform: scale(0.7);
    }
  }
`;
