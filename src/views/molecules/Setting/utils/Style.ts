import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import {Box, InputBase, Paper} from '@mui/material';
import {BasicColor} from '../../../Color';

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
    color: ${BasicColor.blue};
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
  border?: string;
  border_radius?: number;
  mt?: number;
  pl?: number;
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
    color: ${BasicColor.green};
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
export const LSButton = styled(Button)<{
  bgColor?: string;
}>`
  &.MuiButton-root {
    ${props => (props.bgColor ? 'background-color:' + props.bgColor + ';' : '')}
    border-radius: 20px;
    height: 49px;
    width: 215px;
    text-transform: unset;
    font-size: 16px;
    color: white;
    font-family: Montserrat;
  }
  &:hover {
    transform scale(1.01)
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
    color: ${BasicColor.blue};
    font-family: Montserrat;
    font-weight: 600;
    font-size: 14px;
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
export const LSShadowContainer = styled(Box)<{
  width?: number;
  height?: number;
  left?: number;
  top?: number;
  display?: string;
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
}>`
  align-items: ${props => props.alignItems};
  justify-content: ${props => props.justifyContent};
  flex-direction: ${props => props.flexDirection};
  box-shadow: 0px 2px 10px 0px #00000040;
  border-radius: 10px;
  font-family: Montserrat;
  margin: 16px;
  padding: 20px 32px 20px 32px;
  ${props => (props.width ? 'width:' + props.width + 'px;' : '')}
  ${props => (props.height ? 'height:' + props.height + 'px;' : '')}
  ${props => (props.left ? 'left:' + props.left + 'px;' : '')}
  ${props => (props.top ? 'top:' + props.top + 'px;' : '')}
  display: ${props => props.display};
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
export const LSTitle = styled.p<{
  fontSize?: number;
  mt?: number;
  mb?: number;
  ml?: number;
}>`
  font-family: Montserrat;
  font-size: 24px;
  margin-top: ${props => props.mt || 5}px;
  margin-bottom: ${props => props.mb || 5}px;
  margin-left: ${props => props.ml || 5}px;
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
  mb?: number;
  ml?: number;
  textAlign?: string;
  margin?: number;
}>`
  font-family: Montserrat;
  font-size: ${props => (props.fontSize ? props.fontSize + 'px;' : '15px;')}
  margin: ${props =>
    props.margin === 0 || props.margin ? props.margin + 'px;' : '0px;'}
  margin-top: ${props =>
    props.mt === 0 || props.mt ? props.mt + 'px;' : '5px;'}
  margin-bottom: ${props =>
    props.mb === 0 || props.mb ? props.mb + 'px;' : '5px;'}
  margin-left: ${props =>
    props.ml === 0 || props.ml ? props.ml + 'px;' : '5px;'}
  color: ${props => props.color};
  font-style: normal;
  text-align: ${props => props.textAlign?props.textAlign + ';':'left;'}
  font-weight: 700;
  letter-spacing: 0.75px;
`;

export const LSText = styled.p<{
  fontSize?: number;
  fontStyle?: string;
  fontWeight?: number;
  textAlign?: string;
  margin?: number;
  mt?: number;
  mb?: number;
  pl?: number;
  ml?: number;
}>`
  font-family: Montserrat;
  font-size: ${props => (props.fontSize ? props.fontSize + 'px;' : '15px;')}
  margin: ${props =>
    props.margin === 0 || props.margin ? props.margin + 'px;' : '0px;'}
  margin-top: ${props =>
    props.mt === 0 || props.mt ? props.mt + 'px;' : ''}
  margin-bottom: ${props =>
    props.mb === 0 || props.mb ? props.mb + 'px;' : ''}
  margin-left: ${props =>
    props.ml === 0 || props.ml ? props.ml + 'px;' : ''}
  padding-left: ${props =>
    props.pl === 0 || props.pl ? props.pl + 'px;' : ''}
  font-weight: ${props => props.fontWeight + ';' || '500;'}
  text-align: ${props => props.textAlign?props.textAlign + ';':'left;'}
  letter-spacing: 1px;
`;
