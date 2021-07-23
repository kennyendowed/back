import PermissionChecker from 'src/modules/auth/permissionChecker';
import React from 'react';
import {
  Redirect,
  Route,
  useLocation,
} from 'react-router-dom';
import Layout from 'src/view/layout/Layout';


function PrivateRoute({
  component: Component,
  currentTenant,
  currentUser,
  permissionRequired,
  ...rest
}) {
  const location = useLocation();

  return (
    <Route
      {...rest}
      render={(props) => {

        return (
          <Layout {...props}>
            
            <Component {...props} />
          </Layout>
        );
      }}
    />
  );
}

export default PrivateRoute;
