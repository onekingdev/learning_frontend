import {FC} from 'react';
import styled from 'styled-components';
import {ScoreBoard} from '../../organisms/ScoreBoard';
import {ScreenSize} from '../../../constants/screenSize';
import {StudentMenu} from '../../templates/StudentMenu';

export const Leaderboard: FC = () => {
  return (
    <Wrapper>
      <StudentMenu>
        <ScoreBoard />
      </StudentMenu>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: ${ScreenSize.tablet}) {
    height: 100vh;
  }
  @media (min-width: ${ScreenSize.desktop}) {
    height: 100vh;
  }
`;
