import React, {Suspense, lazy} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {Provider} from 'react-redux';
import store from 'store';
import LoadingSpinner from 'components/atoms/LoadingSpinner';

const LoginPage = lazy(() => import('components/pages/LoginPage'));
const MainRoute = lazy(() => import('components/MainRoute'));

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<LoadingSpinner />}>
          <Switch>
            <Route strict exact path="/login" component={LoginPage} />
            <Route path="/" component={MainRoute} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
