import React, {lazy, Suspense} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {routes} from 'routes';
import MainTemplate from 'templates/MainTemplate';

const MenuSidebar = lazy(() => import('organism/MenuSidebar'));
const NextMeet = lazy(() => import('organism/NextMeet'));

const Home = lazy(() => import('views/HomePage'));
const Timetable = lazy(() => import('views/TimetablePage'));
const TopicDatabase = lazy(() => import('views/TopicDatabasePage'));
const History = lazy(() => import('views/HistoryPage'));
const Account = lazy(() => import('views/AccountPage'));

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Suspense
        fallback={
          <div>
            <h1>Ładowanie...</h1>
          </div>
        }
      >
        <MenuSidebar />
        <NextMeet />
        <Switch>
          <Route exact strict path={routes.home} component={Home} />
          <Route exact strict path={routes.timetable} component={Timetable} />
          <Route exact strict path={routes.topicDatabase} component={TopicDatabase} />
          <Route exact strict path={routes.history} component={History} />
          <Route exact strict path={routes.account} component={Account} />
          {/* TODO:: Redirect i NotFound */}
        </Switch>
      </Suspense>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;
