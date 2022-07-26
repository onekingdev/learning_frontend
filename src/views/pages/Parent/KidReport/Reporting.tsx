import { FC, useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ParentPgContainer } from 'views/molecules/ParentPgContainer/ParentPgContainer';
import { LoadingContext } from 'react-router-loading';
import query from 'api/queries/get';
import { useSelector } from 'react-redux';
import { TopicReport } from 'api/fragments/topicFragments';
import { useQuery } from '@tanstack/react-query'
import { doFetchStudentById } from 'app/actions/guardianActions';
import { KidReporting } from 'views/organisms/Reporting';
import { TeacherPgContainer } from 'views/molecules/PgContainers/TeacherPgContainer';

interface StudentIdParam {
  studentId: string;
  reviewer: string
}

export const Reporting: FC = () => {
  const user = useSelector((state: any) => state.user);
  const { studentId, reviewer } = useParams<StudentIdParam>();
  const [loading, setLoading] = useState(false)
  const { data: student, isLoading } = useQuery(['fetch-kids-list', studentId, user.token], () => doFetchStudentById(+studentId, user.token))

  const loadingContext = useContext(LoadingContext);
  const [activeSubjectId, setActiveSubjectId] = useState<number>(-1);
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {

    if (window.Tawk_API?.onLoaded) if (window.Tawk_API?.onLoaded) window.Tawk_API?.showWidget();
    if (!isLoading) {
      const defaultId = student?.guardianstudentplan?.subject[0]?.id || -1
      setActiveSubjectId(defaultId)
    }
  }, [isLoading]);
  useEffect(() => {

    if (activeSubjectId !== -1 && parseInt(studentId) > 0) {
      (async () => {
        setLoading(true)
        // Get Topic Report
        const res: any = await query('', TopicReport(parseInt(studentId), activeSubjectId), user.token).catch(() => ({ success: false }));
        if (res.success === false) {
          return
        }
        const result: any = await res.json();
        if (result.errors && !result.data) {
          alert(result.errors[0].message);
        } else {
          setData(result.data);
        }
        setLoading(false)
      })();
      loadingContext.done()
    }
  }, [activeSubjectId, studentId, reviewer]);

  return (
    <>
      {
        reviewer === 'parent' &&
        <ParentPgContainer onlyLogoImgNav={false}
          children={
            <KidReporting
              student={student}
              activeSubjectId={activeSubjectId}
              data={data}
              setActiveSubjectId={setActiveSubjectId}
              isLoading={loading}
            />
          }
        />
      }
      {
        reviewer === 'teacher' &&
        <TeacherPgContainer onlyLogoImgNav={false}
          children={
            <KidReporting
              student={student}
              activeSubjectId={activeSubjectId}
              data={data}
              setActiveSubjectId={setActiveSubjectId}
              isLoading={loading}
            />
          }
        />
      }
    </>
  );
};
