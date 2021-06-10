import {FC} from 'react';
import styled from 'styled-components';
import {Icon} from '../atoms/Icon/Icon';
import {IconSize} from '../atoms/Icon/Size';

import {UserInfo} from '../atoms/Text/UserInfo';
import {BasicColor} from '../Color';
import {ScreenSize} from '../screenSize';

type Option = {
  name: string;
  url?: string;
  action?: () => void;
};

type IconDropDownProps = {
  icon: string;
  options: Array<Option>;
};

export const IconDropDown: FC<IconDropDownProps> = ({
  icon,
  options = [{name: 'test'}],
}) => {
  return (
    <Dropdown>
      <DropdownImage src={icon} />
      <DropdownContent>
        {options.map((o, i) => (
          <DropDownText key={i} isDark={true}>
            {o.name}
          </DropDownText>
        ))}
      </DropdownContent>
    </Dropdown>
  );
};

const Dropdown = styled.div`
  width: 100%;
  height: 50px;
  position: relative;
`;
const DropdownImage = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
  z-index: 2;

  @media screen and (min-width: ${ScreenSize.tablet}) {
    width: 60px;
  }
`;
const DropdownContent = styled.div`
  width: 50px;
  display: none;
  position: absolute;
  background-color: ${BasicColor.white};
  padding: 3px;
  z-index: 1;
  bottom: 60px;
  font-size: 12px;
  border: 2px solid ${BasicColor.gray60};
  border-radius: 10px 10px 0 0;
  ${Dropdown}:hover & {
    display: flex;
    flex-direction: column;
  }
  @media screen and (min-width: ${ScreenSize.tablet}) {
    bottom: -100px;
    padding-top: 25px;
    border-radius: 10px;
    ${Dropdown}:hover & {
      display: flex;
      flex-direction: column;
    }
  }
`;
const DropDownText = styled(UserInfo)`
  font-size: 10px;
  font-weight: bold;
  margin: 3px 0;

  @media screen and (min-width: ${ScreenSize.tablet}) {
    cursor: pointer;
    &:hover {
      color: ${BasicColor.green};
    }
  }
`;
