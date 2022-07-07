import { FC } from 'react';
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';
import { BasicColor } from 'views/Color';
import { LSDialogContent, LSDialogContentText } from 'views/molecules/Setting/utils/Style';
import { DialogTitle } from '@mui/material';

type LSDialogProps = {
  title?: string
  isOpen: boolean
  contentText?: string
  open: () => void
  dialogContent?: React.ReactNode | FC
  fullWidth?: boolean
}

export const CardDialog: FC<LSDialogProps> = ({
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
    <Dialog
      open={isOpen}
      onClose={open}
      scroll='body'
      fullWidth={fullWidth}
      maxWidth='md'
      sx={{
        '& .MuiPaper-root': {
          borderRadius: 5,
          padding: 2,
          paddingTop: 5,
        }
      }}
    >
      <StyledIconBtn aria-label="close" onClick={() => { onCrossBtnClick() }} sx={{ zIndex: 2 }}>
        <CloseIcon />
      </StyledIconBtn>
      {title &&
        <DialogTitle sx={{ color: BasicColor.blue, textAlign: 'center' }}
        >
          {title}
        </DialogTitle>
      }
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
  );
}


// Styled components
// interface DialogProps {
//   wide?: string
// }
// const StyledDialog = styled(Dialog) <DialogProps>`
// & .MuiPaper-root {
//   max-width: ${props => props.wide === 'true' ? '100%;' : 'auto;'}
//   border-radius: 30px;
//   overflow: hidden;
//   padding: 20px;
//   @media screen and (max-width: ${ScreenSize.tablet}) {
//     width: 90vw;
//   }
// }
// }
// `

const StyledIconBtn = styled(IconButton)`
  &.MuiIconButton-root{
    position: absolute;
    right: 20px;
    top: 10px;
    color: black;
    &:hover {
      background: ${BasicColor.gray20};
    }
  }
`

