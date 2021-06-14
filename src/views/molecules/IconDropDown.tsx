import {FC} from 'react';
import styled from 'styled-components';
import {Body} from '../atoms/Text/Body';
import {BasicColor} from '../Color';

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
      <img src={icon} alt="" />
      <DropdownContent>
        {options.map(o => (
          <Body isDark={true}>{o.name}</Body>
        ))}
      </DropdownContent>
    </Dropdown>
  );
};

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: ${BasicColor.white20};
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px shadeColor(${BasicColor.white20}, 20);
  padding: 12px 16px;
  z-index: 1;
  ${Dropdown}:hover & {
    display: block;
  }
`;
