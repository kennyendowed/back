import React from 'react';
import ReactDOM from 'react-dom';
import { i18n, init as i18nInit } from 'src/i18n';
import AuthService from 'src/modules/auth/authService';
import { AuthToken } from './modules/auth/authToken';


(async function () {
  const isSocialOnboardRequested = AuthService.isSocialOnboardRequested();
  AuthToken.applyFromLocationUrlIfExists();
 // await TenantService.fetchAndApply();

  await i18nInit();

  const App = require('./App').default;
  document.title = i18n('app.title');
  ReactDOM.render(<App />, document.getElementById('root'));
})();
