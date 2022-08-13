import { FC, useEffect, useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import { LoadingContext } from 'react-router-loading';
import { TeacherPgContainer } from 'views/molecules/PgContainers/TeacherPgContainer';
import GroupsPanel from 'views/organisms/Classroom/GroupsPanel'
import AddGroupForm from 'views/organisms/Classroom/AddGroupForm';
import { useQuery } from '@tanstack/react-query';
import { doFetchClassroomGroups, doFetchClassroomStudents } from 'app/actions';
import { LoadingSpinner } from 'views/atoms/Spinner';
import { Typography } from '@mui/material';
import { getMessage } from 'views/utils';
import commonDictionary from 'constants/commonDictionary'
import EditGroupFrom from 'views/organisms/Classroom/EditGroupForm';

const ClassroomGroups: FC = () => {
  const loadingContext = useContext(LoadingContext);
  const { token, language } = useSelector((state: any) => state.user);
  const { currentClassId } = useSelector((state: any) => state.teacher);

  const { data: groups, isLoading, error } = useQuery(
    ['classroom-groups', currentClassId],
    () => doFetchClassroomGroups(currentClassId, token),
    { refetchIntervalInBackground: false }
  )
  const [isOpenGroupDialog, setIsOpenGroupDialog] = useState(false);
  const [isOpenEditGroupDG, setIsOpenEditGroupDG] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState<any>()

  const onNew = () => {
    setIsOpenGroupDialog(true)
  }

  const { data: students } = useQuery(
    ['classroom-students', currentClassId],
    () => doFetchClassroomStudents(currentClassId, token),
    { refetchIntervalInBackground: false, initialData: [] }
  )

  const onGroup = (group: any) => {
    setIsOpenEditGroupDG(true)
    setSelectedGroup(group)
  }
  useEffect(() => {

    if (window.Tawk_API?.onLoaded) window.Tawk_API?.showWidget();
    !isLoading && loadingContext.done()
  }, [isLoading]);

  return (
    <TeacherPgContainer onlyLogoImgNav={false} title={commonDictionary[language]?.classroom} current='groups'>
      <>
        <AddGroupForm isOpen={isOpenGroupDialog} close={() => setIsOpenGroupDialog(false)} />
        {
          selectedGroup &&
          <EditGroupFrom
            isOpen={isOpenEditGroupDG}
            close={() => setIsOpenEditGroupDG(false)}
            students={students}
            studentSet={selectedGroup.studentSet}
            name={selectedGroup.name}
            id={selectedGroup.id}
          />
        }
        {
          isLoading ?
            <LoadingSpinner /> :
            error ?
              <Typography color='red'>{getMessage(error)}</Typography> :
              groups &&
              <GroupsPanel groups={groups} onNew={onNew} onGroup={onGroup} />
        }
      </>
    </TeacherPgContainer>
  );
};
export default ClassroomGroups
