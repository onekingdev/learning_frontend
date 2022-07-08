import { Grid } from '@mui/material';
import chair from 'views/assets/chair.svg'
import {
  StudentItem,
  StudentText
} from './Style'
const StudentPanel = (props: any) => {

  const data = props.data;
  return (
    <Grid container spacing={2} justifyContent='center'>
      {
        data.map((item: any, index: number) =>
          <Grid item >
            <StudentItem key={index} onClick={() => { props.onStudent(item) }}>
              <img src={chair} />
              <StudentText>{item.name}</StudentText>
            </StudentItem>
          </Grid>
        )
      }
      <Grid item>
        <StudentItem onClick={() => { props.onNew() }}>
          <img src={chair} />
        </StudentItem>
      </Grid>
    </Grid>
  )
}

export default StudentPanel
