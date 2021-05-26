import {FC} from 'react';
import styled from 'styled-components';
import welcome from '../assets/welcome.png';
import {Header} from '../atoms/Text/Header';
import {Title} from '../atoms/Text/Title';

import avatar from '../assets/avatars/girl-11.png';

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
  width: 335px;
  height: 650px;
  margin-bottom: 30px;
`;
const WelcomeMessage = styled.div`
  width: 100%;
  height: 50px;
  background-image: url(${welcome});
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const Character = styled.img`
  width: 200px;
`;
