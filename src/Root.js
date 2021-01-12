import LoadingSpinner from 'components/atoms/LoadingSpinner';
import MenuSidebar from 'components/organisms/MenuSidebar';
import NextMeet from 'components/organisms/NextMeet';
import React, {lazy, Suspense, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import {routes} from 'routes';
import {getUser as fetchUserAction} from 'selectors/fetchUser';
import MainTemplate from './components/templates/MainTemplate';

const Account = lazy(() => import('components/pages/AccountPage'));
const History = lazy(() => import('components/pages/MeetingHistoryPage'));
const Home = lazy(() => import('components/pages/HomePage'));
const LoginPage = lazy(() => import('components/pages/LoginPage'));
const Timetable = lazy(() => import('components/pages/SchedulesPage'));
const TopicDatabase = lazy(() => import('components/pages/TopicDatabasePage'));

const Root = () => {
  const dispatch = useDispatch();

  const getUser = () => dispatch(fetchUserAction());
  const {pending, meetings, error} = useSelector((state) => state.user);

  useEffect(() => {
    getUser();
  }, []);

  if (pending) {
    return <div>Loading...</div>;
  } else if (meetings) {
    return (
      <BrowserRouter>
        <MainTemplate>
          <MenuSidebar />
          <NextMeet />
          <Suspense fallback={<LoadingSpinner />}>
            <Switch>
              <Route exact path={routes.home} component={Home} />
              <Route exact strict path={routes.timetable} component={Timetable} />
              <Route exact strict path={routes.topicDatabase} component={TopicDatabase} />
              <Route exact strict path={routes.history} component={History} />
              <Route exact strict path={routes.account} component={Account} />
              <Redirect to="/" />
            </Switch>
          </Suspense>
        </MainTemplate>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <Suspense fallback={<LoadingSpinner />}>
          <Switch>
            <Route strict exact path="/login" component={LoginPage} />
            <Redirect to="/login" />
          </Switch>
        </Suspense>
      </BrowserRouter>
    );
  }
};

export default Root;
