import {FC} from 'react';
import styled from 'styled-components';
import {Title} from '../atoms/Text/Title';
import {UserRank} from '../molecules/UserRank';
import avatar from '../assets/avatars/avatar1.svg';
import {BasicColor} from '../Color';
import {ScreenSize} from '../screenSize';
import {dictionary} from '../pages/Progress/dictionary';

export const Rank: FC = () => {
  const language = 'en';
  return (
    <>
      <RankStyles>
        <Title isDark={true}># {dictionary[language].rank}</Title>
        <RankUsersContainer>
          <UserRank userRank={4} userName={'Sophie'} userIcon={avatar} />
          <UserRank userRank={5} userName={'Sophie'} userIcon={avatar} />
          <UserRank userRank={6} userName={'Sophie'} userIcon={avatar} />
          <UserRank userRank={7} userName={'Sophie'} userIcon={avatar} />
          <UserRank userRank={8} userName={'Sophie'} userIcon={avatar} />
        </RankUsersContainer>
      </RankStyles>
    </>
  );
};

const RankStyles = styled.div`
  width: 200px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border-radius: 20px;
  background-color: ${BasicColor.white};
  box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.25);
  @media screen and (min-width: ${ScreenSize.desktop}) {
    height: 450px;
  }
`;
const RankUsersContainer = styled.div`
  width: 100%;
  height: 450px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-gap: 5px;
`;
