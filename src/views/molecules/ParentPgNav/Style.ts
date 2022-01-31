import styled from 'styled-components';
import {ScreenSize} from '../../screenSize';
import background from '../../assets/colored-shapes-bg.svg';
import { makeStyles } from '@mui/styles'
export const Container = styled.div`
  position: relative;
  padding-top: 91px;
  max-width: 1358px;
  min-height: 65px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 3.8vw;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: ${ScreenSize.desktop}) {
    padding-top: 4.2vw;
    padding-bottom: 1.7vw;
  }
`;

export const Home = styled.img`
`;

export const LogoContainer = styled.div`
    display:flex;
    flex-direction: column;
`
export const LogoImg = styled.img`
`;

export const LogoTitle = styled.div`
  align-self: center;
  font-size: 20px;
  paddint-top:9px;
`;

export const NameAvatarGroup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const useStyles = makeStyles({
  formControl: {
    width:'188px'
  },
  questionMark: {
    "&.MuiAvatar-root": {
      backgroundColor:'unset',
      borderColor:'white',
      borderWidth: '1px',
      borderStyle: 'solid',
      width: '35px',
      height: '35px',
      marginRight: '10px'
    }
  },
  button: {
    "&.MuiButton-root":{
      backgroundColor: '#21B95C',
      borderRadius: '20px',
      height: '49px',
      width: '200px',
      textTransform: 'unset',
      fontSize: '16px'
    }
  }
});
