import React, {Suspense, lazy, useState, useEffect} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import {Provider} from 'react-redux';
import store from 'store';
import LoadingSpinner from 'components/atoms/LoadingSpinner';

import {routes} from 'routes';

import MenuSidebar from 'components/organisms/MenuSidebar';
import NextMeet from 'components/organisms/NextMeet';
import MainTemplate from './components/templates/MainTemplate';

const LoginPage = lazy(() => import('components/pages/LoginPage'));

const Home = lazy(() => import('components/pages/HomePage'));
const Timetable = lazy(() => import('components/pages/SchedulesPage'));
const TopicDatabase = lazy(() => import('components/pages/TopicDatabasePage'));
const History = lazy(() => import('components/pages/MeetingHistoryPage'));
const Account = lazy(() => import('components/pages/AccountPage'));

const Root = (props) => {
  const [user, setUser] = useState(undefined);
  const [isLoggedIn, setIsLoggedIn] = useState(undefined);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/user`)
      .then((resp) => resp.json())
      .then((data) => {
        setIsLoggedIn(true);
        setUser(data);
      })
      .catch((err) => {
        setIsLoggedIn(false);
        //console.log(err);
      });
  }, [isLoggedIn]);

  if (isLoggedIn === undefined) {
    return <div>Loading...</div>;
  }

  if (isLoggedIn === undefined) {
    return (
      <Switch>
        <Redirect to="/" />
      </Switch>
    );
  }

  if (isLoggedIn) {
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }

  if (!isLoggedIn) {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Suspense fallback={<LoadingSpinner />}>
            <Switch>
              <Route strict exact path="/login" component={LoginPage} />
              <Redirect to="/login" />
            </Switch>
          </Suspense>
        </BrowserRouter>
      </Provider>
    );
  }
};

export default Root;
