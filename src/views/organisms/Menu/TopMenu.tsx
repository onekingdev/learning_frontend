import {FC, useState} from 'react';
import styled from 'styled-components';
import home from '../../assets/home.svg';
import {Icon} from '../../atoms/Icon/Icon';
import menu_toggle from '../../assets/Menu Toggle.svg';
import {Energy} from '../../molecules/Energy/Energy';
import modality from '../../assets/modality.svg';
import {Wallet} from '../../molecules/Wallet/Wallet';
import settings from '../../assets/settings.svg';
import {UserProgress} from '../UserProgress';
import {IconSize} from '../../atoms/Icon/Size';
import {ScreenSize} from '../../screenSize';
import {NavPanel} from '../NavPanel/NavPanel';

type TopMenuProps = {
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

export const TopMenu: FC<TopMenuProps> = ({
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
  const [openSidebar, setOpenSidebar] = useState(Boolean);
  const deploySidebar = () => {
    setOpenSidebar(!openSidebar);
  };
  return (
    <>
      <TopMenuStyles>
        <NavPanel isClose={openSidebar} />
        <Icon
          image={openSidebar ? '' : menu_toggle}
          size={IconSize.small}
          onClick={deploySidebar}
        />
        <Icon image={home} size={IconSize.medium} />
        <Energy charge={energyCharge} />
        <Icon image={modality} size={IconSize.medium} />
        <Wallet balance={balance} />
        <Icon image={settings} size={IconSize.small} />
        <UserProgress
          rank={rank}
          level={level}
          exp={exp}
          expMax={expMax}
          icon={icon}
          userName={userName}
          progress={progress}
        />
      </TopMenuStyles>
    </>
  );
};

const TopMenuStyles = styled.div`
  display: none;

  @media screen and (min-width: ${ScreenSize.tablet}) {
    width: 95%;
    margin: 30px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
