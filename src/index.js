import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'Root';
import {Auth0Provider} from './react-auth0-spa';
import config from 'config/auth0-config.json';
import history from 'utils/history';

const onRedirectCallback = appState => {
  history.push(appState && appState.targetUrl ? appState.targetUrl : window.location.pathname);
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
