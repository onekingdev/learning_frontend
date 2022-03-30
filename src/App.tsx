import { Routes }                  from 'Routes';
import { useRef }                  from 'react';
import { Provider }                from 'react-redux';
import store                       from './app/configureStore';
import { PersistGate }             from 'redux-persist/integration/react';
import { useState }                from 'react';
import { SnackbarProvider }        from 'notistack';
import { BrowserRouter as Router } from 'react-router-dom';
import TawkMessengerReact          from '@tawk.to/tawk-messenger-react';
import './style.css'
export default () => {
  const [persist] = useState(store());
  const tawkMessengerRef = useRef();

  // const handleMinimize =  () => {
  //     tawkMessengerRef?.current?.minimize();
  // };
  return (
    <Provider store={persist.store}>
      <PersistGate loading={true} persistor={persist.persistor}>
        <SnackbarProvider maxSnack={3}>
          <TawkMessengerReact
            propertyId="58cecc295b89e2149e1b042f"
            widgetId="default"
            useRef={tawkMessengerRef}/>
          <Router>
            <Routes />
          </Router>
        </SnackbarProvider>
      </PersistGate>
    </Provider>
  );
};
