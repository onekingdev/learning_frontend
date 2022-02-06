import { FC, useEffect, useState } from 'react';
import styled from 'styled-components'

interface CardProps {
  imgUrl: string
  alt?: string
  title: string
  content?: string
}
const Card: FC<CardProps> = ({
  imgUrl, alt, title, content
}) => (
  <StyledCard>
    <img src={imgUrl}
      alt={alt || 'Image'} />
    <StyledContent >
      <h2>{title}</h2>
      <p>{content}</p>
    </StyledContent>
  </StyledCard>
)
export const CardSlider: FC = () => {


  useEffect(() => {
  }, []);

  return (
    <div></div>
  );
};

const StyledCard = styled.div`
flex: 1 0 250px;
box-shadow: 0 1px 1rem -4px #000;
background: #fff;
margin: 1rem;
overflow: hidden;
border-radius: 6px;
cursor: pointer;
transition: all 250ms ease-in-out;

img {
  width: 250px;
  height: 250px;
  object-fit: center;
}

&:hover {
  box-shadow: 0 4px 1rem -4px #000;
  transform: translateY(-3px);
}
`

const StyledContent = styled.div`
  padding: 1rem;
`