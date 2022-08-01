import { FC } from 'react';
import { useSelector } from 'react-redux'
import { Box, Container, Grid, Typography } from '@mui/material';
import greenDoor from 'views/assets/addClassroom.svg'
import blueDoor from 'views/assets/classroom-item.svg'
import commonDictionary from 'constants/commonDictionary'

interface TeachersPanelProps {
  teachers: any[]
  onNew: () => void
  onTeacher: (p: any) => void
}

const TeachersPanel: FC<TeachersPanelProps> = ({ teachers, onNew, onTeacher }) => {
  const language = useSelector((state: any) => state.user.language);
  return (
    <Container>
      <Grid container justifyContent={'start'} spacing={3}>
        {
          teachers &&
          teachers.map((item: any, index: number) =>
            <Grid item key={index} xs={4} sm={3} md={1.5} alignItems='start' sx={{
              cursor: 'pointer'
            }}>
              {
                item.teacher ?
                  <Box
                    display='flex'
                    flexDirection='column'
                    alignItems={'center'}
                    onClick={() => { onTeacher(item) }}
                  >
                    <img src={blueDoor} />
                    <Typography textAlign='center'>{item.teacher.firstName}</Typography>
                  </Box>
                  :
                  <Box
                    display='flex'
                    flexDirection='column'
                    alignItems={'center'}
                    onClick={() => { onNew() }}

                  >
                    <img src={greenDoor} />
                    <Typography textAlign='center'>{'Empty'}</Typography>
                  </Box>
              }
            </Grid>
          )
        }
      </Grid>
    </Container>
  )
}

export default TeachersPanel
