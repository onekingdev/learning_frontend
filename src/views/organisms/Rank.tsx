import {FC} from 'react';
import styled from 'styled-components';
import {Title} from '../atoms/Text/Title';
import {UserRank} from '../molecules/UserRank';
import avatar from '../assets/avatars/avatar1.svg';

export const Rank: FC = () => {
  return (
    <>
      <RankStyles>
        <Title isDark={true}># Rank</Title>
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
  padding-top: 10px;
  border-radius: 20px;

  box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.25);
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
