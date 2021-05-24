import {FC} from 'react';
import styled from 'styled-components';
import home from '../assets/home.svg';
import {Icon} from '../../atoms/Icon/Icon';
import menu_toggle from '../assets/Menu Toggle.svg';
import {Energy} from '../../molecules/Energy/Energy';
import modality from '../assets/modality.svg';
import {Wallet} from '../../molecules/Wallet/Wallet';
import settings from '../assets/settings.svg';
import {UserProgress} from '../UserProgress';
import {IconSize} from '../../atoms/Icon/Size';

type TopMenuProps = {
  rank: number;
  level: number;
  exp: number;
  expMax: number;
  icon: string;
  userName: string;
  progress: number;
};

export const TopMenu: FC<TopMenuProps> = ({
  rank,
  level,
  exp,
  expMax,
  icon,
  userName,
  progress,
}) => {
  return (
    <>
      <TopMenuStyles>
        <Icon image={menu_toggle} size={IconSize.small} />
        <Icon image={home} size={IconSize.medium} />
        <Energy charge={4} />
        <Icon image={modality} size={IconSize.medium} />
        <Wallet balance={10000} />
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
  width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;
