import {FC} from 'react';
import {Icon} from '../../atoms/Icon/Icon';
import lightning from '../../assets/lightning.svg';
import {Battery} from '../Battery/Battery';
import {IconSize} from '../../atoms/Icon/Size';
import styled from 'styled-components';
import {BatteryButton} from '../Battery/BatteryButton';

type EnergyProps = {
  charge: number;
};

const EnergyStyle = styled.div`
  width: 320px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Energy: FC<EnergyProps> = ({charge}) => {
  return (
    <>
      <EnergyStyle>
        <Icon image={lightning} size={IconSize.small} />
        <Battery charge={charge} />
        <BatteryButton value="GET!" onClick={() => console.log('Hella yes')} />
      </EnergyStyle>
    </>
  );
};
