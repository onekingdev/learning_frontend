
import { FC, useContext, useEffect } from 'react';
import { Container, Stack, Grid, Typography, Box, BoxProps } from '@mui/material';

interface ICertification extends BoxProps {
  certificate: any
  title: string
}

export const CertificationThumbnailPreview: FC<ICertification> = ({ certificate, title }) => {
  console.log('rendered')
  return (
    <Box>

      <img src={certificate?.image} style={{ width: '100%' }} />
      <Typography>{title}</Typography>
    </Box>
  );
};
