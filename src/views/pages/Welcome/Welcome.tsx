import {FC, useState} from 'react';
import logo from '../../assets/socrates-logo.svg';
import {Header} from '../../atoms/Text/Header';
import {Subheader} from '../../atoms/Text/Subheader';
import welcome from '../../assets/welcome-page.svg';
import {Button} from '../../molecules/Button';
import {ButtonColor} from '../../Color';
import {Icon} from '../../atoms/Text/Icon';
import {dictionary} from '../Welcome/dictionary';
import {Modal} from '../../atoms/Modal';
import {Link} from 'react-router-dom';

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
  const [deployModal, setDeployModal] = useState(false);
  const sendEmail = () => {
    setJoinModal(!joinModal);
  };
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
          onClick={() => setDeployModal(true)}
        />
      </Actions>

      <Legal>
        <Icon style={{textAlign: 'center'}} isDark={true}>
          {dictionary[language].about}
        </Icon>
        <Icon style={{textAlign: 'center'}} isDark={true}>
          {dictionary[language].privacy}
        </Icon>
        <Icon style={{textAlign: 'center'}} isDark={true}>
          {dictionary[language].children_privacy}
        </Icon>
      </Legal>
    </Wrapper>
  );
};
