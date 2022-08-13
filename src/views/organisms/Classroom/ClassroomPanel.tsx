import { FC } from 'react';
import { useSelector } from 'react-redux'
import { Container, Grid, Typography } from '@mui/material';
import addClassroomImgMark from 'views/assets/addClassroom.svg'
import ClassroomItemImg from 'views/assets/classroom-item.svg'
import {
  ClassroomItem,
  ClassroomMark,
  ClassroomText
} from './Style'
import commonDictionary from 'constants/commonDictionary'

interface ClassroomPanelProps {
  classrooms: { classroom: any }[]
  onNew: () => void
  onClassroom: (p: any) => void
}

const ClassroomPanel: FC<ClassroomPanelProps> = ({ classrooms, onNew, onClassroom }) => {
  const language = useSelector((state: any) => state.user.language);
  return (
    <Container>
      <Grid container justifyContent={'start'}>
        {
          classrooms.map((item: any, index: number) =>
            <Grid item key={index} xs={4} sm={3} md={1.5} alignItems='start'>
              {
                item.classroom ?
                  <ClassroomItem key={index} onClick={() => { onClassroom(item.classroom) }}>
                    <ClassroomMark src={ClassroomItemImg} />
                    <ClassroomText>{item.classroom.name}</ClassroomText>
                    {
                      item.classroom.isEmpty && <Typography fontSize={12} color='gray'>{'(Empty)'}</Typography>
                    }
                  </ClassroomItem> :
                  <ClassroomItem onClick={() => { onNew() }}>
                    <ClassroomMark src={addClassroomImgMark} />
                    <ClassroomText>{commonDictionary[language]?.add_classroom}</ClassroomText>
                  </ClassroomItem>
              }
            </Grid>
          )
        }
      </Grid>
    </Container>
  )
}

export default ClassroomPanel
