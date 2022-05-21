import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
import achievement from 'views/assets/question/wrong/achievement.png'
import goal from 'views/assets/question/wrong/goal.png'
import ps from 'views/assets/question/wrong/positive-thinking.png'
import trumpet from 'views/assets/question/wrong/trumpet.png'

const images = [
  {
    id: 'wrong-1',
    image: achievement,
    message: {
      'en-us': 'You can do it!',
      'es-mx': '¡Puedes hacerlo!',
      'th': 'คุณสามารถทำมันได้!',
    },
    background: 'linear-gradient(180deg, #FFEEB0 -37.63%, #FFFFFF 78.26%)'
  },
  {
    id: 'wrong-2',
    image: goal,
    message: {
      'en-us': 'Do not give up!',
      'es-mx': '¡No te rindas!',
      'th': 'อย่ายอมแพ้!',
    },
    background: 'linear-gradient(180deg, #CDD1FB -46.71%, #FFFFFF 78.26%)'
  },
  {
    id: 'wrong-3',
    image: ps,
    message: {
      'en-us': 'Do not give in!',
      'es-mx': '¡No cedas!',
      'th': 'อย่ายอมแพ้!',
    },
    background: 'linear-gradient(180deg, #AAF0FF -46.71%, #FFFFFF 78.26%)'
  },
  {
    id: 'wrong-4',
    image: trumpet,
    message: {
      'en-us': 'Try again!',
      'es-mx': '¡Intentar otra vez!',
      'th': 'ลองอีกครั้ง!',
    },
    background: 'linear-gradient(180deg, #F4FFB0 -37.63%, #FFFFFF 78.26%)'
  },
]
export const RollWrong: FC = () => {

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

