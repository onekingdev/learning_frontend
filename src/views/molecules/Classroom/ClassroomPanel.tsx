import { useSelector } from 'react-redux'
import { Container, Grid } from '@mui/material';
import addClassroomImgMark from 'views/assets/addClassroom.svg'
import ClassroomItemImg from 'views/assets/classroom-item.svg'
import {
  ClassroomItem,
  ClassroomMark,
  ClassroomText
} from './Style'
import commonDictionary          from 'constants/commonDictionary'

const ClassroomPanel = (props: any) => {
  const language: string = useSelector((state: any) => state.user.language) || 'en-us';
  const data = props.data;
  return (
    <Container>
      <Grid container justifyContent={'start'}>
        <Grid item xs={4} sm={3} md={1.5}>
          <ClassroomItem onClick={() => { props.onNew() }}>
            <ClassroomMark src={addClassroomImgMark} />
            <ClassroomText>{commonDictionary[language]?.add_new}</ClassroomText>
          </ClassroomItem>
        </Grid>
        {
          data.map((item: any, index: number) =>
            <Grid item key={index} xs={4} sm={3} md={1.5}>
              <ClassroomItem key={index} onClick={() => { props.onClassroom(item) }}>
                <ClassroomMark src={ClassroomItemImg} />
                <ClassroomText>{item.name}</ClassroomText>
              </ClassroomItem>
            </Grid>
          )
        }
      </Grid>
    </Container>
  )
}

export default ClassroomPanel
