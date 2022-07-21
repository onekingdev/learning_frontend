import {
  FC, useEffect, useState,
  // useContext
} from 'react';
import { useSelector } from 'react-redux';
// import { LoadingContext }       from 'react-router-loading';
// import { useSnackbar }          from 'notistack';
import { TeacherPgContainer } from 'views/molecules/PgContainers/TeacherPgContainer';
import ClassroomPanel from 'views/molecules/Classroom/ClassroomPanel'
import AddClassroomForm from 'views/molecules/Classroom/AddClassroomForm'
import commonDictionary from 'constants/commonDictionary'
import { useHistory } from 'react-router-dom';

const Classrooms: FC = () => {
  // const loadingContext    = useContext(LoadingContext);
  // const {enqueueSnackbar} = useSnackbar();
  // const {token}              = useSelector((state: any) => state.user);
  // const guardian          = useSelector((state: any) => state.guardian);
    const history = useHistory();
    const language = useSelector((state: any) => state.user.language);
    const {classrooms} = useSelector((state:any) => state.teacher)

  const [isOpenNewForm, setIsOpenNewForm] = useState(false);

  const onNew = () => {
    setIsOpenNewForm(true)
  }

  const onClassroom = (classroom: any) => {
    console.log({classroom})
    // TODO Redirect to the Classroom/students page with teacher info
    history.push('/teacher/students')
  }
  useEffect(() => {

    if (window.Tawk_API?.onLoaded) window.Tawk_API?.showWidget();

  }, []);

  return (
    <TeacherPgContainer onlyLogoImgNav={false} title={commonDictionary[language]?.classrooms}>
      <>
        <AddClassroomForm isOpen={isOpenNewForm} close={() => setIsOpenNewForm(false)} />
        <ClassroomPanel classrooms={classrooms} onNew={onNew} onClassroom={onClassroom} />
      </>
    </TeacherPgContainer>
  );
};
export default Classrooms
