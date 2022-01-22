import styled from 'styled-components';
import {ScreenSize} from '../../screenSize';
import { makeStyles } from '@mui/styles'
import background from '../../assets/colored-shapes-bg.svg';
import { BlackBoard } from '../../pages/Question/Style';

export const Container = styled.div`
    position: relative;
    width: 384px;
    height: 500px;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.color === "Gold" ? "#FFFBF0" : "#F0FFF6"};
    margin: 38px;
    @media screen and (max-width: ${'500px'}) {
        margin-left:10px;
        margin-right: 10px;
        max-width: 384px;
        // margin: unset;
    }
    @media screen and (max-width: ${ScreenSize.phone}) {
        margin-left:10px;
        margin-right: 10px;
        max-width: 100vw;
        // margin: unset;
    }
`;

export const Header = styled.div`
    width: 100%;
    background-color: ${props => props.color === "Gold" ? "#F4C222" : props.color === "Combo" ? "#22BAAF" : "#26B824"};
    height: 88px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    color: black;
    font-size: 24px;
`

export const Avatar = styled.img`
    padding-right:40px;
    padding-left:30px;
`

export const PriceContainer = styled.div`
    font-size: 40px;
    color: black;
    font-weight: 700;
    display: flex;
    align-items: end;
    padding-top: 30px;
    padding-bottom: 27px;
`

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Price = styled.div`
    font-size: 40px;
`

export const Plan = styled.div`
    font-size: 30px;
`

export const Subjects = styled.div`
    display: flex;
    flex-direction: column;
    padding-top:3px;
`

export const Subject = styled.div`
    padding-top:15px;
    display: flex;
`

export const SubjectIcon = styled.img`

`

export const SubjectTitle = styled.div`
    font-weight: 500;
    font-size: 16px;
    padding-left:16px;
    align-items: center;
    justify-content: center;
    display: flex;
`

export const useStyles = makeStyles({
    button_gold: {
      "&.MuiButton-root":{
        backgroundColor: '#F4C222',
        borderRadius: '20px',
        height: '50px',
        width: '215px',
        textTransform: 'unset',
        fontSize: '16px',
        color: 'black',
      }
    },
    button_combo: {
        "&.MuiButton-root":{
          backgroundColor: '#F0FFF6',
          borderColor: '#22BAAF',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderRadius: '20px',
          height: '50px',
          width: '215px',
          textTransform: 'unset',
          fontSize: '16px',
          color: 'black',
        }
      },
    button_sole: {
        "&.MuiButton-root":{
            backgroundColor: '#F0FFF6',
            borderColor: '#26B824',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderRadius: '20px',
            height: '50px',
            width: '215px',
            textTransform: 'unset',
            fontSize: '16px',
            color: 'black',
        }
    }
  });
