import {FC} from 'react';
import styled from 'styled-components';
import {BasicColor} from '../Color';

type AvatarSegmentProps = {
  avatar: string;
};

const AvatarSegmentStyle = styled.div`
  width: 50px;
  height: 52px;
  padding: 5px;
  display: flex;
  align-content: center;
  justify-content: center;
  border-radius: 100px;
  border: 1px solid ${BasicColor.black};
`;

export const AvatarSegment: FC<AvatarSegmentProps> = ({avatar}) => {
  return (
    <>
      <AvatarSegmentStyle>
        <img src={avatar} alt="avatar" />
      </AvatarSegmentStyle>
    </>
  );
};
