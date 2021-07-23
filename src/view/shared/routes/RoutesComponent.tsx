import authSelectors from 'src/modules/auth/authSelectors';
import layoutSelectors from 'src/modules/layout/layoutSelectors';
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import PrivateRoute from 'src/view/shared/routes/PrivateRoute';
import ProgressBar from 'src/view/shared/ProgressBar';
import routes from 'src/view/routes';
import CustomLoadable from '../CustomLoadable';
import { Route, Switch } from 'react-router-dom';

function RoutesComponent(props) {
  const isInitialMount = useRef(true);

  const authLoading = useSelector(
    authSelectors.selectLoadingInit,
  );
  const layoutLoading = useSelector(
    layoutSelectors.selectLoading,
  );
  const loading = authLoading || layoutLoading;
  const currentUser = useSelector(
    authSelectors.selectCurrentUser,
  );
  const currentTenant = useSelector(
    authSelectors.selectCurrentTenant,
  );

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      ProgressBar.start();
      return;
    }

    if (!loading) {
      ProgressBar.done();
    }
  }, [loading]);

  if (loading) {
    return <div />;
  }

  const route = routes.privateRoutes[0];

  return (
   
  <Switch>
  {routes.privateRoutes.map((route) => (
    <PrivateRoute
      key={route.path}
      currentUser={currentUser}
      currentTenant={currentTenant}
      permissionRequired={route.permissionRequired}
      path={route.path}
      component={CustomLoadable({
        loader: route.loader,
      })}
      exact={Boolean(route.exact)}
    />
  ))}
  </Switch>


  );
}

export default RoutesComponent;
