import styled     from 'styled-components';
import { ScreenSize } from 'constants/screenSize';

export const Template = styled.div`
  display              : grid;
  grid-template-rows   : 68px calc(100vh - 68px);
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
