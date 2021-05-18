import {FC} from 'react';
import styled from 'styled-components';
import {BasicColor} from '../../Color';

type BatteryProps = {};

const ChargeItem = styled.div<{
  color: BasicColor.greenSoft | BasicColor.gray80;
  borderColor: '#148712' | '#3F3F3F';
}>`
  width: 15px;
  height: 34px;
  background-color: ${p => p.color};
  border-bottom: 10px solid ${p => p.borderColor};
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
export const Battery: FC<BatteryProps> = () => {
  const chargeArray = [
    {
      id: 1,
      charge: false,
    },
    {
      id: 2,
      charge: false,
    },
    {
      id: 3,
      charge: false,
    },
    {
      id: 4,
      charge: false,
    },
    {
      id: 5,
      charge: false,
    },
    {
      id: 6,
      charge: false,
    },
    {
      id: 7,
      charge: false,
    },
    {
      id: 8,
      charge: false,
    },
  ];

  return (
    <>
      <BatteryContainer>
        <BatteryStyles>
          {chargeArray.map(item => (
            <ChargeItem
              color={item.charge ? BasicColor.greenSoft : BasicColor.gray80}
              borderColor={item.charge ? '#148712' : '#3F3F3F'}
              key={item.id}
            />
          ))}
        </BatteryStyles>
        <BatteryPole />
      </BatteryContainer>
    </>
  );
};
