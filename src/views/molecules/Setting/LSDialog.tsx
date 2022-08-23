import { FC } from 'react';
import * as React from 'react';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';
import { DialogContent, DialogTitle, ThemeProvider } from '@mui/material';
import { BasicColor } from 'views/Color';
import { settingPage } from '../../Theme';
import { LSDialogContentText } from './utils/Style';


interface LSDialogProps extends DialogProps {
  title?: string
  contentText?: string
  close: () => void
  dialogContent?: React.ReactNode | FC
  fullWidth?: boolean
  open: boolean
}

export const LSDialog: FC<LSDialogProps> = ({
  title,
  contentText,
  dialogContent,
  fullWidth,
  close,
  open
}) => {

  const onCrossBtnClick = () => {
    // Do something here...

    // Close dialog
    close()
  }

  return (
    <ThemeProvider theme={settingPage}>
      <StyledDialog open={open} onClose={close} scroll='body' fullWidth={fullWidth || false}>
        <StyledIconBtn aria-label="close" onClick={() => { onCrossBtnClick() }} >
          <CloseIcon />
        </StyledIconBtn>
        <DialogTitle sx={{ color: BasicColor.blue, textAlign: 'center' }}>
          {title ? title : ''}
        </DialogTitle>
        <div></div>
        <DialogContent>
          {
            contentText ?
              <LSDialogContentText>
                {contentText}
              </LSDialogContentText> : null
          }
          {dialogContent}
        </DialogContent>
      </StyledDialog>
    </ThemeProvider>
  );
}


// Styled components

const StyledDialog = styled(Dialog)`
& .MuiPaper-root {
  overflow-y: visible
}
`
const StyledIconBtn = styled(IconButton)`
  &.MuiIconButton-root{
    position: absolute;
    right: -20px;
    top: -15px;
    background: ${BasicColor.green};
    color: white;
    &:hover {
      background: ${BasicColor.darkGreen};
    }
  }
`

