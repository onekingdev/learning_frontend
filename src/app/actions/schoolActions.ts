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
        id
        schoolteacherSet {
          id
        }
      }
    }
  }
  `, token);
  return res.data?.createTeachersInSchool?.school || res.errors[0]; // when django returns error message on fail
};
