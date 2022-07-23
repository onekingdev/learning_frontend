import { GROUP } from 'api/fragments/peopleFragments';
import {
  ADD_CLASS_TO_TEACHER,
  CLASSROMM_STUDENTS,
  CLASSROOM_GROUPS,
  CREATE_GROUP,
  CREATE_SCHOOL,
  CREATE_TEACHER,
} from 'api/mutations/teacher';
import {fetchQuery, sendRawQuery} from 'api/queries/get';
import {CLASSROOM_SCHEMA, STUDENT_SCHEMA} from 'api/queries/users';

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
      ? {status: false, message: res.msg}
      : {status: true, data: res.data.createClassroom.classroom};
  } catch (e: any) {
    return {status: false, message: e.message};
  }
};

export const doFetchClassLeaders = async (token: string) => {
  // TODO: update to real query when production
  return {
    data: [
      {
        name: 'Charly',
        coins: 540,
      },
      {
        name: 'Candy',
        coins: 240,
      },
    ],
  };
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
      ? {status: false, message: res.msg}
      : {status: true, data: res.data.createStudentsToClassroom.classroom};
  } catch (e: any) {
    return {status: false, message: e.message};
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
      ? {status: false, message: res.msg}
      :  res.data.createStudentToClassroom.classroom.studentSet;
  } catch (e: any) {
    return {status: false, message: e.message};
  }
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
  return res.data?.createGroup.group ?? res.errors[0]; // when django returns error message on fail
};

export const doFetchClassroomStudents = async (
  classroomId: number | string,
  token: string
) => {
  const res: any = await fetchQuery(CLASSROMM_STUDENTS(classroomId), token);
  return res.data?.studentsByClassroomId || res.errors[0]; // when django returns error message on fail
};

export const doFetchClassroomGroups = async (
  classroomId: number | string,
  token: string
) => {
  const res: any = await fetchQuery(CLASSROOM_GROUPS(classroomId), token);
  return res.data?.classroomById?.groupSet || res.errors[0]; // when django returns error message on fail
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
