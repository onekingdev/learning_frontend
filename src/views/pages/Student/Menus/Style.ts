import styled     from 'styled-components';
import { ScreenSize } from 'constants/screenSize';
import { USER_AVATAR_SIZE } from 'constants/common';

export const Template = styled.div`
  display              : grid;
  grid-template-rows   : ${USER_AVATAR_SIZE + 10}px calc(100vh - ${USER_AVATAR_SIZE + 10}px);
  @media (max-width    : ${ScreenSize.tablet}) {
    grid-template-rows : calc(100vh - 60px) 60px;
  }
`;
export const TopMenuContainer = styled.div`
  width           : 100%;
  display         : flex;
  justify-content : center;
  margin-bottom   : 100px;
  @media screen and (max-width: ${ScreenSize.tablet}) {
    display: none;
  }
`;
