import {FC, useEffect, ReactChildren, ReactChild, useState} from 'react';
import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux'
// import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import * as TYPES from '../../../app/types'
import avatar from '../../assets/packageIcons/avatar.svg'
import math_gold from '../../assets/packageIcons/math_gold.svg'
import ela_gold from '../../assets/packageIcons/ela_gold.svg'
import science_gold from '../../assets/packageIcons/science_gold.svg'
import financial_gold from '../../assets/packageIcons/financial_gold.svg'
import health_gold from '../../assets/packageIcons/health_gold.svg'
import math_combo from '../../assets/packageIcons/math_combo.svg'
import ela_combo from '../../assets/packageIcons/ela_combo.svg'
import science_combo from '../../assets/packageIcons/science_combo.svg'
import financial_combo from '../../assets/packageIcons/financial_combo.svg'
import health_combo from '../../assets/packageIcons/health_combo.svg'
import math_sole from '../../assets/packageIcons/math_sole.svg'
import ela_sole from '../../assets/packageIcons/ela_sole.svg'
import science_sole from '../../assets/packageIcons/science_sole.svg'
import financial_sole from '../../assets/packageIcons/financial_sole.svg'
import health_sole from '../../assets/packageIcons/health_sole.svg'
import Button from '../../molecules/MuiButton'
import ButtonGroup from '@mui/material/ButtonGroup';
import {ButtonColor, shadeColor, BasicColor} from '../../Color';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

import {
  useStyles,
  Container,
  Header,
  Avatar,
  PriceContainer,
  Price,
  Plan,
  Body,
  Subjects,
  Subject,
  SubjectIcon,
  SubjectTitle,
  Mask,
  Tip,
 } from './Style'

type PackagePanelProps = {
  type: string;
  price: any;
  disabled?: boolean;
  onChange: (childrenCount: number, plan: string) =>void;
};
export const PackagePanel: FC<PackagePanelProps> = ({type, price, disabled=false, onChange}) => {
  const history = useHistory();
  const dispatch = useDispatch()
  const classes = useStyles();
  const [paths, setPaths] = useState<any>([]);
  const [childrenCount, setChildrenCount] = useState(0);
  const [plan, setPlan] = useState('month');

  const handleCheckPath = (path: string, isChecked: boolean) => {
    let temp:any = [];
    temp = [...paths];
    if(isChecked) temp.push(path)
    else temp.pop(path)
    setPaths(temp)
  }

  useEffect(() => {
    console.log('package panel', childrenCount, plan)
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
        <div className="flex flex-col p-t-10 p-b-15 font-s-20 font-w-7 w-300">
          <b>Choose your plan</b>
          <br />
          <div className="flex flex-row" style={{flexWrap: 'unset'}}>
            <Button bgColor={type === 'Gold' ? BasicColor.yellow : type === 'Combo' ? BasicColor.aqua : BasicColor.greenSoft} fontSize={16} value="Monthly" zIndex={2} onClick={()=>{setPlan('month')}} />
            <Button fontSize={16} variant="outlined" color="black" borderColor="black" value="Yearly" margin="0 0 0 -64px" onClick={()=>{setPlan('year')}} />
          </div>
        </div>
        <div className="flex flex-col p-t-10 p-b-15 font-s-20 font-w-7 w-300">
          <b>Number of Children</b>
          <br />
          <div className="flex flex-row">
            <ButtonGroup variant="outlined" aria-label="outlined button group">
              <Button variant="outlined" color="black" borderColor="black" radius={0} fontSize={24} height={50} width={50} value="-" onClick={() => childrenCount > 0 && setChildrenCount(childrenCount - 1)} />
              <Button variant="outlined" color="black" borderColor="black" radius={0} fontSize={24} height={50} width={50} value={''+childrenCount} />
              <Button variant="outlined" color="black" borderColor="black" radius={0} fontSize={24} height={50} width={50} value="+" onClick={() => setChildrenCount(childrenCount + 1)} />
            </ButtonGroup>
          </div>
        </div>
        </>
        <PriceContainer>
          <Price> $ {price[plan]}</Price>
          <Plan>/{plan}</Plan>
        </PriceContainer>
      </Body>
    </Container>
  );
};
