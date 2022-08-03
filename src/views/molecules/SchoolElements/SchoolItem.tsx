import { Box, Paper, Typography } from '@mui/material';
import {
  FC
} from 'react';

import school_active_img from 'views/assets/school/school_active.svg'
import { BasicColor } from 'views/Color';


interface SchoolItemProps {
  school: any
}
const SchoolItem: FC<SchoolItemProps> = ({ school }) => {

  return (
    <Paper elevation={5}
      sx={{
        pt: 5,
        margin: 2,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 5,
        cursor: 'pointer',
        transition: 'all 250ms ease-in-out',
        '&:hover': {
          transform: 'scale(1.05)',
        }
      }}
    >
      <img src={school_active_img} />
      <Box sx={{ bgcolor: BasicColor.blue }} padding={2}>

        <Typography variant='h4' textAlign={'center'} color='white' >{school.name}</Typography>
        <Typography variant='h4' textAlign={'center'} color='white' >{school.typeof}</Typography>
        <Typography variant='h4' textAlign={'center'} color='white' >Number of Teachers: {school.schoolteacherSet.length}</Typography>
        <Typography variant='h4' textAlign={'center'} color='white' >{school.country}</Typography>
        <Typography variant='h4' textAlign={'center'} color='white' >{school.district}</Typography>
      </Box>
    </Paper >
  );
};
export default SchoolItem
