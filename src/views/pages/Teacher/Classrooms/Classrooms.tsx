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

const Classrooms: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch()
  const language = useSelector((state: any) => state.user.language);
  const { classrooms } = useSelector((state: any) => state.teacher)

  const [isOpenNewForm, setIsOpenNewForm] = useState(false);

  const onNew = () => {
    setIsOpenNewForm(true)
  }

  const onClassroom = (classroom: any) => {

    dispatch({
      type: TEACHER_SET_CURRENT_CLASSROOM_ID,
      payload: classroom.id,
    });
    if (classroom.isEmpty) {
      dispatch({
        type: TEACHER_SET_CURRENT_CLASSROOM,
        payload: classroom,
      });
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
        <ClassroomPanel classrooms={classrooms} onNew={onNew} onClassroom={onClassroom} />
      </>
    </TeacherPgContainer>
  );
};
export default Classrooms
