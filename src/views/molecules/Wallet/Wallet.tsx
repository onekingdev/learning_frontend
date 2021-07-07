import {FC, useState} from 'react';
import {Icon} from '../../atoms/Icon/Icon';
import {Balance} from '../../atoms/WalletBalance';
import {BasicColor} from '../../Color';
import coins from '../../assets/coins.svg';
import styled from 'styled-components';
import {IconSize} from '../../atoms/Icon/Size';
import {ScreenSize} from '../../screenSize';
import {UserInfo} from '../../atoms/Text/UserInfo';
import dropDownArrow from '../../assets/drop-down-arrow.svg';

type WalletProps = {
  balance: number;
};

export const Wallet: FC<WalletProps> = ({balance}) => {
  const [isDeploy, getIsDeploy] = useState(Boolean);
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
    getIsDeploy(!isDeploy);
  };
  return (
    <>
      <WalletContainer>
        <WalletStyle>
          <IconContainer>
            <Icon image={coins} size={IconSize.medium} />
          </IconContainer>
          <Balance>{balance}</Balance>
          <DropdownIcon src={dropDownArrow} onClick={deployDropdown} />
        </WalletStyle>
        {isDeploy ? (
          <WalletDropdownContainer>
            <WalletDropdown>
              {userTransactions.map((item, i) => (
                <WalletTransaction key={i}>
                  <ExtendUserInfo
                    color={item.type ? BasicColor.green : BasicColor.red}
                  >
                    {item.description}
                  </ExtendUserInfo>
                  <ExtendUserInfo
                    color={item.type ? BasicColor.green : BasicColor.red}
                  >
                    {item.amount}
                  </ExtendUserInfo>
                </WalletTransaction>
              ))}
            </WalletDropdown>
          </WalletDropdownContainer>
        ) : null}
      </WalletContainer>
    </>
  );
};
type ExtendUserInfoProps = {
  color: string;
};
const WalletContainer = styled.div`
  @media screen and (min-width: ${ScreenSize.tablet}) {
    display: none;
  }
  @media screen and (min-width: ${ScreenSize.desktop}) {
    width: 135px;
    height: 36px;
    display: initial;
  }
`;
const WalletStyle = styled.div`
  @media screen and (min-width: ${ScreenSize.desktop}) {
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
const WalletDropdownContainer = styled.div`
  width: 135px;
  height: 200px;
  position: relative;
`;
const WalletDropdown = styled.div`
  width: 130px;
  height:200px;
  border-radius 0 0 10px 10px;
  border: 2px solid ${BasicColor.gray60};
  border-top: none;
  background-color: ${BasicColor.white};
  position: absolute;
  top: -10px;
  z-index: 1;
  right: -1px;
  padding-top: 15px;
  display: flex;
  flex-direction: column;
   
`;
const WalletTransaction = styled.div`
  width: 90%;
  margin: 2px auto;
  display: flex;
  justify-content: space-between;
`;
const DropdownIcon = styled.img`
  width: 15px;
  margin: 5px;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;
const ExtendUserInfo = styled(UserInfo)<ExtendUserInfoProps>`
  color: ${p => p.color};
  font-weight: 600;
`;
const IconContainer = styled.div`
  position: absolute;
  left: -6px;
`;
