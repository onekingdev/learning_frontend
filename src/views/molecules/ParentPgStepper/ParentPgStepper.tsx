import {FC, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux'
import Avatar from '@mui/material/Avatar';
import logoTitle from '../../assets/logo-learn.svg'
import {
  Container,
  Line,
  StepContent,
  Point
} from './Style'

export const ParentPgStepper: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch()
  const [age, setAge] = useState('');

  useEffect(() => {
  }, []);

  return (
    <Container>
        <Point color={"#21B95C"} isCurrent={true}> <b>1</b> </Point>
        <StepContent>Choose your plan</StepContent>
        <Line />
        <Point color={"#1771B9"} isCurrent={false}> 2 </Point>
        <StepContent color={"#1771B9"}>Set up you account</StepContent>
        <Line />
        <Point color={"#22BAAF"} isCurrent={false}> 3 </Point>
        <StepContent color={"#22BAAF"}>Ready</StepContent>
    </Container>
  );
};
