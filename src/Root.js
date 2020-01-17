import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from 'routes';
import { Provider } from "react-redux";
import store from "store";

import MenuSidebar from 'components/organisms/MenuSidebar';
import NextMeet from 'components/organisms/NextMeet';
import MainTemplate from 'components/templates/MainTemplate';

import Home from 'components/pages/HomePage';
import Timetable from 'components/pages/SchedulesPage';
import TopicDatabase from 'components/pages/TopicDatabasePage';
import History from 'components/pages/MeetingHistoryPage';
import Account from 'components/pages/AccountPage';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainTemplate>
        <MenuSidebar />
        <NextMeet />
        <Suspense fallback={
          <div style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <h1>Ładowanie...</h1>
          </div>
        }>
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
  </Provider>
);

export default Root;