import { FC, useEffect, useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import { dictionary } from './dictionary'
import { TeacherSettingPgContainer } from 'views/molecules/TeacherPgContainer/TeacherSettingPgContainer';
import { Container, Grid } from '@mui/material';

const Certificates: FC = () => {
  let language: string = useSelector((state: any) => state.user.language);

  language = language ? language.toUpperCase() : 'EN_US'
  useEffect(() => {

    if (window.Tawk_API?.onLoaded) window.Tawk_API?.showWidget();

  }, []);

  return (
    <TeacherSettingPgContainer onlyLogoImgNav={true} title={dictionary[language]?.certificates}>
      <Container maxWidth='lg'>
        <Grid container>
          <Grid item md={8}>

          </Grid>
          <Grid item md={4}>

          </Grid>
        </Grid>
      </Container>
    </TeacherSettingPgContainer>
  );
};
export default Certificates
