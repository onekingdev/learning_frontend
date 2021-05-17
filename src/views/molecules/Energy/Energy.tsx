import {FC} from 'react';
import {Icon} from '../../atoms/Icon/Icon';
import lightning from '../../assets/lightning.svg';
import {Battery} from '../../atoms/Battery/Battery';
import {IconSize} from '../../atoms/Icon/Size';
import styled from 'styled-components';
import {BatteryButton} from '../../atoms/Battery/BatteryButton';

type EnergyProps = {
  charge?: boolean;
};

const EnergyStyle = styled.div`
  width: 340px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Energy: FC<EnergyProps> = ({charge}) => {
  return (
    <>
      <EnergyStyle>
        <Icon image={lightning} size={IconSize.medium} />
        <Battery />
        <BatteryButton value="GET!" onClick={() => console.log('Hella yes')} />
      </EnergyStyle>
    </>
  );
};
