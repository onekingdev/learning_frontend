import styled from 'styled-components';
import background from '../../assets/colored-shapes-bg.svg';
import {ScreenSize} from '../../screenSize';

export const AvatarContainer = styled.div`
  display: grid;
  grid-template-rows: 37px 85px auto;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  @media screen and (min-width: ${ScreenSize.phone}) {
    width: auto;
    grid-template-rows: 186px auto;
  }
`;
