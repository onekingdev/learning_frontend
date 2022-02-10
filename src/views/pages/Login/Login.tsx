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
import {get} from '../../../api/queries/get'
import { useDispatch } from 'react-redux'
import * as TYPES from '../../../app/types'
import {MockStore} from '../../../app/configureStore'
import { IUser } from '../../../app/entities/user';
import { IStudent } from '../../../app/entities/student';
import mutation from '../../../api/mutations/get'
import query from '../../../api/queries/get'
import {WHOAMI_QUERY} from '../../../api/queries/users'
import { SnackbarProvider, VariantType, useSnackbar } from 'notistack';
import { TOKEN_AUTH } from '../../../api/mutations/users'
import { login, resetReducer } from '../../../app/actions/userActions'
export const LogIn: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch()
  const { enqueueSnackbar } = useSnackbar();

  const language = 'en';

  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("")
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const validatePassword = (password: string) => {
    return password !== 'test';
  };

  const loginAction = async () => {

    setLoading(true);
    const result:any = await login(username, password, dispatch);
    setLoading(false);

    if(!result.success) {
      enqueueSnackbar(result.msg, { variant: "error" });
      return;
    }
    switch(result.userType) {
      case "student" :
        history.push('/home')
        return;
      case "guardian" :
        history.push('/kids/list')
        return;
      case "teacher" :
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
