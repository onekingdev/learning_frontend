import {FC, useState} from 'react';
import styled from 'styled-components';
import {Modal} from '../atoms/Modal';
import {Typography} from '../atoms/Text/typography';
import {BasicColor} from '../Color';
import {VideoQuestion} from '../molecules/VideoQuestions';
import {ScreenSize} from '../screenSize';

type VideoModalProps = {
  onClick: () => void;
};
export const VideoModalAssistor: FC<VideoModalProps> = ({onClick}) => {
  const closeModal = () => {
    console.log('Hella yes');
  };
  return (
    <>
      <Modal>
        <ModalContainer>
          <ModalStyles>
            <CloseButton onClick={onClick}>X</CloseButton>
            <VideoQuestion source="https://firebasestorage.googleapis.com/v0/b/trailers-e06ca.appspot.com/o/Stardew%20Valley.mp4?alt=media&token=072289ae-b88f-4070-be0b-75457ff5ef4d" />
          </ModalStyles>
        </ModalContainer>
      </Modal>
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
    width: 720px;
    height: 480px;
  }
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
