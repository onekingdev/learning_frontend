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

export const Subject = styled.img`
`

export const useStyles = makeStyles({
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