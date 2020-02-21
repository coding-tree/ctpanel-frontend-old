import React, {useEffect} from 'react';
import {Route} from 'react-router-dom';

const PrivateRoute = ({component: Component, path, ...rest}) => {
  useEffect(() => {
    if (loading || isAuthenticated) {
      return;
    }
    const fn = async () => {
      await loginWithRedirect({
        appState: {targetUrl: path},
      });
    };
    fn();
  }, [loading, isAuthenticated, loginWithRedirect, path]);

  const render = props => (isAuthenticated === true ? <Component {...props} /> : null);

  return <Route path={path} render={render} {...rest} />;
};

export default PrivateRoute;
