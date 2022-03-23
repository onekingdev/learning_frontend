import styled from 'styled-components';

type VideoProps = {
  source: string;
};

export const VideoQuestion = ({source}: VideoProps) => {
  return (
    <>
      {/* <iframe href="//www.youtube.com/watch?v=xbBr5b3-wSQ" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"width="400" height="230" src="https://youtube.com/embed/XgT618-arN8"></iframe> */}
      <VideoStyles src={source} allowFullScreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"/>
      {/* <iframe src={source}/> */}
    </>
  );
};

const VideoStyles = styled.iframe`
  width: 100%;
  height: 100%;
  border-radius: 40px;
`;
