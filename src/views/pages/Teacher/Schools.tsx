import {
  FC, useEffect
} from 'react';
import { useSelector } from 'react-redux';
import commonDictionary from 'constants/commonDictionary'
import { useHistory } from 'react-router-dom';
import { SchoolPageContainer } from 'views/molecules/PgContainers/SchoolPgContainer';

import { Grid } from '@mui/material';
import SchoolItem from 'views/molecules/SchoolElements/SchoolItem';

const Schools: FC = () => {
  const history = useHistory();
  const language: string = useSelector((state: any) => state.user.language);
  const { schoolsubscriberSet } = useSelector((state: any) => state.subscriber)

  useEffect(() => {

    if (window.Tawk_API?.onLoaded) window.Tawk_API?.showWidget();

  }, []);

  return (
    <SchoolPageContainer onlyLogoImgNav={false} title={commonDictionary[language]?.schools_homepage}>
      <Grid container justifyContent={'center'}>
        {
          schoolsubscriberSet.map((school: any) => (
            <Grid item
              onClick={() => history.push('/admin/addTeachers')}
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
