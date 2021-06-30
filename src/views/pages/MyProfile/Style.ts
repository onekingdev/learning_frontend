import {ScreenSize} from './../../screenSize';
import styled from 'styled-components';
import background from '../../assets/colored-shapes-bg.svg';

export const Wrapper = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  @media (min-width: ${ScreenSize.desktop}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 60px;
    max-width: 1025px;
    padding-top: 10px;
  }
`;

export const Head = styled.div`
  margin-top: 14px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
`;

export const Badges = styled.div``;

export const Settings = styled.div``;
