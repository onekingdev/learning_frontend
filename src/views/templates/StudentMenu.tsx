import {FC, useEffect} from 'react';
import {TopMenu} from '../organisms/Menu/TopMenu';
import {MobileMenu} from '../organisms/Menu/MobileMenu';
import avatarPlaceHolder from '../assets/avatars/avatar1.svg';
import styled from 'styled-components';
import {ScreenSize} from '../screenSize';
import {useSelector} from 'react-redux';

export const StudentMenu: FC = ({children}) => {
  const user = useSelector((state: any) => state.user);
  const earning = useSelector((state: any) => state.earning);

  useEffect(() => {
    // setStudent(student);
    // console.log(user)
    // console.log(wallet)
    console.log(earning);
  }, []);

  return (
    <Template>
      {console.log(earning)}
      <TopMenuContainer>
        <TopMenu
          rank={earning.rank}
          level={earning.level || 12}
          exp={earning.experience || 9000}
          expMax={earning.experience || 9001}
          icon={user?.avatar || avatarPlaceHolder}
          userName={user?.username || 'Champ!'}
          progress={earning.progress}
          energyCharge={earning.energyCharge}
          balance={user?.balance || 0}
        />
      </TopMenuContainer>
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
const TopMenuContainer = styled.div`
  display: none;
  @media screen and (min-width: ${ScreenSize.tablet}) {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
  }
`;
