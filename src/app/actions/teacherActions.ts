import { GROUP } from 'api/fragments/peopleFragments';
import {
  ADD_CLASS_TO_TEACHER,
  CLASSROMM_STUDENTS,
  CLASSROOM_GROUPS,
  CREATE_SCHOOL,
  CREATE_TEACHER,
  TEACHER_CLASSROOMS,
} from 'api/mutations/teacher';
import { fetchQuery, sendRawQuery } from 'api/queries/get';
import { CLASSROOM_SCHEMA, STUDENT_SCHEMA } from 'api/queries/users';

export const doCreateSchool = async (
  country: string,
  district: string,
  firstName: string,
  lastName: string,
  email: string,
  name: string,
  password: string,
  type: string,
  userName: string,
  zip: string
) => {
  const res: any = await fetchQuery(
    CREATE_SCHOOL(
      country,
      district,
      firstName,
      lastName,
      email,
      name,
      password,
      type,
      userName,
      zip
    )
  );
  return res.data?.createSchool ?? res.errors[0]; // when django returns error message on fail
};

export const doCreateTeacher = async (
  country: string,
  couponCode: string,
  email: string,
  firstName: string,
  lastName: string,
  password: string,
  userName: string,
  zip: string
) => {
  const res: any = await fetchQuery(
    CREATE_TEACHER(
      country,
      couponCode,
      email,
      firstName,
      lastName,
      password,
      userName,
      zip
    )
  );
  return res.data?.createTeacher ?? res.errors[0]; // when django returns error message on fail
};

export const doFetchSubscriberSchools = async (
  country: string,
  couponCode: string,
  email: string,
  firstName: string,
  lastName: string,
  password: string,
  schoolId: string,
  userName: string,
  zip: string
) => {
  const res: any = await fetchQuery(
    CREATE_TEACHER(
      country,
      couponCode,
      email,
      firstName,
      lastName,
      password,
      userName,
      zip
    )
  );
  return res.data?.createTeacher?.user ?? res.errors[0]; // when django returns error message on fail
};

export const doAddClassroomToTeacher = async (
  audienceId: number | string,
  name: string,
  token: string
) => {
  try {
    const res: any = await sendRawQuery(
      ADD_CLASS_TO_TEACHER(audienceId, name),
      token
    );
    return res.msg
      ? { status: false, message: res.msg }
      : { status: true, data: res.data.createClassroom.classroom };
  } catch (e: any) {
    return { status: false, message: e.message };
  }
};

export const doAddStudentsToClassroom = async (
  students: string,
  token: string
) => {
  try {
    const res: any = await sendRawQuery(
      `
    mutation {
      createStudentsToClassroom(
        students: ${students}
      ){
        classroom {
          ${CLASSROOM_SCHEMA}
        }
      }
    }`,
      token
    );
    return res.msg
      ? { status: false, message: res.msg }
      : { status: true, data: res.data.createStudentsToClassroom.classroom };
  } catch (e: any) {
    return { status: false, message: e.message };
  }
};

export const doAddOneStudentToClassroom = async (
  classroomId: string | number,
  gradeId: string | number,
  lastName: string,
  name: string,
  password: string,
  username: string,
  token: string
) => {
  try {
    const res: any = await sendRawQuery(
      `mutation {
        createStudentToClassroom(
          classroomId: ${classroomId},
          gradeId: ${gradeId},
          lastName: "${lastName}",
          name: "${name}",
          password: "${password}",
          username: "${username}"
        ) {
          classroom {
            studentSet {
              ${STUDENT_SCHEMA}
            }
          }
        }
      }`,
      token
    );
    return res.msg
      ? { status: false, message: res.msg }
      : res.data.createStudentToClassroom.classroom.studentSet;
  } catch (e: any) {
    return { status: false, message: e.message };
  }
};

export const doAddExistingStudentToClassroom = async (
  classroomId: number | string,
  name: string,
  password: string,
  token: string
) => {
  const res: any = await fetchQuery(`mutation {
    importStudentToClassroom(
      classroomId: ${classroomId},
      username: "${name}",
      password: "${password}"
      ) {
      classroom {
        studentSet {
          ${STUDENT_SCHEMA}
        }
      }
    }
  }
  `, token);
  return res.data?.classroom.studentSet || res.errors[0]; // when django returns error message on fail
};

export const doCreateGroup = async (
  classroomId: number | string,
  name: string,
  students: string,
  token: string
) => {
  const res: any = await fetchQuery(`mutation {
    createGroup(
      classroomId: ${classroomId},
      name: "${name}",
      studentIds: ${students}
      ) {
        group {
          ${GROUP}
        }
    }
  }
  `, token);
  return res.data?.createGroup.group || res.errors[0]; // when django returns error message on fail
};

export const doCreateDashboardData = async (
  classroomId: number | string,
  token: string
) => {
  const res: any = await fetchQuery(`mutation {
    classroomReport(
      classroomId: ${classroomId},
      ) {
      coinsToday
      goalCoinsPerDay
      correctQuestionsCountToday
      correctQuestionsCountYesterday
      coinsYesterday
      classLeadersYesterday {
        student {
          ${STUDENT_SCHEMA}
        }
        coinsSum
      }
      coinsAll
      questionsAll
    }
  }
  `, token);
  return res.data?.classroomReport || res.errors[0]; // when django returns error message on fail
};

export const doFetchClassroomStudents = async (
  classroomId: number | string,
  token: string
) => {
  const res: any = await fetchQuery(CLASSROMM_STUDENTS(classroomId), token);
  return res.data?.studentsByClassroomId || res.errors[0]; // when django returns error message on fail
};

export const doAssignTasksToStudents = async (
  assignmentName: string,
  numberofQuestions: number,
  studentIds: Array<number>,
  startDate: string,
  endDate: string,
  topicId: string | number,
  token: string
) => {
  const res: any = await fetchQuery(
    `
    mutation {
      assignStudentsHomework(
        name:"${assignmentName}",
        numberOfQuestions: ${numberofQuestions},
        startAt: "${startDate}",
        endAt: "${endDate}",
        studentIds: [${studentIds}],
        topicId: ${topicId}
      ){
        user{
          id
        }
      }
    }
    `, token);
  return res.data?.assignStudentsHomework || res.errors[0]; // when django returns error message on fail
};

export const doFetchClassroomGroups = async (
  classroomId: number | string,
  token: string
) => {
  const res: any = await fetchQuery(CLASSROOM_GROUPS(classroomId), token);
  return res.data?.classroomById?.groupSet || res.errors[0]; // when django returns error message on fail
};

export const doFetchTeacherClassrooms = async (
  teacherId: number | string,
  token: string
) => {
  const res: any = await fetchQuery(TEACHER_CLASSROOMS(teacherId), token);
  return res.data?.teacherById?.classrooms || res.errors[0]; // when django returns error message on fail
};

export const teacherCreatesStudent = (payload: string) => ({
  type: 'TEACHER_CREATE_STUDENT',
  payload,
});

export const teacherAuthStudent = (payload: string) => ({
  type: 'TEACHER_AUTH_STUDENT',
  payload,
});

export const teacherCreateGroup = (payload: string) => ({
  type: 'TEACHER_CREATE_GROUP',
  payload,
});

export const teacherRemoveGroup = (payload: string) => ({
  type: 'TEACHER_REMOVE_GROUP',
  payload,
});

export const teacherAddStudent = (payload: string) => ({
  type: 'TEACHER_ADD_STUDENT',
  payload,
});

export const teacherRemoveStudent = (payload: string) => ({
  type: 'TEACHER_REMOVE_STUDENT',
  payload,
});
