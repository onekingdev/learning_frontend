import { FC } from 'react';
import styled from 'styled-components';
import { Icon } from 'views/atoms/Icon/Icon';
import { BasicColor } from 'views/Color';
import home from 'views/assets/home.svg';
import energyButton from 'views/assets/lightning.svg';
import walletIcon from 'views/assets/coins-mobile.svg';
import { IconSize } from 'views/atoms/Icon/Size';
import { useState } from 'react';
import { ScreenSize } from 'constants/screenSize';
// import { StartLesson } from 'views/molecules/StartLesson';
import { IconDropDown } from 'views/molecules/IconDropDown';
import { Sidebar } from 'views/organisms/Menu/Sidebar';
import { useHistory } from 'react-router-dom';
import modality from 'views/assets/modality.svg';
import { useSelector } from 'react-redux';
import { TypoGeneralText } from 'views/atoms/Text';
import { Battery } from 'views/molecules/Battery/Battery';
import { Container } from '@mui/material';

export const MobileMenu: FC = () => {
  const [closeStartButton, setCloseStartButton] = useState(Boolean);
  const removeStartButton = () => {
    setCloseStartButton(!closeStartButton);
  };
  const history = useHistory();
  const earning = useSelector((state: any) => state.earning);

  return (
    <>
      {/* <MobileMenuContainer> */}
      {/* <StartLesson
          onClick={() => history.push('/question')}
          isClose={closeStartButton ? true : false}
        /> */}
      <Container>
        <MobileMenuStyles>
          <Sidebar />
          <Icon
            image={home}
            size={IconSize.medium}
            onClick={() => history.push('/home')}
          />
          <Icon image={modality} onClick={() => history.push('/map')} size={IconSize.medium} />
          {/* <Icon image={energyButton} size={IconSize.medium} /> */}
          <IconDropdownContainer>
            <IconDropDown
              icon={energyButton}
              content={
                <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                  <TypoGeneralText style={{ color: BasicColor.green, margin: 0 }}>{+earning.energyCharge * 10 + '%'}</TypoGeneralText>
                  <Battery charge={earning.energyCharge} />
                </div>
              }
            // onIconClick={removeStartButton}
            />
          </IconDropdownContainer>
          <IconDropdownContainer>
            <IconDropDown
              icon={walletIcon}
              content={
                <TypoGeneralText>
                  {'$' + earning.balance}
                </TypoGeneralText>
              }
              onIconClick={removeStartButton}
            />
          </IconDropdownContainer>
        </MobileMenuStyles>
      </Container>
      {/* </MobileMenuContainer> */}
    </>
  );
};

const MobileMenuStyles = styled.div`
  display: none;
  @media screen and (max-width: ${ScreenSize.tablet}) {
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
    z-index: 1000;
    }
`;


const IconDropdownContainer = styled.div`
  width: 50px;
`;
