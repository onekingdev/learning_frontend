import { FC, useContext, useEffect} from 'react';
import styled from 'styled-components';
import { GeneralText } from 'views/atoms/Text/GeneralText';
import { Header } from 'views/atoms/Text/Header';
import { Subheader } from 'views/atoms/Text/Subheader';
import { TextInput } from 'views/atoms/Text/TextInput';
import { BasicColor } from 'views/Color';
import { Button } from 'views/molecules/Button';
import { ScreenSize } from 'constants/screenSize';
import background from 'views/assets/colored-shapes-bg.svg';
import { Body } from 'views/atoms/Text/Body';
import logo from 'views/assets/socrates-logo.svg';
import { LoadingContext } from 'react-router-loading';

export const ConfirmAccount: FC = () => {
  const loadingContext = useContext(LoadingContext);
  useEffect(() => {
    loadingContext.done();
  }, []);
  return (
    <ConfirmationContainer>
      <Logo src={logo} />
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
            <ValidationButton>
              <Button value={'Validate'} />
            </ValidationButton>
          </Centered>
        </StudentRegister>
        <Disclaimer>
          <Body style={{fontSize: '14px'}}>
            By clicking Create Account, you aggree to Learn With Socrates’s User
            Agreement, Privacy Policy, and Cookie Policy
          </Body>
        </Disclaimer>
      </Card>
    </ConfirmationContainer>
  );
};

const ConfirmationContainer = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  @media (min-width: ${ScreenSize.tablet}) {
    padding-top: 2rem;
  }
`;

const ValidationButton = styled.div`
  width: 215px;
  margin-left: auto;
  margin-right: auto;
`;

const Card = styled.div`
  background-color: ${BasicColor.blue};
  padding: 18px;
  min-height: 100vh;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  @media (min-width: ${ScreenSize.tablet}) {
    margin-left: 2rem;
    margin-right: 2rem;
    border-radius: 30px;
    min-height: calc(80vh - 4rem);
    padding-left: 3rem;
    padding-right: 3rem;
    max-width: 692px;
  }
  @media (min-width: ${ScreenSize.desktop}) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const StudentRegister = styled.div`
  border: ${BasicColor.white} 3px solid;
  padding: 11px;
  border-radius: 20px;
  @media (min-width: ${ScreenSize.tablet}) {
    padding: 22px;
  }
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

const Logo = styled.img`
  display: none;
  @media (min-width: ${ScreenSize.desktop}) {
    display: block;
    padding-top: 1rem;
    padding-bottom: 3rem;
    margin-left: auto;
    margin-right: auto;
  }
`;
