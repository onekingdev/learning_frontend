import { FC } from 'react';
import { Typography } from '@mui/material';
import { getMessage } from 'views/utils';

interface Props {
  error: any
}
export const ErrorMessage: FC<Props> = ({ error }) => {
  return (
    <Typography color='red'>{getMessage(error)}</Typography>
  )
};
