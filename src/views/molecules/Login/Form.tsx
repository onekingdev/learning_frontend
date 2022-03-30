import { FC }          from 'react';
import styled          from 'styled-components';
import { GeneralText } from 'views/atoms/Text/GeneralText';
import { Link }        from 'views/atoms/Text/Link';
import { TextInput }   from 'views/atoms/Text/TextInput';
import { ScreenSize }  from 'constants/screenSize';

type FormProps = {
  login: string;
  email: string;
  password: string;
  passwordValidator?: (str: string) => boolean;
  wrongPasswordMessage?: string;
  forgot: string;
  setUsername: (str: string) => void;
  setPassword: (str: string) => void;
};

export const Form: FC<FormProps> = ({
  login,
  email,
  password,
  passwordValidator,
  wrongPasswordMessage,
  forgot,
  setUsername,
  setPassword
}) => {
  return (
    <>
      <StyledForm>
        <Field>
          <GeneralText>{login}</GeneralText>
        </Field>

        <Field>
          <TextInput label={email}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Field>

        <Field>
          <TextInput
            label={password}
            validate={passwordValidator}
            errMsg={wrongPasswordMessage}
            isSecret={true}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Field>
        <Link>{forgot}</Link>
      </StyledForm>
    </>
  );
};

const StyledForm = styled.div`
  padding: 2rem;
  @media (min-width: ${ScreenSize.desktop}) {
    all: unset;
  }
`;

const Field = styled.div`
  margin-top: 11px;
  margin-bottom: 11px;
`;
