import {FC, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux'
import { login, resetReducer } from 'app/actions/userActions'
import {Header} from 'views/atoms/Text/Header';
import {Subheader} from 'views/atoms/Text/Subheader';
import {Button as ButtonText} from 'views/atoms/Text/Button';
import {ButtonColor} from 'views/Color';
import logo from 'views/assets/socrates-logo.svg';
import classroom from 'views/assets/teacher-and-children.svg';
import greeting from 'views/assets/greeting.svg';
import {Actions} from 'views/molecules/Login/Actions';
import {Form} from 'views/molecules/Login/Form';
import {Greet} from 'views/molecules/Login/Greet';
import {Login, Card, Legal, LoginWrapper, DesktopWelcome} from './Style';
import {dictionary} from './dictionary';

export const LogIn: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch()
  const { enqueueSnackbar } = useSnackbar();

  const language = 'en';

  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState('')
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const validatePassword = (password: string) => {
    return password !== 'test';
  };

  const loginAction = async () => {

    setLoading(true);
    const result:any = await login(username, password, dispatch);
    setLoading(false);

    if(!result.success) {
      enqueueSnackbar(result.msg, { variant: 'error' });
      return;
    }
    switch(result.userType) {
      case 'student' :
        history.push('/home')
        return;
      case 'guardian' :
        history.push('/kids/list')
        return;
      case 'teacher' :
        history.push('/kids/list')
        return;
      default:
        history.push('/home')
    }
  }

  useEffect(() => {
    resetReducer(dispatch)
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
            password={dictionary[language].password}
            forgot={dictionary[language].forgot}
            wrongPasswordMessage={dictionary[language].error}
            passwordValidator={validatePassword}
            setUsername={setUsername}
            setPassword={setPassword}
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
