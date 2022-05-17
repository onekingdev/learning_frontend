import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { numberWithCommas } from 'views/utils';


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
            {Number.isInteger(+op) ? numberWithCommas(+op) : op}
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
