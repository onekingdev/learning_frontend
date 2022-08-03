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
  Link,
  ThemeProvider,
  Typography,
} from '@mui/material';
import { BasicColor } from 'views/Color';
import { USER_TYPE } from 'constants/common';
import background from 'views/assets/colored-shapes-bg.svg';
import { themeTeacher } from 'views/Theme';
import { TermsAndConditions } from 'views/molecules/Login/TermsAndConditions';
import { useSocratesMediaQuery } from 'hooks/useSocratesMediaQuery';
import * as TYPES from 'app/types';
import { ADMIN_SET_DATA, SCHOOL_SET_DATA, SUBSCRIBER_SET_DATA } from 'app/types';

export const LogIn: FC = () => {
  const isTablet = useSocratesMediaQuery('sm')

  const history = useHistory();
  const dispatch = useDispatch()
  const { enqueueSnackbar } = useSnackbar();
  const language = useSelector((state: any) => state.user.language);

  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginAction = async () => {

    setLoading(true);
    const result = await login(username, password, language);
    setLoading(false);

    if (!result.success) {
      enqueueSnackbar(result.message, { variant: 'error' });
      return;
    }

    const { student, guardian, teacher, subscriber, user, token, administrativepersonnel } = result.data
    dispatch({ type: TYPES.USER_SET_DATA, payload: { ...user, token } });


    const userType = user.profile?.role || USER_TYPE.user

    switch (userType) {

      case USER_TYPE.student:
        // Set student redux state
        dispatch({ type: TYPES.STUDENT_SET_DATA, payload: student || {} });
        dispatch({
          type: TYPES.EARNING_SET_DATA,
          payload: {
            rank: 1,
            level_name: student.level.name,
            level: student.level.amount,
            exp: parseInt(student.points),
            expMax: student.level.pointsRequired,
            progress: 0,
            energyCharge: student.battery.level,
            balance: student.coinWallet.balance,
          },
        });
        dispatch({ type: TYPES.AVATAR_SET_DEFAULT_LOGIN, payload: student });

        history.push('/home')
        break;

      case USER_TYPE.guardian:
        // Set guardian state
        dispatch({ type: TYPES.GUARDIAN_SET_DATA, payload: guardian });

        // Direct to payment page, when there are no bought plans
        guardian.guardianstudentplanSet?.length === 0 ? history.push('/parent/payment') :
          history.push('/kids/list')
        break;

      case USER_TYPE.teacher:
        // Set teacher state
        dispatch({ type: TYPES.TEACHER_SET_DATA, payload: teacher })
        if (teacher.hasOrder)
          history.push('/teacher/classrooms')
        else
          history.push('/teacher/payment')
        break;
      case USER_TYPE.subscriber:
        // Set teacher state
        dispatch({
          type: SUBSCRIBER_SET_DATA,
          payload: { ...subscriber }
        })
        history.push('/admin/schools')
        break;
      case USER_TYPE.adminTeacher:
        // Set teacher state
        dispatch({
          type: ADMIN_SET_DATA,
          payload: { ...administrativepersonnel }
        })
        dispatch({
          type: SCHOOL_SET_DATA,
          payload: { ...administrativepersonnel?.schooladministrativepersonnel?.school }
        })
        history.push('/admin/schoolTeachers')
        break;
      default:
        history.push('/')
        break;
    }
  }

  useEffect(() => {
    resetReducer(dispatch)
  }, []);

  return (
    <ThemeProvider theme={themeTeacher}>
      <Box
        sx={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          minHeight: '100vh',
          display: isTablet ? 'flex' : 'grid',
          ...(isTablet && { flexDirection: 'column', }),
          ...(!isTablet && { gridTemplateColumns: '1fr 1fr' }),
        }}>
        <Box
          id='logo-container'
          display={isTablet ? 'flex' : 'none'}
          justifyContent={'start'}
          ml={2}
          mt={1}
        >
          <img src={logo} alt='Learn with Socrates logo' style={{ width: isTablet ? '50%' : 'auto' }} />
        </Box>
        <Greet
          header={dictionary[language]?.welcome}
          // subheader ={dictionary[language]?.instructions}
          logo={logo}
          classroomIllustration={classroom}
          greetingIllustration={greeting}
        />

        <Box
          id='actions-container'
          pl={3}
          pr={isTablet ? 3 : 20}
          pt={isTablet ? 2 : 10}
          display='flex'
          justifyContent='space-between'
          flexDirection='column'
          borderRadius={isTablet ? '30px 30px 0 0' : 0}
          sx={{
            background: BasicColor.blue
          }}
        >
          <Box flexGrow={1} minHeight={30} />
          <Typography
            variant='h4'
            sx={
              isTablet ?
                { display: 'none' } :
                { color: 'white', margin: 5, textAlign: 'unset' }}>
            {dictionary[language]?.welcome}
          </Typography>
          <Typography variant='h5' mb={2} sx={{ color: 'white', textAlign: 'unset' }}>{dictionary[language]?.login}</Typography>
          <Form
            emailLabel={dictionary[language]?.userName}
            password={dictionary[language]?.password}
            setUsername={setUsername}
            setPassword={setPassword}
          />
          <Link href={`${process.env.REACT_APP_SERVER_URL}password_reset/`} mt={2} style={{ cursor: 'pointer', color: 'white', textAlign: 'unset' }}>{dictionary[language]?.forgot}</Link>
          <Actions
            googleText={dictionary[language]?.with_google}
            googleColor={ButtonColor.google}
            // googleAction={() => {}} // !! remove console.logs!!!
            or={dictionary[language]?.or}
            loginText={dictionary[language]?.login}
            loginColor={ButtonColor.login}
            loginAction={loginAction}
            loading={loading}
            disabled={true}
          />
          <Box flexGrow={1} minHeight={30} />
          <TermsAndConditions />
        </Box>
      </Box >
    </ThemeProvider>
  );
};
