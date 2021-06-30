import {FC} from 'react';
import {Icon} from '../../atoms/Icon/Icon';

import question from '../../assets/Question mobile.svg';
import closed from '../../assets/close.svg';
import game from '../../assets/games mobile.svg';
import progress from '../../assets/progress mobile.svg';
import collectibles from '../../assets/collectibles mobile.svg';
import avatar from '../../assets/avatars/avatar1.svg';
import {
  NavPanelStyles,
  IconContainer,
  IconResponsiveContainer,
  ClosedContainer,
} from './Style';

type NavPanelProps = {
  isClose: boolean;
  deploySideBar?: () => void;
};

export const NavPanel: FC<NavPanelProps> = ({isClose, deploySideBar}) => {
  return (
    <>
      <NavPanelStyles state={isClose}>
        <ClosedContainer>
          <Icon image={closed} onClick={deploySideBar} />
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
          <Icon image={avatar} />
        </IconResponsiveContainer>
      </NavPanelStyles>
    </>
  );
};
