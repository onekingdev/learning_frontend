import {FC} from 'react';
import styled from 'styled-components';
import {GeneralText} from '../../atoms/Text/GeneralText';
import {Header} from '../../atoms/Text/Header';
import {Subheader} from '../../atoms/Text/Subheader';
import {TextInput} from '../../atoms/Text/TextInput';
import {BasicColor} from '../../Color';
import {Button} from '../../molecules/Button';

export const ConfirmAccount: FC = () => {
  return (
    <>
      <Card>
        <Centered>
          <Header>Create Account</Header>
          <Subheader>Your info</Subheader>
        </Centered>
        <div>
          <GeneralText>Your name</GeneralText>
          <TextInput label={'Your name'} />
        </div>
        <div>
          <GeneralText>Password</GeneralText>
          <TextInput label={'Password'} />
        </div>
        <div>
          <GeneralText>Confirm password</GeneralText>
          <TextInput label={'Password'} />
        </div>
        <StudentRegister>
          <StudentSelector>
            <Button value={'test'} />
            <Button value={'test'} />
            <Button value={'test'} />
          </StudentSelector>
          <Centered>
            <StudentsForm>
              <GeneralText>Name</GeneralText>
              <TextInput label={'test'} />
              <GeneralText>Grade</GeneralText>
              <TextInput
                label={'test'}
                validate={val => val !== 'test'}
                errMsg={'whoopsie!'}
              />
            </StudentsForm>
            <Button value={'Validate'} />
          </Centered>
        </StudentRegister>
        <Disclaimer>
          <GeneralText>
            By clicking Create Account, you aggree to Learn With Socrates’s User
            Agreement, Privacy Policy, and Cookie Policy
          </GeneralText>
        </Disclaimer>
      </Card>
    </>
  );
};

const Card = styled.div`
  background-color: ${BasicColor.blue};
  padding: 18px;
  min-height: 100vh;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

const StudentRegister = styled.div`
  border: ${BasicColor.white} 3px solid;
  padding: 11px;
  border-radius: 20px;
`;

const StudentSelector = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 5px;
`;

const Centered = styled.div`
  text-align: center;
`;

const StudentsForm = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Disclaimer = styled.div`
  margin-top: 2rem;
`;
