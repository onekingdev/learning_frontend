import {FC} from 'react';
import {StudentHomeStyle} from './Style';
import {TopMenu} from '../../organisms/Menu/TopMenu';
import {NavPanel} from '../../organisms/NavPanel/NavPanel';
import {MyProgress} from '../../organisms/MyProgress';
import {MobileMenu} from '../../organisms/Menu/MobileMenu';
import avatar from '../../assets/avatars/avatar1.svg';

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
      <StudentHomeStyle>
        <MobileMenu />
      </StudentHomeStyle>
    </>
  );
};
