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

const Schools: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch()
  const language: string = useSelector((state: any) => state.user.language);
  const { schoolsubscriberSet } = useSelector((state: any) => state.subscriber)

  const onSchoolClick = (school: any) => {
    console.log({ school })
    dispatch({
      type: SCHOOL_SET_DATA,
      payload: school
    })
    history.push('/admin/addTeachers')
  }
  useEffect(() => {

    if (window.Tawk_API?.onLoaded) window.Tawk_API?.showWidget();

  }, []);



  return (
    <SchoolPageContainer onlyLogoImgNav={false} title={commonDictionary[language]?.schools_homepage}>
      <Grid container justifyContent={'center'}>
        {
          schoolsubscriberSet.map((school: any) => (
            <Grid item
              onClick={() => onSchoolClick(school.school)}
            >
              <SchoolItem name={school.school?.name || ''} />
            </Grid>
          ))
        }
      </Grid>
    </SchoolPageContainer>
  );
};
export default Schools
