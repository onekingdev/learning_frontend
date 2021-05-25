import {FC, useEffect} from 'react';
import {Divider} from '../../atoms/Divider';
import {GeneralText} from '../../atoms/Text/GeneralText';
import {Header} from '../../atoms/Text/Header';
import {Link} from '../../atoms/Text/Link';
import {Subheader} from '../../atoms/Text/Subheader';
import {TextInput} from '../../atoms/Text/TextInput';
import {ButtonColor} from '../../Color';
import {Button} from '../../molecules/Button';
import {Button as ButtonText} from '../../atoms/Text/Button';
import {
  Login,
  Greet,
  Card,
  Form,
  Actions,
  Legal,
  MobileWelcome,
  Action,
  Field,
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

const validatePassword = (password: string) => {
  return password !== 'test';
};

export const LogIn: FC = () => {
  useEffect(() => {
    console.log('testy test');
  }, []);

  const language = 'en';

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

          <Form>
            <Field>
              <GeneralText>{dictionary[language].login}</GeneralText>
            </Field>

            <Field>
              <TextInput label={dictionary[language].email} />
            </Field>

            <Field>
              <TextInput
                label={dictionary[language].password}
                validate={validatePassword}
                errMsg={dictionary[language].error}
                isSecret={true}
              />
            </Field>
            <Link>{dictionary[language].forgot}</Link>
          </Form>

          <Actions>
            <Action>
              <Button
                value={dictionary[language].with_google}
                darkText={true}
                color={ButtonColor.google}
              />
            </Action>

            <Divider value={dictionary[language].or} />

            <Action>
              <Button
                value={dictionary[language].login}
                color={ButtonColor.login}
              />
            </Action>
          </Actions>
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
