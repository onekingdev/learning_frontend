import { Redirect, useLocation } from 'react-router-dom';
import { Route, Switch } from 'react-router-loading';
import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';

import 'animate.css';
import { LogIn } from 'views/pages/Login/Login';
import { Welcome } from 'views/pages/Welcome/Welcome';
import { Testing } from 'views/pages/Testing/Testing';
import { Question } from 'views/pages/Question/Question';
import { Avatar } from 'views/pages/Student/Avatar/Avatar';
// import { CardCollectible } from 'views/pages/CardCollectible/CardCollectible';
import { MyProfile } from 'views/pages/MyProfile/MyProfile';
import { Backpack } from 'views/pages/Backpack/Backpack';
import { Games } from 'views/pages/Games/Games';
import { GamesMenu } from 'views/pages/GamesMenu/GamesMenu';
import { StudentHome } from 'views/pages/StudentHome/StudentHome';
import { Progress } from 'views/pages/Progress/Progress';
import { ConfirmAccount } from 'views/pages/ConfirmAccount/ConfirmAccount';
import { KnowledgeMap } from 'views/pages/KnowledgeMap/KnowledgeMap';
import { SubjectsMenu } from 'views/pages/SubjectMenu/SubjectsMenu';
import { TopicsMenu } from 'views/pages/TopicsMenu/TopicsMenu';
import { Wardrobe } from 'views/pages/Student/Avatar/Wardrobe';
import { Payment } from 'views/pages/Payment/Payment';
import CreateParent from 'views/pages/CreateParent/CreateParent';
import KidsList from 'views/pages/KidsList/KidsList';
import { useSelector } from 'react-redux';
import { Store } from 'app/configureStore';
import { Settings } from 'views/pages/Settings/Settings';
import { Report } from 'views/pages/Report/Report';
import { Bank } from 'views/pages/Student/Bank/Bank';
import { Cards } from 'views/pages/Student/Collectibles/Cards';
import {  MyCardCollection  } from 'views/pages/Student/Collectibles/MyCards';
import NewKids from 'views/pages/NewKids/NewKids';
import { Spinner } from 'views/atoms/Spinner';
const PrivateRoute = ({requireAuth = true, loading = false, ...rest}) => {
  const user = useSelector((state: Store) => state.user);
  const isAuthenticated = !!user?.token;

  return loading ? (
    <Route loading {...rest}>
      {requireAuth ? (
        isAuthenticated ? (
          rest.children
        ) : (
          <Redirect to={{pathname: '/login'}} />
        )
      ) : (
        rest.children
      )}
    </Route>
  ) : (
    <Route {...rest}>
      {requireAuth ? (
        isAuthenticated ? (
          rest.children
        ) : (
          <Redirect to={{pathname: '/login'}} />
        )
      ) : (
        rest.children
      )}
    </Route>
  );
};

const FadeIn = styled.div`
animation: 1.5s ${keyframes`${fadeIn}`} ;
`;

export function Routes(props: any) {
  const location = useLocation();
  const FadeIn = styled.div `
    animation: 1.5s ${keyframes`${fadeIn}`} ;
  `;

  return (
    <FadeIn>
    {/* <TransitionGroup component={null}> */}
      {/* <CSSTransition
        key={location.key}
        appear={true}
        timeout={{enter: 1000, exit: 1000}}
        classNames={{
          enter: 'my-node-enter',
          enterActive: 'my-node-enter-active',
          exit: 'my-node-exit',
          exitActive: 'my-node-exit-active',
         }}
      > */}
        <Switch loadingScreen={Spinner} location={location}>
          <PrivateRoute exact path="/" requireAuth={false}>
            <Welcome />
          </PrivateRoute>
          <PrivateRoute path="/login" requireAuth={false}>
            <LogIn />
          </PrivateRoute>
          <PrivateRoute
            loading={true}
            path="/question/:mode/:aokId"
            requireAuth={false}
          >
            <Question />
          </PrivateRoute>
          <PrivateRoute loading={true} path="/avatar" >
            <Avatar />
          </PrivateRoute>
          <PrivateRoute loading={true} path="/wardrobe" >
            <Wardrobe />
          </PrivateRoute>
          {/* <PrivateRoute loading={true} path="/collectibles/category_:categoryId/:collectibleId">
            <CardCollectible />
          </PrivateRoute>
          <PrivateRoute loading={true} path="/collectibles/category_:categoryId">
            <CardCollectible />
          </PrivateRoute> */}
          <PrivateRoute loading={false} path="/collectibles/cards">
            <Cards />
          </PrivateRoute>
          <PrivateRoute loading={false} path="/collectibles/mycards">
            <MyCardCollection />
          </PrivateRoute>
          <PrivateRoute loading={true} path="/bank">
            <Bank />
          </PrivateRoute>
          <PrivateRoute loading={true} path="/profile">
            <MyProfile />
          </PrivateRoute>
          <PrivateRoute loading={true} path="/home">
            <StudentHome />
          </PrivateRoute>
          <PrivateRoute loading={true} path="/progress">
            <Progress />
          </PrivateRoute>
          <PrivateRoute loading={true} path="/backpack">
            <Backpack />
          </PrivateRoute>
          <PrivateRoute loading={true} path="/games/categories">
            <Games />
          </PrivateRoute>
          <PrivateRoute loading={true} exact path="/games/:category">
            <GamesMenu />
          </PrivateRoute>
          <PrivateRoute loading={true} path="/map">
            <KnowledgeMap />
          </PrivateRoute>
          <PrivateRoute loading={true} path="/confirmation">
            <ConfirmAccount />
          </PrivateRoute>
          <PrivateRoute loading={true} path="/subjects">
            <SubjectsMenu />
          </PrivateRoute>
          <PrivateRoute loading={true} path="/topic/:topicId">
            <TopicsMenu />
          </PrivateRoute>
          <PrivateRoute loading={true} path="/parent/setting">
            <Settings />
          </PrivateRoute>
          <PrivateRoute loading={true} path="/parent/report">
            <Report />
          </PrivateRoute>
          <PrivateRoute loading={true} path="/parent/payment">
            <Payment />
          </PrivateRoute>
          <PrivateRoute loading={true} path="/parent/create" requireAuth={false}>
            <CreateParent />
          </PrivateRoute>
          <PrivateRoute loading={true} path="/kids/list">
            <KidsList />
          </PrivateRoute>
          <PrivateRoute loading={true} path="/kids/new">
            <NewKids />
          </PrivateRoute>
          {process.env.NODE_ENV === 'development' ? (
            <Route path="/testing">
              <Testing />
            </Route>
          ) : null}
          <Redirect from="/" to="/login" />
        </Switch>
       {/* </CSSTransition > */}
    {/* </TransitionGroup> */}
    </FadeIn>
  );
}
