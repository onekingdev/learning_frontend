import styled from 'styled-components';
import background from '../../assets/colored-shapes-bg.svg';
import {BasicColor} from '../../Color';
import {ScreenSize} from '../../screenSize';

export const AvatarContainer = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  height: calc(100vh - 57px);
`;
