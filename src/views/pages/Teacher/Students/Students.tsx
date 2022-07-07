import {
  FC, useEffect, useState,
  // useContext
} from 'react';
import { useSelector } from 'react-redux';
// import { LoadingContext } from 'react-router-loading';
// import { useSnackbar } from 'notistack';
import { TeacherPgContainer } from 'views/molecules/TeacherPgContainer/TeacherPgContainer';
import StudentsPanel from 'views/molecules/Classroom/StudentsPanel'
import ChooseNewStudentTypeDlg from 'views/molecules/Classroom/ChooseNewStudentTypeDlg'
import AddExistStudentDlg from 'views/molecules/Classroom/AddExistStudent'
import AddNewStudent from 'views/molecules/Classroom/AddNewStudent'
import EditStudentForm from 'views/molecules/Classroom/EditStudentForm'
import { useHistory } from 'react-router-dom';
import { dictionary } from './dictionary'
import { TabContainer, Tab, SelectedTab } from './Style'
import { LANGUAGES } from 'constants/common';
const data = [
  {
    name: 'armin',
    type: 'normal',
    grade: 'greade',
    lastName: 'last name',
    classroom: 'classroom',
    username: 'user name',
  }, {
    name: 'armin',
    type: 'normal',
    grade: 'greade',
    lastName: 'last name',
    classroom: 'classroom',
    username: 'user name',
  }, {
    name: 'armin',
    type: 'normal',
    grade: 'greade',
    lastName: 'last name',
    classroom: 'classroom',
    username: 'user name',
  }, {
    name: 'armin',
    type: 'normal',
    grade: 'greade',
    lastName: 'last name',
    classroom: 'classroom',
    username: 'user name',
  },
]

const Students: FC = () => {
  // const loadingContext    = useContext(LoadingContext);
  // const {enqueueSnackbar} = useSnackbar();
  // const user              = useSelector((state: any) => state.user);
  // const guardian          = useSelector((state: any) => state.guardian);
  const language: string = useSelector((state: any) => state.user.language) || LANGUAGES[0].value;
  const history = useHistory();
  const [isOpenNewType, setIsOpenNewType] = useState(false);
  const [isExistingNewAccountDlgOpen, setIsExistingNewAccountDlgOpen] = useState(false);
  const [isAddNewAccountDlgOpen, setIsAddNewAccountDlgOpen] = useState(false);
  const [isOpenEditStudent, setIsOpenEditStudent] = useState(false);
  const [studentForEdit, setStudentForEdit] = useState({});

  const onNew = () => {
    console.log('will open')
    setIsOpenNewType(true)
  }

  const onStudent = (student: any) => {
    setStudentForEdit(student);
    setIsOpenEditStudent(true);
  }
  useEffect(() => {

    if (window.Tawk_API?.onLoaded) window.Tawk_API?.showWidget();

  }, []);

  return (
    <TeacherPgContainer onlyLogoImgNav={false} title={dictionary[language]?.classroom}>
      <>
        <TabContainer>
          <SelectedTab onClick={() => history.push('/teacher/students')}>{dictionary[language]?.students}</SelectedTab>
          <Tab onClick={() => history.push('/teacher/groups')}>{dictionary[language]?.group}</Tab>
        </TabContainer>
        <EditStudentForm
          data={studentForEdit}
          isOpen={isOpenEditStudent}
          clse={() => setIsOpenEditStudent(true)}
        />
        <ChooseNewStudentTypeDlg
          isOpen={isOpenNewType}
          close={() => setIsOpenNewType(false)}
          openExistingNewAccountDlg={() => setIsExistingNewAccountDlgOpen(true)}
          openNewAccountDlg={() => setIsAddNewAccountDlgOpen(true)}
        />
        <AddExistStudentDlg isOpen={isExistingNewAccountDlgOpen} close={() => setIsExistingNewAccountDlgOpen(false)} />
        <AddNewStudent isOpen={isAddNewAccountDlgOpen} close={() => setIsAddNewAccountDlgOpen(false)} />
        {/* <AddClassroomForm isOpen={isOpenNewForm} close={() => setIsOpenNewForm(false)} /> */}
        <StudentsPanel data={data} onNew={onNew} onStudent={onStudent} />
      </>
    </TeacherPgContainer>
  );
};
export default Students
