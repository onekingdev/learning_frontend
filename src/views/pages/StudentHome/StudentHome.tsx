import {FC} from 'react';
import {
  BackgroundHome,
  BackgroundHomeFloor,
  CharacterContainer,
  StudentHomeStyle,
} from './Style';
import {TopMenu} from '../../organisms/Menu/TopMenu';
import {NavPanel} from '../../organisms/NavPanel/NavPanel';
import {MyProgress} from '../../organisms/MyProgress';
import {MobileMenu} from '../../organisms/Menu/MobileMenu';

import {StartLesson} from '../../molecules/StartLesson';
import {HomeCharacter} from '../../organisms/HomeCharacter';
type StudentHomeProps = {
  rank: number;
  level: number;
  exp: number;
  expMax: number;
  icon: string;
  userName: string;
  progress: number;
  energyCharge: number;
  balance: number;
};

export const StudentHome: FC<StudentHomeProps> = ({
  rank,
  level,
  exp,
  expMax,
  icon,
  userName,
  progress,
  energyCharge,
  balance,
}) => {
  return (
    <>
      <StudentHomeStyle>
        <TopMenu
          rank={rank}
          level={level}
          exp={exp}
          expMax={expMax}
          icon={icon}
          userName={userName}
          progress={progress}
          energyCharge={energyCharge}
          balance={balance}
        />
        <CharacterContainer>
          <HomeCharacter userName={'Sophie'} />
          <MyProgress point={5} />
        </CharacterContainer>

        <BackgroundHomeFloor />

        <MobileMenu />
      </StudentHomeStyle>
    </>
  );
};
