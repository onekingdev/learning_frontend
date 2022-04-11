import { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { BasicColor } from 'views/Color';
import { Container, Grid } from '@mui/material';
import { getDownUrlByFilename } from 'app/firebase';
import { useHistory } from 'react-router-dom';
import Skeleton from '@mui/material/Skeleton';
import { TypoGeneralText } from 'views/atoms/Text';
import useMediaQuery    from '@mui/material/useMediaQuery'
import { ScreenSize }   from 'constants/screenSize';

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
  const isMobile      = useMediaQuery(`(max-width: ${ScreenSize.phone})`)
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
    <Container sx={{ marginBottom: 2 }}>
      {
        purchased ?
          <Grid container minHeight={300} spacing={2} alignItems='center' justifyContent='center'>
            <Grid item >
              {
                <Container
                sx={{height: isMobile ? 'auto':300}}
                >
                  <img src={img}
                    onLoad={() => {
                      setDgImgLoaded(true);
                    }}
                    style={{
                      display: dgImgloaded ? 'block' : 'none',
                      height: isMobile ? 'auto' : '100%',
                      width: isMobile ? '100%' : 'auto'
                    }}
                  />
                  <Skeleton variant='rectangular' animation='wave' width={isMobile ? '100vw': 225} height={isMobile ? 50 : 300}
                    sx={{ display: dgImgloaded ? 'none' : 'flex', marginLeft: -5 }}
                  />
                </Container>
              }
            </Grid>
            <Grid item maxWidth={250}>

              <h1>{name ? name : 'No name'}</h1>
              {description?.map(item => (
                <p key={item.key}>{item.value}</p>
              ))}
            </Grid>
          </Grid> :
          <div style={{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}>
            <TypoGeneralText>Not collected yet!</TypoGeneralText>
            <Button onClick={() => history.push('/collectibles/cards')}>
              BUY!
            </Button>
          </div>
      }
    </Container>
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
