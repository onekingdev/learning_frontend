import { FC } from 'react';
import Avatar from '@mui/material/Avatar';

interface Props {
  image: any
}

export const MenuItemIcon: FC<Props> = ({
  image
}) => {
  return (
    <Avatar children={<img src={image} style={{ height: '100%' }} />} sx={{ padding: 1, bgcolor: 'white' }} />
  );
}
