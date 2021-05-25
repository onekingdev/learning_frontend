import {FC, useEffect} from 'react';
import {Header} from '../../atoms/Text/Header';
import {Subheader} from '../../atoms/Text/Subheader';
import {ButtonColor} from '../../Color';
import {Button as ButtonText} from '../../atoms/Text/Button';
import {
  Login,
  Greet,
  Card,
  Legal,
  MobileWelcome,
  Illustrations,
  Logo,
  ClassroomIlustration,
  LoginWrapper,
  DesktopWelcome,
  GreetingIlustration,
} from './Style';

import {dictionary} from './dictionary';

import logo from '../../assets/socrates-logo.svg';
import classroom from '../../assets/teacher-and-children.svg';
import greeting from '../../assets/greeting.svg';
import {Actions} from '../../molecules/Login/Actions';
import {Form} from '../../molecules/Login/Form';

export const LogIn: FC = () => {
  useEffect(() => {
    console.log('testy test');
  }, []);

  const language = 'en';

  const validatePassword = (password: string) => {
    return password !== 'test';
  };

  return (
    <Login>
      <Greet>
        <MobileWelcome>
          <Header isDark={true}>{dictionary[language].welcome}</Header>
          <Subheader isDark={true}>
            {dictionary[language].instructions}
          </Subheader>
        </MobileWelcome>

        <Illustrations>
          <Logo src={logo} alt="Learn with Socrates logo" />
          <ClassroomIlustration src={classroom} alt="Classroom Illustratoin" />
          <GreetingIlustration
            src={greeting}
            alt="Teach with student's illustration"
          />
        </Illustrations>
      </Greet>

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
            or={dictionary[language].or}
            loginText={dictionary[language].login}
            loginColor={ButtonColor.login}
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
