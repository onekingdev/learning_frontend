import { _SCHOOL_SCHEMA } from 'api/fragments/schemas';
import {
  CREATE_SCHOOL,
} from 'api/mutations/teacher';
import { fetchQuery } from 'api/queries/get';

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
  zip: string,
  couponCode: string
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
      zip,
      couponCode
    )
  );
  return res.data?.createSchool || res.errors[0]; // when django returns error message on fail
};

export const doAddSchool = async (
  country: string,
  district: string,
  name: string,
  type: string,
  zip: string,
  couponCode: string,
  token: string
) => {
  const res: any = await fetchQuery(
    `
    mutation {
      addSchool (
        country: "${country}",
        district: "${district}",
        name: "${name}",
        type: "${type}",
        zip: "${zip}",
        ${couponCode ? 'couponCode: "' + couponCode + '",' : ''}
      ) {
        school {
          ${_SCHOOL_SCHEMA}
        }
      }
    }
    `,
    token
  );
  return res.data?.addSchool || res.errors[0]; // when django returns error message on fail
};

export const doAddTeachersToSchool = async (
  schoolId: number | string,
  teachers: string,
  token: string
) => {
  const res: any = await fetchQuery(`mutation {
    createTeachersInSchool(
      schoolId: ${schoolId},
      teachers: ${teachers}
      ) {
      school {
        schoolteacherSet {
          teacher {
            id
            user {
                username
            }
            firstName
            lastName
          }
        }
      }
    }
  }
  `, token);
  return res.data?.createTeachersInSchool?.school?.schoolteacherSet || res.errors[0]; // when django returns error message on fail
};


export const doFetchSchoolTeachers = async (
  schoolId: number | string,
  token: string
) => {
  const res: any = await fetchQuery(
    `{
      schoolById(id: "${schoolId}") {
        schoolteacherSet {
          id
          teacher {
            id
            user {
              username
            }
            firstName
            lastName
          }
        }
        schooladministrativepersonnelSet {
          id
          administrativePersonnel {
            id
            user {
              username
            }
            firstName
            lastName
            schooladministrativepersonnel {
              id
            }
          }
        }
      }
    }
    `, token);
  return res.data?.schoolById || res.errors[0]; // when django returns error message on fail
};

export const doFetchSubscriberSchools = async (
  userId: number | string,
  token: string
) => {
  const res: any = await fetchQuery(
    `
    {
      userById(id: ${userId}) {
        schoolpersonnel {
          subscriber {
            schoolsubscriberSet {
              school {
                id
                name
                country
                district
                typeOf
                schoolteacherSet {
                  teacher{
                    id
                  }
                }
              }
            }
          }
        }
      }
    }
    `, token);
  return res.data?.userById?.schoolpersonnel?.subscriber?.schoolsubscriberSet || res.errors[0]; // when django returns error message on fail
};

