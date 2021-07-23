import { connectRouter } from 'connected-react-router';
import layout from 'src/modules/layout/layoutReducers';
import auth from 'src/modules/auth/authReducers';
import customer from 'src/modules/customer/customerReducers';
import testing from 'src/modules/testing/testingReducers';

import { combineReducers } from 'redux';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    layout,
    auth,
    customer,
    testing

  });
