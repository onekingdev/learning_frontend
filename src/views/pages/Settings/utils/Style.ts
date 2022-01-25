import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import FormControl from '@mui/material/FormControl';
import { DialogContent, DialogTitle, DialogContentText, DialogActions, Radio, FormControlLabel } from '@mui/material';

import titleBg from '../../../assets/title-kids-background.png'

/*--------------------------------------------------------------------------------------------*/
/*                                         Dialog                                             */
/*--------------------------------------------------------------------------------------------*/

export const LSDialogTitle = styled(DialogTitle)`
&.MuiDialogTitle-root {
  color: #1771B9;
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.25px;
  text-align: center;
  margin-top: 45px;
}
`
export const LSDialogContent = styled(DialogContent)`
&.MuiDialogContent-root {
  padding: 40px;
}
`
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
`

/*--------------------------------------------------------------------------------------------*/
/*                                          Form                                              */
/*--------------------------------------------------------------------------------------------*/
export const LSFormControl = styled(FormControl)`
&.MuiFormControl-root {
  padding: 0 20px 10px 25px;
}
`
export const LSRadio = styled(Radio)`
& .MuiSvgIcon-root {
  font-size: 40px;
}
&.MuiRadio-root {
  color: #21B95C;
}
`
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
`

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
  font-size:16px;
  color:white;
  font-family: Montserrat;
}
`
export const LSButtonContainer = styled.div`
display: flex;
justify-content: space-evenly;
// padding: 0px 35px 0px 35px;
margin: 20px 0px 20px 0px;
`
export const LSBlueTextButton = styled(Button)`
&.MuiButton-root {
  text-decoration: underline;
  text-transform: unset;
  color: #1771B9;
  font-family: Montserrat;
  font-weight: 600;
  font-size: 16px;
}
`

/*--------------------------------------------------------------------------------------------*/
/*                                           GRID                                             */
/*--------------------------------------------------------------------------------------------*/
export const CGridRow = styled(Grid)`
justify-content: center;
padding: 5px 7px 5px 15px;
align-items: center;
margin-top: 8px;
`
export const MGridRow = styled(Grid)`
justify-content: center;
padding: 0px 7px 0px 15px;
align-items: center;
margin: 15px;
`
export const LSShadowContainer = styled.div`
box-shadow: 0px 2px 10px 0px #00000040;
border-radius: 10px;
font-family: Montserrat;
margin: 16px;
padding: 20px 32px 20px 32px;
`
export const FormContainer = styled(LSShadowContainer)`
width: 624px;
left: 303px;
top: 312px;
font-family: Montserrat;
`
export const MemContainer = styled(LSShadowContainer)`
// height: 546px;
width: 683px;
left: 960px;
top: 312px;
`
export const CLabel = styled.p`
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 700;
letter-spacing: 0.75px;
text-align: left;
`
export const CText = styled.p`
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 17px;
letter-spacing: 0em;
text-align: left;
`
export const CIntentText = styled(CText)`
padding-left: 20px;
`
export const LSTextField = styled(TextField)`
height: 44px;
width: 100%;
border-radius: 10px;
margin-right: 15px;
padding: 10px, 0px, 10px, 20px;
& .MuiOutlinedInput-root {
  & fieldset {
    border: 1px solid #1771B9;
    border-radius: 10px;
  }
  &:hover fieldset {
    border: 1px solid #1771B9;
  }
}
`
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
`
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
  margin-bottom: 70px;
`
export const TextGroup = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
`
export const MasterCardImg = styled.img`
width: 50px;
height: 30px;
`;
