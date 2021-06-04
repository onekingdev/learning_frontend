import styled from 'styled-components';
import background from '../../assets/colored-shapes-bg.svg';
import {ScreenSize} from '../../screenSize';

export const ProgressBackground = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;

export const ProgressStyle = styled.div`
  width: 100%;
  display: flex;
  grid-gap: 20px;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 80px;
  @media screen and (min-width: ${ScreenSize.tablet}) {
    flex-direction: row-reverse;
    justify-content: center;
    margin-top: 80px;
    grid-gap: 40px;
  }
`;
export const ProgressTitle = styled.div`
  width: 50%;
  margin: 20px auto;

  @media screen and (min-width: ${ScreenSize.tablet}) {
    width: 30%;
  }
`;
export const ProgressAvatarContainer = styled.div`
  display: none;

  @media screen and (min-width: ${ScreenSize.desktop}) {
    display: default;
  }
`;
