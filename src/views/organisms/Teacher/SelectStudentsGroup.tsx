import { FC, useState } from 'react';
import { Box, Paper, Tab, Typography } from '@mui/material';
import { StudentsCheckbox } from 'views/organisms/Classroom/StudentsCheckbox';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

interface Props {
  students: Array<any>
  groups: Array<any>
}

const SelectStudentsGroup: FC<Props> = ({ students }) => {
  const [selected, setSelected] = useState<Array<any>>([])

  return (
    <Paper elevation={5} sx={{
      height: '100%',
      width: '100%',
      padding: 2,
      margin: 2
    }}>

    </Paper>
  );
};
export default SelectStudentsGroup
