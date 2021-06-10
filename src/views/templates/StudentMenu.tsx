import {FC} from 'react';
import {TopMenu} from '../organisms/Menu/TopMenu';
import {MobileMenu} from '../organisms/Menu/MobileMenu';
import avatar from '../assets/avatars/avatar1.svg';
export const StudentMenu: FC = ({children}) => {
  return (
    <div>
      <TopMenu
        rank={10}
        level={190}
        exp={100}
        expMax={200}
        icon={avatar}
        userName={'Elliot Alderson'}
        progress={50}
        energyCharge={1}
        balance={1999}
      />
      {children}
      <MobileMenu />
    </div>
  );
};
