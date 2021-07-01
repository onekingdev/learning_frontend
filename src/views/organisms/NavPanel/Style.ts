import styled from 'styled-components';
import {BasicColor} from '../../Color';
import {IconSize} from '../../atoms/Icon/Size';
import {ScreenSize} from '../../screenSize';

export const NavPanelStyles = styled.div<{
  size?: string;
  state: boolean;
}>`
  width: 10%;
  height: 100vh;
  background-color: ${BasicColor.green};
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 0;
  justify-content: flex-start;
  position: fixed;
  left: ${p => (p.state ? 0 : '-100px')};
  top: 0;
  min-width: 90px;
  max-width: 100px;
  transition-duration: 0.3s;

  @media screen and (min-width: ${ScreenSize.tablet}) {
    align-items: flex-end;
    z-index: 10;
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
  height: 65px;
  margin-top: 15px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;
export const IconResponsiveContainer = styled.div`
  width: ${IconSize.small};
  height: 80px;
  margin-top: 15px;
  display: flex;
  justify-content: center;
  @media screen and (min-width: ${ScreenSize.tablet}) {
    display: none;
  }
`;
