import { FC, useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';
import { LoadingContext } from 'react-router-loading';
import { TeacherPgContainer } from 'views/molecules/PgContainers/TeacherPgContainer';
import { dictionary } from './dictionary';
import { useQuery } from '@tanstack/react-query';
import { ReviewStudentsTasks } from '../../../organisms/Teacher/ReviewStudents';
import { doFetchClassroomStudentsWithAssignments } from 'app/actions';
import { Typography } from '@mui/material';
import { getMessage } from 'views/utils';

const Assignment: FC = () => {
  const loadingContext = useContext(LoadingContext);
  const { token, language } = useSelector((state: any) => state.user);
  const { currentClassId } = useSelector((state: any) => state.teacher);
  const { data: students, isLoading, error } = useQuery(['teacher-assignments', currentClassId], () => doFetchClassroomStudentsWithAssignments(currentClassId, token), { refetchIntervalInBackground: false })

  useEffect(() => {

    if (window.Tawk_API?.onLoaded) window.Tawk_API?.showWidget();
    !isLoading && loadingContext.done()
  }, [isLoading]);
  return (
    <TeacherPgContainer onlyLogoImgNav={false} title={dictionary[language]?.title} current='results'>
      {
        error ? <Typography color='red'>{getMessage(error)}</Typography> :
          students &&
          <ReviewStudentsTasks students={students} />
      }
    </TeacherPgContainer>
  );
};
export default Assignment
