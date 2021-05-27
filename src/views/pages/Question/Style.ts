import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
`;

export const BlackBoard = styled.div`
  background-color: #13705f;
  border: 7px solid #5c2100;
  border-radius: 16px;
  padding: 1rem;
  padding-top: 2rem;
`;

export const Options = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export const Option = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const AnswerWrapper = styled.div`
  background-color: #3f3f3f;
  border-radius: 16px;
  padding: 1rem;
  padding-top: 2rem;
`;

export const Container = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 15px;
  padding: 11px;
`;

export const Answers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  padding: 2rem;
`;

export const Submit = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 0.6rem;
`;
