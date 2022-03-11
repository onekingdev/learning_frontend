import {FC} from 'react';
import styled from 'styled-components';
import ribbon from 'views/assets/ribbon.svg';
import {ScreenSize} from 'constants/screenSize';

export const PageTitle: FC<{title: string}> = ({title}) => {
  return (
    <CardTitle>
      <h1>{title}</h1>
    </CardTitle>
  );
};

const CardTitle = styled.div`
  display: flex;
  justify-content: center;
  background-image: url(${ribbon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  padding: 15px;
  margin-top: 3vh;
  h1 {
    font-family: 'Quicksand', sans-serif;
    margin: 0;
    // font-size: 40px;
    font-style: normal;
    letter-spacing: 0.25px;
    text-align: center;
    // padding:inherit;
  }

  @media screen and (max-width: ${ScreenSize.phone}) {
    h1 {
      font-size: 30px;
    }
    width: 100%;
    // padding: 10px;
    margin: 0;
    padding: 10px 0 10px 0;
    background-image: none;
    background-color: orange;
  }
`;
