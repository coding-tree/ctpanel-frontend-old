import React, {lazy, Suspense} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {routes} from 'routes';

import MenuSidebar from 'organism/MenuSidebar';
import NextMeet from 'organism/NextMeet';
import MainTemplate from 'templates/MainTemplate';

const Home = lazy(() => import('pages/HomePage'));
const Timetable = lazy(() => import('pages/TimetablePage'));
const TopicDatabase = lazy(() => import('pages/TopicDatabasePage'));
const History = lazy(() => import('pages/HistoryPage'));
const Account = lazy(() => import('pages/AccountPage'));

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <MenuSidebar />
      <NextMeet />

      <Suspense
        fallback={
          <div style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <h1>Ładowanie...</h1>
          </div>
        }
      >
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
