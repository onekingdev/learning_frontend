import { FC, useState} from 'react';
import styled          from 'styled-components';
import { BasicColor }  from 'views/Color';
import ReactLoading    from 'react-loading';
import useSound        from 'use-sound';
import purchaseSound   from 'views/assets/audios/mixkit-coin-win-notification.wav';
import { ScreenSize }  from 'views/../constants/screenSize';

type CardProps = {
  imgUrl: string;
};

/**
 * @author BruceLee
 * Displaying a bought package of 3 cards when a user pressed bought button
 * Turn around image effect and sound effect added
 */
export const BoughtCard: FC<CardProps> = ({imgUrl}) => {
  // state updates when user clicks an image
  const [open, setOpen] = useState(false);

  const [play] = useSound(purchaseSound);

  // state to know that image is loaded, rotating effect only works when image is fully loaded
  const [loaded, setLoaded] = useState(false);
  return (
    <StyledCard onClick={() => setOpen(!open)}>
      {imgUrl ? (
        open ? (
          <>
            <img
              style={loaded ? {} : {display: 'none'}}
              src={imgUrl}
              loading="eager"
              onLoad={() => {
                setLoaded(true), play();
              }}
            />
            <div
              style={
                loaded
                  ? {display: 'none'}
                  : {display: 'flex', alignItems: 'center'}
              }
            >
              <ReactLoading type="spokes" color={BasicColor.green} />
            </div>
          </>
        ) : (
          <p>?</p>
        )
      ) : (
        <ReactLoading type="spinningBubbles" color={BasicColor.green} />
      )}
    </StyledCard>
  );
};

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

  @media screen and (max-width: ${ScreenSize.tablet}) {
    width: 30vw;
    height: 40vw;
    margin: 5vw;
  }

  p {
    cursor: pointer;
    font-size: 200px;
    margin: auto;
    @media screen and (max-width: ${ScreenSize.tablet}) {
      font-size: 100px;
    }
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: fill;
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
  }
`;
