import {FC, useEffect, ReactChildren, ReactChild, useState} from 'react';
import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux'
import Button from '@mui/material/Button';
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
 } from './Style'

type PackagePanelProps = {
  type: string;
  plan: string;
  price: number;
  onSubmit: any;
};
export const PackagePanel: FC<PackagePanelProps> = ({type, plan, price, onSubmit}) => {
  const history = useHistory();
  const dispatch = useDispatch()
  const classes = useStyles();
  const [paths, setPaths] = useState([]);

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
    <Container>
      <Header color={type}>
        <Avatar src={avatar} />
        <b>{type}{" "}Package</b>
      </Header>
      <Body>
        <Subjects>
          <Subject>
            {type === "Gold" && (<SubjectIcon src={math_gold} />)}
            {type === "Combo" && (<><Checkbox sx={{color: '#22BAAF','&.Mui-checked': {color: '#22BAAF',},padding:'0px',paddingLeft: '9px', paddingRight: '9px'}} onChange={ (e) => handleCheckPath("math", e.target.checked) }/><SubjectIcon src={math_combo} /></>)}
            {type === "Sole" && (<><Checkbox sx={{color: '#26B824','&.Mui-checked': {color: '#26B824',},padding:'0px',paddingLeft: '9px', paddingRight: '9px'}} onChange={ (e) => handleCheckPath("math", e.target.checked) }/><SubjectIcon src={math_sole} /></>)}
            <SubjectTitle>MATH</SubjectTitle>
          </Subject>
          <Subject>
            {type === "Gold" && (<SubjectIcon src={ela_gold} />)}
            {type === "Combo" && (<><Checkbox sx={{color: '#22BAAF','&.Mui-checked': {color: '#22BAAF',},padding:'0px',paddingLeft: '9px', paddingRight: '9px'}} onChange={ (e) => handleCheckPath("ela", e.target.checked) }/><SubjectIcon src={ela_combo} /></>)}
            {type === "Sole" && (<><Checkbox sx={{color: '#26B824','&.Mui-checked': {color: '#26B824',},padding:'0px',paddingLeft: '9px', paddingRight: '9px'}} onChange={ (e) => handleCheckPath("ela", e.target.checked) }/><SubjectIcon src={ela_sole} /></>)}
            <SubjectTitle>ELA + SIGHT WORDS</SubjectTitle>
          </Subject>
          <Subject>
            {type === "Gold" && (<SubjectIcon src={science_gold} />)}
            {type === "Combo" && (<><Checkbox sx={{color: '#22BAAF','&.Mui-checked': {color: '#22BAAF',},padding:'0px',paddingLeft: '9px', paddingRight: '9px'}} onChange={ (e) => handleCheckPath("science", e.target.checked) }/><SubjectIcon src={science_combo} /></>)}
            {type === "Sole" && (<><Checkbox sx={{color: '#26B824','&.Mui-checked': {color: '#26B824',},padding:'0px',paddingLeft: '9px', paddingRight: '9px'}} onChange={ (e) => handleCheckPath("science", e.target.checked) }/><SubjectIcon src={science_sole} /></>)}
            <SubjectTitle>SCIENCE</SubjectTitle>
          </Subject>
          <Subject>
            {type === "Gold" && (<SubjectIcon src={financial_gold} />)}
            {type === "Combo" && (<><Checkbox sx={{color: '#22BAAF','&.Mui-checked': {color: '#22BAAF',},padding:'0px',paddingLeft: '9px', paddingRight: '9px'}} onChange={ (e) => handleCheckPath("financial", e.target.checked) }/><SubjectIcon src={financial_combo} /></>)}
            {type === "Sole" && (<><Checkbox sx={{color: '#26B824','&.Mui-checked': {color: '#26B824',},padding:'0px',paddingLeft: '9px', paddingRight: '9px'}} onChange={ (e) => handleCheckPath("financial", e.target.checked) }/><SubjectIcon src={financial_sole} /></>)}
            <SubjectTitle>FINANCIAL LITERACY</SubjectTitle>
          </Subject>
          <Subject>
            {type === "Gold" && (<SubjectIcon src={health_gold} />)}
            {type === "Combo" && (<><Checkbox sx={{color: '#22BAAF','&.Mui-checked': {color: '#22BAAF',},padding:'0px',paddingLeft: '9px', paddingRight: '9px'}} onChange={ (e) => handleCheckPath("health", e.target.checked) }/><SubjectIcon src={health_combo} /></>)}
            {type === "Sole" && (<><Checkbox sx={{color: '#26B824','&.Mui-checked': {color: '#26B824',},padding:'0px',paddingLeft: '9px', paddingRight: '9px'}} onChange={ (e) => handleCheckPath("health", e.target.checked) }/><SubjectIcon src={health_sole} /></>)}
            <SubjectTitle>HEALTH & SAFETY</SubjectTitle>
          </Subject>
        </Subjects>
        <PriceContainer>
          <Price>{price}</Price>
          <Plan>/{plan}</Plan>
        </PriceContainer>
        <Button
          variant="contained"
          className={type === "Gold" ? classes.button_gold : type === "Combo" ? classes.button_combo : classes.button_sole}
          color="success"
          onClick={()=>{onSubmit(paths);}}
        >
          Submit
        </Button>
      </Body>
    </Container>
  );
};
