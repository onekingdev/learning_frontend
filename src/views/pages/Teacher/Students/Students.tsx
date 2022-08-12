import {
  FC, useEffect, useState,
} from 'react';
import { useSelector } from 'react-redux';
import { TeacherPgContainer } from 'views/molecules/PgContainers/TeacherPgContainer';
import StudentsPanel from 'views/molecules/Classroom/StudentsPanel'
import ChooseNewStudentTypeDlg from 'views/molecules/Classroom/ChooseNewStudentTypeDlg'
import AddExistStudentDlg from 'views/molecules/Classroom/AddExistStudent'
import AddNewStudent from 'views/molecules/Classroom/AddNewStudent'
import EditStudentForm from 'views/molecules/Classroom/EditStudentForm'
import { dictionary } from './dictionary'
import { useQuery } from '@tanstack/react-query';
import { doFetchClassroomStudents } from 'app/actions';
import { LoadingSpinner } from 'views/atoms/Spinner';
import { Typography } from '@mui/material';
import { getMessage } from 'views/utils';

const Students: FC = () => {
  const { language, token } = useSelector((state: any) => state.user);
  const { currentClassId } = useSelector((state: any) => state.teacher);
  const [isOpenNewType, setIsOpenNewType] = useState(false);
  const [isExistingNewAccountDlgOpen, setIsExistingNewAccountDlgOpen] = useState(false);
  const [isAddNewAccountDlgOpen, setIsAddNewAccountDlgOpen] = useState(false);
  const [isOpenEditStudent, setIsOpenEditStudent] = useState(false);
  const [studentForEdit, setStudentForEdit] = useState<any>();

  const { data: students, isLoading, error } = useQuery(
    ['fetch-classroom-students', currentClassId],
    () => doFetchClassroomStudents(currentClassId, token),
    { refetchIntervalInBackground: false, initialData: [] }
  )

  const onNew = () => {
    setIsOpenNewType(true)
  }

  const onStudent = (student: any) => {
    setStudentForEdit(student);
    setIsOpenEditStudent(true);
  }
  useEffect(() => {

    if (window.Tawk_API?.onLoaded) window.Tawk_API?.showWidget();

  }, []);


  if(students?.message ) return <Typography color='red'>{getMessage(students)}</Typography>

  return (
    <TeacherPgContainer onlyLogoImgNav={false} title={dictionary[language]?.classroom} current='students' >
      <>{
        studentForEdit &&
        <EditStudentForm
          _id={studentForEdit.id}
          _gradeId={studentForEdit.grade.grade.id}
          _firstName={studentForEdit.firstName}
          _lastName={studentForEdit.lastName}
          _username={studentForEdit.user.username}
          _classId={currentClassId}
          _isOpen={isOpenEditStudent}
          _groupIds={studentForEdit.group}
          _close={() => setIsOpenEditStudent(false)}
        />
      }
        <ChooseNewStudentTypeDlg
          isOpen={isOpenNewType}
          close={() => setIsOpenNewType(false)}
          openExistingNewAccountDlg={() => setIsExistingNewAccountDlgOpen(true)}
          openNewAccountDlg={() => setIsAddNewAccountDlgOpen(true)}
        />
        <AddExistStudentDlg isOpen={isExistingNewAccountDlgOpen} close={() => setIsExistingNewAccountDlgOpen(false)} />
        <AddNewStudent isOpen={isAddNewAccountDlgOpen} close={() => setIsAddNewAccountDlgOpen(false)} />
        {
          isLoading ? <LoadingSpinner /> : error ?
            <Typography variant='h5' color='red'>{getMessage(error)}</Typography> :
            (students &&
              <StudentsPanel students={students} onNew={onNew} onStudent={onStudent} />
            )
        }
      </>
    </TeacherPgContainer>
  );
};
export default Students
