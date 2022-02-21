import { FC } from 'react';
import styled from 'styled-components'
import { BasicColor } from '../../Color';
import ReactLoading from 'react-loading'
import {ScreenSize} from '../../screenSize';

type CardProps = {
  imgUrl: string
  category: string
  id: number
  price: number
  select: (imgUrl: string) => (void)
  isSelected?: boolean
}

export const MyCard: FC<CardProps> = ({
  imgUrl, id, select, price, category, isSelected
}) => {
  const onCardSelect = () => {

    // This is prop from parent component, when card is clicked, this calls function of parent.
    select(category)
  }
  return (
    <CardContainer style={ isSelected ? {boxShadow: '0px 1px 20px 0px #FB8500'} : {}}>
      <h2>{category}</h2>

    <StyledCard >
      {imgUrl ?
        <img src={imgUrl} alt={'Category Image'} onClick={() => onCardSelect()}/>
        :
        <ReactLoading type='spinningBubbles' color={BasicColor.green} />}
    </StyledCard>
    </CardContainer>
  )
}

const CardContainer = styled.div`
  width: 160px;
  min-height: 220px;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 1rem -4px #000;
  background: #fff;
  margin-top: 0;
  overflow: hidden;
  transition: all 250ms ease-in-out;

  h2 {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0px;
    font-family: Montserrat;
    color: white;
    background-color: ${BasicColor.green};
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 5px 5px rgba(82, 119, 192, 0.4),
      10px 10px rgba(82, 119, 192, 0.3), 15px 15px rgba(82, 119, 192, 0.2),
      20px 20px rgba(82, 119, 192, 0.1), 25px 25px rgba(82, 119, 192, 0.05);
  }

  @media screen and (max-width: ${ScreenSize.tablet}) {
    width: 35vw;
    min-height: 120px;
    h2 {
      font-size: 14px;
      height: 20px;
    }
    margin: 3vw;
  }
`;

const StyledCard = styled.div`
background: #fff;
position: relative;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
img {
  object-fit: fill;
  width: 100%;
  height: 100%;
}

`
