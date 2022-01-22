import styled from 'styled-components';
import {ScreenSize} from '../../screenSize';
import { makeStyles } from '@mui/styles'
import background from '../../assets/colored-shapes-bg.svg';
import { BlackBoard } from '../../pages/Question/Style';

export const Container = styled.div`
    position: relative;
    display: flex;
    padding-bottom: 100px;
    margin-left:auto;
    margin-right: auto;
    @media screen and (max-width: 1100px) {
        flex-direction: column;
        // display:none
    }
`;

export const PaymentContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 720px;
    // width: 37.5vw;
    background-color: #E8F1F8;
    border-color: #80B1D8;
    border-width: 1px;
    border-style: solid;
    padding-left: 90px;
    padding-right: 90px;
    padding-top: 50px;
    padding-bottom: 50px;
    // @media screen and (max-width: ${ScreenSize.tablet}) {
    //     max-width: 720px;
    // }
    @media screen and (max-width: 1100px) {
        max-width: 540px;
    }
    @media screen and (max-width: ${ScreenSize.phone}) {
        width: calc(100vw - 180px)
    }
`

export const Title = styled.div`
    font-size: 32px;
    font-weight: 700;
`

export const OrderContainer = styled.div`
    max-width: 510px;
    display: flex;
    flex-direction: column;
    // width: 26.5vw;
    min-width: 400px;
    border-width: 1px;
    border-color: #1771B9;
    border-style: solid;
    @media screen and (max-width: ${ScreenSize.tablet}) {
        max-width: 720px;
        // width: unset;
    }
    @media screen and (max-width: 1100px) {
        max-width: 720px;
        // display:none
    }
    @media screen and (max-width: ${ScreenSize.phone}) {
        min-width: unset;
    }
`
export const OrderTitleContainer = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 460px;
`

export const OrderTitleLog = styled.img`
`

export const OrderTitle = styled.div`
    font-size: 32px;
    font-weight: 700;
    text-decoration: underline;
    line-height: 40px;
`

export const OrderBody = styled.div`
    background-color: #1771B9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
`
export const OrderItem = styled.div`
    padding: 23px;
    display: flex;
    width: 330px;
    padding-left: 35px;
    padding-right: 35px;
    justify-content: space-between;
    @media screen and (max-width: ${ScreenSize.tablet}) {
        width: 100vw;
        padding-left: unset;
        padding-right: unset;
    }
`
export const OrderItemTitleContainer = styled.div`
    display: unset;
    @media screen and (max-width: ${ScreenSize.tablet}) {
       padding-left: 35px;
    }
`
export const OrderItemTitle = styled.div`
    color: white;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    
`
export const OrderItemSubtitle = styled.div`
    color: white;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
`

export const OrderItemContent = styled.div`
    color: white;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: ${ScreenSize.tablet}) {
        padding-right: 35px;
     }
`
export const OrderTip = styled.div`
    font-weight: 400;
    font-size: 10px;
    line-height: 15px;
    color: white;
    padding: 10px;
    padding-left: 55px;
    padding-right: 55px;
    display: flex;
    @media screen and (max-width: ${ScreenSize.tablet}) {
        padding-left: 10px;
        padding-right: 10px;
        align-self: start;
    }
    
`

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

export const PayPal = styled.img`
    @media screen and (max-width: ${ScreenSize.tablet}) {
        max-width: 19.7vw;
        width: unset;
    }
`

export const Apple = styled.img`
    padding-left: 30px;
    @media screen and (max-width: ${ScreenSize.tablet}) {
        max-width: 19.7vw;
        width: unset;
    }
`

export const CardType = styled.img`
    width: 180px;
`

export const CardContent = styled.div`
    width: 415px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: ${ScreenSize.tablet}) {
        flex-direction: column;
        width: unset;
    }

`

export const FlexRow = styled.div`
    display: flex;
    // alignItems: center;
    // flex-wrap: wrap;
`

export const useStyles = makeStyles({
    radio: {
        "& .MuiSvgIcon-root":{
            height: '30px',
            width: '30px',
          }
    },
    divider: {
        marginTop: '30px !important',
        marginBottom: '30px !important'
    },
    orderButton: {
        "&.MuiButton-root":{
            marginTop: '40px',
            backgroundColor: '#21B95C',
            borderRadius: '20px',
            height: '49px',
            width: '270px',
            textTransform: 'unset',
            fontSize: '16px',
            lineHeight: '20px',
            fontWeight: '500',
            marginBottom: '30px'
        }
    },
    updateButton: {
        "&.MuiButton-root":{
            marginTop: '40px',
            backgroundColor: '#21B95C',
            borderRadius: '20px',
            height: '49px',
            textTransform: 'unset',
            fontSize: '16px',
            lineHeight: '20px',
            fontWeight: '500',
        }
    },
    returnButton: {
        "&.MuiButton-root":{
            marginTop: '40px',
            backgroundColor: '#919699',
            borderRadius: '20px',
            height: '49px',
            textTransform: 'unset',
            fontSize: '16px',
            lineHeight: '20px',
            fontWeight: '500',
        }
    },
    codeButtn: {
        "&.MuiButton-root":{
            backgroundColor: '#F4C222',
            borderRadius: '20px',
            textTransform: 'unset',
            fontSize: '16px',
            lineHeight: '20px',
            fontWeight: '700',
            height: '50px',
        }
    },
    codeInput: {
        "&.MuiOutlinedInput-root": {
            height: '50px'
        },
        "& .MuiInputLabel-root": {
        },
        "& .Mui-focused": {
            color: 'black !important'
        }
    },
    input: {
        "& fieldset": {
            borderColor:'#1976D2',
            borderRadius: '25px',
            borderWidth: '2px'
        },
        "& MuiFormControl-root": {
            borderRadius: '25px',
            borderWidth: '2px'
        },
        "& input": {
            backgroundColor: 'white',
            borderRadius: '25px',
            borderWidth: '2px'
        },
        "& .MuiInputBase-input": {
            backgroundColor: "white",
            borderRadius: "25px",
            borderWidth: '2px'
        }
    }
  });
