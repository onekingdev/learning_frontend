import styled from 'styled-components';
import {ScreenSize} from '../../screenSize';
import { makeStyles } from '@mui/styles'
import {ButtonColor, shadeColor, BasicColor} from '../../Color';

export const Title = styled.div`
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
  padding-bottom: 20px;
`

export const Tip = styled.div`
  font-weight: 400;
  font-size: 25px;
  line-height: 30px;
  padding-bottom: 30px;
`

export const Container = styled.div`
  padding-top: 25px;
  padding-bottom: 100px;
  z-index: 10;
  align-self: start;
`
export const Welcome = styled.img`
  position: absolute;
  right: 14.3vw;
  bottom: 220px;
  width:34.8vw;
  // height: 397px;
`

export const Socrates = styled.img`
  position: absolute;
  right: 14.5vw;
  top: 616px;
  width:239px;
  height:335px;
`

export const useStyles = makeStyles({
  paper: {
    maxWidth: "29.5vw",
    paddingTop:'40px',
    paddingBottom:'40px',
    paddingLeft: '70px',
    paddingRight: '70px',
    backgroundColor: 'white !important',
    marginLeft: '18vw'
  },
  select: {
    "&.MuiOutlinedInput-root" : {
      borderRadius: "25px",
    },
    "& fieldset" : {
      borderColor: BasicColor.brightBlue,
      borderWidth: '2px'
    }
  }
});
