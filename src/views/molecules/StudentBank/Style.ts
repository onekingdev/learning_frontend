import styled from 'styled-components';
import { Grid, Paper } from '@mui/material';
import { BasicColor } from '../../Color';

export const BankPaper = styled(Paper) <{
  flex_direction: string,
  bg_color: string,
  width?: number
}>`
margin-top: 5vh;
&.MuiPaper-root {
  padding: 30px 0 30px 0;
  width: ${p => p.width?p.width + 'px':'auto'};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${p => p.flex_direction};
  color: white;
  background-color: ${BasicColor.blue};
  background-color: ${p => p.bg_color};
  border-radius: 20px;
  }
`;

export const GridItem = styled(Grid) <{
  align?: string
}>`
&.MuiGrid-root {
  display: flex;
  justify-content: center;
  align-items: ${p => p.align ? p.align : 'center'};
  flex-direction: column;
  }
`;

export const Input = styled.input`
margin: 15px;
border-radius: 14px;
height: 54px;
outline: none;
font-size: 18px;
`;

