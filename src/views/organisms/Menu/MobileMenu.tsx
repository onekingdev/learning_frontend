import {FC} from 'react';
import styled from 'styled-components';
import {Icon} from '../../atoms/Icon/Icon';
import {BasicColor} from '../../Color';
import toggle from '../../assets/menu-toggle-mobile.svg';
import home from '../../assets/home.svg';
import modalityIcon from '../../assets/modality.svg';
import energyButton from '../../assets/lightning.svg';
import walletIcon from '../../assets/coins.svg';
import close from '../../assets/close.svg';
import {IconSize} from '../../atoms/Icon/Size';
import {useState} from 'react';
import {ScreenSize} from '../../screenSize';
import {NavPanel} from '../NavPanel/NavPanel';
import {StartLesson} from '../../molecules/StartLesson';

export const MobileMenu: FC = () => {
  const [openSidebar, setOpenSidebar] = useState(Boolean);
  const [closeStartButton, setCloseStartButton] = useState(Boolean);
  const deploySidebar = () => {
    setOpenSidebar(!openSidebar);
    setCloseStartButton(!closeStartButton);
  };
  return (
    <>
      <MobileMenuContainer>
        <StartLesson
          onClick={() => console.log('Hello friend')}
          isClose={false}
        />
        <NavPanelContainer>
          <NavPanel isClose={openSidebar} />
        </NavPanelContainer>
        <MobileMenuStyles>
          <Icon
            image={openSidebar ? close : toggle}
            size={IconSize.small}
            onClick={deploySidebar}
          />
          <Icon image={home} size={IconSize.medium} />
          <Icon image={modalityIcon} size={IconSize.medium} />
          <Icon image={energyButton} size={IconSize.medium} />
          <Icon image={walletIcon} size={IconSize.medium} />
        </MobileMenuStyles>
        <BackgroundHomeFloor />
      </MobileMenuContainer>
    </>
  );
};

const MobileMenuStyles = styled.div`
  width: 100%;
  height: 60px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: ${BasicColor.blue};
  display: flex;
  position: fixed;
  bottom: 0;
  justify-content: space-around;
  align-items: center;
  z-index: 2;
  @media screen and (min-width: ${ScreenSize.tablet}) {
    display: none;
  }
`;

const MobileMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const NavPanelContainer = styled.div`
  @media screen and (min-width: ${ScreenSize.tablet}) {
    display: none;
  }
`;

const BackgroundHomeFloor = styled.div`
  width: 100%;
  height: 50%;
  background-color: ${BasicColor.brown};
  z-index: -10;
  display: ${window.location.pathname === '/home' ? 'static' : 'none'};
  @media screen and (min-width: ${ScreenSize.tablet}) {
    height: 35%;
  }
  @media screen and (min-width: ${ScreenSize.desktop}) {
    width: 90%;
    height: 30%;
  }
`;
