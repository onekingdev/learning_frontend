import query, { fetchQuery } from '../../api/queries/get';
import { AUDIENCES_WITH_GRADE_QUERY } from '../../api/queries/people';

export const getAudiencesWithGrades = async () => {
  const res: any = await query('audiences', AUDIENCES_WITH_GRADE_QUERY).catch(
    () => ({ success: false })
  );

  if (res.success === false) {
    return { success: false, msg: 'Network Error!' };
  }

  const result: any = await res.json();

  if (result.errors && !result.data) {
    return { success: false, msg: result.errors[0].message };
  }

  const audiences = result.data.audiences;

  return { success: true, msg: 'Success', data: audiences };
};

export const doFetchAudiencesWithGrade = async () => {
  const res: any = await fetchQuery(`{
    audiences {
      id
      name
      standardCode
      gradeSet {
        id
        name
      }
    }
  }`);
  return res.data?.audiences ?? res.errors[0];
}


export const doFetchSubjectsAndGradeByAudienceId = async (audienceId: number) => {
  const res: any = await fetchQuery(`{
    audienceById(id: "${audienceId}"){
      id
      name
      standardCode
      gradeSet{
        id
        name
      }
      areaofknowledgeSet{
        id
        image
        name
        isActive
        hexColor
      }
    }
  }`);
  return res.data?.audienceById || res.errors[0];
};

export const doFetchGradesByAokId = async (aokId: number | string) => {
  const res: any = await fetchQuery(`
    {
      areaOfKnowledgeById(id: ${aokId}){
        audience {
          gradeSet{
            id
            name
          }
        }
      }
    }
  `);
  return res.data?.areaOfKnowledgeById?.audience?.gradeSet || res.errors[0];
};

export const doFetchTopicsByGradeAndSubject = async (subjectId: number | string, gradeId: number | string) => {
  const res: any = await fetchQuery(`
  {
    rootTopicsByAokAndGrade(aokId: ${subjectId}, gradeId: ${gradeId}) {
      id
      name
      standardTopic
      subTopicsByGrade(gradeId: ${gradeId}) {
        id
        name
        standardTopic
        topicgradeSet {
            grade {
                id
                name
            }
        }
        subTopicsByGrade(gradeId: ${gradeId}){
            id
            name
            standardTopic
            topicgradeSet {
                grade{
                    id
                    name
                }
            }
            subTopicsByGrade(gradeId: ${gradeId}) {
                id
                name
                standardTopic
                topicgradeSet {
                    grade {
                        id
                        name
                    }
                }
            }
        }
      }
    }
  }`);
  return res.data?.rootTopicsByAokAndGrade ?? res.errors[0];
};
