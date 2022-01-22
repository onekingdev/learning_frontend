import styled from 'styled-components';
import background from '../../assets/colored-shapes-bg.svg';
import {ScreenSize} from '../../screenSize';
import { makeStyles } from '@mui/styles'

export const Container = styled.div`
  position: relative;
  display: flex;
  margin-top: 80px;
  padding-bottom: 100px;
  flex-wrap: wrap;
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 720px;
    border-color: #80B1D8;
    border-width: 1px;
    border-style: solid;
    padding-left: 100px;
    padding-right: 100px;
    padding-top: 130px;
    padding-bottom: 50px;
`;

export const ContactContainer = styled.div`
    max-width: 510px;
    display: flex;
    flex-direction: column;
    border-width: 1px;
    border-color: #1771B9;
    border-style: solid;
`;

export const Title = styled.div`
    font-size: 32px;
    font-weight: 700;
    padding-bottom: 60px;
`;

export const ContactHeader = styled.div`
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-top: 25px;
    padding-bottom: 25px;
`;

export const ContactBody = styled.div`
    background-color: #1771B9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    color: white;
`;

export const useStyles = makeStyles({
  createButton: {
    float: 'right',
    "&.MuiButton-root":{
      marginTop: '45px',
      backgroundColor: '#21B95C',
      borderRadius: '20px',
      height: '49px',
      width: '215px',
      textTransform: 'unset',
      fontSize: '16px',
      zIndex: 2,
    }
  }
});
