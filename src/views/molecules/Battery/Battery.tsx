import {FC} from 'react';
import styled from 'styled-components';
import {BasicColor} from '../../Color';

type BatteryProps = {
  charge: number;
};

export const Battery: FC<BatteryProps> = ({charge}) => {
  const chargeArray = [false, false, false, false, false, false, false, false];
  const IncreaseCharge = () => {
    for (let i = 0; i < charge; i++) {
      chargeArray[i] = true;
    }
  };
  IncreaseCharge();
  return (
    <>
      <BatteryContainer>
        <BatteryStyles>
          {chargeArray.map((item, i) => (
            <ChargeItem
              color={item ? BasicColor.greenSoft : BasicColor.gray80}
              borderColor={item ? BasicColor.greenShadow : BasicColor.gray90}
              key={i}
            />
          ))}
        </BatteryStyles>
        <BatteryPole />
      </BatteryContainer>
    </>
  );
};

type ChargeItemProps = {
  color: BasicColor.greenSoft | BasicColor.gray80;
  borderColor: BasicColor.greenShadow | BasicColor.gray90;
};

const ChargeItem = styled.div<ChargeItemProps>`
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
