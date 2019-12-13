import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { routes } from 'routes';
import MainTemplate from 'templates/MainTemplate';

import MenuSidebar from 'components/organism/MenuSidebar';

//import Home from 'views/HomePage';
import Timetable from 'views/TimetablePage';
import TopicDatabase from 'views/TopicDatabasePage';
import History from 'views/HistoryPage';
import Materials from 'views/MaterialsPage';
import MyProfile from 'views/MyProfilePage';
import Settings from 'views/SettingsPage';

const Root = () => (
    <BrowserRouter>
        <MainTemplate>
            <MenuSidebar />
            <Switch>
                {/* <Route exact path={routes.default} component={Home} />
                <Route exact path={routes.home} component={Home} /> */}
                <Route exact path={routes.timetable} component={Timetable} />
                <Route exact path={routes.topicDatabase} component={TopicDatabase} />
                <Route exact path={routes.history} component={History} />
                <Route exact path={routes.materials} component={Materials} />
                <Route exact path={routes.myProfile} component={MyProfile} />
                <Route exact path={routes.settings} component={Settings} />
            </Switch>
        </MainTemplate>
    </BrowserRouter>
);

export default Root;