import {FC} from 'react';
import styled from 'styled-components';
import {Divider} from '../../atoms/Divider';
import {ButtonColor} from '../../Color';
import {ScreenSize} from '../../screenSize';
import {Button} from '../Button';

type LoginActionsProps = {
  googleText: string;
  googleColor: ButtonColor;
  loginText: string;
  loginColor: ButtonColor;
  or: string;
};

export const Actions: FC<LoginActionsProps> = ({
  googleText,
  googleColor,
  loginText,
  loginColor,
  or,
}) => {
  return (
    <StyledActions>
      <Action>
        <Button value={googleText} darkText={true} color={googleColor} />
      </Action>

      <Divider value={or} />

      <Action>
        <Button value={loginText} color={loginColor} />
      </Action>
    </StyledActions>
  );
};

const StyledActions = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-left: 3rem;
  margin-right: 3rem;
  @media (min-width: ${ScreenSize.desktop}) {
    grid-template-columns: 1fr 0 1fr;
    grid-gap: 20px;
    direction: rtl;
    margin-top: 2rem;
    margin-left: 0;
  }
`;

export const Action = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  @media (min-width: ${ScreenSize.phone}) {
    margin-top: 15px;
    margin-bottom: 15px;
  }
`;
