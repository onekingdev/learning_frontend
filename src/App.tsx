import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {LogIn} from './views/pages/Login/Login';
import {Welcome} from './views/pages/Welcome/Welcome';
import {Testing} from './views/pages/Testing/Testing';
import {Question} from './views/pages/Question/Question';
import {Avatar} from './views/pages/Avatar/Avatar';
import {CardCollectible} from './views/pages/CardCollectible/CardCollectible';
import {MyProfile} from './views/pages/MyProfile/MyProfile';
import {Backpack} from './views/pages/Backpack/Backpack';
import {Games} from './views/pages/Games/Games';
import {GamesMenu} from './views/pages/GamesMenu/GamesMenu';
import {StudentHome} from './views/pages/StudentHome/StudentHome';
import {Progress} from './views/pages/Progress/Progress';
import {ConfirmAccount} from './views/pages/ConfirmAccount/ConfirmAccount';
import {KnowledgeMap} from './views/pages/KnowledgeMap/KnowledgeMap';
import {SubjectsMenu} from './views/pages/SubjectMenu/SubjectsMenu';
import {TopicsMenu} from './views/pages/TopicsMenu/TopicsMenu';

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
        <Route path="/map">
          <KnowledgeMap />
        </Route>
        <Route path="/confirmation">
          <ConfirmAccount />
        </Route>
        <Route path="/subjects">
          <SubjectsMenu />
        </Route>
        <Route path="/topic">
          <TopicsMenu />
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
