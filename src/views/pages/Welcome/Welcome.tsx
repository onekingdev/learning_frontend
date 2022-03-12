import {FC, useState, useEffect} from 'react';
import logo from '../../assets/socrates-logo.svg';
import {Header} from '../../atoms/Text';
import {Subheader} from 'views/atoms/Text';
import welcome from '../../assets/welcome-page.svg';
import {Button} from '../../molecules/Button';
import {ButtonColor} from 'views/Color';
import {TypoIcon} from 'views/atoms/Text';
import {dictionary} from '../Welcome/dictionary';
import {Modal} from '../../atoms/Modal';
import {Link, useHistory} from 'react-router-dom';
import {resetReducer} from '../../../app/actions/userActions';
import {useDispatch} from 'react-redux';
import {
  Wrapper,
  Logo,
  Body,
  Description,
  Illustration,
  Actions,
  Legal,
  ModalContent,
  ModalStyles,
  ModalItemsContainer,
} from './Style';
import {TextInput} from '../../atoms/Text/TextInput';

export const Welcome: FC = () => {
  const language = 'en';
  const [joinModal, setJoinModal] = useState(false);
  const [deployModal] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const sendEmail = () => {
    setJoinModal(!joinModal);
  };
  useEffect(() => {
    resetReducer(dispatch);
  }, []);
  return (
    <Wrapper>
      <Logo src={logo} alt="Learn with Socrates logo" />
      {deployModal ? (
        <Modal>
          <ModalContent>
            <ModalStyles>
              {joinModal ? (
                <ModalItemsContainer>
                  <Subheader>
                    Congratulations now you are part of SOCRATES!
                  </Subheader>
                  <Subheader>Check yout email</Subheader>
                </ModalItemsContainer>
              ) : (
                <ModalItemsContainer>
                  <Subheader>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                  </Subheader>
                  <TextInput label={'email'} />
                  <Button
                    onClick={sendEmail}
                    value={dictionary[language].join}
                    color={ButtonColor.join}
                    darkText={true}
                  />
                </ModalItemsContainer>
              )}
            </ModalStyles>
          </ModalContent>
        </Modal>
      ) : null}
      <Body>
        <Header isDark={true}>{dictionary[language].practice}</Header>
        <Description>
          <Subheader isDark={true}>
            {dictionary[language].description}
          </Subheader>
        </Description>
      </Body>

      <Illustration src={welcome} alt="" />

      <Actions>
        <Link to={'/login'}>
          <Button
            value={dictionary[language].login}
            color={ButtonColor.login}
          />
        </Link>
        <Button
          value={dictionary[language].join}
          color={ButtonColor.join}
          darkText={true}
          // onClick={() => setDeployModal(true)}
          onClick={() => history.push('/parent/create')}
        />
      </Actions>

      <Legal>
        <TypoIcon  style={{textAlign: 'center'}} >
          {dictionary[language].about}
        </TypoIcon >
        <TypoIcon  style={{textAlign: 'center'}} >
          {dictionary[language].privacy}
        </TypoIcon >
        <TypoIcon  style={{textAlign: 'center'}} >
          {dictionary[language].children_privacy}
        </TypoIcon >
      </Legal>
    </Wrapper>
  );
};
