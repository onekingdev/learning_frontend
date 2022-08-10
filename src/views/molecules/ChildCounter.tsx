import { FC } from 'react';
import { ButtonGroup, Button, Box, Typography } from '@mui/material';

type ChildCounterProps = {
  update: (count: number) => void
  count: number
};

export const ChildCounter: FC<ChildCounterProps> = ({ update, count }) => {

  return (
    <Box
      display='flex'
      justifyContent={'space-around'}
      alignItems='center'
    >
      <Typography>Purchase Amount</Typography>
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button variant="outlined"
          sx={{
            color: 'black',
            borderColor: 'black',
            borderRadius: 0,
            height: 35,
            fontSize: 24,
            width: 35,
          }}
          onClick={() => count > 0 && update(count - 1)} >
          -
        </Button>
        <Button variant="outlined"
          sx={{
            color: 'black',
            borderColor: 'black',
            borderRadius: 0,
            height: 35,
            width: 35,
            fontSize: 24,
          }}>
          {'' + count}
        </Button>
        <Button variant="outlined"
          sx={{
            color: 'black',
            borderColor: 'black',
            borderRadius: 0,
            height: 35,
            width: 35,
            fontSize: 24,
          }}
          onClick={() => update(count + 1)} >
          +
        </Button>
      </ButtonGroup>
    </Box>
  );
};
