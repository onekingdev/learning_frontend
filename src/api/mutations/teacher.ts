import { COUPON_COODE } from 'api/fragments/paymentFragments';
import { GROUP } from 'api/fragments/peopleFragments';
import { SUBSCRIBER, _SCHOOL_SCHEMA } from 'api/fragments/schemas';
import {
  _CLASSROOM_SCHEMA,
  _TEACHERSCHEMA,
} from 'api/fragments/teacherFraments';
import { _USER, USER_PROFILE } from 'api/fragments/userFragments';
import { CLASSROOM_SCHEMA, STUDENT_SCHEMA } from 'api/queries/users';

export const CREATE_SCHOOL = (
  country: string,
  district: string,
  firstName: string,
  lastName: string,
  email: string,
  name: string,
  password: string,
  type: string,
  userName: string,
  zip: string,
  couponCode: string
) => `
mutation {
	createSchool (
    country: "${country}",
    district: "${district}",
    firstName: "${firstName}",
    lastName: "${lastName}",
    email: "${email}",
    name: "${name}",
    password: "${password}",
    type: "${type}",
    username: "${userName}",
    zip: "${zip}",
    ${couponCode ? 'couponCode: "' + couponCode + '",' : ''}
  ) {
    user {
      ${_USER}
      profile {
          ${USER_PROFILE}
      }
    }
    token
    refreshToken
    subscriber {
      ${SUBSCRIBER}
    }
    school {
      ${_SCHOOL_SCHEMA}
    }
	}
}
`;

export const CREATE_TEACHER = (
  country: string,
  couponCode: string,
  email: string,
  firstName: string,
  lastName: string,
  password: string,
  userName: string,
  zip: string
) => `
mutation {
	createTeacher (
        country: "${country}",
        ${couponCode ? 'couponCode: "' + couponCode + '",' : ''}
        email: "${email}",
        firstName: "${firstName}",
        lastName: "${lastName}",
        password: "${password}",
        username: "${userName}",
        zip: "${zip}",
    ) {
        user {
            ${_USER}
            profile {
                ${USER_PROFILE}
            }
        }
        token
        teacher {
            ${_TEACHERSCHEMA}
            couponCode {
              ${COUPON_COODE}
            }
        }
	}
}
`;

export const CLASSROMM_STUDENTS = (
  classroomId: number | string
) => `{
  studentsByClassroomId(classroomId: ${classroomId}){
    ${STUDENT_SCHEMA}
  }
}
`;

export const CLASSROOM_GROUPS = (
  classroomId: number | string
) => `{
  classroomById(id: "${classroomId}"){
    groupSet {
      ${GROUP}
    }
  }
}
`;

export const TEACHER_CLASSROOMS = (
  teacherId: number | string
) => `{
  teacherById(id: "${teacherId}"){
    classrooms {
      ${CLASSROOM_SCHEMA}
    }
  }
}
`;

export const ADD_CLASS_TO_TEACHER = (
  audienceId: string | number,
  name: string,
  teacherId?: string | number
) => `
mutation {
    createClassroom (
      audienceId: ${audienceId},
       name: "${name}",
       ${teacherId ? 'teacherId: ' + teacherId : ''}
       ) {
      classroom {
        ${_CLASSROOM_SCHEMA}
          audience {
          id
          gradeSet {
              id
              name
          }
        }
      }
    }
  }
`;
