import { FC } from 'react';
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';
import { ThemeProvider } from '@mui/material';

import { BasicColor } from '../../Color';
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
  dialogContent,
  fullWidth,
  open,
}) => {

  const onCrossBtnClick = () => {
    // Do something here...

    // Close dialog
    open()
  }

  return (
    <ThemeProvider theme={settingPage}>
      <div></div>
      <StyledDialog open={isOpen} onClose={open} scroll='body' wide={fullWidth}>
        <StyledIconBtn aria-label="close" onClick={() => { onCrossBtnClick() }} >
          <CloseIcon />
        </StyledIconBtn>
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
      </StyledDialog>
    </ThemeProvider>
  );
}

interface DialogProps {
  wide?: boolean
}
const StyledDialog = styled(Dialog) <DialogProps>`
& .MuiPaper-root {
  max-width: ${props => props.wide ? '100%;' : 'auto;'}
  overflow-y: visible
}
`
const StyledIconBtn = styled(IconButton)`
  &.MuiIconButton-root{
    position: absolute;
    right: -20px;
    top: -10px;
    background: ${BasicColor.green};
    color: white;
    &:hover {
      background-color: rgba(33, 185, 92, 0.9)
    }
  }
`

