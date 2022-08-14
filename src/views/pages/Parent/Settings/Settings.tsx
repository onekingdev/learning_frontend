import { FC, useEffect, useContext } from 'react';
import { Button, Container, Grid, ThemeProvider } from '@mui/material';
import { ParentPgContainer } from 'views/molecules/ParentPgContainer/ParentPgContainer';
import {
  TextGroup,
  LSLabel,
  LSText,
} from 'views/molecules/Setting/utils/Style';
import { LoadingContext } from 'react-router-loading';
import { useSelector } from 'react-redux'
import { dictionary } from './dictionary'
import { UserProfile } from 'views/organisms/Setting/UserProfile';
import { PaymentInfo } from 'views/organisms/Setting/Payment';
import { doFetchGuardianOrders } from 'app/actions';
import { useQuery } from '@tanstack/react-query';
import { LoadingSpinner } from 'views/atoms/Spinner';
import { ErrorMessage } from 'views/atoms/ErrorMessage';
import { OrdersDetails } from 'views/organisms/Setting/OrderDetails';
import { settingPage } from 'views/Theme';
export const Settings: FC = () => {

  const loadingContext = useContext(LoadingContext);
  const { id: guardianId } = useSelector((state: any) => state.guardian)
  const { language, token, paymentMethod } = useSelector((state: any) => state.user)

  const { data: orders, isLoading, error } = useQuery(
    ['guardian-orders', guardianId],
    () => doFetchGuardianOrders(guardianId, token),
    { refetchIntervalInBackground: false }
  )

  useEffect(() => {
    if (window.Tawk_API?.onLoaded) window.Tawk_API?.showWidget();
    loadingContext.done();
  }, []);
  return (
    <ParentPgContainer onlyLogoImgNav={false} title={dictionary[language]?.settings}>
      <ThemeProvider theme={settingPage}>
        <Container maxWidth='xl' sx={{ padding: 0, paddingBottom: 5, minHeight: '100vh' }}>
          <Grid container spacing={3} padding={1} >
            <Grid item md={6} sm={12}>
              <Grid container spacing={2} >
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'end' }}>
                  <UserProfile />
                </Grid>
                {
                  paymentMethod &&
                  <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'end' }}>
                    <PaymentInfo paymentMethod={paymentMethod} />
                  </Grid>
                }
              </Grid>
              <TextGroup>
                <LSLabel>{dictionary[language]?.questions}</LSLabel>
                <LSText>{dictionary[language]?.reachUsAndWeWillHelpYou}</LSText>
                <Button href='#'>{dictionary[language]?.contact}</Button>
              </TextGroup>
            </Grid>
            <Grid item md={6} sm={12} sx={{ display: 'flex', justifyContent: 'start' }}>
              {
                isLoading ? <LoadingSpinner /> :
                  error ? <ErrorMessage error={error} /> :
                    orders && paymentMethod &&
                    <OrdersDetails orders={orders} paymentMethod={paymentMethod} />
              }
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </ParentPgContainer>
  );
};
export default Settings;
