import {FC, useEffect, useState} from 'react';
import {Header} from '../../atoms/Text/Header';
import {Subheader} from '../../atoms/Text/Subheader';
import {ButtonColor} from '../../Color';
import {Button as ButtonText} from '../../atoms/Text/Button';
import {Login, Card, Legal, LoginWrapper, DesktopWelcome} from './Style';
import {dictionary} from './dictionary';
import logo from '../../assets/socrates-logo.svg';
import classroom from '../../assets/teacher-and-children.svg';
import greeting from '../../assets/greeting.svg';
import {Actions} from '../../molecules/Login/Actions';
import {Form} from '../../molecules/Login/Form';
import {Greet} from '../../molecules/Login/Greet';
import {useHistory} from 'react-router-dom';
import {get, mutation} from '../../../api/queries/get';
import {useDispatch} from 'react-redux';
import * as TYPES from '../../../app/types';
import {MockStore} from '../../../app/configureStore';
import {IUser} from '../../../app/entities/user';
export const LogIn: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const language = 'en';
  const [email, handleEmail] = useState('');
  const [password, handlePassword] = useState('');
  const validatePassword = (password: string) => {
    return password !== 'test';
  };

  useEffect(() => {
    console.log('credentials:', email, password);
  }, [email, password]);

  const loginAction = async () => {
    console.log('login action');
    await mutation(
      `tokenAuth(username:"${email}", password: "${password}")`,
      'token',
      ``,
      onLoginSuccess,
      onLoginError
    )
    .then(() => dispatch({ type: TYPES.STUDENT_SET_DATA, payload: {
      wallet: {
        level: 12,
        experience: 9000,
        balance: 420,
      },
      avatar: "",
      userName: "Viri"
    } }))
    .then(() => (window.location.href = 'http://localhost:3000/home'));
  };

  const onLoginSuccess = (res: any) => {
    const data = res.data.tokenAuth.token;
    dispatch({type: TYPES.STUDENT_AUTH, payload: data});
    console.log('logged in');
    try {
      history.push('/');
    } catch (err) {
      console.log(err);
    }
  };

  const onLoginError = (error: any) => {
    console.log('login error', error);
  };

  useEffect(() => {
    dispatch({type: TYPES.STUDENT_RESET});
  }, []);

  return (
    <Login>
      <Greet
        header={dictionary[language].welcome}
        subheader={dictionary[language].instructions}
        logo={logo}
        classroomIllustration={classroom}
        greetingIllustration={greeting}
      />
      <Card>
        <LoginWrapper>
          <DesktopWelcome>
            <Header>{dictionary[language].welcome}</Header>
            <Subheader>{dictionary[language].instructions}</Subheader>
          </DesktopWelcome>
          <Form
            login={dictionary[language].login}
            email={dictionary[language].email}
            handleEmail={handleEmail}
            password={dictionary[language].password}
            handlePassword={handlePassword}
            forgot={dictionary[language].forgot}
            wrongPasswordMessage={dictionary[language].error}
            passwordValidator={validatePassword}
          />
          <Actions
            googleText={dictionary[language].with_google}
            googleColor={ButtonColor.google}
            googleAction={() => console.log('google auth')} // !! remove console.logs!!!
            or={dictionary[language].or}
            loginText={dictionary[language].login}
            loginColor={ButtonColor.login}
            loginAction={loginAction}
          />
        </LoginWrapper>
        <Legal>
          <ButtonText>{dictionary[language].about}</ButtonText>
          <ButtonText>{dictionary[language].privacy}</ButtonText>
          <ButtonText>{dictionary[language].children_privacy}</ButtonText>
        </Legal>
      </Card>
    </Login>
  );
};
