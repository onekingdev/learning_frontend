import { Routes } from 'Routes';
import { Provider } from 'react-redux';
import store from './app/configureStore';
import { PersistGate } from 'redux-persist/integration/react';
import { useState } from 'react';
import { SnackbarProvider } from 'notistack';
import { BrowserRouter as Router } from 'react-router-dom';

import './style.css'
// require("dotenv").config();
export default () => {
  // const [loading, setLoading] = useState(true);
  // const [persist] = useState(store(() => setLoading(false)));
  const [persist] = useState(store());
  console.log(process.env)
  return (
    <Provider store={persist.store}>
      {/* <PersistGate loading={loading} persistor={persist.persistor}> */}
      <PersistGate loading={true} persistor={persist.persistor}>
        <SnackbarProvider maxSnack={3}>
          <Router>
            <Routes />
          </Router>
        </SnackbarProvider>
      </PersistGate>
    </Provider>
  );
};
