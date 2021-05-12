import {FC, useState, useEffect} from 'react';
import styled from 'styled-components';
import {BasicColor} from '../Color';

type TextInputProps = {
  label: string;
  validate?: () => boolean;
  errMsg?: string;
};

export const TextInput: FC<TextInputProps> = ({
  label,
  validate = (_: string) => true || _,
  errMsg,
}) => {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState<boolean>(true);

  useEffect(() => {
    if (validate(value) && isValid === false) {
      setIsValid(true);
    }
    if (!validate(value) && isValid === true) {
      setIsValid(false);
    }
  }, [value]);

  return (
    <>
      <Wrapper isValid={isValid}>
        <Label>{label}</Label>
        <StyledInput onChange={e => setValue(e.target.value)} />
      </Wrapper>
      {errMsg && !isValid ? <Warning>{errMsg}</Warning> : null}
    </>
  );
};

const StyledInput = styled.input`
  border: none;
  font-size: 16px;
  outline: 0;
  padding: 16px 8px 10px;
  width: 100%;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  border-radius: 8px;
`;

const Wrapper = styled.div<{isValid: boolean}>`
  border: solid 1px ${BasicColor.gray40};
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  color: ${BasicColor.gray60};
  border: ${p => (p.isValid ? 'none' : `1px solid ${BasicColor.yellow}`)};
  box-shadow: ${p =>
    p.isValid ? 'none' : `0px 4px 4px rgba(199, 83, 80, 0.3)`};
  border-radius: 8px;
`;

const Label = styled.label`
  font-size: 16px;
  position: absolute;
  padding: 0 8px;
`;

const Warning = styled.label`
  font-family: Montserrat;
  font-weight: 500;
  font-size: 11px;
  line-height: 13px;
  color: ${BasicColor.yellow};
  padding: 0 8px;
`;
