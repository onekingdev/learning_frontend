import { Grid, IconButton } from '@mui/material';
import { FC } from 'react';
import chair from 'views/assets/chair.svg'
import {
  StudentItem,
  StudentText
} from './Style'
import AddIcon from '@mui/icons-material/Add';

interface StudentPanelProps {
  students: Array<any>
  onStudent: (param: any) => void
  onNew: () => void
}

const StudentPanel: FC<StudentPanelProps> = ({ students, onStudent, onNew }) => {

  return (
    <Grid container spacing={10} justifyContent='center'>
      {
        students && students.map((item: any, index: number) =>
          <Grid item key={item.id}>
            <StudentItem key={index} onClick={() => onStudent(item)}>
              <img src={chair} />
              <StudentText>{item.firstName || 'No Name'}</StudentText>
            </StudentItem>
          </Grid>
        )
      }
      <Grid item>
        <StudentItem onClick={() => onNew()}>
          <img src={chair} />
          <IconButton aria-label="add-student" sx={{ position: 'absolute', bottom: 15 }}>
            <AddIcon sx={{ fontSize: 30 }} />
          </IconButton>
        </StudentItem>
      </Grid>
    </Grid>
  )
}

export default StudentPanel
