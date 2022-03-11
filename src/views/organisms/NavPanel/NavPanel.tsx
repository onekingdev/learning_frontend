import {FC} from 'react';
import {Icon} from '../../atoms/Icon/Icon';

import question from '../../assets/Question mobile.svg';
import closed from '../../assets/close.svg';
import progress_icon from 'views/assets/nav-icons/Progress.png';
import homework_icon from 'views/assets/nav-icons/homework.png';
import question_icon from 'views/assets/nav-icons/question.png';
import game_icon from 'views/assets/nav-icons/game.png';
import homework from '../../assets/homework.svg';
import bank_icon from 'views/assets/nav-icons/bank.png';
import collectible_icon from 'views/assets/nav-icons/collectibles.png';
import profile_icon from 'views/assets/nav-icons/profile.png';
import {IconSize} from 'views/atoms/Icon/Size';

import {NavPanelStyles, IconContainer, ClosedContainer} from './Style';
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
          <Icon
            image={homework_icon}
            size={IconSize.medium}
            onClick={() => history.push('/question')}
          />
          <p>HOMEWORKS</p>
        </IconContainer>
        <IconContainer>
          <Icon
            image={question_icon}
            size={IconSize.medium}
            onClick={() => history.push('/question')}
          />
          <p>QUESTIONS</p>
        </IconContainer>
        <IconContainer>
          <Icon
            image={game_icon}
            size={IconSize.medium}
            onClick={() => history.push('/games/categories')}
          />
          <p>GAMES</p>
        </IconContainer>
        <IconContainer>
          <Icon
            image={progress_icon}
            size={IconSize.medium}
            onClick={() => history.push('/progress')}
          />
          <p>PROGRESS</p>
        </IconContainer>
        <IconContainer>
          <Icon
            image={collectible_icon}
            size={IconSize.medium}
            onClick={() => history.push('/backpack')}
          />
          <p>COLLECTIBLE</p>
        </IconContainer>
        <IconContainer>
          <Icon
            size={IconSize.medium}
            image={bank_icon}
            onClick={() => history.push('/bank')}
          />
          <p>BANK</p>
        </IconContainer>
        <IconContainer>
          <Icon
            image={profile_icon}
            size={IconSize.medium}
            onClick={() => history.push('/avatar')}
          />
          <p>PROFILE</p>
        </IconContainer>
      </NavPanelStyles>
    </>
  );
};
