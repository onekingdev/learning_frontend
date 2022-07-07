import {
  FC, useEffect, useState,
  // useContext
} from 'react';
import { useSelector } from 'react-redux';
// import { LoadingContext }       from 'react-router-loading';
// import { useSnackbar }          from 'notistack';
import { TeacherPgContainer } from 'views/molecules/TeacherPgContainer/TeacherPgContainer';
import ClassroomPanel from 'views/molecules/Classroom/ClassroomPanel'
import AddClassroomForm from 'views/molecules/Classroom/AddClassroomForm'
import commonDictionary from 'constants/commonDictionary'

const data = [
  {
    name: 'Candy'
  },
  {
    name: 'Viri'
  },
  {
    name: 'Armin'
  },
  {
    name: 'Bruce'
  },
  {
    name: 'Tum'
  },
  {
    name: 'aaron'
  },
]

const Classrooms: FC = () => {
  // const loadingContext    = useContext(LoadingContext);
  // const {enqueueSnackbar} = useSnackbar();
  // const {token}              = useSelector((state: any) => state.user);
  // const guardian          = useSelector((state: any) => state.guardian);
  const language: string = useSelector((state: any) => state.user.language) || 'en-us';

  const [isOpenNewForm, setIsOpenNewForm] = useState(false);

  const onNew = () => {
    setIsOpenNewForm(true)
  }

  const onClassroom = (classroom: any) => {
    console.log({classroom})
  }
  useEffect(() => {

    if (window.Tawk_API?.onLoaded) window.Tawk_API?.showWidget();

  }, []);

  return (
    <TeacherPgContainer onlyLogoImgNav={false} title={commonDictionary[language]?.classrooms}>
      <>
        <AddClassroomForm isOpen={isOpenNewForm} close={() => setIsOpenNewForm(false)} />
        <ClassroomPanel data={data} onNew={onNew} onClassroom={onClassroom} />
      </>
    </TeacherPgContainer>
  );
};
export default Classrooms
