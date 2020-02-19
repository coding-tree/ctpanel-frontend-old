import React, {lazy, Suspense} from 'react';

import {routes} from 'routes';
import {Switch} from 'react-router-dom';

import MenuSidebar from 'components/organisms/MenuSidebar';
import NextMeet from 'components/organisms/NextMeet';
import PrivateRoute from 'components/PrivateRoute';
import LoadingSpinner from './atoms/LoadingSpinner';
import MainTemplate from './templates/MainTemplate';

const Home = lazy(() => import('components/pages/HomePage'));
const Timetable = lazy(() => import('components/pages/SchedulesPage'));
const TopicDatabase = lazy(() => import('components/pages/TopicDatabasePage'));
const History = lazy(() => import('components/pages/MeetingHistoryPage'));
const Account = lazy(() => import('components/pages/AccountPage'));

const MainRoute = () => {
  return (
    <MainTemplate>
      <MenuSidebar />
      <NextMeet />
      <Suspense fallback={<LoadingSpinner />}>
        <Switch>
          <PrivateRoute exact path={routes.home} component={Home} />
          <PrivateRoute exact strict path={routes.timetable} component={Timetable} />
          <PrivateRoute exact strict path={routes.topicDatabase} component={TopicDatabase} />
          <PrivateRoute exact strict path={routes.history} component={History} />
          <PrivateRoute exact strict path={routes.account} component={Account} />
        </Switch>
      </Suspense>
    </MainTemplate>
  );
};

export default MainRoute;
