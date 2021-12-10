import {FC} from 'react';
import {TopMenu} from '../organisms/Menu/TopMenu';
import {MobileMenu} from '../organisms/Menu/MobileMenu';
import avatar from '../assets/avatars/avatar1.svg';
import styled from 'styled-components';
import {ScreenSize} from '../screenSize';

export const StudentMenu: FC = ({children}) => {
  // COLLECTIBLE_CALL();
  return (
    <Template>
      <TopMenu
        rank={10}
        level={190}
        exp={100}
        expMax={200}
        icon={avatar}
        userName={'Elliot Alderson'}
        progress={50}
        energyCharge={1}
        balance={999999}
      />
      <div>{children}</div>
      <MobileMenu />
    </Template>
  );
};

const Template = styled.div`
  display: grid;
  grid-template-rows: calc(100vh - 60px) 60px;
  @media (min-width: ${ScreenSize.tablet}) {
    grid-template-rows: 68px calc(100vh - 68px);
  }
`;
