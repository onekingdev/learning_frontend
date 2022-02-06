import styled from 'styled-components';
import background from '../../../assets/colored-shapes-bg.svg';
import ribbon from '../../../assets/ribbon.svg';
import {ScreenSize} from '../../../screenSize';

export const Wrapper = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;

export const CardTitle = styled.div`
  margin-top: 10vh;
  text-align: center;
  align-content: center;
  background-image: url(${ribbon});
  background-repeat: no-repeat;
  padding: 10px;
  background-position: center;
`;
