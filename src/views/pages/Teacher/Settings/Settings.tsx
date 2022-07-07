import { FC, useEffect, } from 'react';
import { useSelector } from 'react-redux';
import { dictionary } from './dictionary'
import { Grid } from '@mui/material';
import { TeacherSettingProfile } from 'views/organisms/Setting/Teacher/Profile';
import { TeacherPaymentInfo } from 'views/organisms/Setting/Teacher/Payment';
import { TeacherMembershipDetail } from 'views/organisms/Setting/Teacher/Details';
import { TeacherPgContainer } from 'views/molecules/TeacherPgContainer/TeacherPgContainer';

const TeacherSettings: FC = () => {
  const language: string = useSelector((state: any) => state.user.language) || 'en-us'

  useEffect(() => {

    if (window.Tawk_API?.onLoaded) window.Tawk_API?.showWidget();

  }, []);

  return (
    <TeacherPgContainer onlyLogoImgNav={false} title={dictionary[language]?.settings}>
      <Grid container spacing={2} padding={1} justifyContent='center' alignItems={'start'}>
        <Grid item md={6} sm={12}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TeacherSettingProfile />
            </Grid>
            <Grid item xs={12}>
              <TeacherPaymentInfo />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={6} sm={12}>
          <TeacherMembershipDetail />
        </Grid>
      </Grid>
    </TeacherPgContainer>
  );
};
export default TeacherSettings
