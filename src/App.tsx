import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {LogIn} from './views/pages/Login/Login';
import {Welcome} from './views/pages/Welcome/Welcome';
import {Testing} from './views/pages/Testing/Testing';
import {Question} from './views/pages/Question/Question';
import {MyProfile} from './views/pages/MyProfile/MyProfile';
import {Backpack} from './views/pages/Backpack/Backpack';
import {Games} from './views/pages/Games/Games';
import {GamesMenu} from './views/pages/GamesMenu/GamesMenu';
import {StudentHome} from './views/pages/StudentHome/StudentHome';
import {Progress} from './views/pages/Progress/Progress';

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
        <Route path="/profile">
          <MyProfile />
        </Route>
        <Route path="/home">
          <StudentHome />
        </Route>
        <Route path="/progress">
          <Progress />
        </Route>
        <Route path="/backpack">
          <Backpack />
        </Route>
        <Route path="/games/categories">
          <Games />
        </Route>
        <Route path="/games">
          <GamesMenu />
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
