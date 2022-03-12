import {FC} from 'react';
import styled from 'styled-components';
import {Divider} from '../../atoms/Divider';
import {ButtonColor} from 'views/Color';
import {ScreenSize} from '../../../constants/screenSize';
// import {Button} from '../Button';
import Button from 'views/molecules/MuiButton';
import { BasicColor } from 'views/Color';
import LoadingButton from '@mui/lab/LoadingButton';
type LoginActionsProps = {
  googleText: string;
  googleColor: ButtonColor;
  googleAction: () => void;
  or: string;
  loginText: string;
  loginColor: ButtonColor;
  loading: boolean;
  loginAction: () => void;
};

export const Actions: FC<LoginActionsProps> = ({
  googleText,
  googleColor,
  googleAction,
  or,
  loginText,
  loginColor,
  loginAction,
  loading
}) => {
  return (
    <StyledActions>
      <Action>
        <Button
          value={googleText}
          bgColor={googleColor}
          color={BasicColor.black}
          onClick={googleAction}
          fullWidth={true}
          loading={loading}
        />
      </Action>

      <Divider value={or} />
      <Action>
        <Button
          value={loginText}
          bgColor={loginColor}
          color={BasicColor.white}
          onClick={loginAction}
          fullWidth={true}
          loading={loading}
        />
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
    margin-top: 1rem;
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
