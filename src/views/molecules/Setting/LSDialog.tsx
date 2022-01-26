import { FC } from 'react';
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import useMediaQuery from '@mui/material/useMediaQuery';

import { ThemeProvider } from '@mui/material';

import { settingPage } from './utils/Theme';

import { LSDialogTitle, LSDialogContent, LSDialogContentText } from './utils/Style';

type LSDialogProps = {
  title?: string
  isOpen: boolean
  contentText?: string
  open:() => void
  dialogContent?: React.ReactNode
}

export const LSDialog:FC<LSDialogProps> = ({
  title,
  contentText,
  isOpen,
  open,
  dialogContent
}) => {
  const fullScreen = useMediaQuery(settingPage.breakpoints.down('md'));
  return (
    <ThemeProvider theme={settingPage}>
      <Dialog open={isOpen} onClose={open} fullScreen={fullScreen} scroll='body'>
        {title?<LSDialogTitle>{title}</LSDialogTitle>:null}
        <LSDialogContent>
          {
            contentText?
            <LSDialogContentText>
              {contentText}
            </LSDialogContentText>: null
          }
          {dialogContent}
        </LSDialogContent>
      </Dialog>
    </ThemeProvider>
  );
}
