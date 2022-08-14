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
import { useSnackbar } from 'notistack';

interface ReportingProps {
  studentId: string;
  reviewer: string
}

export const Reporting: FC = () => {
  const { token, language } = useSelector((state: any) => state.user);
  const { studentId, reviewer } = useParams<ReportingProps>();
  const [loading, setLoading] = useState(false)
  const { data: student, isLoading } = useQuery(['student-by-id', studentId], () => doFetchStudentById(studentId, token))
  const { enqueueSnackbar } = useSnackbar();

  const loadingContext = useContext(LoadingContext);
  const [activeSubjectId, setActiveSubjectId] = useState<number>(-1);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {

    if (window.Tawk_API?.onLoaded) if (window.Tawk_API?.onLoaded) window.Tawk_API?.showWidget();
  }, []);


  useEffect(() => {
    if (!isLoading) {
      const defaultId = student?.guardianstudentplan?.subject[0]?.id || -1
      setActiveSubjectId(defaultId)
      loadingContext.done()
    }
    else loadingContext.start()
  }, [isLoading])

  useEffect(() => {

    if (activeSubjectId !== -1 && studentId) {
      (async () => {
        setLoading(true)
        // Get Topic Report
        const res: any = await query('', TopicReport(studentId, activeSubjectId), token).catch((e: ErrorEvent) => enqueueSnackbar(e.message, { variant: 'error' }));
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
        reviewer === 'parent' && student &&
        <ParentPgContainer onlyLogoImgNav={false}
          children={
            <KidReporting
              language={language}
              token={token}
              studentId={studentId}
              areasOfKnowledge={
                reviewer === 'parent' ?
                student.guardianstudentplan?.subject || []:
                reviewer === 'teacher' ?
                student.audience?.areaofknowledgeSet?.filter((item: any) => item.isActive) || []:
                []
              }
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
        reviewer === 'teacher' && student &&
        <TeacherPgContainer onlyLogoImgNav={false}
          children={
            <KidReporting
              language={language}
              token={token}
              studentId={studentId}
              student={student}
              areasOfKnowledge={student.audience?.areaofknowledgeSet?.filter((item: any) => item.isActive) || []}
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
