import { Box, Paper, Typography } from '@mui/material';
import {
  FC
} from 'react';

import school_inactive_img from 'views/assets/school/school_inactive.svg'
import { BasicColor } from 'views/Color';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const AddSchoolItem: FC = () => {
  const history = useHistory();

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
        },
        height: 350,
        width: 350,
      }}
    >
      <img src={school_inactive_img} />
      <Box sx={{ bgcolor: BasicColor.blue }} width='100%' height='100%'>

        <Typography variant='h4' textAlign={'center'} color='white' >{'Add school'}</Typography>

      </Box>
    </Paper >
  );
};
export default AddSchoolItem
