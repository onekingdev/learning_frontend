import { Box, Paper, Typography } from '@mui/material';
import {
  FC
} from 'react';

import school_active_img from 'views/assets/school/school_active.svg'
import { BasicColor } from 'views/Color';
import { SCHOOL_SET_DATA } from 'app/types';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

interface SchoolItemProps {
  school: any
}
const SchoolItem: FC<SchoolItemProps> = ({ school }) => {
  const history = useHistory();
  const dispatch = useDispatch()
  const onSchoolClick = () => {
    dispatch({
      type: SCHOOL_SET_DATA,
      payload: school
    })
    if (school.schoolteacherSet.every((item: any) => !item.teacher)) // go to add teachers page if all values are null
      history.push('/admin/addTeachers')
    else
      history.push('/admin/schoolTeachers')
  }
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
      onClick={onSchoolClick}
    >
      <img src={school_active_img} />
      <Box sx={{ bgcolor: BasicColor.blue }} width='100%' height='100%'>

        <Typography variant='h4' textAlign={'center'} color='white' >{school.name}</Typography>
        {/* <Typography variant='h5' textAlign={'center'} color='white' >Type:{school.typeOf}</Typography>
        <Typography variant='h5' textAlign={'center'} color='white' >Number of Teachers: {school.schoolteacherSet.length}</Typography>
        <Typography variant='h5' textAlign={'center'} color='white' >Country:{school.country}</Typography>
        <Typography variant='h5' textAlign={'center'} color='white' >District:{school.district}</Typography> */}
      </Box>
    </Paper >
  );
};
export default SchoolItem
