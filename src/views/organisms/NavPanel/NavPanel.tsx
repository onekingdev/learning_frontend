import {FC} from 'react';
import {Icon} from '../../atoms/Icon/Icon';

import question from '../../assets/Question mobile.svg';
import closed from '../../assets/close.svg';
import game from '../../assets/games mobile.svg';
import progress from '../../assets/progress mobile.svg';
import collectibles from '../../assets/collectibles mobile.svg';
import avatar from '../../assets/user-mobile.svg';
import {
  NavPanelStyles,
  IconContainer,
  IconResponsiveContainer,
  ClosedContainer,
} from './Style';
import {useHistory} from 'react-router-dom';

type NavPanelProps = {
  isClose: boolean;
  deploySideBar?: () => void;
};

export const NavPanel: FC<NavPanelProps> = ({isClose, deploySideBar}) => {
  const history = useHistory();
  return (
    <>
      <NavPanelStyles state={isClose}>
        <ClosedContainer>
          <Icon image={closed} onClick={deploySideBar} />
        </ClosedContainer>
        <IconContainer>
          <Icon image={question} onClick={() => history.push('/question')} />
        </IconContainer>
        <IconContainer>
          <Icon
            image={game}
            onClick={() => history.push('/games/categories')}
          />
        </IconContainer>
        <IconContainer>
          <Icon image={progress} onClick={() => history.push('/progress')} />
        </IconContainer>
        <IconContainer>
          <Icon
            image={collectibles}
            onClick={() => history.push('/backpack')}
          />
        </IconContainer>
        <IconResponsiveContainer>
          <Icon image={avatar} onClick={() => history.push('/profile')} />
        </IconResponsiveContainer>
      </NavPanelStyles>
    </>
  );
};
