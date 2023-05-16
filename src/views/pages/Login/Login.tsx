import {FC, useEffect} from 'react';
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
import {get} from '../../../api/queries/get'
import { useDispatch, useSelector } from 'react-redux'
import * as TYPES from '../../../app/types'
import {MockStore} from '../../../app/configureStore'
export const LogIn: FC = () => {
  useEffect(() => {
    console.log('testy testaa');
  }, []);
  const store = useSelector((state) => state)
  const history = useHistory();
  const dispatch = useDispatch()
  const language = 'en';
  const validatePassword = (password: string) => {
    return password !== 'test';
  };
  const loginAction = () => {
    // get(
    //   `mutation`,
    //   `{
    //     tokenAuth(username: "armin", password: "123456") {
    //       token
    //     }
    //   }`,
    //   onLoginSuccess,
    //   onLoginError
    // );
    onLoginSuccess(MockStore.user);
  }
  const onLoginSuccess = (data: any) => {
    dispatch({ type: TYPES.STUDENT_SET_DATA, payload: data })
    history.push('/home')
  }
  const onLoginError = (error: any) => {
    console.log("login error")
  }
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
            password={dictionary[language].password}
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
