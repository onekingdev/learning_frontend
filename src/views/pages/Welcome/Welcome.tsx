import { FC, useState, useEffect } from 'react';
import logo from 'views/assets/socrates-logo.svg';
import { Subheader } from 'views/atoms/Text/Subheader';
import welcome from 'views/assets/welcome-page.svg';
import { Button } from 'views/molecules/Button';
import { ButtonColor, BasicColor } from 'views/Color';
import { dictionary } from 'views/pages/Welcome/dictionary';
import { Modal } from 'views/atoms/Modal';
import { useHistory } from 'react-router-dom';
import { resetReducer } from 'app/actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Link,
  ThemeProvider,
  useMediaQuery
} from '@mui/material';
import { welcomePage } from 'views/Theme';

import {
  Wrapper,
  Logo,
  Body,
  Description,
  Illustration,
  Actions,
  SigninActions,
  SignupActions,
  Legal,
  ModalContent,
  ModalStyles,
  ModalItemsContainer,
} from './Style';
import { TextInput } from '../../atoms/Text/TextInput';
import { Typography } from '@mui/material';
import { LanguageSelect } from 'views/organisms/Welcome/LanguageSelect';
import { ScreenSize } from 'constants/screenSize';

export const Welcome: FC = () => {
  const isMobile = useMediaQuery(`(max-width: ${ScreenSize.phone})`)
  const [joinModal, setJoinModal] = useState(false);
  const [deployModal] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  let language: string = useSelector((state: any) => state.user.language);
  language = language ? language : 'en-us'

  const sendEmail = () => {
    setJoinModal(!joinModal);
  };

  useEffect(() => {
    resetReducer(dispatch);
  }, []);

  return (
    <ThemeProvider theme={welcomePage}>
      <Wrapper>
        <Logo src={logo} alt='Learn with Socrates logo' />
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
                      value={dictionary[language]?.join}
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
          {/* <Header isDark={true}>{dictionary[language]?.practice}</Header> */}
          <Typography variant='h3' style={{ fontWeight: 800 }}>{dictionary[language]?.practice}</Typography>
          {/* <Box
            sx={{
              position: 'absolute',
              right: '3vw',
              top: isMobile ? '1vh' : 'auto',
              minWidth: 120,
            }}>

            <LanguageSelect />
          </Box> */}
          <Description>
            <Subheader isDark={true}>
              {dictionary[language]?.description1}
            </Subheader>
            <Subheader isDark={true}>
              {dictionary[language]?.description2}
            </Subheader>
          </Description>
        </Body>

        <Illustration src={welcome} alt='' />

        <Actions>
          <SignupActions>
            <Button
              value={dictionary[language]?.schoolSignUp}
              // color    ={BasicColor.blue}
              color={BasicColor.gray40}
              darkText={true}
              style={{ width: 'unset' }}
              // onClick  ={() => history.push('/teacher/selectCreateType')}
              onClick={() => { }}

            />
            <Button
              value={dictionary[language]?.parentSignUp}
              color={ButtonColor.join}
              darkText={true}
              style={{ width: 'unset' }}
              onClick={() => history.push('/parent/create')}
            />
          </SignupActions>
          <SigninActions>
            <Button
              value={dictionary[language]?.login}
              color={ButtonColor.login}
              style={{ width: 'unset' }}
              onClick={() => history.push('/login')}
            />
          </SigninActions>
        </Actions>

        <Legal>
          <Link href='https://www.WithSocrates.com'>
            {dictionary[language]?.about}
          </Link >
          <Link href='https://www.withsocrates.com/privacy-policy/' >
            {dictionary[language]?.privacy}
          </Link >
          <Link href='https://www.withsocrates.com/terms-conditions/' >
            {dictionary[language]?.termAndConditions}
          </Link >
          <Link href='https://www.learnwithsocrates.com/index.php/main/policy/children_privacy/en' >
            {dictionary[language]?.children_privacy}
          </Link >
        </Legal>
      </Wrapper>
    </ThemeProvider>
  );
};
