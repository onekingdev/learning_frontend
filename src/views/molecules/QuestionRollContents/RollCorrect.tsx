import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
import greatJob1 from 'views/assets/question/great-job-1.svg'
import rockStar1 from 'views/assets/question/rock-star-1.svg'

interface Props {
  rollcount: number
}
export const RollCorrect: FC<Props> = ({ rollcount }) => {

  let language: string = useSelector((state: any) => state.user.language);
  language = language ? language : 'EN_US'

  return (
    <Box
      sx={{
        backgroundColor: 'white',
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
            {rollcount % 2 === 1 && 'Great job!'}
            {rollcount % 2 === 0 && 'You are the rock star!'}
          </Typography>
          {rollcount % 2 === 1 && <img src={greatJob1} />}
          {rollcount % 2 === 0 && <img src={rockStar1} />}
        </>
      }
    </Box>
  );
};

