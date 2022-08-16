import { FC } from 'react';
import { useSelector } from 'react-redux'
import { Box, Container, Divider, Grid, Paper, Typography } from '@mui/material';
import greenDoor from 'views/assets/addClassroom.svg'
import blueDoor from 'views/assets/classroom-item.svg'
import commonDictionary from 'constants/commonDictionary'
import { compareId } from 'views/utils';

interface TeachersPanelProps {
  teachers: any[]
  admins: any[]
  onNew: () => void
  onTeacher: (p: any) => void
}

const TeachersPanel: FC<TeachersPanelProps> = ({ teachers, onNew, onTeacher, admins }) => {
  const language = useSelector((state: any) => state.user.language);
  return (
    <Container>
      <Paper elevation={5} sx={{ padding: 2 }}>
        <Typography variant='h4' m={2} >Administrators</Typography>
        <Grid container justifyContent={'start'} spacing={3}>
          {
            admins &&
            admins
              .sort(compareId)
              .map((item: any) =>
                <Grid item key={item.id} xs={4} sm={3} md={1.5} alignItems='start' sx={{
                  cursor: 'pointer'
                }}>
                  {
                    item.administrativePersonnel &&
                    <Box
                      display='flex'
                      flexDirection='column'
                      alignItems={'center'}
                      onClick={() => { onTeacher(item.administrativePersonnel) }}
                    >
                      <img src={blueDoor} />
                      <Typography textAlign='center'>{item.administrativePersonnel.firstName}</Typography>
                    </Box>
                  }
                </Grid>
              )
          }
        </Grid>
        <Divider />

        <Typography variant='h4' m={2} >Teachers</Typography>

        <Grid container justifyContent={'start'} spacing={3}>
          {
            teachers &&
            teachers.map((item: any) =>
              <Grid item key={item.id} xs={4} sm={3} md={1.5} alignItems='start' sx={{
                cursor: 'pointer'
              }}>
                {
                  item.teacher ?
                    <Box
                      display='flex'
                      flexDirection='column'
                      alignItems={'center'}
                      onClick={() => { onTeacher(item.teacher) }}
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
                      <Typography textAlign='center'>{'Add Teacher'}</Typography>
                    </Box>
                }
              </Grid>
            )
          }
        </Grid>
      </Paper>
    </Container>
  )
}

export default TeachersPanel
