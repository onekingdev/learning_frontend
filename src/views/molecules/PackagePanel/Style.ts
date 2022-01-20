import styled from 'styled-components';
import {ScreenSize} from '../../screenSize';
import background from '../../assets/colored-shapes-bg.svg';

export const Container = styled.div`
  position: relative;
  width: 384px;
  height: 500px;
  display: flex;
  flex-direction: column;
  background-color: #FFFBF0;
`;

export const Header = styled.div`
    width: 100%;
    background-color: ${props => props.color === "gold" ? "#F4C222" : props.color === "combo" ? "#22BAAF" : "#26B824"};
    height: 88px;
    border-radius: 10px;
`
export const Avatar = styled.img`
    padding-right:40px;
    padding-left:30px;
`

export const Title = styled.img`
    padding-right:40px;
    padding-left:30px;
`

