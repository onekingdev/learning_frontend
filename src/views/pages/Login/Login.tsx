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

    // onLoginSuccess(MockStore.user, MockStore.student);

    setLoading(true);

    const res:any = await mutation(TOKEN_AUTH( username, password )).catch(e => ({success: false}));
    if(res.success === false) {
        setErrMsg("Network Error!");
        enqueueSnackbar(`Network Error!`, { variant: "error" });
        return;
    }

    const result:any = await res.json();

    if(result.errors) {
        setErrMsg(result.errors[0].message);
        enqueueSnackbar(`Login Failed! ${result.errors[0].message}`, { variant: "error" });
        return;
    }

    const { token } = result.data.tokenAuth

    const res_who:any = await query("whoami", WHOAMI_QUERY, token).catch(e => ({success: false}));

    if(res_who.success === false) {
      setErrMsg("Network Error!");
      enqueueSnackbar(`Network Error!`, { variant: "error" });
      return;
    }

    const result_who:any = await res_who.json();

    console.log(result_who);
    if(result_who.errors && !result_who.data) {
        setErrMsg(result_who.errors[0].message);
        enqueueSnackbar(`Login Failed! ${result_who.errors[0].message}`, { variant: "error" });
        return;
    }

    setLoading(false);

    enqueueSnackbar('Successfully Logined!', { variant: "success" });

    const user = result_who.data.whoami;
    const {guardion, student} = result_who.data.whoami;
    const user_redux:any = (({lastLogin, isSuperuser, username, firstName, lastName, email , isStaff, isActive, dateJoined, language,profile }) => ({lastLogin, isSuperuser, username, firstName, lastName, email , isStaff, isActive, dateJoined, language, profile}))(user)
    dispatch({ type: TYPES.USER_SET_DATA, payload: {...user_redux, token: token} })

    if(student) {
      dispatch({ type: TYPES.USER_SET_DATA, payload: {...user_redux, token: token} })
      dispatch({ type: TYPES.STUDENT_SET_DATA, payload: student })
      dispatch({ type: TYPES.EARNING_SET_DATA, payload: {
        rank: 1,
        level: 1,
        exp: 1,
        expMax: 5,
        progress: 1,
        energyCharge: 1,
        balance: 1,
      }})
      history.push('/home')
      console.log(student)
    }
    else if(guardion) {
      console.log(guardion)
    }
    else {
      console.log("else")
    }
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
  }

  const onLoginSuccess = (user: IUser, student: IStudent) => {
    dispatch({ type: TYPES.USER_SET_DATA, payload: user })
    dispatch({ type: TYPES.STUDENT_SET_DATA, payload: student })
    dispatch({ type: TYPES.EARNING_SET_DATA, payload: {
      rank: 1,
      level: 1,
      exp: 1,
      expMax: 5,
      progress: 1,
      energyCharge: 1,
      balance: 1,
    }})
    history.push('/home')
  }

  const onLoginError = (error: any) => {
    console.log('login error')
  }

  useEffect(() => {
    dispatch({type:TYPES.STUDENT_RESET})
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
