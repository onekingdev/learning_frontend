import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import {InputBase, Paper} from '@mui/material';

import FormControl from '@mui/material/FormControl';
import {
  DialogContent,
  DialogTitle,
  DialogContentText,
  Radio,
  FormControlLabel,
} from '@mui/material';

import titleBg from '../../../assets/title-kids-background.png';

/*--------------------------------------------------------------------------------------------*/
/*                                         Dialog                                             */
/*--------------------------------------------------------------------------------------------*/

export const LSDialogTitle = styled(DialogTitle)`
  &.MuiDialogTitle-root {
    color: #1771b9;
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0.25px;
    text-align: center;
    margin-top: 45px;
  }
`;
export const LSDialogContent = styled(DialogContent)`
  &.MuiDialogContent-root {
    padding: 40px;
  }
`;
export const LSDialogContentText = styled(DialogContentText)`
  &.MuiDialogContentText-root {
    padding: 20px;
    font-family: Montserrat;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0px;
    text-align: left;
  }
`;

/*--------------------------------------------------------------------------------------------*/
/*                                          Form                                              */
/*--------------------------------------------------------------------------------------------*/
export const LSFormControl = styled(FormControl)`
  &.MuiFormControl-root {
    padding: 0 20px 10px 25px;
  }
`;

interface InputBaseProps {
  border?: string,
  border_radius?: number,
  mt?: number,
  pl?: number,
}
export const LSInputBase = styled(InputBase)<InputBaseProps>`
  font-family: Montserrat;
  border: solid 2px cornflowerblue;
  border-radius: ${props => props.border_radius || 0}px;
  margin-top: ${props => props.mt || 0}px;
  padding-left: ${props => props.pl || 0}px;
  text-align: left;
`;
export const LSRadio = styled(Radio)`
  & .MuiSvgIcon-root {
    font-size: 40px;
  }
  &.MuiRadio-root {
    color: #21b95c;
  }
`;
export const LSFormControlLabel = styled(FormControlLabel)`
  & .MuiTypography-root {
    font-family: Montserrat;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0px;
    text-align: left;
  }
`;

/*--------------------------------------------------------------------------------------------*/
/*                                          Button                                            */
/*--------------------------------------------------------------------------------------------*/
export const LSButton = styled(Button)`
  &.MuiButton-root {
    // background-color: #21B95C;
    border-radius: 20px;
    height: 49px;
    width: 215px;
    text-transform: unset;
    font-size: 16px;
    color: white;
    font-family: Montserrat;
  }
`;
export const LSButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 20px 0px 20px 0px;
`;
export const LSBlueTextButton = styled(Button)`
  &.MuiButton-root {
    text-decoration: underline;
    text-transform: unset;
    color: #1771b9;
    font-family: Montserrat;
    font-weight: 600;
    font-size: 16px;
  }
`;

/*--------------------------------------------------------------------------------------------*/
/*                                           GRID                                             */
/*--------------------------------------------------------------------------------------------*/
export const LSGridRow = styled(Grid)`
  justify-content: center;
  padding: 5px 7px 0px 15px;
  align-items: center;
  margin-top: 8px;
`;
export const LSShadowContainer = styled.div<{
  width?: number,
  height?: number,
  left?: number,
  top?: number,
}>`
  box-shadow: 0px 2px 10px 0px #00000040;
  border-radius: 10px;
  font-family: Montserrat;
  margin: 16px;
  padding: 20px 32px 20px 32px;
  ${props => props.width ? 'width:' + props.width + 'px;':''}
  ${props => props.height ? 'height:' + props.height + 'px;':''}
  left: ${props => (props.left)}px;
  top: ${props => (props.top)}px;
`;


export const LSText = styled.p<{
  fontSize?: number;
  fontStyle?: string;
  fontWeight?: number;
  lineHeight?: number;
  textAlign?: string;
  margin?: number;
  mt?: number;
  mb?: number;
  pl?: number;
}>`
  font-family: Montserrat;
  ${props => props.fontSize ? 'font-size:' + props.fontSize + 'px;':''}
  ${props => props.lineHeight ? 'line-height:' + props.lineHeight + 'px;':''}
  margin: ${props => props.margin || 0}px;
  margin-top: ${props => (props.mt) || 0}px;
  margin-bottom: ${props => (props.mb) || 0}px;
  padding-left: ${props => (props.pl) || 0}px;
  font-weight: ${props => props.fontWeight || 500};
  text-align: ${props => (props.textAlign)};
  font-style: ${props => props.fontStyle};
  letter-spacing: 1px;
`;
export const LSTextField = styled(TextField)`
  height: 44px;
  width: 100%;
  border-radius: 10px;
  margin-right: 15px;
  padding: 10px, 0px, 10px, 20px;
  & .MuiOutlinedInput-root {
    & fieldset {
      border: 1px solid #1771b9;
      border-radius: 10px;
    }
    &:hover fieldset {
      border: 1px solid #1771b9;
    }
  }
`;
export const LSTitle = styled.label`
  font-family: Montserrat;
  font-size: 24px;
  margin-top: 0px;
  margin-bottom: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0.25px;
  text-align: left;
`;
export const Title = styled.div`
  font-size: 40px;
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
  margin-bottom: 70px;
`;
export const TextGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const MasterCardImg = styled.img`
  width: 50px;
  height: 30px;
`;

/*--------------------------------------------------------------------------------------------*/
/*                                           Upgrade                                          */
/*--------------------------------------------------------------------------------------------*/
export const LSPaperMoney = styled(Paper)`
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: solid 2px cornflowerblue;
  &.MuiPaper-root {
    border-radius: 20px;
  }
`;

/*--------------------------------------------------------------------------------------------*/
/*                                           TEXT                                             */
/*--------------------------------------------------------------------------------------------*/
export const LSLabel = styled.p<{
  fontSize?: number;
  color?: string;
  mt?: number;
}>`
  font-family: Montserrat;
  ${props => props.fontSize ? 'font-size:' + props.fontSize + 'px;':''}
  ${props => props.mt ? 'margin-top:' + props.mt + 'px;':''}
  color: ${props => props.color};
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.75px;
  text-align: left;
`;
