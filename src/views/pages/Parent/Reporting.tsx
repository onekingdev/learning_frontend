import { FC, useEffect, useContext, useState } from 'react';
import { ParentPgContainer } from 'views/molecules/ParentPgContainer/ParentPgContainer';
import { BarChart }          from 'views/molecules/Chart/BarChart';
import MarkTable             from 'views/molecules/Table/MarkTable';
import { LoadingContext }    from 'react-router-loading';
import query                 from 'api/queries/get';
import { useSelector }       from 'react-redux';
import { TopicReport, AreasOfKnowledge } from 'api/fragments/topicFragments';

export const ParentReporting: FC = () => {
  const loadingContext = useContext(LoadingContext);
  const user           = useSelector((state: any) => state.user);
  const guardian       = useSelector((state: any) => state.guardian);
  const [activeSubjectId, setActiveSubjectId]   = useState<number>(-1);
  const [areasOfKnowledge, setAreasOfKnowledge] = useState<any[]>([]);
  const [studentId, setStudentId]               = useState<number>(-1);
  const [data, setData]                         = useState<any[]>([]);
  useEffect(() => {
    if (guardian && guardian.guardianstudentSet && guardian.guardianstudentSet.length > 0 && guardian.guardianstudentSet[0].id) {
      setStudentId(guardian.guardianstudentSet[0].id);
    }
  }, [guardian]);
  useEffect(() => {
    (async () => {
      // Get All Subject
      const res:any = await query(``, AreasOfKnowledge(), user.token).catch(e => ({success: false}));
      if(res.success === false) {
        return
      }
      const result:any = await res.json();
      if(result.errors && !result.data) {
        alert(result.errors[0].message);
      } else {
        setAreasOfKnowledge(result.data.areasOfKnowledge)
      }
    })();
  }, [user]);
  useEffect(() => {
    if (activeSubjectId !== -1 && studentId !== -1) {
      (async () => {
        // Get Topic Report
        console.log("Request for Topic Report BY following infos\nStudentId: ", studentId, " activeSubjectId: ", activeSubjectId)
        const res:any = await query(``, TopicReport(studentId, activeSubjectId), user.token).catch(e => ({success: false}));
        if(res.success === false) {
          return
        }
        const result:any = await res.json();
        if(result.errors && !result.data) {
          alert(result.errors[0].message);
        } else {
          setData(result.data);
        }
        loadingContext.done();
      })();
    }
  }, [activeSubjectId, studentId]);
  return (
    <ParentPgContainer onlyLogoImgNav={false}>
      <div style={{
        width: '100%'
      }}>
        <BarChart />
        <MarkTable
          areasOfKnowledge={areasOfKnowledge}
          data={data}
          activeSubjectId={activeSubjectId}
          onChangeActiveIdHandler={setActiveSubjectId}
          studentId={studentId}
          setStudentId={setStudentId}
        />
      </div>
    </ParentPgContainer>
  );
};
