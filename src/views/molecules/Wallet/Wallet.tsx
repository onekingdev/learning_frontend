import { FC, useState } from 'react';
import { Icon } from '../../atoms/Icon/Icon';
import { Balance } from '../../atoms/WalletBalance';
import { BasicColor } from '../../Color';
import coins from '../../assets/coins.svg';
import styled from 'styled-components';
import { IconSize } from '../../atoms/Icon/Size';
import { ScreenSize } from '../../screenSize';
import { UserInfo } from '../../atoms/Text/UserInfo';
import { LSDialog } from '../Setting/LSDialog';
import { WalletTxHistory } from './WalletTxs'

type WalletProps = {
  balance: number;
};

export const Wallet: FC<WalletProps> = ({ balance }) => {
  const [isDeploy, setIsDeploy] = useState(false);
  const userTransactions = [
    {
      description: 'Block 1',
      amount: '+10',
      type: true,
    },
    {
      description: 'Play Game',
      amount: '-100',
      type: false,
    },
    {
      description: 'Block 1',
      amount: '+10',
      type: true,
    },
    {
      description: 'Play Game',
      amount: '-100',
      type: false,
    },
    {
      description: 'Block 1',
      amount: '+10',
      type: true,
    },
    {
      description: 'Play Game',
      amount: '-100',
      type: false,
    },
    {
      description: 'Block 1',
      amount: '+10',
      type: true,
    },
    {
      description: 'Play Game',
      amount: '-100',
      type: false,
    },
    {
      description: 'Block 1',
      amount: '+10',
      type: true,
    },
    {
      description: 'Play Game',
      amount: '-100',
      type: false,
    },
  ];

  const deployDropdown = () => {
    setIsDeploy(!isDeploy);
  };
  return (
    <>
      <WalletContainer>
        <WalletStyle>
          <IconContainer>
            <Icon image={coins} size={IconSize.medium} onClick={deployDropdown} />
          </IconContainer>
          <Balance>{balance}</Balance>
          {/* <DropdownIcon src={dropDownArrow} /> */}
        </WalletStyle>
        {isDeploy ? (
          <LSDialog isOpen={isDeploy} open={deployDropdown} dialogContent={<WalletTxHistory />} fullWidth='true' title='Transactions on this wallet' />
          // <WalletDropdownContainer>
          //   <WalletDropdown>
          //     {userTransactions.map((item, i) => (
          //       <WalletTransaction key={i}>
          //         <ExtendUserInfo
          //           color={item.type ? BasicColor.green : BasicColor.red}
          //         >
          //           {item.description}
          //         </ExtendUserInfo>
          //         <ExtendUserInfo
          //           color={item.type ? BasicColor.green : BasicColor.red}
          //         >
          //           {item.amount}
          //         </ExtendUserInfo>
          //       </WalletTransaction>
          //     ))}
          //   </WalletDropdown>
          // </WalletDropdownContainer>
        ) : null}
      </WalletContainer>
    </>
  );
};
type ExtendUserInfoProps = {
  color: string;
};
const WalletContainer = styled.div`
  position: relative;
  @media screen and (min-width: ${ScreenSize.desktop}) {
    display: none;
  }
  @media screen and (min-width: ${ScreenSize.desktop}) {
    width: 135px;
    height: 36px;
    display: initial;
  }
`;
const WalletStyle = styled.div`
@media screen and (max-width: ${ScreenSize.desktop}) {
  display: none;
}
  @media screen and (min-width: ${ScreenSize.tablet}) {
    width: 100%;
    height: 36px;
    border-radius: 0 13px 13px 0;
    border: 2px solid ${BasicColor.gray60};
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    z-index: 2;
    background-color: ${BasicColor.white};
  }
`;
const IconContainer = styled.div`
  position: absolute;
  left: -6px;
`;
