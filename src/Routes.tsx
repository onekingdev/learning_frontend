import 'animate.css';
import { useEffect } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { Route, Switch } from 'react-router-loading';
import { fadeIn } from 'react-animations';
import { useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import { LogIn } from 'views/pages/Login/Login';
import { Welcome } from 'views/pages/Welcome/Welcome';
import { Avatar } from 'views/pages/Student/Avatar/Avatar';
import { MyProfile } from 'views/pages/Student/Settings/MyProfile';
import { Backpack } from 'views/pages/Student/Backpack/Backpack';
import { Games } from 'views/pages/Student/Games/Games';
import { GamesMenu } from 'views/pages/Student/Games/GamesMenu/GamesMenu';
import { KnowledgeMap } from 'views/pages/Student/KnowledgeMap/KnowledgeMap';
import { Wardrobe } from 'views/pages/Student/Avatar/Wardrobe';
import { Payment } from 'views/pages/Parent/Payment/Payment';
import CreateParent from 'views/pages/Parent/CreateParent/CreateParent';
import KidsList from 'views/pages/Parent/KidsList/KidsList';
import { Store } from 'app/configureStore';
import { Settings } from 'views/pages/Parent/Settings/Settings';
import { Bank } from 'views/pages/Student/Bank/Bank';
import { Cards } from 'views/pages/Student/Collectibles/ByCards';
import { MyCardCollection } from 'views/pages/Student/Collectibles/MyCards';
import NewKids from 'views/pages/Parent/NewKids/UpdatedNewKids';
import { Spinner } from 'views/atoms/Spinner';
import { Reporting } from 'views/pages/Parent/KidReport/Reporting';
import { KidsTreasureTrack } from 'views/pages/Student/TreasureTrack/TreasureTrack';
import { KidsProgress } from 'views/pages/Student/Progress/Progress';
//teacher center
import TeacherSignup from 'views/pages/Teacher/TeacherSignup/TeacherSignup';
import SchoolSignup from 'views/pages/School/SchoolSignup/SchoolSignup'
import TeacherPayment from 'views/pages/Teacher/Payment/Payment'
import Classrooms from 'views/pages/Teacher/Classrooms/Classrooms'
import Students from 'views/pages/Teacher/Students/Students'
import Groups from 'views/pages/Teacher/Groups'
import AddStudent from 'views/pages/Teacher/AddStudents/AddStudents';
import Assignment from 'views/pages/Teacher/Assignment/Assignment';
import Results from 'views/pages/Teacher/Results/Results';
import { AIQuestion } from 'views/pages/Student/Question/AIQuestions';
import ControlAOK from 'views/pages/Teacher/ControlAOK/ControlAOK';
import TeacherSettings from 'views/pages/Teacher/Settings/Settings'
import Certificates from 'views/pages/Teacher/Certificates/Certificates';
import { GameIframe } from 'views/pages/Student/Games/GameIframe';
import { ProgressReview } from 'views/pages/Student/Progress/ProgressReview';
import { Error404 } from 'views/pages/Error404';
import { TeacherCreateAccount } from 'views/pages/Teacher/SelectCreateType/TeacherCreateAccount';
import Notes from 'views/pages/Teacher/Notes/Notes';
import ClassDashboard from 'views/pages/Teacher/ClassDashboard';
import ClassroomSettings from 'views/pages/Teacher/ClassroomSettings/ClassroomSettings';
import Schools from 'views/pages/School/Schools';
import { Homework } from 'views/pages/Student/Homework';
import AddTeachers from 'views/pages/School/AddTeachers';
import SchoolTeachers from 'views/pages/School/SchoolTeachers';


const PrivateRoute = ({ requireAuth = true, loading = false, ...rest }) => {
  const user = useSelector((state: Store) => state.user);
  const isAuthenticated = !!user?.token;
  return loading ? (
    <Route loading {...rest}>
      {requireAuth ? (
        isAuthenticated ? (
          rest.children
        ) : (
          <Redirect to={{ pathname: '/login' }} />
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
          <Redirect to={{ pathname: '/login' }} />
        )
      ) : (
        rest.children
      )}
    </Route>
  );
};


export function Routes() {
  const location = useLocation();
  const FadeIn = styled.div`
  animation: 1.5s ${keyframes`${fadeIn}`} ;
  `;

  useEffect(() => {
    if (window.Tawk_API?.onLoaded) window.Tawk_API?.hideWidget();
  }, [location])
  return (
    <FadeIn>
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
          {/* <Question /> */}
          <AIQuestion />
        </PrivateRoute>
        <PrivateRoute loading={true} path="/avatar" >
          <Avatar />
        </PrivateRoute>
        <PrivateRoute loading={true} path="/wardrobe" >
          <Wardrobe />
        </PrivateRoute>
        <PrivateRoute loading={true} path="/collectibles/cards">
          <Cards />
        </PrivateRoute>
        <PrivateRoute loading={true} path="/collectibles/mycards">
          <MyCardCollection />
        </PrivateRoute>
        <PrivateRoute loading={true} path="/bank">
          <Bank />
        </PrivateRoute>
        <PrivateRoute loading={true} path="/profile">
          <MyProfile />
        </PrivateRoute>
        <PrivateRoute loading={true} path="/home">
          <KidsTreasureTrack />
        </PrivateRoute>
        <PrivateRoute loading={true} path="/progress">
          <KidsProgress />
        </PrivateRoute>
        <PrivateRoute loading={true} requireAuth={true} path="/student/homework" component={Homework} />
        <PrivateRoute loading={true} exactv path="/review">
          <ProgressReview />
        </PrivateRoute>
        <PrivateRoute loading={false} path="/backpack">
          <Backpack />
        </PrivateRoute>
        <PrivateRoute loading={true} path="/games/categories">
          <Games />
        </PrivateRoute>
        <PrivateRoute loading={true} exact path="/games/:category">
          <GamesMenu />
        </PrivateRoute>
        <PrivateRoute loading={true} exact path="/games/:token/:gamePath">
          <GameIframe />
        </PrivateRoute>
        <PrivateRoute loading={true} path="/map">
          <KnowledgeMap />
        </PrivateRoute>
        <PrivateRoute loading={true} path="/parent/setting">
          <Settings />
        </PrivateRoute>
        <PrivateRoute loading={true} path="/student/settings">
          <Settings />
        </PrivateRoute>
        <PrivateRoute loading={true} path="/report/:reviewer/:studentId" component={Reporting} />
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

        <PrivateRoute loading={false} requireAuth={false} path="/teacher/selectCreateType">
          <TeacherCreateAccount />
        </PrivateRoute>
        <PrivateRoute loading={false} requireAuth={false} path="/teacher/teacherSignup" component={TeacherSignup} />
        <PrivateRoute loading={true} requireAuth={false} path="/teacher/payment/:productType" component={TeacherPayment} />
        <PrivateRoute loading={true} requireAuth={false} path="/teacher/schoolSignup" component={SchoolSignup} />
        <PrivateRoute loading={false} requireAuth={false} path="/teacher/classrooms" component={Classrooms} />
        <PrivateRoute loading={false} requireAuth={false} path="/teacher/addStudent" component={AddStudent} />
        <PrivateRoute loading={false} requireAuth={false} path="/teacher/students" component={Students} />
        <PrivateRoute loading={false} requireAuth={false} path="/teacher/groups" component={Groups} />
        <PrivateRoute loading={false} requireAuth={false} path="/teacher/settings" component={TeacherSettings} />
        <PrivateRoute loading={false} requireAuth={false} path="/teacher/notes" component={Notes} />
        <PrivateRoute loading={false} requireAuth={false} path="/teacher/certificates" component={Certificates} />
        <PrivateRoute loading={false} requireAuth={false} path="/teacher/assignments" component={Assignment} />
        <PrivateRoute loading={false} requireAuth={false} path="/teacher/results" component={Results} />
        <PrivateRoute loading={false} requireAuth={false} path="/teacher/dashboard" component={ClassDashboard} />
        <PrivateRoute loading={false} requireAuth={false} path="/teacher/classroomSettings" component={ClassroomSettings} />

        <PrivateRoute loading={false} requireAuth={false} path="/admin/schools" component={Schools} />
        <PrivateRoute loading={false} requireAuth={false} path="/admin/addTeachers" component={AddTeachers} />
        <PrivateRoute loading={false} requireAuth={false} path="/admin/schoolTeachers" component={SchoolTeachers} />
        <Route path="/teacher/control-aok">
          <ControlAOK />
        </Route>
        {/* {process.env.NODE_ENV === 'development' ? ( */}
        {/* ) : null} */}
        <Route path="*" component={Error404} />
        {/* <Redirect from="/" to="/login" /> */}
      </Switch>
    </FadeIn>
  );
}
