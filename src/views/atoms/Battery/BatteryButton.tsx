import {FC} from 'react';
import styled from 'styled-components';
import {BasicColor} from '../../Color';

type BatteryButtonProps = {
  value: string;
  onClick: () => void;
};

const BatteryButtonStyle = styled.button`
  width: 86px;
  height: 40px;
  background-color: #26b824;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  font-size: 16px;
  color: ${BasicColor.white};
  cursor: pointer;
`;
export const BatteryButton: FC<BatteryButtonProps> = ({value, onClick}) => {
  return (
    <>
      <BatteryButtonStyle onClick={onClick}>{value}</BatteryButtonStyle>
    </>
  );
};
