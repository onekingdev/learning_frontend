import { FC, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components'
import { BasicColor } from '../../Color';
import ReactLoading from 'react-loading'

type CardProps = {
  imgUrl: string
}

export const BoughtCard: FC<CardProps> = ({
  imgUrl
}) => {

  // state updates when user clicks an image
  const [open, setOpen] = useState(false)
  return (
    <StyledCard onClick={() => setOpen(true)} >
      {
        imgUrl ?
          open ? <img src={imgUrl} alt={'Image'} style={{height: '100%'}}/> : <p style={{ fontSize: 200, margin: 'auto' }}>?</p>
          : <ReactLoading type='spinningBubbles' color={BasicColor.green} />
      }
    </StyledCard>
  )
}

const StyledCard = styled.div`
display: flex;
justify-content: center;
align-content: center;
width: 160px;
height: 220px;
box-shadow: 0 1px 1rem -4px #000;
margin: 1rem;
overflow: hidden;
border-radius: 6px;
transition: all 250ms ease-in-out;

&:hover {
  transform: translateY(-5px) translateX(-5px);
}
`
