import { FC } from 'react';
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';
import { ThemeProvider } from '@mui/material';

import { BasicColor } from 'views/Color';
import { settingPage } from './utils/Theme';

import { LSDialogTitle, LSDialogContent, LSDialogContentText } from './utils/Style';

type LSDialogProps = {
  title?: string
  isOpen: boolean
  contentText?: string
  open: () => void
  dialogContent?: React.ReactNode | FC
  fullWidth?: string
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


// Styled components
interface DialogProps {
  wide?: string
}
const StyledDialog = styled(Dialog) <DialogProps>`
& .MuiPaper-root {
  max-width: ${props => props.wide === 'true' ? '100%;' : 'auto;'}
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
      background: ${BasicColor.green};
    }
  }
`

