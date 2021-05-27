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

export const MobileMenu: FC = () => {
  const [openSidebar, setOpenSidebar] = useState(Boolean);
  const deploySidebar = () => {
    setOpenSidebar(!openSidebar);
  };
  return (
    <>
      <MobileMenuContainer>
        <NavPanel isClose={openSidebar} />
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
      </MobileMenuContainer>
    </>
  );
};

const MobileMenuStyles = styled.div`
  width: 100%;
  height: 57px;
  background-color: ${BasicColor.blue};
  border-radius: 10px 10px 0 0;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const MobileMenuContainer = styled.div`
  @media screen and (min-width: ${ScreenSize.tablet}) {
    display: none;
  }
`;
