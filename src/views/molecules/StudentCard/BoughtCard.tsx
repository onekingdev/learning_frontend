import { FC, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { BasicColor } from '../../Color';
import ReactLoading from 'react-loading';
import useSound from 'use-sound'
import purchaseSound from '../../assets/audios/mixkit-coin-win-notification.wav'
type CardProps = {
  imgUrl: string;
};


  /**
   * @author BruceLee
   */
export const BoughtCard: FC<CardProps> = ({ imgUrl }) => {
  // state updates when user clicks an image
  const [open, setOpen] = useState(false);

  const [play, { stop }] = useSound(purchaseSound);

  // state to know that image is loaded, rotating effect only works when image is fully loaded
  const [loaded, setLoaded] = useState(false);
  return (
    <StyledCard onClick={() => setOpen(!open)}>
      {imgUrl
        ? open
          ?
          <>
          <StyledImg
              style={ loaded ? {} : { display: 'none' }}
              src={imgUrl}
              loading='eager'
              onLoad={() => {setLoaded(true), play()}}
            />
            <div style={ loaded ? {display: 'none'} : { display: 'flex', alignItems: 'center'}} >
              <ReactLoading type='spokes' color={BasicColor.green} />
            </div>
          </>
          : <StyledP>?</StyledP>
        : <ReactLoading type='spinningBubbles' color={BasicColor.green} />}
    </StyledCard>
  );
};

const StyledImg = styled.img`
  height: 100%;
  transform: rotateY(0);
  animation: rotateAnimation 0.5s linear;

  /* Adding keyframes for animation */
  @keyframes rotateAnimation {
    from {
      transform: rotateY(180deg);
    }
    to {
      transform: rotateY(360deg);
    }
  }
`;
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
`;

const StyledP = styled.p`
  cursor: pointer;
  font-size: 200px;
  margin: auto;
`;
