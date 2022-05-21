import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
import pt from 'views/assets/question/correct/positive-thinking.png'
import ss from 'views/assets/question/correct/shooting-star.png'
import stars from 'views/assets/question/correct/stars.png'
import tu from 'views/assets/question/correct/thumbs-up.png'

const images = [
  {
    id: 'correct-1',
    image: pt,
    message: {
      'en-us': 'Great job!',
      'es-mx': '¡Gran trabajo!',
      'th': 'ทำได้ดีมาก!',
    },
    background: 'linear-gradient(180deg, #FFEEB0 -37.63%, #FFFFFF 78.26%)'
  },
  {
    id: 'correct-2',
    image: ss,
    message: {
      'en-us': 'Excellent!',
      'es-mx': '¡Excelente!',
      'th': 'ยอดเยี่ยม!',
    },
    background: 'linear-gradient(180deg, #CDD1FB -46.71%, #FFFFFF 78.26%)'
  },
  {
    id: 'correct-3',
    image: stars,
    message: {
      'en-us': 'You are the rock star!',
      'es-mx': '¡Eres la estrella de rock!',
      'th': 'คุณคือร็อคสตาร์!',
    },
    background: 'linear-gradient(180deg, #AAF0FF -46.71%, #FFFFFF 78.26%)'
  },
  {
    id: 'correct-4',
    image: tu,
    message: {
      'en-us': 'Awesome!',
      'es-mx': '¡Impresionante!',
      'th': 'สุดยอด!',
    },
    background: 'linear-gradient(180deg, #F4FFB0 -37.63%, #FFFFFF 78.26%)'
  },
]
export const RollCorrect: FC = () => {

  let language: string = useSelector((state: any) => state.user.language);
  language = language ? language : 'en-us'
  const [id, setId] = useState(0)

  useEffect(() => {
    setId(Math.floor(Math.random() * 10) % 4)
  }, [])

  return (
    <Box
      sx={{
        background: images[id].background,
        borderRadius: 5,
        padding: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      {
        <>
          <Typography
            variant='h3'
            sx={{
              textAlign: 'center',
              marginBottom: 2
            }}
          >
            {images[id].message[language as keyof Object]}
          </Typography>
          {<img src={images[id].image} />}
        </>
      }
    </Box>
  );
};

