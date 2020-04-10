import React, {Suspense, lazy, useState, useEffect} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import {Provider} from 'react-redux';
import store from 'store';
import LoadingSpinner from 'components/atoms/LoadingSpinner';

const LoginPage = lazy(() => import('components/pages/LoginPage'));
const MainRoute = lazy(() => import('components/MainRoute'));

const Root = (props) => {
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    fetch('/user')
      .then((resp) => resp.json())
      .then((data) => setUser(JSON.stringify(data)))
      .catch((err) => {
        setUser(false);
        console.log(err);
      });
    console.log(user);
  }, [user]);

  if (user === undefined) {
    return <div>Loading...</div>;
  }

  if (user) {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Suspense fallback={<LoadingSpinner />}>
            <Switch>
              <Route path="/" component={MainRoute} />
            </Switch>
          </Suspense>
        </BrowserRouter>
      </Provider>
    );
  }

  if (!user) {
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
