import { FC }            from 'react';
import { Icon }          from 'views/atoms/Icon/Icon';
import lightning         from 'views/assets/lightning.svg';
import { Battery }       from 'views/molecules/Battery/Battery';
import { IconSize }      from 'views/atoms/Icon/Size';
import styled            from 'styled-components';
import { BatteryButton } from 'views/molecules/Battery/BatteryButton';

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
        <BatteryButton value={charge*10 + ' % '} onClick={() => console.log('Hella yes')} />
      </EnergyStyle>
    </>
  );
};
