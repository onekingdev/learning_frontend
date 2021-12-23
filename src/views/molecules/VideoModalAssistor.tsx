import {FC, useState} from 'react';
import styled from 'styled-components';
import {Modal} from '../atoms/Modal';
import {Typography} from '../atoms/Text/typography';
import {BasicColor} from '../Color';
import {ScreenSize} from '../screenSize';

export const VideoModalAssistor: FC = () => {
  const [close, setClose] = useState(true);
  const closeModal = () => {
    setClose(!close);
  };
  return (
    <>
      {close ? (
        <Modal>
          <ModalContainer>
            <ModalStyles>
              <CloseButton onClick={closeModal}>X</CloseButton>
              <VideoAssistor
                src="https://www.youtube.com/watch?v=5qap5aO4i9A"
                autoPlay
                controls
              />
            </ModalStyles>
          </ModalContainer>
        </Modal>
      ) : null}
    </>
  );
};

const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 10;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  background-color: ${BasicColor.background40};
`;
const ModalStyles = styled.div`
  width: 80%;
  height: 270px;
  margin: 0 auto;
  background-color: ${BasicColor.white};
  border-radius: 40px;
  @media screen and (min-width: ${ScreenSize.tablet}) {
    height: 400px;
  }
  @media screen and (min-width: ${ScreenSize.desktop}) {
    width: 500px;
  }
`;
const VideoAssistor = styled.video`
  width: 100%;
  border-radius: 40px;
  height: 100%;
`;

const CloseButton = styled.div`
  font-size: 30px;
  font-weight: bold;
  font-family: ${Typography.primary};
  position: absolute;
  right: 5px;
  top: 0;
  border-radius: 10px;
  letter-spacing: 0.25px;
  cursor: pointer;
  @media screen and (min-width: ${ScreenSize.tablet}){
    right: 25px;
    font-size: 35px;
`;
