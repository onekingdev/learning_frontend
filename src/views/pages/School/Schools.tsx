import {
  FC, useEffect
} from 'react';
import { useSelector } from 'react-redux';
import commonDictionary from 'constants/commonDictionary'

import { Grid } from '@mui/material';
import SchoolItem from 'views/molecules/SchoolElements/SchoolItem';
import { doFetchSubscriberSchools } from 'app/actions';
import { useQuery } from '@tanstack/react-query';
import { LoadingSpinner } from 'views/atoms/Spinner';
import { ErrorMessage } from 'views/atoms/ErrorMessage';
import AddSchoolItem from 'views/molecules/SchoolElements/AddSchoolItem';
import { useHistory } from 'react-router-dom';
import { TeacherPgContainer } from 'views/molecules/PgContainers/TeacherPgContainer';

const Schools: FC = () => {

  const { language, id: userId, token } = useSelector((state: any) => state.user);
  // const { schoolsubscriberSet } = useSelector((state: any) => state.subscriber)
  const history = useHistory();

  const { data: schools, isLoading, error } = useQuery(
    ['subscriber-schools', userId], // Currently fetching schools from user with userId, but will be updated in the future with subscriber query.
    () => doFetchSubscriberSchools(userId, token),
    { refetchIntervalInBackground: false }
  )


  useEffect(() => {

    if (window.Tawk_API?.onLoaded) window.Tawk_API?.showWidget();

  }, []);


  return (
    <TeacherPgContainer onlyLogoImgNav={false} title={commonDictionary[language]?.schools_homepage}>
      {
        isLoading ? <LoadingSpinner /> :
          error ? <ErrorMessage error={error} /> :
            <Grid container spacing={3} > {
              schools && schools.map((school: any) => (
                <Grid item xs={4}
                  key={school.id}
                >
                  <SchoolItem school={school.school} />
                </Grid>
              ))
            }
              <Grid item xs={4}
              onClick={() => history.push('/subscriber/addSchool')}
              >
                <AddSchoolItem/>
              </Grid>
            </Grid>
      }
    </TeacherPgContainer>
  );
};
export default Schools
