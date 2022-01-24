import { FC } from 'react';
import * as React from 'react';
import Dialog from '@mui/material/Dialog';

import { ThemeProvider } from '@mui/material';

import { settingPage } from '../utils/Theme';

import { LSDialogTitle, LSDialogContent, LSDialogContentText } from '../utils/Style';

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

  return (
    <ThemeProvider theme={settingPage}>
      <Dialog open={isOpen} onClose={open}>
        {title?<LSDialogTitle>{title}</LSDialogTitle>:null}
        <LSDialogContent>
          <LSDialogContentText>
            {contentText}
          </LSDialogContentText>
          {dialogContent}
        </LSDialogContent>
      </Dialog>
    </ThemeProvider>
  );
}
