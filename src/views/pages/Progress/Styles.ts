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
  display: grid;
  grid-gap: 20px;
  justify-items: center;
  margin-top: 20px;
  margin-bottom: 80px;
`;
export const ProgressTitle = styled.div`
  width: 50%;
  margin: 10px auto;

  @media screen and (min-width: ${ScreenSize.tablet}) {
    width: 30%;
  }
`;
