import { FC, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { SKIN_PICKER } from 'constants/avatar';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const DropDownContainer = styled.div`
position: absolute;
right: 0;
border: solid gray 1px;
display: flex;
padding: 5px;
align-items: center;
border-radius: 30px;
z-index: 1000;
box-shadow: inset 0 0 3px 3px #d2d2d2;

.dropdown-list {
  flex-direction: column
}
}
`;
const ColorCircle = styled.div`
width: 30px;
height: 30px;
border-radius: 100%;
margin: 5px;

&:hover {
  box-shadow: 0px 1px 10px 0px #FB8500;
  cursor: pointer;
}
`

interface ColorPickerProp {
  select: (value: number) => void
}

export const ColorPickerDropdown: FC<ColorPickerProp> = ({ select }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  const [selectedOption, setSelectedOption] = useState(0);

  const onOptionClicked = (value: any) => () => {
    setSelectedOption(value);
    select(value)
    setIsOpen(false);
  };

  return (
    <DropDownContainer>
      <div className='dropdown-list'>
        <div style={{display: 'flex'}}>
          <ArrowDropDownIcon onClick={toggling} sx={isOpen ? {} : {display: 'none'}} color="primary" />
        </div>
        <ColorCircle style={isOpen ? { display: 'none' } : { background: SKIN_PICKER[selectedOption].hex }} onClick={toggling}></ColorCircle>
        {
          isOpen && (
            SKIN_PICKER.map(option => (
              <ColorCircle style={{ background: option.hex }} onClick={onOptionClicked(option.value)} key={Math.random()}></ColorCircle>
            ))
          )
        }

      </div>
      {
        isOpen ? null : <ArrowDropDownIcon onClick={toggling} color="primary" />
      }
    </DropDownContainer>
  );
}
