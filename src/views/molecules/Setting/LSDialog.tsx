import { FC } from 'react';
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import useMediaQuery from '@mui/material/useMediaQuery';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import { ThemeProvider } from '@mui/material';

import { settingPage } from './utils/Theme';

import { LSDialogTitle, LSDialogContent, LSDialogContentText } from './utils/Style';

type LSDialogProps = {
  title?: string
  isOpen: boolean
  contentText?: string
  open: () => void
  dialogContent?: React.ReactNode
  fullWidth?: boolean
}

export const LSDialog: FC<LSDialogProps> = ({
  title,
  contentText,
  isOpen,
  open,
  dialogContent,
  fullWidth
}) => {
  const fullScreen = useMediaQuery(settingPage.breakpoints.down('md'));
  return (
    <ThemeProvider theme={settingPage}>
      <Dialog open={isOpen} onClose={open} fullScreen={fullWidth ? fullScreen : false} scroll='body'>
        <IconButton
          aria-label="close"
          onClick={open}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            background: '#21B95C',
            color: '#FFFFFF',
          }}
        >
          <CloseIcon />
        </IconButton>
        {title ? <LSDialogTitle>{title}</LSDialogTitle> : null}
        <LSDialogContent>
          {
            contentText ?
              <LSDialogContentText>
                {contentText}
              </LSDialogContentText> : null
          }
          {dialogContent}
        </LSDialogContent>
      </Dialog>
    </ThemeProvider>
  );
}
