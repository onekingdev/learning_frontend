import { FC, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components'

type CardProps = {
  imgUrl: string
  alt?: string
  title?: string
  content?: string
  id: number
  openCardGroup: (id: number) => (void)
}

export const Card: FC<CardProps> = ({
  imgUrl, alt, title, content, id, openCardGroup
}) => {
  const onCardClick = () => {

    // This is prop from parent component, when card is clicked, this calls function of parent.
    openCardGroup(id)
  }
  return (
    <StyledCard onClick={() => onCardClick()} >
      <img src={imgUrl}
        alt={alt || 'Image'} />
      <h2 style={{ textAlign: 'center', margin: 0 }}>{title}</h2>
      {/* <p>{content}</p> */}
    </StyledCard>
  )
}


const StyledCard = styled.div`
flex: 1 0 160px;
box-shadow: 0 1px 1rem -4px #000;
background: #fff;
margin: 1rem;
overflow: hidden;
border-radius: 6px;
cursor: pointer;
transition: all 250ms ease-in-out;

img {
  width: 160px;
  height: 210px;
  object-fit: center;
}

&:hover {
  box-shadow: 0 4px 1rem -4px #000;
  transform: translateY(-5px);
  box-shadow: 5px 5px rgba(82, 119, 192, 0.4), 10px 10px rgba(82, 119, 192, 0.3),
    15px 15px rgba(82, 119, 192, 0.2), 20px 20px rgba(82, 119, 192, 0.1),
    25px 25px rgba(82, 119, 192, 0.05);
}
`
