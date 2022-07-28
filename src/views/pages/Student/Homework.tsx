import { FC, useEffect, useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, Container, ThemeProvider } from '@mui/material';
import { LoadingContext } from 'react-router-loading';
import { StudentMenu } from 'views/pages/Student/Menus/StudentMenu';
import { PageTitle } from 'views/molecules/PageTitle';
import { useQuery } from '@tanstack/react-query';
import { Wrapper } from './Bank/Styles';
import commonDictionary from 'constants/commonDictionary'
import { doFetchStudentHomework } from 'app/actions';
import { HomeworkTable } from 'views/organisms/HomeworkTable';
import LoadingButton from '@mui/lab/LoadingButton';
import { themeTeacher } from 'views/Theme';
import { useSnackbar } from 'notistack';
import { useHistory } from 'react-router-dom';


export const Homework: FC = () => {

  const { id } = useSelector((state: any) => state.student)
  const { language, token } = useSelector((state: any) => state.user)
  const [taskId, seTaskId] = useState('')
  const { data: homeworks, isLoading } = useQuery(['homeworks', id], () => doFetchStudentHomework(id, token), { refetchIntervalInBackground: false })
  const loadingContext = useContext(LoadingContext);
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();

  const startHomework = () => {
    if (!taskId) enqueueSnackbar('Select task row first', { variant: 'error' })
    else history.push(`/question/HOMEWORK/${taskId}`)
  }

  useEffect(() => {
    !isLoading && loadingContext.done();
  }, [isLoading]);

  return (
    <ThemeProvider theme={themeTeacher}>
      <Wrapper>
        <StudentMenu>
          <PageTitle title={commonDictionary[language]?.homework} />
          <Container>
            <HomeworkTable homeworks={homeworks} select={seTaskId} selectedTaskId={taskId}/>
            <Box display='flex' justifyContent='center' margin={2}>
              <LoadingButton
                variant='contained'
                color='aqua'
                loading={false}
                onClick={startHomework}
              >
                {commonDictionary[language]?.start_your_homework}
              </LoadingButton>
            </Box>
          </Container>
        </StudentMenu>
      </Wrapper>
    </ThemeProvider>
  );
};


