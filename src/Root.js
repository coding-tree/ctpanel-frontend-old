import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from 'routes';

const MainTemplate = lazy(() => import('components/templates/MainTemplate'));
const MenuSidebar = lazy(() => import('components/organisms/MenuSidebar'));
const NextMeet = lazy(() => import('components/organisms/NextMeet'));

const Home = lazy(() => import('components/pages/HomePage'));
const Timetable = lazy(() => import('components/pages/TimetablePage'));
const TopicDatabase = lazy(() => import('components/pages/TopicDatabasePage'));
const History = lazy(() => import('components/pages/HistoryPage'));
const Account = lazy(() => import('components/pages/AccountPage'));

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
