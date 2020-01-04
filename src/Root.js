import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from 'routes';

const MainTemplate = lazy(() => import('templates/MainTemplate'));
const MenuSidebar = lazy(() => import('organism/MenuSidebar'));
const NextMeet = lazy(() => import('organism/NextMeet'));

const Home = lazy(() => import('pages/HomePage'));
const Timetable = lazy(() => import('pages/TimetablePage'));
const TopicDatabase = lazy(() => import('pages/TopicDatabasePage'));
const History = lazy(() => import('components/pages/HistoryPage'));
const Account = lazy(() => import('pages/AccountPage'));

const Root = () => (
  <BrowserRouter>
    <Suspense
      fallback={
        <div>
          <h1>Ładowanie...</h1>
        </div>
      }
    >
      <MainTemplate>
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
      </MainTemplate>
    </Suspense>
  </BrowserRouter>
);

export default Root;
