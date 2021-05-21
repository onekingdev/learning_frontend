import React from 'react';
import styled from 'styled-components';
import home from '../assets/home.svg';
import {Icon} from '../atoms/Icon/Icon';
import menu_toggle from '../assets/Menu Toggle.svg';
import {Energy} from '../molecules/Energy/Energy';
import modality from '../assets/modality.svg';
import {Wallet} from '../molecules/Wallet/Wallet';
import settings from '../assets/settings.svg';
import {UserProgress} from './UserProgress';
import avatar from '../assets/avatars/avatar1.svg';
import {IconSize} from '../atoms/Icon/Size';

const HeaderStyles = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const Header = () => {
  return (
    <>
      <HeaderStyles>
        <Icon image={menu_toggle} size={IconSize.small} />
        <Icon image={home} size={IconSize.medium} />
        <Energy charge={4} />
        <Icon image={modality} size={IconSize.medium} />
        <Wallet balance={10000} />
        <Icon image={settings} size={IconSize.small} />
        <UserProgress
          rank={10}
          level={3}
          exp={20}
          expMax={200}
          icon={avatar}
          userName={'Elliot Alderson'}
          progress={10}
        />
      </HeaderStyles>
    </>
  );
};
