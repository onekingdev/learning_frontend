import {
  FC, useEffect
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import commonDictionary from 'constants/commonDictionary'
import { useHistory } from 'react-router-dom';
import { SchoolPageContainer } from 'views/molecules/PgContainers/SchoolPgContainer';

import { Grid } from '@mui/material';
import SchoolItem from 'views/molecules/SchoolElements/SchoolItem';
import { SCHOOL_SET_DATA } from 'app/types';
import { doFetchSubscriberSchools } from 'app/actions';
import { useQuery } from '@tanstack/react-query';
import { LoadingSpinner } from 'views/atoms/Spinner';
import { ErrorMessage } from 'views/atoms/ErrorMessage';

const Schools: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch()
  const { language, id: userId, token } = useSelector((state: any) => state.user);
  // const { schoolsubscriberSet } = useSelector((state: any) => state.subscriber)

  const { data: schools, isLoading, error } = useQuery(
    ['subscriber-schools', userId], // Currently fetching schools from user with userId, but will be updated in the future with subscriber query.
    () => doFetchSubscriberSchools(userId, token),
    { refetchIntervalInBackground: false }
  )

  const onSchoolClick = (school: any) => {
    dispatch({
      type: SCHOOL_SET_DATA,
      payload: school
    })
    if (school.schoolteacherSet.every((item: any) => !item.teacher)) // go to add teachers page if all values are null
      history.push('/admin/addTeachers')
    else
      history.push('/admin/schoolTeachers')
  }
  useEffect(() => {

    if (window.Tawk_API?.onLoaded) window.Tawk_API?.showWidget();

  }, []);


  return (
    <SchoolPageContainer onlyLogoImgNav={false} title={commonDictionary[language]?.schools_homepage}>
      <Grid container justifyContent={'center'}>
        {
          isLoading ? <LoadingSpinner /> :
            error ? <ErrorMessage error={error} /> :
              schools && schools.map((school: any) => (
                <Grid item
                  key={school.id}
                  onClick={() => onSchoolClick(school.school)}
                >
                  <SchoolItem school={school.school} />
                </Grid>
              ))
        }
      </Grid>
    </SchoolPageContainer>
  );
};
export default Schools
