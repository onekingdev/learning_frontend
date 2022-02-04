import React from 'react';
import styled from 'styled-components';

type VideoProps = {
  source: string;
};

export const VideoQuestion = ({source}: VideoProps) => {
  return (
    <>
      <VideoStyles src={source} />
    </>
  );
};

const VideoStyles = styled.iframe`
  width: 100%;
  height: 100%;
  border-radius: 40px;
`;
