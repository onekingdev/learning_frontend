import { FC, useEffect, } from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import { PaymentInfo } from 'views/organisms/Setting/Payment';
import { TeacherPgContainer } from 'views/molecules/PgContainers/TeacherPgContainer';
import commonDictionary from 'constants/commonDictionary';
import { UserProfile } from 'views/organisms/Setting/UserProfile';

const SchoolSettings: FC = () => {
  const { language } = useSelector((state: any) => state.user)
  const { paymentMethod } = useSelector((state: any) => state.subscriber)

  useEffect(() => {

    if (window.Tawk_API?.onLoaded) window.Tawk_API?.showWidget();

  }, []);

  return (
    <TeacherPgContainer onlyLogoImgNav={false} title={commonDictionary[language]?.settings}>
      <Grid container spacing={2} padding={1} justifyContent='center' alignItems={'start'}>
        <Grid item md={6} sm={12}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <UserProfile />
            </Grid>
            {
              paymentMethod &&
              <Grid item xs={12}>
                <PaymentInfo paymentMethod={paymentMethod} />
              </Grid>
            }
          </Grid>
        </Grid>
      </Grid>
    </TeacherPgContainer>
  );
};
export default SchoolSettings
