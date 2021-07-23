import Permissions from 'src/security/permissions';
const permissions = Permissions.values;

const privateRoutes = [
  {
    path: '/',
    loader: () =>
      import('src/view/customer/list/CustomerListPage'),
    permissionRequired: null,
    exact: true,
  }, 
  {
    path: '/testing',
    loader: () =>
      import('src/view/testing/list/TestingListPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/testing/new',
    loader: () =>
      import('src/view/testing/form/TestingFormPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/testing/importer',
    loader: () =>
      import(
        'src/view/testing/importer/TestingImporterPage'
      ),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/testing/:id/edit',
    loader: () =>
      import('src/view/testing/form/TestingFormPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/testing/:id',
    loader: () =>
      import('src/view/testing/view/TestingViewPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/customer',
    loader: () =>
      import('src/view/customer/list/CustomerListPage'),
    permissionRequired: permissions.customerRead,
    exact: true,
  },
  {
    path: '/customer/new',
    loader: () =>
      import('src/view/customer/form/CustomerFormPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/customer/importer',
    loader: () =>
      import(
        'src/view/customer/importer/CustomerImporterPage'
      ),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/customer/:id/edit',
    loader: () =>
      import('src/view/customer/form/CustomerFormPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/customer/:id',
    loader: () =>
      import('src/view/customer/view/CustomerViewPage'),
    permissionRequired: null,
    exact: true,
  },

].filter(Boolean);


export default {
  privateRoutes,
};
