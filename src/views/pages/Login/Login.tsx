import { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux'
import { login, resetReducer } from 'app/actions/userActions'
import { ButtonColor } from 'views/Color';
import logo from 'views/assets/socrates-logo.svg';
import classroom from 'views/assets/teacher-and-children.svg';
import greeting from 'views/assets/greeting.svg';
import { Actions } from 'views/molecules/Login/Actions';
import { Form } from 'views/molecules/Login/Form';
import { Greet } from 'views/molecules/Login/Greet';
import { dictionary } from './dictionary';
import { useSelector } from 'react-redux';
import {
  Box,
  Container,
  Grid,
  Link,
  Typography,
  useMediaQuery
} from '@mui/material';
import { TypoBtn } from 'views/atoms/Text';
import { BasicColor } from 'views/Color';
import { USER_TYPE } from 'constants/common';
import background from 'views/assets/colored-shapes-bg.svg';
import { ScreenSize } from 'constants/screenSize';

export const LogIn: FC = () => {
  const isTablet = useMediaQuery(`(max-width: ${ScreenSize.tablet})`)
  const history = useHistory();
  const dispatch = useDispatch()
  const { enqueueSnackbar } = useSnackbar();

  let language: string = useSelector((state: any) => state.user.language);
  language = language ? language : 'en-us'

  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginAction = async () => {

    setLoading(true);
    const result: any = await login(username, password, dispatch, language);
    setLoading(false);

    if (!result.success) {
      enqueueSnackbar(result.msg, { variant: 'error' });
      return;
    }
    switch (result.userType) {
      case USER_TYPE.student:
        history.push('/home')
        return;
      case USER_TYPE.guardian:
        history.push('/kids/list')
        return;
      case USER_TYPE.teacher:
        history.push('/kids/list')
        return;
      case USER_TYPE.noPlans:
        history.push('/parent/payment')
        return;
      default:
        history.push('/home')
    }
  }

  useEffect(() => {
    resetReducer(dispatch)
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: '100vh',
        display: 'grid',
        gridTemplateRows: isTablet ? 'auto 1fr' : 'unset',
        ...(!isTablet && { gridTemplateColumns: '1fr 1fr', }),
      }}>
      <Greet
        header={dictionary[language]?.welcome}
        // subheader ={dictionary[language]?.instructions}
        logo={logo}
        classroomIllustration={classroom}
        greetingIllustration={greeting}
      />
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          background: BasicColor.blue,
          borderRadius: isTablet ? '30px 30px 0 0' : 0,
        }}
      >
        <Box
          width={isTablet ? '100%' : '70%'}
          mt={5}
          sx={{
            ...(isTablet && { marginLeft: 'auto', marginRight: 'auto' }),
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Typography
            variant='h4'
            sx={
              isTablet ?
                { display: 'none' } :
                { color: 'white', margin: 5, textAlign: 'center', fontWeight: 'bold' }}>
            {dictionary[language]?.welcome}
          </Typography>
          <Typography variant='h5' sx={{ color: 'white' }}>{dictionary[language]?.login}</Typography>
          <Form
            emailLabel={dictionary[language]?.userName}
            password={dictionary[language]?.password}
            setUsername={setUsername}
            setPassword={setPassword}
          />
          <Link href={`${process.env.REACT_APP_SERVER_URL}password_reset/`} style={{ cursor: 'pointer', color: 'white' }}>{dictionary[language]?.forgot}</Link>
          <Actions
            googleText={dictionary[language]?.with_google}
            googleColor={ButtonColor.google}
            googleAction={() => console.log('google auth')} // !! remove console.logs!!!
            or={dictionary[language]?.or}
            loginText={dictionary[language]?.login}
            loginColor={ButtonColor.login}
            loginAction={loginAction}
            loading={loading}
            disabled={true}
          />
        </Box>
        <Grid container sx={{ width: isTablet ? '100%' : '70%' }}>
          <Grid item xs={3}>
            <TypoBtn style={{ color: 'white', textAlign: 'center' }} onClick={() => location.href = 'https://www.WithSocrates.com'}>{dictionary[language]?.about}</TypoBtn>
          </Grid>
          <Grid item xs={3}>
            <TypoBtn style={{ color: 'white', textAlign: 'center' }} onClick={() => location.href = 'https://www.withsocrates.com/privacy-policy/'}>{dictionary[language]?.privacy}</TypoBtn>
          </Grid>
          <Grid item xs={3}>
            <TypoBtn style={{ color: 'white', textAlign: 'center' }} onClick={() => location.href = 'https://www.learnwithsocrates.com/index.php/main/policy/children_privacy/en'}>{dictionary[language]?.children_privacy}</TypoBtn>
          </Grid>
          <Grid item xs={3}>
            <TypoBtn style={{ color: 'white', textAlign: 'center' }} onClick={() => location.href = 'https://www.withsocrates.com/terms-conditions/'}>{dictionary[language]?.termCondition}</TypoBtn>
          </Grid>
        </Grid>
      </Container >
    </Box >
  );
};
