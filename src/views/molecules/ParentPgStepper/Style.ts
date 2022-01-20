import styled from 'styled-components';
import {ScreenSize} from '../../screenSize';
import background from '../../assets/colored-shapes-bg.svg';
import { makeStyles } from '@mui/styles'
export interface pointProps {
    color: string,
    isCurrent: boolean;
}
export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const Line = styled.div`
    display: block;
    border-color: rgb(189, 189, 189);
    border-top-style: solid;
    border-top-width: 1px;
    width: 62px;
    margin-left: 10px;
    margin-right: 10px;
`;
export const StepContent = styled.div`
    font-size: 24px;
    padding-left: 10px;
    color: ${props => props.color || "#21B95C"};
    
`;
export const Point = styled.div`
    width: 40px;
    height: 40px;
    background-color:  ${(props: pointProps) => props.isCurrent && props.color || "unset"};
    display: flex;
    align-items: center;
    justify-content: center;
    border-width: 1px;
    border-radius: 100%;
    font-size: 24px;
    color: ${(props: pointProps) => props.isCurrent && "white" || props.color};
    border-color: ${props => props.color || "#21B95C"};
    border-style: solid;
`;
