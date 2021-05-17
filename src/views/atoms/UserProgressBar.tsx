import {FC} from 'react';
import styled from 'styled-components';
import {BasicColor} from '../Color';

type UserProgressBarProps = {
  progress: number;
};

const UserProgressBarStyle = styled.div`
  width: 186px;
  height: 12px;
  background-color: ${BasicColor.gray80};
  border-radius: 40px;
`;

const Progress = styled.div`
  width: 100px;
  height: 12px;
  background-color: ${BasicColor.greenSoft};
  border-radius: 40px;
`;
export const UserProgressBar: FC<UserProgressBarProps> = ({progress}) => {
  return (
    <>
      <UserProgressBarStyle>
        <Progress />
      </UserProgressBarStyle>
    </>
  );
};
