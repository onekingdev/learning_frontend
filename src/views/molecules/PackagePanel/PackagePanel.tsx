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
 } from './Style'

type PackagePanelProps = {
  type: string;
  plan: string;
  price: number;
  onSubmit: any;
  disabled?: boolean;
};
export const PackagePanel: FC<PackagePanelProps> = ({type, plan, price, onSubmit, disabled=false}) => {
  const history = useHistory();
  const dispatch = useDispatch()
  const classes = useStyles();
  const [paths, setPaths] = useState<any>(['']);
  const handleCheckPath = (path: string, isChecked: boolean) => {
    let temp:any = [];
    temp = [...paths];
    if(isChecked) temp.push(path)
    else temp.pop(path)
    setPaths(temp)
  }
  useEffect(() => {
  }, []);
  return (
    <Container color={type}>
      { disabled && (<Mask />) }
      <Header color={type}>
        <Avatar src={avatar} />
        <b>{type}{" "}Package</b>
      </Header>
      <Body>
        <Subjects>
          <Subject>
            {type === "Gold" && (<SubjectIcon src={math_gold} />)}
            {type === "Combo" && (<><Checkbox sx={{color: BasicColor.aqua,'&.Mui-checked': {color: BasicColor.aqua,},padding:'0px',paddingLeft: '9px', paddingRight: '9px'}} onChange={ (e) => handleCheckPath("math", e.target.checked) }/><SubjectIcon src={math_combo} /></>)}
            {type === "Sole" && (<><Radio value={'math'} onClick={() => setPaths(['math'])} checked={paths[0] === 'math'} sx={{color: BasicColor.greenSoft,'&.Mui-checked': {color: BasicColor.greenSoft,},padding:'0px',paddingLeft: '9px', paddingRight: '9px'}}/><SubjectIcon src={math_sole} /></>)}
            <SubjectTitle>MATH</SubjectTitle>
          </Subject>
          <Subject>
            {type === "Gold" && (<SubjectIcon src={ela_gold} />)}
            {type === "Combo" && (<><Checkbox sx={{color: BasicColor.aqua,'&.Mui-checked': {color: BasicColor.aqua,},padding:'0px',paddingLeft: '9px', paddingRight: '9px'}} onChange={ (e) => handleCheckPath("ela", e.target.checked) }/><SubjectIcon src={ela_combo} /></>)}
            {type === "Sole" && (<><Radio value={"ela"} onClick={() => setPaths(['ela'])} checked={paths[0] === 'ela'} sx={{color: BasicColor.greenSoft,'&.Mui-checked': {color: BasicColor.greenSoft,},padding:'0px',paddingLeft: '9px', paddingRight: '9px'}}/><SubjectIcon src={ela_sole} /></>)}
            <SubjectTitle>ELA + SIGHT WORDS</SubjectTitle>
          </Subject>
          <Subject>
            {type === "Gold" && (<SubjectIcon src={science_gold} />)}
            {type === "Combo" && (<><Checkbox sx={{color: BasicColor.aqua,'&.Mui-checked': {color: BasicColor.aqua,},padding:'0px',paddingLeft: '9px', paddingRight: '9px'}} onChange={ (e) => handleCheckPath("science", e.target.checked) }/><SubjectIcon src={science_combo} /></>)}
            {type === "Sole" && (<><Radio value={"science"} onClick={() => setPaths(['science'])} checked={paths[0] === 'science'} sx={{color: BasicColor.greenSoft,'&.Mui-checked': {color: BasicColor.greenSoft,},padding:'0px',paddingLeft: '9px', paddingRight: '9px'}}/><SubjectIcon src={science_sole} /></>)}
            <SubjectTitle>SCIENCE</SubjectTitle>
          </Subject>
          <Subject>
            {type === "Gold" && (<SubjectIcon src={financial_gold} />)}
            {type === "Combo" && (<><Checkbox sx={{color: BasicColor.aqua,'&.Mui-checked': {color: BasicColor.aqua,},padding:'0px',paddingLeft: '9px', paddingRight: '9px'}} onChange={ (e) => handleCheckPath("financial", e.target.checked) }/><SubjectIcon src={financial_combo} /></>)}
            {type === "Sole" && (<><Radio value={"financial"} onClick={() => setPaths(['financial'])} checked={paths[0] === 'financial'} sx={{color: BasicColor.greenSoft,'&.Mui-checked': {color: BasicColor.greenSoft,},padding:'0px',paddingLeft: '9px', paddingRight: '9px'}}/><SubjectIcon src={financial_sole} /></>)}
            <SubjectTitle>FINANCIAL LITERACY</SubjectTitle>
          </Subject>
          <Subject>
            {type === "Gold" && (<SubjectIcon src={health_gold} />)}
            {type === "Combo" && (<><Checkbox sx={{color: BasicColor.aqua,'&.Mui-checked': {color: BasicColor.aqua,},padding:'0px',paddingLeft: '9px', paddingRight: '9px'}} onChange={ (e) => handleCheckPath("health", e.target.checked) }/><SubjectIcon src={health_combo} /></>)}
            {type === "Sole" && (<><Radio value={"health"} onClick={() => setPaths(['health'])} checked={paths[0] === 'health'} sx={{color: BasicColor.greenSoft,'&.Mui-checked': {color: BasicColor.greenSoft,},padding:'0px',paddingLeft: '9px', paddingRight: '9px'}} /><SubjectIcon src={health_sole} /></>)}
            <SubjectTitle>HEALTH & SAFETY</SubjectTitle>
          </Subject>
        </Subjects>
        <PriceContainer>
          <Price>{price}</Price>s
          <Plan>/{plan}</Plan>
        </PriceContainer>
        <Button
          bgColor={type === "Gold" ? BasicColor.yellow: type === "Combo" ? BasicColor.lightCyan : BasicColor.lightCyan}
          borderColor={type === "Gold" ? BasicColor.yellow: type === "Combo" ? BasicColor.aqua : BasicColor.greenSoft}
          color={BasicColor.black}
          value="Submit"
          onClick={()=>{onSubmit(paths);}}
          radius={20}
        />
      </Body>
    </Container>
  );
};
