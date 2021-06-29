import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {LogIn} from './views/pages/Login/Login';
import {Welcome} from './views/pages/Welcome/Welcome';
import {Testing} from './views/pages/Testing/Testing';
import {Question} from './views/pages/Question/Question';
import {Avatar} from './views/pages/Avatar/Avatar';
import {CardCollectible} from './views/pages/CardCollectible/CardCollectible';
import {MyProfile} from './views/pages/MyProfile/MyProfile';
import {ConfirmAccount} from './views/pages/ConfirmAccount/ConfirmAccount';
import {KnowledgeMap} from './views/pages/KnowledgeMap/KnowledgeMap';

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
        <Route path="/collectibles">
          <CardCollectible />
        </Route>
        <Route path="/profile">
          <MyProfile />
        </Route>
        <Route path="/map">
          <KnowledgeMap />
        </Route>
        <Route path="/confirmation">
          <ConfirmAccount />
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
