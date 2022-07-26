import {
  FC, useEffect, useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TeacherPgContainer } from 'views/molecules/PgContainers/TeacherPgContainer';
import ClassroomPanel from 'views/molecules/Classroom/ClassroomPanel'
import AddClassroomForm from 'views/molecules/Classroom/AddClassroomForm'
import commonDictionary from 'constants/commonDictionary'
import { useHistory } from 'react-router-dom';
import { TEACHER_SET_CURRENT_CLASSROOM, TEACHER_SET_CURRENT_CLASSROOM_ID } from 'app/types';
import { doFetchTeacherClassrooms } from 'app/actions';
import { useQuery } from '@tanstack/react-query';
import { LoadingSpinner } from 'views/atoms/Spinner';
import { Typography } from '@mui/material';
import { getMessage } from 'views/utils';

const Classrooms: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch()
  const { language, token } = useSelector((state: any) => state.user);
  const teacherId = useSelector((state: any) => state.teacher.id)
  // const { classrooms } = useSelector((state: any) => state.teacher)
  const { data: classrooms, isLoading, error } = useQuery(
    ['teacher-classrooms', teacherId],
    () => doFetchTeacherClassrooms(teacherId, token),
    { refetchIntervalInBackground: false }
  )

  const [isOpenNewForm, setIsOpenNewForm] = useState(false);

  const onNew = () => {
    setIsOpenNewForm(true)
  }

  const onClassroom = (classroom: any) => {

    if (!classroom) return

    dispatch({
      type: TEACHER_SET_CURRENT_CLASSROOM_ID,
      payload: classroom.id,
    });
    dispatch({
      type: TEACHER_SET_CURRENT_CLASSROOM,
      payload: classroom,
    });
    if (classroom.isEmpty) {
      history.push('/teacher/addStudent')
    }
    // TODO Redirect to the Classroom/students page with teacher info
    else
      history.push('/teacher/students')
  }
  useEffect(() => {

    if (window.Tawk_API?.onLoaded) window.Tawk_API?.showWidget();

  }, []);

  return (
    <TeacherPgContainer onlyLogoImgNav={false} title={commonDictionary[language]?.classrooms}>
      <>
        <AddClassroomForm isOpen={isOpenNewForm} close={() => setIsOpenNewForm(false)} />
        {
          isLoading ? <LoadingSpinner /> :
            error ? <Typography color='red'>{getMessage(error)}</Typography> :
              classrooms &&
              <ClassroomPanel classrooms={classrooms} onNew={onNew} onClassroom={onClassroom} />
        }
      </>
    </TeacherPgContainer>
  );
};
export default Classrooms
