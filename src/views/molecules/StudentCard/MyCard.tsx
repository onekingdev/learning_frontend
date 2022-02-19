import { FC } from 'react';
import styled from 'styled-components'
import { BasicColor } from '../../Color';
import ReactLoading from 'react-loading'

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
    <StyledCard style={ isSelected ? {boxShadow: '0px 1px 20px 0px #FB8500'} : {}}>
      <StyledCardTitle>{category}</StyledCardTitle>
      {imgUrl ?
        <StyledImg src={imgUrl} alt={'Category Image'} onClick={() => onCardSelect()}/>
        :
        <ReactLoading type='spinningBubbles' color={BasicColor.green} />}
    </StyledCard>
  )
}

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
height: 230px;
width: 160px;
min-width: 100px;
position: relative;
// box-shadow: 0 1px 1rem -4px #000;
background: #fff;
margin: 1rem;
overflow: hidden;
border-radius: 6px;
transition: all 250ms ease-in-out;

&:hover {
  transform: translateY(-5px);
}
`
const StyledImg = styled.img`
  height: 100%;
  margin-top: 30px;
  object-fit: contain;
`
