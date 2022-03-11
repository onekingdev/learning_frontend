import {FC, useEffect, useState} from 'react';
import styled from 'styled-components';
import home from 'views/assets/home.svg';
import {Icon} from 'views/atoms/Icon/Icon';
import menu_toggle from 'views/assets/Menu Toggle.svg';
import {Energy} from 'views/molecules/Energy/Energy';
import modality from 'views/assets/modality.svg';
import {Wallet} from 'views/molecules/Wallet/Wallet';
import {UserProgress} from '../UserProgress';
import {IconSize} from 'views/atoms/Icon/Size';
import {ScreenSize} from 'views/screenSize';
import {NavPanel} from '../NavPanel/NavPanel';
// import {IconDropDown} from 'views/molecules/IconDropDown';
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
  const [scroll, setScroll] = useState(Boolean)
  const deploySidebar = () => {
    setOpenSidebar(!openSidebar);
  };
  useEffect(() => {
    document.addEventListener('scroll', () => {
      if(document.documentElement.scrollTop > 15){
        setScroll(true)
      }
      else{
        setScroll(false)
      }
    });
  },[document.documentElement.scrollTop])

  const history = useHistory();
  return (
    <>
      <TopMenuStyles isScrolled={scroll}>
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
          <Icon image={modality} onClick={() => history.push('/map')} size={IconSize.medium} />
          {/* <img src={modality} /> */}
          {/* <IconDropDown
            onIconClick={() => history.push('/map')}
            // icon={modality}
            // // options={[
            // //   {name: 'AI', action: () => history.push('/map')},
            // //   {
            // //     name: 'Choose your path',
            // //     action: () => history.push('/subjects'),
            // //   },
            // // ]}
          /> */}
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
const TopMenuStyles = styled.div<{
  isScrolled: boolean;
}>`
  display: none;
  @media screen and (min-width: ${ScreenSize.phone}) {
    position: fixed;
    top: 0;
    z-index: 200;
    width: 100%;
    margin: 0 auto;
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.isScrolled ? '#ffffffe0' : 'transparent'};
    transition: 0.5s;
  }
  @media screen and (min-width: ${ScreenSize.desktop}) {
    margin: 0 auto;
    padding-top: 15px;
    max-width: 1366px;
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
