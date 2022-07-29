import { Box, Typography } from '@mui/material';
import {
  FC, useEffect, useState,
  // useContext
} from 'react';

import school_active_img from 'views/assets/school/school_active.svg'
import { BasicColor } from 'views/Color';


interface SchoolItemProps {
  name: string
}
const SchoolItem: FC<SchoolItemProps> = ({ name }) => {

  return (
    <Box maxWidth={350} display='flex' flexDirection={'column'} alignItems='center' gap={2}
      sx={{ cursor: 'pointer' }}
    >
      <img src={school_active_img} />
      <Typography variant='h4' textAlign={'center'} color='white' sx={{ background: BasicColor.blueLight }}>{name}</Typography>
    </Box>
  );
};
export default SchoolItem
