import {FC, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux'
import {
  Container,
  Line,
  StepContent,
  Point
} from './Style'

type ParentPgStepperProps = {
  step: number;
}

export const ParentPgStepper: FC<ParentPgStepperProps> = ({step}) => {
  const history = useHistory();
  const dispatch = useDispatch()
  const [age, setAge] = useState('');

  useEffect(() => {
  }, []);

  return (
    <Container>
        <Point color={"#21B95C"} isCurrent={step === 1}> <b>1</b> </Point>
        <StepContent>Choose your plan</StepContent>
        <Line />
        <Point color={"#1771B9"} isCurrent={step === 2}> 2 </Point>
        <StepContent color={"#1771B9"}>Set up you account</StepContent>
        <Line />
        <Point color={"#22BAAF"} isCurrent={step === 3}> 3 </Point>
        <StepContent color={"#22BAAF"}>Ready</StepContent>
    </Container>
  );
};
