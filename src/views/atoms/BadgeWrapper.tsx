import styled from 'styled-components';
import {ScreenSize} from '../screenSize';

export const BadgeWrapper = styled.img`
  background-color: #fff;
  border-radius: 50%;
  border: 3px dashed #3f3f3f;
  height: 60px;
  width: 60px;
  box-shadow: 3px 3px 6px 2px #c3c3c3;
  padding: 5px;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: ${ScreenSize.tablet}) {
    height: 110px;
    width: 110px;
  }
`;

export const LockedBadgeWrapper = styled(BadgeWrapper)`
  background-color: #e3e5e6;
  padding: 10px;
  height: 50px;
  width: 50px;
  @media (min-width: ${ScreenSize.tablet}) {
    height: 100px;
    width: 100px;
  }
`;
