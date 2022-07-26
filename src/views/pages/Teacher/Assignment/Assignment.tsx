import { FC, useEffect, useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import { LoadingContext } from 'react-router-loading';
import { TeacherPgContainer } from 'views/molecules/PgContainers/TeacherPgContainer';
import { dictionary } from './dictionary';
import { Box, Container, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material';
import { doFetchSubjectsAndGradeByAudienceId, doFetchTopicsByGradeAndSubject } from 'app/actions/audienceActions';
import { useMutation, useQuery } from '@tanstack/react-query';
import { SlideShowSubjects } from 'views/organisms/SlideShowSubjects';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { any2String, getMessage } from 'views/utils';
import TeacherTopicTable from 'views/molecules/Table/TeacherTopicTable';
import { BasicColor } from 'views/Color';
import { StudentsCheckbox } from 'views/molecules/Classroom/StudentsCheckbox';
import { doAssignTasksToStudents, doFetchClassroomStudents } from 'app/actions';
import { useSnackbar } from 'notistack';
import LoadingButton from '@mui/lab/LoadingButton';

const Assignment: FC = () => {
  const loadingContext = useContext(LoadingContext);
  const { token, language } = useSelector((state: any) => state.user);
  const { enqueueSnackbar } = useSnackbar();

  const { assignmentTopicId, currentClassId } = useSelector((state: any) => state.teacher);
  const [selected, setSelected] = useState<Array<any>>([])
  const [activeSubjectId, setActiveSubjectId] = useState('');
  const [activeGradeId, setActiveGradeId] = useState('')
  const [assignmentName, setAssignmentName] = useState('')
  const [numberofQuestions, setNumberofQuestions] = useState(0)
  const [startDate, setStartDate] = useState<Date>(new Date())
  const [endDate, setEndDate] = useState<Date>(new Date())
  const [loading, setLoading] = useState(false)

  const { data: audience, isLoading } = useQuery(['subjects-grades-list-by-audience', 2], () => doFetchSubjectsAndGradeByAudienceId(2))
  const { data: students } = useQuery(
    ['fetch-classroom-students', currentClassId],
    () => doFetchClassroomStudents(currentClassId, token),
    { refetchIntervalInBackground: false, initialData: [] }
  )
  const { data: topics, isLoading: isTopicLoading, error: topicError } = useQuery(
    ['topics-by-grade', activeSubjectId, activeGradeId],
    () => doFetchTopicsByGradeAndSubject(activeSubjectId, activeGradeId),
    { enabled: (activeSubjectId !== '' && activeGradeId !== '') })

  const assignTask = useMutation(() => doAssignTasksToStudents(
    assignmentName,
    numberofQuestions,
    selected,
    startDate.toISOString(),
    endDate.toISOString(),
    assignmentTopicId,
    token), {
    onSuccess: async data => {
      if (data.message) {
        enqueueSnackbar(data.message, { variant: 'error' })
      }
      else {
        enqueueSnackbar('Assign task Succeed', { variant: 'success' })
      }
    },
    onError: async (error: any) => {
      enqueueSnackbar(error.message, { variant: 'error' })
    },
    onSettled: async () => {
      setLoading(false)
    }
  })

  const handleAssign = () => {

    setLoading(true)
    assignTask.mutate()
  }

  useEffect(() => {

    if (window.Tawk_API?.onLoaded) window.Tawk_API?.showWidget();
    !isLoading && loadingContext.done()

  }, [isLoading]);


  // const [students, setStudents] = useState<string[]>(['Lorena Sanchez', 'Lorena Sanchez', 'Lorena Sanchez', 'Lorena Sanchez', 'Lorena Sanchez', 'Lorena Sanchez', 'Lorena Sanchez']);

  useEffect(() => {
    if (window.Tawk_API?.onLoaded) if (window.Tawk_API?.onLoaded) window.Tawk_API?.showWidget();
  }, []);


  return (
    <TeacherPgContainer onlyLogoImgNav={false} title={dictionary[language]?.title} current='assignments'>
      <Container maxWidth='lg' >
        {audience &&
          <SlideShowSubjects
            subjects={audience.areaofknowledgeSet}
            onSlideClick={(id: string) => {
              setActiveSubjectId(id)
            }}
          />
        }
        <Box
          sx={{ border: 'solid #A3A5A5 1px' }}
        >
          {audience &&
            <FormControl fullWidth>
              <InputLabel id='grade-select-label' sx={{
                padding: 'none',
                color: 'white',
                ...(activeGradeId && { display: 'none' })
              }}>Select Grade
              </InputLabel>
              <Select
                labelId='grade-select-label'
                id='grade-select'
                value={activeGradeId || ''}
                SelectDisplayProps={{
                  style: {
                    background: '#1771B9',
                    color: 'white',
                    padding: 15
                  }
                }}
                variant='filled'
                onChange={(e) => setActiveGradeId(e.target.value)}
              >{
                  audience.gradeSet.map((item: any) => (
                    <MenuItem value={item.id}>{item.name}</MenuItem>
                  ))
                }
              </Select>
            </FormControl>
          }
          {
            // isIdle ? <Typography>Idle</Typography> :
            isTopicLoading ? <Typography>Loading...</Typography> :
              topicError ? <Typography color='red'>{getMessage(topicError)}</Typography> :
                topics && <TeacherTopicTable data={topics} activeSubjectId={activeSubjectId} />
          }
          <Box
            padding={2}
            sx={{ background: BasicColor.gray30 }}
          >
            <Grid container columnSpacing={3} rowSpacing={6} padding={2}>
              <Grid item xs={12} md={4}>

                <Paper elevation={5} sx={{
                  height: '100%',
                  width: '100%',
                  padding: 2
                }}>
                  {/* <StudentItemContainer>
                    <input type='checkbox' name='' id={`student-all`} />
                    <label htmlFor={`student-all`}>All Student</label>
                  </StudentItemContainer> */}
                  <Typography>Students</Typography>
                  <StudentsCheckbox students={students} onChange={setSelected} />
                </Paper>
              </Grid>
              <Grid item xs={12} md={8}>
                <Paper elevation={5} sx={{
                  height: '100%',
                  width: '100%',
                  padding: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2
                }}>
                  <TextField
                    style={{
                      width: '100%'
                    }}
                    label='Assignment Name (Optional)'
                    variant='standard'
                    color='warning'
                    focused
                    placeholder='Represent the value of a currency with an amount of a different currency'
                    onChange={(e) => setAssignmentName(e.target.value)}
                  />
                  <TextField
                    style={{
                      width: '100%',
                      marginTop: '1rem'
                    }}
                    label='Number of Questions'
                    variant='standard'
                    color='warning'
                    focused
                    placeholder='10'
                    onChange={(e) => setNumberofQuestions(+e.target.value)}
                  />
                  <Box>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <Box display='flex' flexDirection='column' gap={2} mt={2}>
                        <DatePicker
                          label='Assignment Start Date'
                          value={startDate}
                          onChange={(newValue) => {
                            setStartDate(newValue || new Date());
                          }}
                          renderInput={(params) => <TextField {...params} />}
                        />
                        <DatePicker
                          label='Assignment End Date (Leave in blank for no end date)'
                          value={endDate}
                          onChange={(newValue) => {
                            setEndDate(newValue || new Date());
                          }}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </Box>
                    </LocalizationProvider>
                  </Box>
                  <LoadingButton
                    variant='contained'
                    onClick={handleAssign}
                    loading={loading}
                  >
                    {dictionary[language]?.assign}
                  </LoadingButton>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </TeacherPgContainer>
  );
};
export default Assignment
