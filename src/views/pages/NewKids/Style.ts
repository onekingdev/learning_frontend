import styled from 'styled-components';
import {ScreenSize} from '../../screenSize';
import { makeStyles } from '@mui/styles'

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
`

export const useStyles = makeStyles({

  createKidButton: {
    "&.MuiButton-root":{
      backgroundColor: '#22BAAF',
      borderRadius: '20px',
      height: '49px',
      width: '215px',
      textTransform: 'unset',
      fontSize: '16px',
      fontWeight: 500,
      color: 'white',
    }
  },
  nextKidButton: {
    "&.MuiButton-root":{
      backgroundColor: '#FFB703',
      borderRadius: '20px',
      height: '49px',
      width: '215px',
      textTransform: 'unset',
      fontSize: '16px',
      fontWeight: 500,
      color: 'white',
      float: 'right',
    }
  },
  paper: {
    maxWidth: 800,
    paddingTop:'40px',
    paddingBottom:'40px',
    paddingLeft: '70px',
    paddingRight: '70px',
    backgroundColor: 'white !important'
  }
});
