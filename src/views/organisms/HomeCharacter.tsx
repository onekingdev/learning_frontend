import {FC} from 'react';
import styled from 'styled-components';
import welcome from '../assets/welcome.png';
import {Header} from '../atoms/Text/Header';
import {Title} from '../atoms/Text/Title';

import avatar from '../assets/avatars/girl-11.png';
import {Subheader} from '../atoms/Text/Subheader';
import {ScreenSize} from '../screenSize';

type HomeCharacterProps = {
  userName: string;
};

export const HomeCharacter: FC<HomeCharacterProps> = ({userName}) => {
  return (
    <>
      <HomeCharacterStyle>
        <WelcomeMessage>
          <Title>Welcome back {userName}</Title>
        </WelcomeMessage>
        <AvatarContainer>
          <Character src={avatar} />
        </AvatarContainer>
      </HomeCharacterStyle>
    </>
  );
};

const HomeCharacterStyle = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
const WelcomeMessage = styled.div`
  width: 90%;
  height: 60px;
  background: url(${welcome}) no-repeat center;
  background-size: contain;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 30px;
  padding: 10px;
`;
const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const Character = styled.img`
  width: 194px;
  margin-top: 30px;

  @media screen and (min-width: ${ScreenSize.tablet}) {
    width: 229px;
  }
`;
