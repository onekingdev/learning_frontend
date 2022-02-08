import {Routes} from './Routes'
import { Provider } from 'react-redux';
import store from './app/configureStore';
import { PersistGate } from 'redux-persist/integration/react';
import React, { useState, Fragment } from 'react';
import Button from '@mui/material/Button';
import { SnackbarProvider, VariantType, useSnackbar } from 'notistack';
import './style.css'
// require("dotenv").config();
export default () => {
  const [loading, setLoading] = useState(true);
  const [persist] = useState(store(() => setLoading(false)));

  return (
    <Provider store={persist.store}>
        <PersistGate loading={loading} persistor={persist.persistor}>
          <SnackbarProvider maxSnack={3}>
              <Routes />
          </SnackbarProvider>
        </PersistGate>
      </Provider>

  );
};
