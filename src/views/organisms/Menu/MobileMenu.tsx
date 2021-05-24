import styled from 'styled-components';
import {Icon} from '../../atoms/Icon/Icon';
import {BasicColor} from '../../Color';
import toggle from '../../assets/Menu Toggle.svg';
import home from '../../assets/home.svg';
import modality from '../../assets/modality.svg';
import lightning from '../../assets/lightning.svg';
import coins from '../../assets/coins.svg';
import cancel from '../../assets/x.svg';
import {IconSize} from '../../atoms/Icon/Size';
import {useState} from 'react';
import {ScreenSize} from '../../screenSize';
import {NavPanel} from '../NavPanel/NavPanel';

export const MobileMenu = () => {
  const [openSidebar, setOpenSidebar] = useState(Boolean);
  const deploySidebar = () => {
    openSidebar ? setOpenSidebar(false) : setOpenSidebar(true);
  };
  return (
    <>
      <MobileMenuStyles>
        <Icon
          image={openSidebar ? toggle : cancel}
          size={IconSize.small}
          onClick={deploySidebar}
        />
        <Icon image={home} size={IconSize.medium} />
        <Icon image={modality} size={IconSize.medium} />
        <Icon image={lightning} size={IconSize.medium} />
        <Icon image={coins} size={IconSize.medium} />
      </MobileMenuStyles>
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

  @media screen and (min-width: ${ScreenSize.tablet}) {
    display: none;
  }
`;
