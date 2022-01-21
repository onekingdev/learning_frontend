import {Routes} from './Routes'
import { Provider } from 'react-redux';
import store from './app/configureStore';
import { PersistGate } from 'redux-persist/integration/react';
import React, { useState } from 'react';
import './style.css'
// require("dotenv").config();
export default () => {
  const [loading, setLoading] = useState(true);
  const [persist] = useState(store(() => setLoading(false)));
  return (
    <Provider store={persist.store}>
      <PersistGate loading={loading} persistor={persist.persistor}>
          <Routes />
      </PersistGate>
    </Provider>
  );
};
