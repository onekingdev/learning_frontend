import styled from 'styled-components';
import {ScreenSize} from '../../screenSize';
import { makeStyles } from '@mui/styles'
import titleBg from '../../assets/title-kids-background.png'

export const SettingContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 45vw;
  justify-content:space-between;
  padding-top:80px;
  font-size:30px;
`;

export const Avatar = styled.img`
  padding-right: 60px;  
  width: 85px;
  height: 95px;
`;

export const Title = styled.div`
  font-Size: 40px;
  line-height: 50px;
  font-weight: 700;
  color: white;
  width: 385px;
  height: 81px;
  background: url(${titleBg}) no-repeat center;
  background-size: contain;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:20px;
  margin-bottom: 70px;
`
export const Container = styled.div`
  padding-top: 25px;
  padding-bottom: 100px;
  z-index: 10;
  width: 67%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`


export const useStyles = makeStyles({

  deleteButton: {
    "&.MuiButton-root":{
      backgroundColor: '#EC5858',
      borderRadius: '20px',
      height: '49px',
      // width: '215px',
      textTransform: 'unset',
      fontSize: '16px',
      fontWeight: 500,
      color: 'white',
    }
  },
  chPwdButton: {
    "&.MuiButton-root":{
      backgroundColor: '#FB8500',
      borderRadius: '20px',
      height: '49px',
      // width: '215px',
      textTransform: 'unset',
      fontSize: '16px',
      fontWeight: 500,
      color: 'white',
    }
  },
  addButton: {
    "&.MuiButton-root":{
      backgroundColor: '#21B95C',
      borderRadius: '20px',
      height: '49px',
      // width: '215px',
      textTransform: 'unset',
      fontSize: '16px',
      fontWeight: 500,
      color: 'white',
    }
  },
});
