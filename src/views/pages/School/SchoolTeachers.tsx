import {
  FC, useEffect, useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TeacherPgContainer } from 'views/molecules/PgContainers/TeacherPgContainer';
import commonDictionary from 'constants/commonDictionary'
import { doFetchSchoolTeachers } from 'app/actions';
import { useQuery } from '@tanstack/react-query';
import { LoadingSpinner } from 'views/atoms/Spinner';
import { Typography } from '@mui/material';
import { getMessage } from 'views/utils';
import TeachersPanel from 'views/organisms/TeachersPanel';
import { TEACHER_SET_DATA } from 'app/types';
import AddNewTeacher from 'views/molecules/SchoolElements/AddNewTeacher';
import EditTeacher from 'views/organisms/Teacher/EditTeacherForm';

const SchoolTeachers: FC = () => {
  const dispatch = useDispatch()
  const { language, token } = useSelector((state: any) => state.user);
  const schoolId = useSelector((state: any) => state.school.id)

  const [isOpenNewForm, setIsOpenNewForm] = useState(false);
  const [isOpenEditForm, setIsOpenEditForm] = useState(false)
  const [selectedTeacher, setSelectedTeacher] = useState<any | null>(null)

  const { data: teachers, isLoading, error } = useQuery(
    ['school-teachers', schoolId],
    () => doFetchSchoolTeachers(schoolId, token),
    { refetchIntervalInBackground: false }
  )


  const onNew = () => {
    setIsOpenNewForm(true)
  }

  const onTeacher = (teacher: any) => {

    if (!teacher) return
    setSelectedTeacher(teacher)
    setIsOpenEditForm(true)
    dispatch({
      type: TEACHER_SET_DATA,
      payload: teacher,
    });
  }
  useEffect(() => {

    if (window.Tawk_API?.onLoaded) window.Tawk_API?.showWidget();

  }, []);

  return (
    <TeacherPgContainer onlyLogoImgNav={false} title={commonDictionary[language]?.school_teachers}>
      <>
        <AddNewTeacher isOpen={isOpenNewForm} close={() => setIsOpenNewForm(false)} />
        {
          selectedTeacher &&
          <EditTeacher _isOpen={isOpenEditForm} _close={() => setIsOpenEditForm(false)}
            _firstName={selectedTeacher.firstName}
            _id={selectedTeacher.id}
            _lastName={selectedTeacher.lastName}
            _username={selectedTeacher.user?.username}
            _userType={selectedTeacher.schooladministrativepersonnel ? 'Admin' : 'Teacher'}
          />
        }

        {
          isLoading ? <LoadingSpinner /> :
            error ? <Typography color='red'>{getMessage(error)}</Typography> :
              teachers &&
              <TeachersPanel teachers={teachers.schoolteacherSet} admins={teachers.schooladministrativepersonnelSet} onNew={onNew} onTeacher={onTeacher} />
        }
      </>
    </TeacherPgContainer>
  );
};
export default SchoolTeachers
