import { FC, useEffect, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingContext } from 'react-router-loading';
import { TeacherPgContainer } from 'views/molecules/PgContainers/TeacherPgContainer';
import { Box, Container, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Tab, Typography } from '@mui/material';
import { doFetchSubjectsAndGradeByAudienceId, doFetchTopicsByGradeAndSubject } from 'app/actions/audienceActions';
import { useMutation, useQuery } from '@tanstack/react-query';
import { SlideShowSubjects } from 'views/organisms/SlideShowSubjects';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TeacherTopicTable from 'views/molecules/Table/TeacherTopicTable';
import { BasicColor } from 'views/Color';
import { doAssignTasksToStudents, doFetchClassroomGroups, doFetchClassroomStudents } from 'app/actions';
import { useSnackbar } from 'notistack';
import LoadingButton from '@mui/lab/LoadingButton';
import commonDictionary from 'constants/commonDictionary';

import { StudentsCheckbox } from 'views/organisms/Classroom/StudentsCheckbox';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { GroupsCheckbox } from 'views/organisms/Classroom/GroupsCheckbox';
import { TEACHER_SET_ASSIGNMENT_TOPIC_ID } from 'app/types';

const Assignment: FC = () => {
  const loadingContext = useContext(LoadingContext);
  const { token, language } = useSelector((state: any) => state.user);
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch()

  const { assignmentTopicId, currentClassId } = useSelector((state: any) => state.teacher);

  // Selected students
  const [selected, setSelected] = useState<Array<any>>([])
  const [activeSubjectId, setActiveSubjectId] = useState('');
  const [activeGradeId, setActiveGradeId] = useState('')

  const [numberofQuestions, setNumberofQuestions] = useState(0)
  const [startDate, setStartDate] = useState<Date>(new Date())

  const tomorrow = new Date()
  tomorrow.setDate(startDate.getDate() + 1)
  const [endDate, setEndDate] = useState<Date>(tomorrow)

  const [loading, setLoading] = useState(false)

  // Selected tab value
  const [value, setValue] = useState('1');
  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };


  // Fetch classroom students
  const { data: students } = useQuery(
    ['classroom-students', currentClassId],
    () => doFetchClassroomStudents(currentClassId, token),
    { refetchIntervalInBackground: false, initialData: [] }
  )

  // Fetch Classroom groups
  const { data: groups } = useQuery(
    ['classroom-groups', currentClassId],
    () => doFetchClassroomGroups(currentClassId, token),
    { refetchIntervalInBackground: false }
  )

  // Fetch audiences
  const { data: audience, isLoading } = useQuery(['subjects-grades-list-by-audience', 2], () => doFetchSubjectsAndGradeByAudienceId(2))
  // Implement dependent query
  const { data: topics } = useQuery(
    ['topics-by-grade', activeSubjectId, activeGradeId],
    () => doFetchTopicsByGradeAndSubject(activeSubjectId, activeGradeId),
    { enabled: (activeSubjectId !== '' && activeGradeId !== '') })

  const assignTask = useMutation(() => doAssignTasksToStudents(
    'Assignment from Teacher to Student',
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
        dispatch({ type: TEACHER_SET_ASSIGNMENT_TOPIC_ID, payload: null });

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

    if (!numberofQuestions) {
      enqueueSnackbar('Input number of questions', { variant: 'error' })
      return
    }
    if (selected.length < 1) {
      enqueueSnackbar('Select kids to assign task', { variant: 'error' })
      return
    }
    if (startDate === endDate) {
      enqueueSnackbar('Select period correctly', { variant: 'error' })
      return
    }

    if (!assignmentTopicId) {
      enqueueSnackbar('Select topic', { variant: 'error' })
      return
    }
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
    <TeacherPgContainer onlyLogoImgNav={false} title={commonDictionary[language]?.assignment} current='assignments'>
      <Container maxWidth='lg' >
        <Typography variant='h5' textAlign='center' maxWidth={700} margin='auto'>To assign the homework, select the subject first and then pick the grade level topic by clicking on the blue tab.</Typography>
        {audience &&
          <Box>
            <SlideShowSubjects
              // Display only active subjects
              subjects={audience.areaofknowledgeSet.filter((item: any) => item.isActive)}
              onSlideClick={(id: string) => {
                setActiveSubjectId(id)
              }}
            />
            <FormControl sx={{ width: 200 }}>
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
          </Box>
        }
        <Box
          sx={{ border: 'solid #A3A5A5 1px' }}
        >
          {
            // isIdle ? <Typography>Idle</Typography> :
            // isTopicLoading ? <Typography>Loading...</Typography> :
            //   topicError ? <Typography color='red'>{getMessage(topicError)}</Typography> :
            topics &&
            <Box maxHeight={600} overflow='auto'>
              <TeacherTopicTable data={topics} activeSubjectId={activeSubjectId} />
            </Box>
          }
          <Box
            padding={2}
            sx={{ background: BasicColor.gray30 }}
          >
            <Grid container columnSpacing={3} rowSpacing={6} py={2} alignItems='start'>
              <Grid item xs={12} md={4}>

                <Paper elevation={5} sx={{
                  maxHeight: 500,
                  overflow: 'auto',
                  width: '100%',
                  padding: 2,
                }}>
                  <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                      <TabList onChange={handleTabChange} aria-label="lab API tabs example">
                        <Tab label="Students" value="1" />
                        <Tab label="Groups" value="2" />
                      </TabList>
                    </Box>
                    <Box>
                      <TabPanel value="1">
                        <StudentsCheckbox students={students} onChange={setSelected} />
                      </TabPanel>
                      <TabPanel value="2">
                        <GroupsCheckbox groups={groups} onChange={setSelected} />
                      </TabPanel>
                    </Box>
                  </TabContext>
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
                  {/* <TextField
                    style={{
                      width: '100%'
                    }}
                    label='Assignment Name (Optional)'
                    variant='standard'
                    color='warning'
                    focused
                    placeholder='Represent the value of a currency with an amount of a different currency'
                    onChange={(e) => setAssignmentName(e.target.value)}
                  /> */}
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
                    {commonDictionary[language]?.assign}
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
