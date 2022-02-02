import styled from 'styled-components';
import {ScreenSize} from '../../screenSize';
import { makeStyles } from '@mui/styles'
import titleBg from '../../assets/title-kids-background.png'
import {ButtonColor, BasicColor} from '../../Color';

export const LicenseHeader = styled.div`
  background-color: ${BasicColor.blue};
  color: ${BasicColor.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 33px;
  padding: 25px;
  border-radius: 10px 10px 0px 0px;
  @media screen and (max-width: 540px) {
    font-size: 1em;
    padding: 10px;
  }
`;

export const LicenseBody = styled.div`
  display: flex;
  flex-direction: column;
  background-color:${BasicColor.gray20};
  height: 100%;
  border-radius: 0px 0px 10px 10px;
  padding: 35px;
  @media screen and (max-width: 540px) {
    font-size: 1em;
    padding: 3px;
  }
`;

export const LicenseUsername = styled.div`
  font-size: 25px;
  weight: 600;
  line-height: 31px;
  background-color: ${BasicColor.green};
  color: ${BasicColor.white};
  padding: 5px 11px 5px 11px;
  margin-right: 45px;
  margin-top: 10px;
  border-radius: 5px;
  width: 110px;
  min-height: 35px; 
  text-align: center;
  @media screen and (max-width: 540px) {
    font-size: 1em;
    padding: 0;
    margin-right: 20px;
  }
`

export const useStyles = makeStyles({

});
