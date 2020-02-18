import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'Root';
import {Auth0Provider} from './react-auth0-spa';
import config from 'config/auth0-config.json';
import history from 'utils/history';

const onRedirectCallback = appState => {
  // TODO: Auth0: Application Login URI
  // We have to check if it's correct because I think it's too complicated and I can't see this in documenation
  history.push(appState && appState.targetUrl ? appState.targetUrl : window.location.pathname);
  history.go(0);
};

ReactDOM.render(
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
    <Root />
  </Auth0Provider>,
  document.getElementById('root')
);
