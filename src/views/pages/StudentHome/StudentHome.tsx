import {FC} from 'react';
import {
  CharacterContainer,
  MyProgressContainer,
  RankContainer,
  StudentHomeStyle,
} from './Style';
import {MyProgress} from '../../organisms/MyProgress';
import {HomeCharacter} from '../../organisms/HomeCharacter';
import {StudentMenu} from '../../templates/StudentMenu';
import {Rank} from '../../organisms/Rank';

export const StudentHome: FC = () => {
  return (
    <>
      <StudentMenu>
        <StudentHomeStyle>
          <CharacterContainer>
            <RankContainer>
              <Rank />
            </RankContainer>
            <HomeCharacter userName={'Sophie'} />
            <MyProgressContainer>
              <MyProgress />
            </MyProgressContainer>
          </CharacterContainer>
        </StudentHomeStyle>
      </StudentMenu>
    </>
  );
};
