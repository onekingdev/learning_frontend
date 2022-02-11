import React, { FC, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components'
import coin from '../../assets/coin.svg'
import { BasicColor } from '../../Color';
import { LSButton } from '../Setting/utils/Style';
import ReactLoading from 'react-loading'

type CardProps = {
  imgUrl: string
  category: string
  alt?: string
  title?: string
  content?: string
  id: number
  price: number
  buy: (imgUrl: string) => (void)
}

export const Card: FC<CardProps> = ({
  imgUrl, alt, title, content, id, buy, price, category
}) => {
  const onCardClick = () => {

    // This is prop from parent component, when card is clicked, this calls function of parent.
    buy(category)
  }
  return (
    <StyledCard >
      <StyledCardTitle>{category}</StyledCardTitle>
      {imgUrl ?
        <StyledImg src={imgUrl} alt={alt || 'Image'} />
        :
        <ReactLoading type='spinningBubbles' color={BasicColor.green} />}
      <PriceBadge price={price} />
      <StyledBgImg>
        <StyledP>BUY A PACK OF</StyledP>
        <StyledP>3 CARDS FOR</StyledP>
        <p style={{ fontSize: 20, fontWeight: 700, fontFamily: 'Montserrat' }}>${price}</p>
        <StyledBuyBtn onClick={() => onCardClick()}>BUY</StyledBuyBtn>
      </StyledBgImg>
      {/* <p>{content}</p> */}
    </StyledCard>
  )
}

interface PriceBadgeProps {
  price: number
}

const PriceBadge: FC<PriceBadgeProps> = ({
  price
}) => (
  <StyledPrice >
    <p style={{ color: 'white' }}>{price}</p>
    <img src={coin} style={{ height: 60, width: 60, fontFamily: 'Montserrat' }}
      alt={'coin'} />
  </StyledPrice>
)


const StyledCardTitle = styled.h2`
position: absolute;
top: 0;
display: flex;
width: 100%;
align-items: center;
justify-content: center;
text-align: center;
margin: 0px;
font-family: Montserrat;
color: white;
background-color: ${BasicColor.green};
`

const StyledCard = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 250px;
width: 160px;
min-width: 100px;
position: relative;
box-shadow: 0 1px 1rem -4px #000;
background: #fff;
margin: 1rem;
overflow: hidden;
border-radius: 6px;
transition: all 250ms ease-in-out;

&:hover {
  box-shadow: 0 4px 1rem -4px #000;
  transform: translateY(-5px);
  box-shadow: 5px 5px rgba(82, 119, 192, 0.4), 10px 10px rgba(82, 119, 192, 0.3),
    15px 15px rgba(82, 119, 192, 0.2), 20px 20px rgba(82, 119, 192, 0.1),
    25px 25px rgba(82, 119, 192, 0.05);
}
`
const StyledImg = styled.img`
  height: 100%;
  margin-top: 30px;
  object-fit: contain;
`

const StyledP = styled.p`
text-align: center;
font-weight: 700;
font-family: Montserrat;
margin: 0;
font-size: 15px;
`

const StyledBgImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  background: white;
  top: 30px;
  right: 0;
  left: 0;
  bottom: 0;
  opacity: 0;
  transition: opacity .5s;
  &:hover {
    opacity: 1;
  }
`
const StyledPrice = styled.div`
  font-family: Montserrat;
  background-color: ${BasicColor.blue};
  height: 40px;
  width: 100px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  object-fit: center;
  box-shadow: 0 1px 1rem -3px orange;
  position: absolute;
  bottom: 5px;
  right: 5px;
`

const StyledBuyBtn = styled.div`
  color: white;
  background-color: ${BasicColor.green};
  height: 40px;
  width: 100px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  font-family: Montserrat;
  justify-content: center;
  &:hover {
    box-shadow: 0 1px 1rem -3px orange;
    cursor: pointer;
    right: auto;
    transition: all 150ms ease-in-out;
    transform: translateY(-5px);
  }
`
