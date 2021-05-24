import {FC, useEffect} from 'react';
import {Divider} from '../../atoms/Divider';
import {GeneralText} from '../../atoms/Text/GeneralText';
import {Header} from '../../atoms/Text/Header';
import {Link} from '../../atoms/Text/Link';
import {Subheader} from '../../atoms/Text/Subheader';
import {TextInput} from '../../atoms/Text/TextInput';
import {ButtonColor} from '../../Color';
import {Button} from '../../molecules/Button';
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
} from './Style';

const validatePassword = (password: string) => {
  return password !== 'test';
};

export const LogIn: FC = () => {
  useEffect(() => {
    console.log('testy test');
  }, []);
  return (
    <Login>
      <Greet>
        <MobileWelcome>
          <Header isDark={true}>Welcome back!</Header>
          <Subheader isDark={true}>to login say cheese!</Subheader>
        </MobileWelcome>
      </Greet>
      <Card>
        <Form>
          <Field>
            <GeneralText>Log in</GeneralText>
          </Field>
          <Field>
            <TextInput label={'test'} />
          </Field>
          <Field>
            <TextInput
              label={'test'}
              validate={validatePassword}
              errMsg={'Your password is incorrect'}
              isSecret={true}
            />
          </Field>
          <Link>Forgot your password?</Link>
        </Form>
        <Actions>
          <Action>
            <Button
              value={'Log In with Google'}
              darkText={true}
              color={ButtonColor.google}
            />
          </Action>
          <Divider value={'or'} />
          <Action>
            <Button value={'Log In'} color={ButtonColor.login} />
          </Action>
        </Actions>
        <Legal></Legal>
      </Card>
    </Login>
  );
};
