import React from 'react';
import styled, {keyframes} from 'styled-components';
import socrates from '../assets/socrates.svg';

export const Spinner = () => {
  return <Icon src={socrates} />;
};

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Icon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 500px;
  height: 500px;
  margin-top: -250px;
  margin-left: -250px;
  z-index: 1;
  animation: ${rotate} 6s linear infinite;
`;
