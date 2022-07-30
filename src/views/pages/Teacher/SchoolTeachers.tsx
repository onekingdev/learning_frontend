import {
  FC, useEffect, useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TeacherPgContainer } from 'views/molecules/PgContainers/TeacherPgContainer';
import AddClassroomForm from 'views/molecules/Classroom/AddClassroomForm'
import commonDictionary from 'constants/commonDictionary'
import { useHistory } from 'react-router-dom';
import { doFetchSchoolTeachers } from 'app/actions';
import { useQuery } from '@tanstack/react-query';
import { LoadingSpinner } from 'views/atoms/Spinner';
import { Typography } from '@mui/material';
import { getMessage } from 'views/utils';
import TeachersPanel from 'views/organisms/TeachersPanel';

const SchoolTeachers: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch()
  const { language, token } = useSelector((state: any) => state.user);
  const schoolId = useSelector((state: any) => state.school.id)

  const { data: teachers, isLoading, error } = useQuery(
    ['school-teachers', schoolId],
    () => doFetchSchoolTeachers(schoolId, token),
    { refetchIntervalInBackground: false }
  )

  const [isOpenNewForm, setIsOpenNewForm] = useState(false);

  const onNew = () => {
    setIsOpenNewForm(true)
  }

  const onClassroom = (classroom: any) => {

    if (!classroom) return

    // dispatch({
    //   type: TEACHER_SET_CURRENT_CLASSROOM_ID,
    //   payload: classroom.id,
    // });
    // dispatch({
    //   type: TEACHER_SET_CURRENT_CLASSROOM,
    //   payload: classroom,
    // });
    // if (classroom.isEmpty) {
    //   // history.push('/teacher/addStudent')
    // }
    // // TODO Redirect to the Classroom/students page with teacher info
    // else
    //   // history.push('/teacher/students')
  }
  useEffect(() => {

    if (window.Tawk_API?.onLoaded) window.Tawk_API?.showWidget();

  }, []);

  return (
    <TeacherPgContainer onlyLogoImgNav={false} title={commonDictionary[language]?.school_teachers}>
      <>
        <AddClassroomForm isOpen={isOpenNewForm} close={() => setIsOpenNewForm(false)} />
        {
          isLoading ? <LoadingSpinner /> :
            error ? <Typography color='red'>{getMessage(error)}</Typography> :
              teachers &&
              <TeachersPanel teachers={teachers} onNew={onNew} onClassroom={onClassroom} />
        }
      </>
    </TeacherPgContainer>
  );
};
export default SchoolTeachers
