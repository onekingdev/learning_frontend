import { Routes }                  from 'Routes';
import { Provider }                from 'react-redux';
import store                       from './app/configureStore';
import { PersistGate }             from 'redux-persist/integration/react';
import { useState }                from 'react';
import { SnackbarProvider }        from 'notistack';
import { BrowserRouter as Router } from 'react-router-dom';

import './style.css'
export default () => {
  const [persist] = useState(store());
  return (
    <Provider store={persist.store}>
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
