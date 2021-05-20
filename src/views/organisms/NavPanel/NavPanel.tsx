import {FC, useEffect} from 'react';
import {Icon} from '../../atoms/Icon/Icon';

import question from '../../assets/Question mobile.svg';
import closed from '../../assets/x.svg';
import game from '../../assets/games mobile.svg';
import progress from '../../assets/progress mobile.svg';
import collectibles from '../../assets/collectibles mobile.svg';
import settings from '../../assets/settings.svg';
import {UserIcon} from '../../atoms/UserIcon';
import avatar from '../../assets/avatars/avatar1.svg';
import {
  NavPanelStyles,
  IconContainer,
  IconResponsiveContainer,
  ClosedContainer,
} from './Style';
import {IconSize} from '../../atoms/Icon/Size';

export const NavPanel = () => {
  return (
    <>
      <NavPanelStyles>
        <ClosedContainer>
          <Icon image={closed} />
        </ClosedContainer>
        <IconContainer>
          <Icon image={question} />
        </IconContainer>
        <IconContainer>
          <Icon image={game} />
        </IconContainer>
        <IconContainer>
          <Icon image={progress} />
        </IconContainer>
        <IconContainer>
          <Icon image={collectibles} />
        </IconContainer>
        <IconResponsiveContainer>
          <Icon image={settings} />
        </IconResponsiveContainer>
        <IconResponsiveContainer>
          <Icon image={avatar} />
        </IconResponsiveContainer>
      </NavPanelStyles>
    </>
  );
};
