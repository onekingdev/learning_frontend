import { FC, useEffect, useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import { LoadingContext } from 'react-router-loading';
import { TeacherPgContainer } from 'views/molecules/PgContainers/TeacherPgContainer';
import { dictionary } from './dictionary';
import { StudentItemContainer } from './style';
import { Box, Button, Container, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField } from '@mui/material';
import { doFetchSubjectsAndGradeByAudienceId } from 'app/actions/audienceActions';
import { useQuery } from 'react-query';
import { SlideShowSubjects } from 'views/organisms/SlideShowSubjects';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const Assignment: FC = () => {
  const loadingContext = useContext(LoadingContext);
  const { token } = useSelector((state: any) => state.user);
  const guardian = useSelector((state: any) => state.guardian);
  const language = useSelector((state: any) => state.user.language) || 'en-us';
  const { data: audience, isLoading, error } = useQuery(['fetch-subjects-grades-list', 2], () => doFetchSubjectsAndGradeByAudienceId(2))

  useEffect(() => {

    if (window.Tawk_API?.onLoaded) window.Tawk_API?.showWidget();

  }, []);

  const [activeSubjectId, setActiveSubjectId] = useState('');
  const [activeGradeId, setActiveGradeId] = useState('')

  const [students, setStudents] = useState<string[]>(['Lorena Sanchez', 'Lorena Sanchez', 'Lorena Sanchez', 'Lorena Sanchez', 'Lorena Sanchez', 'Lorena Sanchez', 'Lorena Sanchez']);

  useEffect(() => {
    if (window.Tawk_API?.onLoaded) if (window.Tawk_API?.onLoaded) window.Tawk_API?.showWidget();
  }, []);
  const [date, setDate] = useState<Date>();
  const [startDate, setStartDate] = useState<Date | null>()
  const [endDate, setEndDate] = useState<Date | null>()

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
          <Box
            padding={2}
            sx={{ background: '#E3E5E5' }}
          >
            <Grid container columnSpacing={3} rowSpacing={6} padding={2}>
              <Grid item xs={12} md={4}>

                <Paper elevation={5} sx={{
                  height: '100%',
                  width: '100%',
                  padding: 2
                }}>
                  <StudentItemContainer>
                    <input type='checkbox' name='' id={`student-all`} />
                    <label htmlFor={`student-all`}>All Student</label>
                  </StudentItemContainer>
                  {students.map((student, id) => (
                    <StudentItemContainer>
                      <input type='checkbox' name='' id={`student-${id}`} />
                      <label htmlFor={`student-${id}`}>{student}</label>
                    </StudentItemContainer>
                  ))}
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
                  />
                  <Box>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <Box display='flex' flexDirection='column' gap={2} mt={2}>
                        <DatePicker
                          label='Assignment Start Date'
                          value={startDate}
                          onChange={(newValue) => {
                            setStartDate(newValue);
                          }}
                          renderInput={(params) => <TextField {...params} />}
                        />
                        <DatePicker
                          label='Assignment End Date (Leave in blank for no end date)'
                          value={endDate}
                          onChange={(newValue) => {
                            setEndDate(newValue);
                          }}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </Box>
                    </LocalizationProvider>
                  </Box>
                  <Button
                    variant='contained'
                  >
                    {dictionary[language]?.assign}
                  </Button>
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
