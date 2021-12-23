import React from 'react';
import styled from 'styled-components';

type VideoProps = {
  source: string;
};

export const VideoQuestion = ({source}: VideoProps) => {
  return (
    <div>
      <VideoStyles src={source} />
    </div>
  );
};

const VideoStyles = styled.iframe`
  width: 720px;
  height: 480px;
  border-radius: 40px;
`;
