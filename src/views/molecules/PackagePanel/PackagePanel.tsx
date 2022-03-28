import { FC, useEffect, useState } from 'react';
import avatar                      from 'views/assets/packageIcons/avatar.svg'
import Button                      from 'views/molecules/MuiButton'
import ButtonGroup                 from '@mui/material/ButtonGroup';
import { BasicColor }              from 'views/Color';

import {
  Container,
  Header,
  Avatar,
  PriceContainer,
  Price,
  Plan,
  Body,
  Mask,
  Tip,
 } from './Style'

type PackagePanelProps = {
  type: string;
  price: any;
  disabled?: boolean;
  isSpecialCode: boolean;
  onChange: (childrenCount: number, plan: string) =>void;
};
export const PackagePanel: FC<PackagePanelProps> = ({type, price, isSpecialCode, disabled=false, onChange}) => {
  const [childrenCount, setChildrenCount] = useState(0);
  const [plan, setPlan] = useState('month');

  // const handleCheckPath = (path: string, isChecked: boolean) => {
  //   let temp:any = [];
  //   temp = [...paths];
  //   if(isChecked) temp.push(path)
  //   else temp.pop(path)
  //   setPaths(temp)
  // }

  useEffect(() => {
    onChange(childrenCount, plan);
  }, [childrenCount, plan]);

  return (
    <Container color={type}>
      { disabled && (<Mask />) }
      <Header color={type}>
        <Avatar src={avatar} />
        <b>{type}{' '}Package</b>
      </Header>
      <Body>
        <Tip>
        {type === 'Gold' && 'Include All Areas of Knowledge'}
        {type === 'Combo' && 'Pick two Areas of Knowledge'}
        {type === 'Sole' && 'Pick one Area of Knowledge'}
        </Tip>
        <>
        { !isSpecialCode &&
          <div className="flex flex-col p-t-10 p-b-15 font-s-20 font-w-7 w-300">
            <b>Choose your plan</b>
            <br />
            <div className="flex flex-row" style={{flexWrap: 'unset'}}>
              <Button bgColor={type === 'Gold' ? BasicColor.yellow : type === 'Combo' ? BasicColor.aqua : BasicColor.greenSoft} fontSize={16} value="Monthly" zIndex={2} onClick={()=>{setPlan('month')}} />
              <Button fontSize={16} variant="outlined" color="black" borderColor="black" value="Yearly" margin="0 0 0 -64px" onClick={()=>{setPlan('year')}} />
            </div>
          </div>
        }
        <div className="flex flex-col p-t-10 p-b-15 font-s-20 font-w-7 w-300">
          <b>Number of Children</b>
          <br />
          <div className="flex flex-row">
            <ButtonGroup variant="outlined" aria-label="outlined button group">
              <Button variant="outlined" color="black" borderColor="black" radius={0} fontSize={24} height={35} width={35} value="-" onClick={() => childrenCount > 0 && setChildrenCount(childrenCount - 1)} />
              <Button variant="outlined" color="black" borderColor="black" radius={0} fontSize={24} height={35} width={35} value={''+childrenCount} />
              <Button variant="outlined" color="black" borderColor="black" radius={0} fontSize={24} height={35} width={35} value="+" onClick={() => setChildrenCount(childrenCount + 1)} />
            </ButtonGroup>
          </div>
        </div>
        </>
        { !isSpecialCode &&
          <PriceContainer>
            <Price> $ {price}</Price>
            <Plan>/{plan}</Plan>
          </PriceContainer>
        }
      </Body>
    </Container>
  );
};
