import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {LogIn} from './views/pages/Login/Login';
import {Welcome} from './views/pages/Welcome/Welcome';
import {Testing} from './views/pages/Testing/Testing';
import {Question} from './views/pages/Question/Question';
import {Avatar} from './views/pages/Avatar/Avatar';

export default () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route path="/login">
          <LogIn />
        </Route>
        <Route path="/question">
          <Question />
        </Route>
        <Route path="/avatar">
          <Avatar />
        </Route>
        {process.env.NODE_ENV === 'development' ? (
          <Route path="/testing">
            <Testing />
          </Route>
        ) : null}
      </Switch>
    </Router>
  );
};
