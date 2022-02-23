import {Routes} from './Routes'
import { Provider } from 'react-redux';
import store from './app/configureStore';
import { PersistGate } from 'redux-persist/integration/react';
import { useState } from 'react';
import { SnackbarProvider, VariantType, useSnackbar } from 'notistack';
import {BrowserRouter as Router, Redirect, useLocation } from 'react-router-dom';

import './style.css'
// require("dotenv").config();
export default () => {
  const [loading, setLoading] = useState(true);
  const [persist] = useState(store(() => setLoading(false)));
  console.log(process.env.NODE_ENV)
  return (
    <Provider store={persist.store}>
        <PersistGate loading={loading} persistor={persist.persistor}>
          <SnackbarProvider maxSnack={3}>
            <Router>
              <Routes />
            </Router>
          </SnackbarProvider>
        </PersistGate>
      </Provider>

  );
};
