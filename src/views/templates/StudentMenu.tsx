import {FC, useEffect} from 'react';
import {TopMenu} from '../organisms/Menu/TopMenu';
import {MobileMenu} from '../organisms/Menu/MobileMenu';
import avatarPlaceHolder from '../assets/avatars/avatar1.svg';
import styled from 'styled-components';
import {ScreenSize} from '../screenSize';

import { useDispatch, useSelector } from 'react-redux'
import * as TYPES from '../../app/types'

export const StudentMenu: FC = ({children}) => {
  const user = useSelector((state:any) => state.user)
  const student = useSelector((state:any) => state.student)
  const wallet = useSelector((state:any) => state.wallet)
  const dispatch = useDispatch()
  const setStudent = (student:any) => {
    dispatch({ type: TYPES.STUDENT_SET_DATA, payload:student })
  }

  useEffect(() => {
    // setStudent(student);
    // console.log(user)
    console.log(wallet)
  },[]);

  return (
    <Template>
      <TopMenu
        rank={42}
        level={wallet.level || 12}
        exp={wallet.experience || 9000}
        expMax={wallet.experience || 9001}
        icon={user?.avatar || avatarPlaceHolder}
        userName={user?.userName || 'Champ!'}
        progress={1}
        energyCharge={4}
        balance={user?.wallet.balance || 0}
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
