import {FC} from 'react';
import styled from 'styled-components';
import {Caption} from '../atoms/Caption';

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
          <Caption value={o.name} isDark={true} />
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
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
  ${Dropdown}:hover & {
    display: block;
  }
`;

// .dropdown {
//   position: relative;
//   display: inline-block;
// }

// .dropdown-content {
//   display: none;
//   position: absolute;
//   background-color: #f9f9f9;
//   min-width: 160px;
//   box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
//   padding: 12px 16px;
//   z-index: 1;
// }

// .dropdown:hover .dropdown-content {
//   display: block;
// }
