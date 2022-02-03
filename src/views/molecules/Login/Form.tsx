import {FC} from 'react';
import styled from 'styled-components';
import {GeneralText} from '../../atoms/Text/GeneralText';
import {Link} from '../../atoms/Text/Link';
import {TextInput} from '../../atoms/Text/TextInput';
import {ScreenSize} from '../../screenSize';

type FormProps = {
  login: string;
  email: string;
  handleEmail: Function;
  password: string;
  handlePassword: Function;
  passwordValidator?: (str: string) => boolean;
  wrongPasswordMessage?: string;
  forgot: string;
};

export const Form: FC<FormProps> = ({
  login,
  email,
  handleEmail,
  password,
  handlePassword,
  passwordValidator,
  wrongPasswordMessage,
  forgot,
}) => {
  return (
    <>
      <StyledForm>
        <Field>
          <GeneralText>{login}</GeneralText>
        </Field>

        <Field>
          <TextInput
            label={email}
            onChange={e => handleEmail(e.target.value)}
          />
        </Field>

        <Field>
          <TextInput
            label={password}
            onChange={e => handlePassword(e.target.value)}
            validate={passwordValidator}
            errMsg={wrongPasswordMessage}
            isSecret={true}
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
