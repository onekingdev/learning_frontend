import {FC} from 'react';
import styled from 'styled-components';
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
  onIconClick?: () => void;
  options: Array<Option>;
};

export const IconDropDown: FC<IconDropDownProps> = ({
  icon,
  options,
  onIconClick,
}) => {
  return (
    <Dropdown>
      <DropdownButton
        type="checkbox"
        name="Dropdown-button"
        id="Dropdown-button"
        onClick={onIconClick}
      />
      <label htmlFor="Dropdown-button">
        <DropdownImage src={icon} />
      </label>
      <DropdownContent>
        {options.map((o, i) => (
          <DropDownText key={i} isDark={true} onClick={o.action}>
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
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: 55px;
  font-size: 12px;
  border: 2px solid ${BasicColor.gray60};
  border-radius: 10px 10px 0 0;

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
const DropdownButton = styled.input`
  width: 50px;
  height: 50px;
  position: absolute;
  z-index: 6;
  opacity: 0;
  left: 0;
  right: 0;
  margin: 0 auto;

  &:checked ~ ${DropdownContent} {
    display: flex;
    flex-direction: column;
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
