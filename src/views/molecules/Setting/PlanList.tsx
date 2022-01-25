import * as React from 'react';
import {FC, useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { LSBlueTextButton } from '../../pages/Settings/Style';
import { useDialog } from './utils/useDialog';
import { LSDialog } from './LSDialog';
import { CancelForm } from './CancelForm';


export const PlanList:FC = () => {

  const {isOpen, open} = useDialog()

  const [reason, setReason] = React.useState<string>('reason1');

  const onConfirm = (reason: string) => {
    setReason(reason)
    console.log(reason)
    open()
  }
  const onCancel = () => open();

  // const [dense, setDense] = React.useState(false);
  // const [secondary, setSecondary] = React.useState(false);

  const generate = (element: React.ReactElement) => {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }

  const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Demo>
            <List sx={{margin:'2px', padding:'2px'}}>
              {generate(
                <ListItem
                  secondaryAction={
                    <LSBlueTextButton onClick={open}>{'Cancel Plan'}</LSBlueTextButton>
                  }
                >
                  <ListItemText
                    primary='1 child combo'
                  />
                </ListItem>,
              )}
            </List>
            <LSDialog
              isOpen={isOpen}
              open={open}
              title = 'Cancel Childrens plan'
              contentText = 'You are cancelling 1 child solo area'
              dialogContent = {
                <CancelForm
                  onConfirm={onConfirm}
                  onCancel={onCancel}
                />
              }
            />
          </Demo>
        </Grid>
      </Grid>
    </Box>
  );
}

