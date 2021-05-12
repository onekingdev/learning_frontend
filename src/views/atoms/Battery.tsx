import {FC} from 'react';
import styled from 'styled-components';
import {BasicColor} from '../Color';

type BatteryProps = {
  charge?: boolean;
};

const ChargeItem = styled.div`
  width: 15px;
  height: 34px;
`;

const BatteryStyles = styled.div`
  width: 163px;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #f0f0f0;
  background: -webkit-linear-gradient(top, #f0f0f0, #d2d2d2);
  background: -moz-linear-gradient(top, #f0f0f0, #d2d2d2);
  background: linear-gradient(to bottom, #f0f0f0, #d2d2d2);
  padding: 0 5px;
  border-radius: 5px;
`;
const BatteryContainer = styled.div`
  width: 180px;
  height: 60px;
  display: flex;
  justify-items: left;
  align-items: center;
`;

const BatteryPole = styled.div`
  width: 16px;
  height: 20px;
  background-color: #505050;
  border-bottom: 7px solid #3c3c3c;
`;
export const Battery: FC<BatteryProps> = ({charge}) => {
  const chargeArray = [false, false, false, false, false, false, false];

  return (
    <>
      <BatteryContainer>
        <BatteryStyles>
          {chargeArray.map(item => (
            <ChargeItem
              style={{
                backgroundColor: item ? `${BasicColor.greenSoft}` : '#5E6366',
                borderBottom: `10px solid ${item ? '#148712' : '#3F3F3F'}`,
              }}
            />
          ))}
        </BatteryStyles>
        <BatteryPole />
      </BatteryContainer>
    </>
  );
};
