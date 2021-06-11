import {FC} from 'react';
import {
  BackgroundHome,
  CharacterContainer,
  MyProgressContainer,
  RankContainer,
  StudentHomeStyle,
} from './Style';
import {TopMenu} from '../../organisms/Menu/TopMenu';
import {NavPanel} from '../../organisms/NavPanel/NavPanel';
import {MyProgress} from '../../organisms/MyProgress';
import {MobileMenu} from '../../organisms/Menu/MobileMenu';

import {StartLesson} from '../../molecules/StartLesson';
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
