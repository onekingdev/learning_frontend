import styled from 'styled-components';
import background from '../../../assets/colored-shapes-bg.svg';
import {ScreenSize} from '../../../screenSize';
import {BasicColor} from '../../../Color';
import {UserInfo} from '../../../atoms/Text/UserInfo';
import {Title} from '../../../atoms/Text/Title';
import {Typography} from '../../../atoms/Text/typography';

export const Wrapper = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;
export const CardCollectibleContainer = styled.div`
  display: grid;
  width: 90%;
  margin: 0 auto;
  grid-template-rows: 60px 4fr 5fr;
  height: 100%;
  @media screen and (min-width: ${ScreenSize.tablet}) {
    grid-template-rows: 85px 200px 400px;
  }
  @media screen and (min-width: ${ScreenSize.desktop}) {
    grid-template-rows: 85px 200px 1fr;
  }
`;
