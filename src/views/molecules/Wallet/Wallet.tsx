import {FC} from 'react';
import {Icon} from '../../atoms/Icon/Icon';
import {Balance} from '../../atoms/WalletBalance';
import {BasicColor} from '../../Color';
import coins from '../../assets/coins.svg';
import styled from 'styled-components';
import {IconSize} from '../../atoms/Icon/Size';

const WalletStyle = styled.div`
  width: 130px;
  height: 36px;
  border-radius: 0 13px 13px 0;
  border: 2px solid #979797;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: end;
  border-left: none;
  background-color: ${BasicColor.white};
`;

type WalletProps = {
  balance: number;
};

export const Wallet: FC<WalletProps> = ({balance}) => {
  return (
    <>
      <WalletStyle>
        <Icon image={coins} size={IconSize.small} />
        <Balance>${balance}</Balance>
      </WalletStyle>
    </>
  );
};
