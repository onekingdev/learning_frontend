import styled from 'styled-components';
import {ScreenSize} from '../../screenSize';
import background from '../../assets/colored-shapes-bg.svg';
import {BasicColor} from 'views/Color';

export const Wrapper = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: ${ScreenSize.tablet}) {
    height: 100vh;
  }
  @media (min-width: ${ScreenSize.desktop}) {
    height: 100vh;
  }
`;

export const ProgressWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 120px;
  @media (min-width: ${ScreenSize.desktop}) {
    margin-top: 1rem;
  }
`;

export const Options = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media (min-width: ${ScreenSize.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: ${ScreenSize.desktop}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const OptionWrapper = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const Option = styled.img`
  @media (min-width: ${ScreenSize.tablet}) {
    width: 8rem;
  }
`;

export const AnswerWrapper = styled.div`
  background-color: #3f3f3f;
  border-radius: 16px;
  padding: 1rem;
  margin: 1rem;
  padding-top: 2rem;
  display: grid;
  grid-template-rows: auto auto auto;
  @media (min-width: ${ScreenSize.tablet}) {
    margin: 1rem;
    margin-top: 5rem;
    margin-bottom: 7rem;
  }
  @media screen and (min-width: ${ScreenSize.desktop}) {
    margin: 1rem;
  }
`;

export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding-bottom: 70px;
  padding-top: 20px;
  text-align: center;

  @media (min-width: ${ScreenSize.tablet}) {
    max-width: 1366px;
  }
`;

export const Answers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  margin-top: 1rem;
  @media (min-width: ${ScreenSize.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const AnswerForm = styled.form`
  grid-column: 1/3;
  width: 100%;
  margin: 0 auto;
`;
export const Submit = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 0;
  padding-top: 1rem;
`;

export const CongratsDgContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 50vw;
  height: 80vh;
  justify-content: space-evenly;

  .background {
    position: absolute;
    inset: -5px;
  }

  .icons-container {
    width: 500px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    z-index: 2;
  }

  img {
    z-index: 1;
  }
  .icons {
    width: 133px;
    height: 84px;

    img {
      z-index: 3;
      display: block;
      margin: 0 auto; /* the fastest way to center anything */
    }

    p {
      text-align: center;
      font-family: Montserrat;
      font-size: 22px;
      font-style: normal;
      font-weight: 700;
      line-height: 28px;
      letter-spacing: 0em;
    }
  }

  h1 {
    font-family: Montserrat;
    font-size: 72px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: -1.5px;
    text-align: center;
    z-index: 1;
    margin: 0
  }
  h5 {
    margin-top: 0;
    font-family: Montserrat;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: -1.5px;
    text-align: center;
    z-index: 1;
    color: ${BasicColor.green}
  }

  button {
    background: ${BasicColor.shadeBrown};
    border: 0;
    border-radius: 20px;
    color: white;
    width: 215px;
    height: 45px;
    z-index: 1;
    font-size: 18px;

    &:hover {
      pointer: cursor;
      box-shadow: 0 1px 1rem -3px orange;
      cursor: pointer;
    }
  }
`;
