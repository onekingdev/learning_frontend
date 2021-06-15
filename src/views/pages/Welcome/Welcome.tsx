import {FC} from 'react';
import logo from '../../assets/socrates-logo.svg';
import {Header} from '../../atoms/Text/Header';
import {Subheader} from '../../atoms/Text/Subheader';
import welcome from '../../assets/welcome-page.svg';
import {Button} from '../../molecules/Button';
import {ButtonColor} from '../../Color';
import {Icon} from '../../atoms/Text/Icon';
import {Link} from 'react-router-dom';

import {dictionary} from '../Welcome/dictionary';
import {
  Wrapper,
  Logo,
  Body,
  Description,
  Illustration,
  Actions,
  Legal,
} from './Style';

export const Welcome: FC = () => {
  const language = 'en';

  return (
    <Wrapper>
      <Logo src={logo} alt="Learn with Socrates logo" />

      <Body>
        <Header isDark={true}>{dictionary[language].practice}</Header>
        <Description>
          <Subheader isDark={true}>
            {dictionary[language].description}
          </Subheader>
        </Description>
      </Body>

      <Illustration src={welcome} alt="" />

      <Actions>
        <Link to={'/login'}>
          <Button
            value={dictionary[language].login}
            color={ButtonColor.login}
          />
        </Link>
        <Button
          value={dictionary[language].join}
          color={ButtonColor.join}
          darkText={true}
        />
      </Actions>

      <Legal>
        <Icon style={{textAlign: 'center'}} isDark={true}>
          {dictionary[language].about}
        </Icon>
        <Icon style={{textAlign: 'center'}} isDark={true}>
          {dictionary[language].privacy}
        </Icon>
        <Icon style={{textAlign: 'center'}} isDark={true}>
          {dictionary[language].children_privacy}
        </Icon>
      </Legal>
    </Wrapper>
  );
};
