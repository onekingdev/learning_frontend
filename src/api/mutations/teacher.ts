import {
  _CLASSROOM_SCHEMA,
  SUBSCRIBER,
  _TEACHERSCHEMA,
  _TEACHER_CLASSROOM,
} from 'api/fragments/teacherFraments';
import {_USER, USER_PROFILE} from 'api/fragments/userFragments';

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
  zip: string
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
        ${couponCode ? 'couponCode: ' + couponCode + ',' : ''}
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
        }
	}
}
`;

export const ADD_CLASS_TO_TEACHER = (
  audienceId: string | number,
  name: string
) => `
mutation {
    createClassroom (audienceId: ${audienceId}, name: "${name}") {
      classroom {
        ${_CLASSROOM_SCHEMA}
      }
    }
  }
`;
