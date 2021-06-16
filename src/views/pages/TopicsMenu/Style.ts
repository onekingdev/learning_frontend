import styled from 'styled-components';
import background from '../../assets/colored-shapes-bg.svg';
import {ScreenSize} from '../../screenSize';

export const Wrapper = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;
export const TopicCardsContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 30px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;

  @media screen and (min-width: ${ScreenSize.tablet}) {
    grid-template-columns: repeat(4, 1fr);
    margin-top: 50px;
    grid-gap: 10px;
  }
  @media screen and (min-width: ${ScreenSize.desktop}) {
    width: 70%;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 50px;
    grid-gap: 0;
  }
`;
export const TitleContainer = styled.div`
  width: 200px;
  margin: 20px auto;

  @media screen and (min-width: ${ScreenSize.tablet}) {
    width: 400px;
  }
`;
