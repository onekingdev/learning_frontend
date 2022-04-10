import { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { BasicColor } from 'views/Color';
import ReactLoading from 'react-loading';
import { Grid } from '@mui/material';
import { ScreenSize } from 'constants/screenSize';
import { CardDialog } from './CardDialog';
import { getDownUrlByFilename } from 'app/firebase';
import { useHistory } from 'react-router-dom';
import { CardDescription } from '../CardDescription';
import { TypoGeneralText } from 'views/atoms/Text';

type CardProps = {
  category: string;
  imgUrl: string;
  purchased?: boolean;
  amount: number;
  firebaseName: string
  description?: Array<{
    key: string
    value: string
  }>;
  name?: string;
};

export const Gemcard: FC<CardProps> = ({
  imgUrl,
  purchased,
  amount,
  description,
  name,
  firebaseName
}) => {
  // state updates when user clicks an image
  const [open, setOpen] = useState(false);
  const [openBuy, setOpenBuy] = useState(false);
  const [img, setImg] = useState('');

  // state to know that image is loaded, rotating effect only works when image is fully loaded
  const [loaded, setLoaded] = useState(false);

  // action when image is clicked
  const onImgClicked = () => {
    setOpen(!open);
  };

  const fetchFirebaseUrls = async () => {
    const link = await getDownUrlByFilename(firebaseName, imgUrl);
    setImg(link ? link : '');
  };

  useEffect(() => {
    fetchFirebaseUrls();
  }, []);
  return (
    <Container style={img ? {} : { display: 'none' }}>
      <StyledCard onClick={() => onImgClicked()}>
        <img
          style={loaded ? { objectFit: 'fill' } : { display: 'none' }}
          className='loaded'
          src={img}
          loading='eager'
          onLoad={() => {
            setLoaded(true);
          }}
        />
        <StyledOverlay
          style={purchased ? { display: 'none' } : {}}
        />
        <div
          style={
            loaded
              ? { display: 'none' }
              : {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }
          }
        >
          <ReactLoading type='spinningBubbles' color={BasicColor.green} />
        </div>
        <CardDialog
          fullWidth='true'
          dialogContent={
            <CardDescription
              imgUrl={imgUrl}
              firebaseName={firebaseName}
              description={description}
              purchased={purchased}
              name={name}
            />
          }
          open={onImgClicked}
          isOpen={open}
        />
      </StyledCard>
      <TypoGeneralText>{amount} / 1</TypoGeneralText>
    </Container>
  );
};

const Container = styled.div`
  p {
    font-size: 18px;
    font-weight: 700;
    padding: 0;
    text-align: center;
  }
`;
const StyledOverlay = styled.div`
  position: absolute;
  background: ${BasicColor.gray80};
  inset: -2px;
  opacity: 0.7;
  border-radius: inherit;
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
  cursor: pointer;

  @media screen and (max-width: ${ScreenSize.tablet}) {
    width: 36vw;
    height: auto;
    min-height: 100px;
    margin: 10px;
    img {
      width: 35vw;
    }
  }

  img {
    &:hover {
      box-shadow: 0px 1px 20px 0px #fb8500;
      transform: translateY(-5px);
    }
    &.loaded {
      border-radius: inherit;
    }
  }
`;
