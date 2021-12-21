import React from 'react';

type VideoProps = {
  source: string;
};

export const VideoQuestion = ({source}: VideoProps) => {
  return (
    <div>
      <iframe src={source} height={'480px'} width={'720px'} />
    </div>
  );
};
