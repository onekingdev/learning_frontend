import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {StoreProvider, useStore} from './app/store';
import {Routes} from './Routes'

export default () => {
  return (
    // <StoreProvider>
    // </StoreProvider>
    <div><Routes /></div>
  );
};
