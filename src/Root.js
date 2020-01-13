import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from 'routes';
import { Provider } from "react-redux";
import store from "store";

const MainTemplate = lazy(() => import('components/templates/MainTemplate'));
const MenuSidebar = lazy(() => import('components/organisms/MenuSidebar'));
const NextMeet = lazy(() => import('components/organisms/NextMeet'));

const Home = lazy(() => import('components/pages/HomePage'));
const Timetable = lazy(() => import('components/pages/SchedulesPage'));
const TopicDatabase = lazy(() => import('components/pages/TopicDatabasePage'));
const History = lazy(() => import('components/pages/MeetingHistoryPage'));
const Account = lazy(() => import('components/pages/AccountPage'));


const Root = () => (
  <Provider store={store}>
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
  </Provider>
);

export default Root;

// import React, {lazy, Suspense} from 'react';
// import {Switch, Route, Redirect} from 'react-router-dom';

// const Home = lazy(() => import('./organism/Home'));
// const NotFound = lazy(() => import('./organism/NotFound'));

// function App() {
//   return (
//     <div>
//       <Suspense
//         fallback={
//           <div>
//             <h1>Loading...</h1>
//           </div>
//         }
//       >
//         <Switch>
//           <Route strict exact path="/" component={Home} />
//           <Route strict exact path="/404" component={NotFound} />
//           <Redirect to="/404" />
//         </Switch>
//       </Suspense>
//     </div>
//   );
// }