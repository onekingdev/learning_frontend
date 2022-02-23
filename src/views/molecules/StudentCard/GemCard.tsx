import {FC, useState} from 'react';
import styled from 'styled-components';
import {BasicColor} from '../../Color';
import ReactLoading from 'react-loading';
import {Grid} from '@mui/material';
import {ScreenSize} from '../../screenSize';
import {CardDialog} from './CardDialog';
import {useHistory} from 'react-router-dom';

type CardProps = {
  imgUrl: string
  purchased?: boolean
  amount: number
};

/**
 * @author BruceLee
 * Displaying a bought package of 3 cards when a user pressed bought button
 * Turn around image effect and sound effect added
 */
export const Gemcard: FC<CardProps> = ({imgUrl, purchased, amount}) => {
  // state updates when user clicks an image
  const [open, setOpen] = useState(false);
  const [openBuy, setOpenBuy] = useState(false);

  const history = useHistory();

  // state to know that image is loaded, rotating effect only works when image is fully loaded
  const [loaded, setLoaded] = useState(false);
  const [dgImgloaded, setDgImgLoaded] = useState(false);

  // action when image is clicked
  const onImgClicked = () => {
    console.log('enabled');
    setOpen(!open);
  };

  // open dialog with buy button when disabled image is clicked.
  const onDisabledImgClicked = () => {
    console.log('disabled');
    setOpenBuy(!openBuy);
  };
  return (
  <Container>
    <StyledCard>
      <img
        style={loaded ? {objectFit: 'fill'} : {display: 'none'}}
        className="loaded"
        src={imgUrl}
        loading="eager"
        onLoad={() => {
          setLoaded(true);
        }}
        onClick={() => onImgClicked()}
      />
      <StyledOverlay
        style={purchased ? {display: 'none'} : {}}
        onClick={() => {
          onDisabledImgClicked();
        }}
      />
      <div
        style={
          loaded
            ? {display: 'none'}
            : {display: 'flex', alignItems: 'center', justifyContent: 'center'}
        }
      >
        <ReactLoading type="spinningBubbles" color={BasicColor.green} />
      </div>
      <CardDialog
        dialogContent={
          <Grid container sx={{padding: 0}}>
            <StyledGrid
              item
              md={6}
              xs={12}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={imgUrl}
                onLoad={() => {
                  setDgImgLoaded(true);
                }}
              />
              <div
                style={
                  dgImgloaded
                    ? {display: 'none'}
                    : {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }
                }
              >
                <ReactLoading type="spinningBubbles" color={BasicColor.green} />
              </div>
            </StyledGrid>
            <StyledGrid item md={6} xs={12}>
              <h1>Cronos</h1>
              <p>Roman Name: Saturn</p>
              <p>Job: Titan of ther Harvest</p>
              <p>Symbol(s): Sickle, Grain Snak</p>
              <p>
                Family: Rhea(wift), Zeus, Hera, Poseidon, Hades, Hestia,
                Chiron(Children)
              </p>
              <p>Fact1: Leader of Titans</p>
              <p>Fact2: There is a start named after him</p>
            </StyledGrid>
          </Grid>
        }
        open={onImgClicked}
        isOpen={open}
      />
      <CardDialog
        contentText="Not collected yet!"
        dialogContent={
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <Button onClick={() => history.push('/collectibles/cards')}>
              BUY!
            </Button>
          </div>
        }
        open={onDisabledImgClicked}
        isOpen={openBuy}
      />
    </StyledCard>
    <p>{amount} / 1</p>
  </Container>
  );
};

const Container = styled.div`

p {
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 700;
  padding: 0;
  text-align: center;
}
`
const StyledOverlay = styled.div`
  position: absolute;
  background: ${BasicColor.gray80};
  inset: -2px;
  opacity: 0.7;
  border-radius: inherit;
`;

const Button = styled.button`
  background: ${BasicColor.green};
  border: 0;
  border-radius: 5px;
  padding: 10px;
  color: white;
  width: 100px;

  &:hover {
    pointer: cursor;
    box-shadow: 0 1px 1rem -3px orange;
    transform: translateY(-5px);
  }
`;

const StyledGrid = styled(Grid)`
  &.MuiGrid-root {
    font-family: Montserrat;
    padding-left: 20px;

    img {
      width: 250px;
    }

    @media screen and (max-width: ${ScreenSize.tablet}) {
      padding: 10px;
      img {
        margin-top: 30px;
        height: 250px;
        width: auto;
      }
      p {
        margin: 1px;
      }

      h1 {
        margin-top: 0;
      }
    }
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
