import {FC} from 'react';
import {Icon} from '../../atoms/Icon';
import {Balance} from '../../atoms/WalletBalance';
import coins from '../../../images/symbols/coins.png';
import styled from 'styled-components';

const WalletStyle = styled.div`
  width: 130px;
  height: 36px;
  border-radius: 13px;
  border: 2px solid #979797;
  position: relative;
`;

type WalletProps = {
  money?: number;
};

export const Wallet: FC<WalletProps> = ({money}) => {
  return (
    <>
      <WalletStyle>
        <Icon image={coins} isMedium={false} isWallet={true} />
        <Balance>${money}</Balance>
      </WalletStyle>
    </>
  );
};
