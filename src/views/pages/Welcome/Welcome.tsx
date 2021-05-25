import {FC} from 'react';
import logo from '../../assets/socrates-logo.svg';
import {Header} from '../../atoms/Text/Header';
import {Subheader} from '../../atoms/Text/Subheader';
import welcome from '../../assets/welcome-page.svg';
import {Button} from '../../molecules/Button';
import {ButtonColor} from '../../Color';
import styled from 'styled-components';
import background from '../../assets/colored-shapes-bg.svg';
import {Icon} from '../../atoms/Text/Icon';

export const Welcome: FC = () => {
  return (
    <Wrapper>
      <Logo src={logo} alt="Learn with Socrates logo" />
      <Body>
        <Header isDark={true}>Practice, play, grow</Header>
        <Description>
          <Subheader isDark={true}>
            Helping students to dominate and retain educational content through
            personalized automation
          </Subheader>
        </Description>
      </Body>
      <Illustration src={welcome} alt="" />
      <Actions>
        <Button value={'log in'} color={ButtonColor.login} />
        <Button value={'join'} color={ButtonColor.join} darkText={true} />
      </Actions>
      <Legal>
        <Icon isDark={true}>about</Icon>
        <Icon isDark={true}>privacy</Icon>
        <Icon isDark={true}>children_privacy</Icon>
      </Legal>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;

const Logo = styled.img`
  width: 15rem;
  padding-left: 1rem;
  padding-top: 1.2rem;
`;

const Illustration = styled.img`
  width: 95vw;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Body = styled.div`
  margin-top: 1.4rem;
  padding: 2rem;
  text-align: center;
`;

const Actions = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  width: 215px;
  margin-top: 3rem;
  margin-left: auto;
  margin-right: auto;
`;

const Legal = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  position: absolute;
  bottom: 2rem;
  width: 85vw;
  margin-left: 7.5vw;
`;

const Description = styled.div`
  margin-top: 1.2rem;
`;
