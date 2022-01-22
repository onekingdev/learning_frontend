import styled from 'styled-components';
import background from '../../assets/colored-shapes-bg.svg';
import {ScreenSize} from '../../screenSize';
import { makeStyles } from '@mui/styles'

export const SettingContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  // width: 45vw;
  width: 850px;
  justify-content:space-between;
  padding-top:80px;
  font-size:30px;
  
  @media screen and (max-width: ${ScreenSize.tablet}) {
    justify-content: center;
  }
  @media screen and (max-width: 900px) {
    width: unset;
  }
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: ${ScreenSize.tablet}) {
    justify-content: center;
    align-items: center;
  }
`;
export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media screen and (max-width: ${ScreenSize.tablet}) {
    justify-content: center;
    align-items: center;
  }
`;
export const PackageContainer = styled.div`
  padding-top: 45px;
  padding-bottom: 8px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const PaymentContainer = styled.div`
  padding: 45px;
`;

export const useStyles = makeStyles({
  monthButton: {
    "&.MuiButton-root":{
      backgroundColor: '#21B95C',
      borderRadius: '20px',
      height: '49px',
      width: '215px',
      textTransform: 'unset',
      fontSize: '24px',
      zIndex: 2,
    }
  },
  yearButton: {
    "&.MuiButton-root":{
      borderRadius: '20px',
      height: '49px',
      width: '215px',
      textTransform: 'unset',
      fontSize: '24px',
      color: 'black',
      borderColor: 'black',
      marginLeft: '-64px'
    }
  },
  groupButton: {
    "&.MuiButton-root":{
      height: '50px',
      width: '50px',
      fontSize: '24px',
      color: 'black',
      borderColor: 'black',
    }
  },
});
