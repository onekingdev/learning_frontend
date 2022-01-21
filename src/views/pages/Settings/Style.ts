import styled from 'styled-components';
import { makeStyles } from '@mui/styles'
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const CGridRow = styled(Grid)`
justify-content: center;
padding: 10px 7px 8px 15px;
align-items: center;
margin-top: 6px;
`
export const CFromContainer = styled(Box)`
height: 578px;
width: 624px;
// left: 303px;
// top: 312px;
border-radius: 10px;
padding: 40px 32px 0 32px;
box-shadow: 0px 2px 10px 0px #00000040;
`
export const CFormLabel = styled(Typography)`
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 20px;
letter-spacing: 0.75px;
text-align: left;
height: 20px;
width: 140px;
left: 25px;
top: 15px;
border-radius: nullpx;
`
export const CTextField = styled(TextField)`
height: 44px;
width: 100%;
border-radius: 5px;
margin-right: 15px;
padding: 10px, 0px, 10px, 20px;
`
export const CFormTitle = styled(Typography)`
font-family: Montserrat;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 30px;
letter-spacing: 0.25px;
text-align: left;
`
export const CButtonGroup = styled(Box)`
display: flex;
justify-content: space-between;
padding: 25px 35px 0px 35px;
margin: 20px 10px 20px 10px;
`
export const useStyles = makeStyles({
  groupButton: {
    '&.MuiButton-root':{
      height: '50px',
      width: '50px',
      fontSize: '24px',
      color: 'black',
      borderColor: 'black',
    }
  },


 /*----------------------- Setting page styles ------------------------*/
  submitButton: {
    padding:'18px 32px',
    '&.MuiButton-root':{
      backgroundColor: '#21B95C',
      borderRadius: '20px',
      height: '49px',
      width: '215px',
      textTransform: 'unset',
      fontSize:'16px',
      color:'white'
    }
  },

  cancelButton: {
    padding:'18px 32px',
    '&.MuiButton-root':{
      backgroundColor: '#919699',
      borderRadius: '20px',
      height: '49px',
      width: '215px',
      textTransform: 'unset',
      fontSize:'16px',
      color:'white'
    }
  }
});
