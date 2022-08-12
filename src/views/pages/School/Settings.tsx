import { FC, useEffect, } from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import { PaymentInfo } from 'views/organisms/Setting/Payment';
import { OrdersDetails } from 'views/organisms/Setting/OrderDetails';
import { TeacherPgContainer } from 'views/molecules/PgContainers/TeacherPgContainer';
import commonDictionary from 'constants/commonDictionary';
import { useQuery } from '@tanstack/react-query';
import { doFetchTeacherOrders } from 'app/actions';
import { UserProfile } from 'views/organisms/Setting/UserProfile';
import { LoadingSpinner } from 'views/atoms/Spinner';
import { ErrorMessage } from 'views/atoms/ErrorMessage';

const SchoolSettings: FC = () => {
  const { language, token } = useSelector((state: any) => state.user)
  const { id: subscriberId, paymentMethod } = useSelector((state: any) => state.subscriber)

  // const { data: orders, isLoading, error } = useQuery(
  //   ['teacher-orders', teacherId],
  //   () => doFetchTeacherOrders(teacherId, token),
  //   { refetchIntervalInBackground: false }
  // )

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
        {/* <Grid item md={6} sm={12}>
          {
            isLoading ? <LoadingSpinner /> :
              error ? <ErrorMessage error={error} /> :
                orders &&
                <OrdersDetails orders={orders} />
          }
        </Grid> */}
      </Grid>
    </TeacherPgContainer>
  );
};
export default SchoolSettings
