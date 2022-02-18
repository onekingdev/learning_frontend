import {FC, useCallback, useEffect, useState} from 'react';
import styled from 'styled-components';
import {BasicColor} from '../../Color';
import ReactLoading from 'react-loading';
import useSound from 'use-sound';
import purchaseSound from '../../assets/audios/mixkit-coin-win-notification.wav';
import {LSDialog} from '../Setting/LSDialog';
import { Grid } from '@mui/material';
type CardProps = {
  imgUrl: string;
  purchased?: boolean;
};

/**
 * @author BruceLee
 * Displaying a bought package of 3 cards when a user pressed bought button
 * Turn around image effect and sound effect added
 */
export const Gemcard: FC<CardProps> = ({imgUrl, purchased}) => {
  // state updates when user clicks an image
  const [open, setOpen] = useState(false);

  // state to know that image is loaded, rotating effect only works when image is fully loaded
  const [loaded, setLoaded] = useState(false);

  // action when image is clicked
  const onImgClicked = () => {
    // setOpen(!open);
    console.log(imgUrl);
  };
  return (
    <StyledCard>
      <StyledImg
        style={loaded ? {objectFit: 'fill'} : {display: 'none'}}
        className="loaded"
        src={imgUrl}
        loading="eager"
        onLoad={() => {
          setLoaded(true);
        }}
        onClick={() => onImgClicked()}
      />
      <StyledOverlay style={purchased ? {} : {display: 'none'}} />
      <div
        style={
          loaded ? {display: 'none'} : {display: 'flex', alignItems: 'center'}
        }
      >
        <ReactLoading type="spinningBubbles" color={BasicColor.green} />
      </div>
      <LSDialog
        title="title"
        contentText="content"
        dialogContent={
        <Grid container >
          <Grid item md={6}>
          <img src={imgUrl} style={{width: 200}} />
          </Grid>
          <Grid item md={6}>
          <p>Cronos ddddddddddd</p>
          </Grid>
        </Grid>
        }
        open={onImgClicked}
        isOpen={open}
      />
    </StyledCard>
  );
};

const StyledOverlay = styled.div`
  position: absolute;
  background: ${BasicColor.gray80};
  inset: -2px;
  opacity: 0.7;
  border-radius: inherit;
`;

const StyledImg = styled.img`
  &:hover {
    box-shadow: 0px 1px 20px 0px #fb8500;
    cursor: pointer;
    transform: translateY(-5px);
  }
  &.loaded {
    border-radius: inherit;
  }
`;

const StyledCard = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-content: center;
  width: 160px;
  height: 220px;
  box-shadow: 0 1px 1rem -4px #000;
  margin: 1rem;
  border-radius: 15px;
  transition: all 250ms ease-in-out;
`;
