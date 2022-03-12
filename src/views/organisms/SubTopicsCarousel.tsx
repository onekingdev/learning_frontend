import {FC, useState} from 'react';
import styled from 'styled-components';
import {Header} from '../atoms/Text';
import {BasicColor} from '../Color';
import {SubTopicCard} from '../molecules/SubTopicCard';
import {ScreenSize} from '../../constants/screenSize';
import rightArrow from '../assets/right-arrow.svg';
import leftArrow from '../assets/left-arrow.svg';
import {useHistory} from 'react-router-dom';
import { ITopic } from '../../app/entities/block';
import { mutation } from '../../api/queries/get';
import { BLOCK_PRESENTATION_QUERY } from '../../api/queries/questions';

type SubTopicProps = {
  name: string;
  subTopics: ITopic[];
  id: string;
};

export const SubTopicsCarousel: FC<SubTopicProps> = ({name, subTopics,id}) => {
  const [blockPresentationId,setBlockPresentationId] = useState(String);
  const handleData = (data: any) => {
    setBlockPresentationId(data.data.createPathBlockPresentation.blockPresentation.id)
  }
  const handleError = (error: any) => {
    console.log(error)
  }
  const handleClick = (topicId:string) => {
    mutation(
      `createPathBlockPresentation(topicId:"${topicId}",studentId:1)`,
      'blockPresentation',
      `${BLOCK_PRESENTATION_QUERY}`,
      handleData,
      handleError
    )
    if(blockPresentationId){
      console.log(topicId,'topicId')
      console.log(blockPresentationId)
      history.push(`/question/presentation_${blockPresentationId}`)
    }
    else {
      console.log('Los Ids no coinciden')
    }
  }

  const handleMoveRight = () => {
    console.log(id)
    const carousel = document.getElementById(`${id}`);
    if (carousel) {
      return (carousel.scrollLeft += carousel.offsetWidth);
    }
    return;
  };
  const handleMoveLeft = () => {
    const carousel = document.getElementById(`${id}`);
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
          <Header isDark={true}>{name}</Header>
        </CarouselTitle>
        <CarouselContainer>
          <CarouselButton onClick={handleMoveLeft}>
            <img src={leftArrow} />
          </CarouselButton>
          <CarouselStyle id={id}>
            {subTopics.map((item: {name: string,id:string}, i:any) => (
              <SubTopicCard
                onClick={() => handleClick(item.id)}
                name={item.name}
                key={i}
              />
            ))}
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
