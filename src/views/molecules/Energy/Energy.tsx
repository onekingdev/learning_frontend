import {FC} from 'react';
import {Icon} from '../../atoms/Icon/Icon';
import lightning from '../../assets/lightning.svg';
import {Battery} from '../../atoms/Battery/Battery';
import {IconSize} from '../../atoms/Icon/Size';
import styled from 'styled-components';
import {BatteryButton} from '../../atoms/Battery/BatteryButton';

type EnergyProps = {};

const EnergyStyle = styled.div`
  width: 320px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Energy: FC<EnergyProps> = () => {
  return (
    <>
      <EnergyStyle>
        <Icon image={lightning} size={IconSize.small} />
        <Battery />
        <BatteryButton value="GET!" onClick={() => console.log('Hella yes')} />
      </EnergyStyle>
    </>
  );
};
