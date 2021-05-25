import styled from 'styled-components';
import {BasicColor} from '../../Color';
import {IconSize} from '../../atoms/Icon/Size';
import {ScreenSize} from '../../screenSize';

export const NavPanelStyles = styled.div<{
  size?: string;
}>`
  width: 10%;
  height: 100vh;
  background-color: ${BasicColor.green};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  left: 0;
  min-width: 90px;
  max-width: 100px;

  @media screen and (min-width: ${ScreenSize.desktop}) {
    align-items: flex-end;
  }
`;
export const ClosedContainer = styled.div`
  width: 100%;
  padding: 20px 0 20px 0;
  display: none;
  @media screen and (min-width: ${ScreenSize.tablet}) {
    display: flex;
    justify-content: center;
  }
`;
export const IconContainer = styled.div`
  width: 100%;
  height: 80px;
  margin-top: 15px;
  display: flex;
  justify-content: center;
`;
export const IconResponsiveContainer = styled.div`
  width: ${IconSize.small};
  height: 80px;
  margin-top: 15px;
  display: flex;
  justify-content: center;
  @media screen and (min-width: ${ScreenSize.tablet}) {
    display: ${window.innerWidth < 768 ? 'flex' : 'none'};
  }
`;
