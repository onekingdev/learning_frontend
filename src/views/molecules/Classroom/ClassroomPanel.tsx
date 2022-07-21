import { FC } from 'react';
import { useSelector } from 'react-redux'
import { Container, Grid } from '@mui/material';
import addClassroomImgMark from 'views/assets/addClassroom.svg'
import ClassroomItemImg from 'views/assets/classroom-item.svg'
import {
  ClassroomItem,
  ClassroomMark,
  ClassroomText
} from './Style'
import commonDictionary from 'constants/commonDictionary'

interface ClassroomPanelProps {
  classrooms: any[]
  onNew: () => void
  onClassroom: (p: any) => void
}

const ClassroomPanel: FC<ClassroomPanelProps> = ({ classrooms, onNew, onClassroom }) => {
  const language = useSelector((state: any) => state.user.language);
  console.log({ classrooms })
  return (
    <Container>
      <Grid container justifyContent={'start'}>
        <Grid item xs={4} sm={3} md={1.5}>
          <ClassroomItem onClick={() => { onNew() }}>
            <ClassroomMark src={addClassroomImgMark} />
            <ClassroomText>{commonDictionary[language]?.add_new}</ClassroomText>
          </ClassroomItem>
        </Grid>
        {
          classrooms &&
          classrooms.map((item: any, index: number) =>
            <Grid item key={index} xs={4} sm={3} md={1.5}>
              <ClassroomItem key={index} onClick={() => { onClassroom(item) }}>
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
