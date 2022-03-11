import {FC, useEffect, useState} from 'react';
import styled from 'styled-components';
import {Title} from '../atoms/Text/Title';
import {UserRank} from '../molecules/UserRank';
import avatar from '../assets/avatars/avatar1.svg';
import {BasicColor} from '../Color';
import {ScreenSize} from '../../constants/screenSize';
import {dictionary} from '../pages/Progress/dictionary';
import {getRanking, writeProgress, writeRanking} from '../../app/firebase';

export const Rank: FC = () => {
  const language = 'en';
  const mock_ranking = ['Candy', 'Tony', 'Emily', 'Albert', 'Viri'];

  const [ranking, setRanking] = useState(mock_ranking);

  useEffect(() => {
    getRanking(setRanking);
  }, []);

  return (
    <>
      <RankStyles>
        <Title isDark={true}># {dictionary[language].rank}</Title>
        <RankUsersContainer>
          {ranking.map((name, i) => {
            return (
              <UserRank userRank={i + 1} userName={name} key={name+i} userIcon={avatar} />
            );
          })}
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
