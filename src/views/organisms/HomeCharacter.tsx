import {FC} from 'react';
import styled from 'styled-components';
import welcome from '../assets/welcome.svg';
import {Title} from '../atoms/Text/Title';
import locker from '../assets/locker.svg';
import avatar from '../assets/avatars/girl-11.svg';
import {ScreenSize} from '../screenSize';
import {dictionary} from '../pages/StudentHome/dictionary';
type HomeCharacterProps = {
  userName: string;
};

export const HomeCharacter: FC<HomeCharacterProps> = ({userName}) => {
  const language = 'en';
  return (
    <>
      <HomeCharacterStyle>
        <WelcomeMessage>
          <Title>{`${dictionary[language].welcome} ${userName}`}</Title>
        </WelcomeMessage>
        <AvatarContainer>
          <Character src={avatar} />
        </AvatarContainer>
        <BackgroundLocker />
      </HomeCharacterStyle>
    </>
  );
};

const HomeCharacterStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
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
  }

  @media screen and (min-width: ${ScreenSize.desktop}) {
    width: 194px;
  }
`;
export const BackgroundLocker = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${locker});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  z-index: -1;

  @media screen and (min-width: ${ScreenSize.tablet}) {
    background-position: bottom;
    width: 550px;
  }

  @media screen and (min-width: ${ScreenSize.desktop}) {
    padding-top: 50px;
    background-position: center;
  }
`;
