import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
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
import {FC} from 'react';
import {StoreProvider, useStore} from './app/store';
type PrivateRouteProps = {
  paths: string,
  rest: object,
  requireAuth: boolean
}
export const PrivateRoute = ({requireAuth=true, ...rest}) => {
  const store = useStore();
  const isAuthenticated = !!store?.user?.token;
  return (
    <Route
      {...rest}
    >
      {requireAuth ? (isAuthenticated ? rest.children : <Redirect to={{pathname: '/login'}} />) : rest.children}
      </Route>
  )
}

export default () => {
  return (
    <StoreProvider>
    <Router>
      <Switch>
        <PrivateRoute exact path="/" requireAuth={false}>
            <Welcome />
        </PrivateRoute>
        <PrivateRoute path="/login" requireAuth={false}>
          <LogIn />
        </PrivateRoute>
        <PrivateRoute path="/question" requireAuth={false}>
          <Question />
        </PrivateRoute>
        <PrivateRoute path="/avatar">
          <Avatar />
        </PrivateRoute>
        <PrivateRoute path="/collectibles/category_:categoryId/:collectibleId">
          <CardCollectible />
        </PrivateRoute>
        <PrivateRoute path="/collectibles/category_:categoryId">
          <CardCollectible />
        </PrivateRoute>
        <PrivateRoute path="/profile">
          <MyProfile />
        </PrivateRoute>
        <PrivateRoute path="/home">
          <StudentHome />
        </PrivateRoute>
        <PrivateRoute path="/progress">
          <Progress />
        </PrivateRoute>
        <PrivateRoute path="/backpack">
          <Backpack />
        </PrivateRoute>
        <PrivateRoute path="/games/categories">
          <Games />
        </PrivateRoute>
        <PrivateRoute path="/games">
          <GamesMenu />
        </PrivateRoute>
        <PrivateRoute path="/map">
          <KnowledgeMap />
        </PrivateRoute>
        <PrivateRoute path="/confirmation">
          <ConfirmAccount />
        </PrivateRoute>
        <PrivateRoute path="/subjects">
          <SubjectsMenu />
        </PrivateRoute>
        <PrivateRoute path="/topic/:topicId">
          <TopicsMenu />
        </PrivateRoute>
        {process.env.NODE_ENV === 'development' ? (
          <Route path="/testing">
            <Testing />
          </Route>
        ) : null}
      </Switch>
    </Router>
    </StoreProvider>

  );
};
