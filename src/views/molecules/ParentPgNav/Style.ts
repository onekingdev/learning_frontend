import styled from 'styled-components';
import {ScreenSize} from '../../screenSize';
import background from '../../assets/colored-shapes-bg.svg';
import { makeStyles } from '@mui/styles'
import {ButtonColor, shadeColor, BasicColor} from '../../Color';
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
  align-items: center;
  @media screen and (max-width: ${ScreenSize.desktop}) {
    padding-top: 4.2vw;
    padding-bottom: 1.7vw;
  }
  @media screen and (max-width: ${ScreenSize.tablet}) {
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 3vw;
    padding-right: 3vw;
    background-color: ${BasicColor.blue};
    position: fixed;
    min-width: 94vw;
    bottom: 0px;
    z-index:1000;
  }
`;

export const Home = styled.img`
`;

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (max-width: ${ScreenSize.tablet}) {
      display: none;
    }
`

export const LogoImg = styled.img`
`;

export const SupportBtnContainer = styled.div`
  width: 200px;
  & #questionMarkButton {
    display: none;
  }
  @media screen and (max-width: ${ScreenSize.tablet}) {
    width: unset;
    & button {
      display: none;
    }
    & #questionMarkButton {
      display: flex;
    }
  }
  
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
    @media screen and (max-width: ${ScreenSize.phone}) {
      width: 150px
    }
`

export const AvatarContainer = styled.div`
  @media screen and (max-width: ${ScreenSize.tablet}) {
    display: none;
  }
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
  questionMarkButton: {
    "&.MuiAvatar-root": {
      borderColor:'white',
      borderWidth: '2px',
      borderStyle: 'solid',
      width: '35px',
      height: '35px',
      marginRight: '20px',
      backgroundColor: '#21B95C !important',
      cursor: 'pointer'
    },
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
