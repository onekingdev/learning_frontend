import { FC, useEffect, useState, useContext, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { LoadingContext } from 'react-router-loading';
import { TeacherPgContainer } from 'views/molecules/TeacherPgContainer/TeacherPgContainer';
import { dictionary } from './dictionary';
import { SubjectCard } from 'views/atoms/SubjectCard';
import { TableContainer, AssignPanelContainer, StudentPanel, AssignPanel, StudentItemContainer } from './style';
import { AreasOfKnowledge } from 'api/fragments/topicFragments';
import query from 'api/queries/get';
import AssignmentTable from 'views/molecules/Table/AssignmentTable';
import TextField from '@mui/material/TextField';
import { Box, Container, Grid } from '@mui/material';
import DateTimePicker from 'react-datetime-picker';
import Button from 'views/molecules/MuiButton';
import { BasicColor } from 'views/Color';
import { doFetchAOKsByAudienceId } from 'app/actions/audienceActions';
import { useQuery } from 'react-query';
import { SlideShowSubjects } from 'views/organisms/SlideShowSubjects';

const Assignment: FC = () => {
  const loadingContext = useContext(LoadingContext);
  const { token } = useSelector((state: any) => state.user);
  const guardian = useSelector((state: any) => state.guardian);
  const language = useSelector((state: any) => state.user.language) || 'en-us';
  const { data: aoks, isLoading, error } = useQuery(['fetch-aok-list', 2], () => doFetchAOKsByAudienceId(2))

  useEffect(() => {

    if (window.Tawk_API?.onLoaded) window.Tawk_API?.showWidget();

  }, []);

  const [activeSubjectId, setActiveSubjectId] = useState('');

  const [students, setStudents] = useState<string[]>(["Lorena Sanchez", "Lorena Sanchez", "Lorena Sanchez", "Lorena Sanchez", "Lorena Sanchez", "Lorena Sanchez", "Lorena Sanchez"]);

  useEffect(() => {
    if (window.Tawk_API?.onLoaded) if (window.Tawk_API?.onLoaded) window.Tawk_API?.showWidget();
  }, []);
  const [date, setDate] = useState<Date>();

  return (
    <TeacherPgContainer onlyLogoImgNav={false} title={dictionary[language]?.title} current='assignments'>
      <Container maxWidth='lg'>
        {aoks &&
          <SlideShowSubjects
            subjects={aoks}
            onSlideClick={(id: string) => {
              setActiveSubjectId(id)
            }}
          />
        }
        <TableContainer>
          <AssignmentTable>
            <AssignPanelContainer>
              <StudentPanel>
                <StudentItemContainer>
                  <input type="checkbox" name="" id={`student-all`} />
                  <label htmlFor={`student-all`}>All Student</label>
                </StudentItemContainer>
                {students.map((student, id) => (
                  <StudentItemContainer>
                    <input type="checkbox" name="" id={`student-${id}`} />
                    <label htmlFor={`student-${id}`}>{student}</label>
                  </StudentItemContainer>
                ))}
              </StudentPanel>
              <AssignPanel>
                <TextField
                  style={{
                    width: "100%"
                  }}
                  label="Assignment Name (Optional)"
                  variant="standard"
                  color="warning"
                  focused
                  placeholder='Represent the value of a currency with an amount of a different currency'
                />
                <TextField
                  style={{
                    width: "100%",
                    marginTop: "1rem"
                  }}
                  label="Number of Questions"
                  variant="standard"
                  color="warning"
                  focused
                  placeholder='10'
                />
                <TextField
                  style={{
                    width: "100%",
                    marginTop: "1rem"
                  }}
                  label="Assignment Start Date"
                  variant="standard"
                  color="warning"
                  focused
                  placeholder='10'
                />
                <Box style={{
                  width: "100%",
                  marginTop: "1rem"
                }}>
                  <label htmlFor="">Assignment Start Date</label><br />
                  <DateTimePicker
                    value={date}
                    onChange={(e: any) => {
                      setDate(e);
                      console.log(e)
                    }}
                  />
                </Box>
                <Box style={{
                  width: "100%",
                  marginTop: "1rem"
                }}>
                  <label htmlFor="">Assignment End Date (Leave in blank for no end date)</label><br />
                  <DateTimePicker
                    value={date}
                    onChange={(e: any) => {
                      setDate(e);
                      console.log(e)
                    }}
                  />
                </Box>
                <Button
                  margin="10px 0px"
                  value={dictionary[language]?.assign}
                  bgColor={BasicColor.green}
                  // onClick   = {handleSubmit}
                  align={'left'}
                  fullWidth={true}
                />
              </AssignPanel>
            </AssignPanelContainer>
          </AssignmentTable>
        </TableContainer>
      </Container>
    </TeacherPgContainer>
  );
};
export default Assignment
