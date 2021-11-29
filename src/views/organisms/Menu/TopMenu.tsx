import {FC, useState} from 'react';
import styled from 'styled-components';
import home from '../../assets/home.svg';
import {Icon} from '../../atoms/Icon/Icon';
import menu_toggle from '../../assets/Menu Toggle.svg';
import {Energy} from '../../molecules/Energy/Energy';
import modality from '../../assets/modality.svg';
import {Wallet} from '../../molecules/Wallet/Wallet';
import {UserProgress} from '../UserProgress';
import {IconSize} from '../../atoms/Icon/Size';
import {ScreenSize} from '../../screenSize';
import {NavPanel} from '../NavPanel/NavPanel';
import {IconDropDown} from '../../molecules/IconDropDown';
import {useHistory} from 'react-router-dom';

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

  const history = useHistory();
  return (
    <>
      <TopMenuStyles>
        <NavPanel isClose={openSidebar} deploySideBar={deploySidebar} />
        <ToggleButtonContainer isClose={openSidebar}>
          <Icon
            image={menu_toggle}
            size={IconSize.small}
            onClick={deploySidebar}
          />
        </ToggleButtonContainer>
        <HomeIcon>
          <Icon
            image={home}
            size={IconSize.medium}
            onClick={() => history.push('/home')}
          />
        </HomeIcon>
        <Energy charge={energyCharge} />
        <ModalityContainer>
          <IconDropDown
            icon={modality}
            options={[
              {name: 'AI', action: () => history.push('question')},
              {name: 'Choose your path', action: () => history.push('map')},
              {name: 'Practice', action: () => history.push('subjects')},
            ]}
          />
        </ModalityContainer>
        <Wallet balance={balance} />
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

type ToggleButtonProps = {
  isClose: boolean;
};
const TopMenuStyles = styled.div`
  display: none;

  @media screen and (min-width: ${ScreenSize.tablet}) {
    width: 98%;
    margin: 10px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media screen and (min-width: ${ScreenSize.desktop}) {
    margin: 0 auto;
    padding: 15px 0;
    max-width: 1024px;
  }
`;
const ToggleButtonContainer = styled.div<ToggleButtonProps>`
  opacity: ${p => (p.isClose ? 0 : 1)};
`;

const ModalityContainer = styled.div`
  width: 60px;
`;
const HomeIcon = styled.div`
  cursor: pointer;
`;
