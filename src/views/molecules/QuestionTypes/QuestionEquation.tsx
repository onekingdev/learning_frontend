import { FC } from 'react';
import { Question } from 'views/atoms/Text/Question';
import playQuestionSound from 'views/assets/play-sound.svg'
import { Box, Container, Typography } from '@mui/material';


interface QuestionBoxEquationProps {
  ops: string[] | null
}

export const QuestionEquation: FC<QuestionBoxEquationProps> = ({
  ops,
}) => {

  return (
    <Box sx={{ width: 200, margin: 2 }}>
      {
        ops && ops.map((op, index) => (
          <Typography variant='h4' sx={{ color: 'white', textAlign: index !== 1 ? 'end' : 'start' }}>
            {op}
          </Typography>
        ))
      }
      <hr style={{
        height: 3,
        border: 'none',
        background: 'white'
      }} />
    </Box>
  );
};
