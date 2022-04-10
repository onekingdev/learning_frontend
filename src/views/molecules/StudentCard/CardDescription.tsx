import { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { BasicColor } from 'views/Color';
import ReactLoading from 'react-loading';
import { Grid } from '@mui/material';
import { ScreenSize } from 'constants/screenSize';
import { getDownUrlByFilename } from 'app/firebase';
import { useHistory } from 'react-router-dom';

type CardProps = {
    imgUrl: string;
    purchased?: boolean;
    firebaseName: string
    description?: Array<{
        key: string
        value: string
    }>;
    name?: string;
};

export const CardDescription: FC<CardProps> = ({
    imgUrl,
    purchased,
    description,
    name,
    firebaseName
}) => {
    const [img, setImg] = useState('');
    const history = useHistory();
    const [dgImgloaded, setDgImgLoaded] = useState(false);

    const fetchFirebaseUrls = async () => {
        const link = await getDownUrlByFilename(firebaseName, imgUrl);
        setImg(link ? link : '');
    };

    useEffect(() => {
        fetchFirebaseUrls();
    }, []);
    return (
            purchased ?
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
                  src={img}
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
                  <ReactLoading
                    type='spinningBubbles'
                    color={BasicColor.green}
                  />
                </div>
              </StyledGrid>
              <StyledGrid item md={6} xs={12}>
                <h1>{name ? name : 'No name'}</h1>
                {description?.map(item => (
                  <p key={item.key}>{item.value}</p>
                ))}
              </StyledGrid>
            </Grid> :
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <Button onClick={() => history.push('/collectibles/cards')}>
                BUY!
              </Button>
            </div>
    );
};


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
