import { FC }         from 'react';
import * as React     from 'react';
import Dialog         from '@mui/material/Dialog';
import IconButton     from '@mui/material/IconButton';
import CloseIcon      from '@mui/icons-material/Close';
import styled         from 'styled-components';
import { ScreenSize } from 'constants/screenSize';
import { BasicColor } from 'views/Color';
import { LSDialogTitle, LSDialogContent, LSDialogContentText } from 'views/molecules/Setting/utils/Style';

type LSDialogProps = {
  title?: string
  isOpen: boolean
  contentText?: string
  open: () => void
  dialogContent?: React.ReactNode | FC
  fullWidth?: string
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
      <StyledDialog open={isOpen} onClose={open} scroll='body' wide={fullWidth}>
        <StyledIconBtn aria-label="close" onClick={() => { onCrossBtnClick() }} sx={{zIndex: 2}}>
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
  );
}


// Styled components
interface DialogProps {
  wide?: string
}
const StyledDialog = styled(Dialog) <DialogProps>`
& .MuiPaper-root {
  max-width: ${props => props.wide === 'true' ? '100%;' : 'auto;'}
  border-radius: 30px;
  overflow: hidden;
  @media screen and (max-width: ${ScreenSize.tablet}) {
    width: 90vw;
  }
}


}
`
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

