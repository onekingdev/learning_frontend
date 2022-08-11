import { GROUP } from 'api/fragments/peopleFragments';
import { LEVEL } from 'api/fragments/schemas';
import { STUDENT_HOMEWORK } from 'api/fragments/studentFragments';
import { FETCH_GUARDIAN_PLANS } from 'api/mutations/guardians';
import {
  ADD_CLASS_TO_TEACHER,
  CLASSROMM_STUDENTS,
  CLASSROOM_GROUPS,
  CREATE_TEACHER,
  TEACHER_CLASSROOMS,
  TEACHER_ORDERS,
} from 'api/mutations/teacher';
import { fetchQuery, sendRawQuery } from 'api/queries/get';
import { CLASSROOM_SCHEMA, STUDENT_SCHEMA } from 'api/queries/users';

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

export const doAddClassroomToTeacher = async (
  audienceId: number | string,
  name: string,
  token: string,
  teacherId?: string | number
) => {
  try {
    const res: any = await sendRawQuery(
      ADD_CLASS_TO_TEACHER(audienceId, name, teacherId),
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
  return res.data?.importStudentToClassroom?.classroom?.studentSet || res.errors[0]; // when django returns error message on fail
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

export const doUpdateStudent = async (
  token: string,
  studentId: string | number,
  classroomId?: string | number,
  gradeId?:string | number,
  groupIds?: Array<number | string>,
  lastName?:string,
  name?:string,
  password?:string,
  username?:string,
) => {
  const res: any = await fetchQuery(
    `
    mutation {
      updateStudent(
        studentId: ${studentId},
        ${classroomId ? 'classroomId: "' + classroomId + '",' : ''}
        ${gradeId ? 'gradeId: "' + gradeId + '",' : ''}
        ${groupIds ? 'groupIds: [' + groupIds + '],' : ''}
        ${lastName ? 'lastName: "' + lastName + '",' : ''}
        ${name ? 'name: "' + name + '",' : ''}
        ${password ? 'password: "' + password + '",' : ''}
        ${username ? 'username: "' + username + '",' : ''}
      ){
        student{
          ${STUDENT_SCHEMA}
        }
      }
    }
    `, token);
  return res.data?.updateStudent?.student || res.errors[0]; // when django returns error message on fail
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

export const doFetchTeacherOrders = async (
  teacherId: number | string,
  token: string
) => {
  const res: any = await fetchQuery(TEACHER_ORDERS(teacherId), token);
  return res.data?.teacherById?.orderSet || res.errors[0]; // when django returns error message on fail
};


export const doFetchGuardianOrders = async (
  guardianId: number | string,
  token: string
) => {
  const res: any = await fetchQuery(FETCH_GUARDIAN_PLANS(guardianId), token);
  return res.data?.guardianById?.orderSet || res.errors[0]; // when django returns error message on fail
};


export const doFetchTeacherPaymentMethods = async (
  teacherId: number | string,
  token: string
) => {
  const res: any = await fetchQuery(TEACHER_ORDERS(teacherId), token);
  return res.data?.teacherById?.orderSet || res.errors[0]; // when django returns error message on fail
};



export const doFetchClassroomStudentsWithAssignments = async (
  classroomId: string | number,
  token: string
) => {
  const res: any = await fetchQuery(
    `
    {
      classroomById(id: "${classroomId}"){
        studentSet{
          id
          lastName
          firstName
          fullName
          level {
            ${LEVEL}
          }
          points
          coinWallet {
            blockTransactionCoins
          }
          studenthomeworkSet{
            ${STUDENT_HOMEWORK}
          }
        }
      }
    }
    `, token);
  return res.data?.classroomById?.studentSet || res.errors[0]; // when django returns error message on fail
};

