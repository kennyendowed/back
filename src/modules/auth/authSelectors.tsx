import { createSelector } from 'reselect';
import AuthCurrentTenant from './authCurrentTenant';
import _get from 'lodash/get';

const CurrentUser = {avatars: [],
                    createdAt: "2021-07-14T17:13:58.385Z",
                    email: "admin@scaffoldhub.io",
                    emailVerified: true,
                    firstName: "admin",
                    lastName: "admin",
                    fullName: "admin",
                    phoneNumber: "2348037535163",
                    id: "60ef1b56f9a8a8000fc29495",
                    updatedAt: "2021-07-14T17:14:10.098Z",
                    __v: 0,
                    _id: "60ef1b56f9a8a8000fc29495",
                    roles: ["admin"],
                    status: "active",
                    tenants: [{
                      createdAt: "2021-07-14T17:14:10.046Z",
                      createdBy: "60ef1b56f9a8a8000fc29495",
                      id: "60ef1b62f9a8a8000fc29497",
                      name: "cpl",
                      plan: "free",
                      planStatus: "active",
                      settings: {
                        backgroundImages: [],
                        createdAt: "2021-07-14T17:14:10.071Z",
                        createdBy: "60ef1b56f9a8a8000fc29495",
                        id: "60ef1b62f9a8a8000fc29499",
                        logos: [],
                        tenant: "60ef1b62f9a8a8000fc29497",
                        theme: "default",
                        updatedAt: "2021-07-14T17:14:10.071Z",
                        __v: 0,
                        _id: "60ef1b62f9a8a8000fc29499"
                      },
                      updatedAt: "2021-07-14T17:14:10.046Z",
                      updatedBy: "60ef1b56f9a8a8000fc29495",
                      url: "f96b3b86-db1c-4ac7-90f2-e1f29413eb35",
          
                    }],
                    tenant: {
                      createdAt: "2021-07-14T17:14:10.046Z",
                      createdBy: "60ef1b56f9a8a8000fc29495",
                      id: "60ef1b62f9a8a8000fc29497",
                      name: "cpl",
                      plan: "free",
                      planStatus: "active",
                      length:1,   
                      status : 'active',                   
                      settings: {
                        backgroundImages: [],
                        createdAt: "2021-07-14T17:14:10.071Z",
                        createdBy: "60ef1b56f9a8a8000fc29495",
                        id: "60ef1b62f9a8a8000fc29499",
                        logos: [],
                        tenant: "60ef1b62f9a8a8000fc29497",
                        theme: "default",
                        updatedAt: "2021-07-14T17:14:10.071Z",
                        __v: 0,
                        _id: "60ef1b62f9a8a8000fc29499"},
                        updatedAt: "2021-07-14T17:14:10.046Z",
                        updatedBy: "60ef1b56f9a8a8000fc29495",
                        url: "f96b3b86-db1c-4ac7-90f2-e1f29413eb35",
            
                      }
            

};

const selectRaw = (state) => state.auth;

const selectAuthenticationUser = createSelector(
  [selectRaw],
  (auth) => auth.authenticationUser,
);

const selectCurrentUser = createSelector(
  [selectRaw],
  (auth) => CurrentUser,
);

const selectCurrentTenant = createSelector(
  [selectRaw],
  (raw) => {
    return CurrentUser.tenant;
  },
);

const selectCurrentUserEmail = createSelector(
  [selectCurrentUser],
  (currentUser) => (CurrentUser.email),
);

const selectCurrentUserFullName = createSelector(
  [selectCurrentUser],
  (currentUser) =>
    CurrentUser.fullName ,
);

const selectSignedIn = createSelector(
  [selectCurrentUser],
  (currentUser) =>
    Boolean(currentUser) && Boolean(CurrentUser.id),
);

const selectRoles = createSelector(
  [selectCurrentUser, selectCurrentTenant],
  (currentUser, currentTenant) => {
    if (!CurrentUser) {
      return [];
    }

    if (!currentTenant) {
      return [];
    }

    const tenantUser = CurrentUser.tenant;

    if (!tenantUser) {
      return [];
    }

    return CurrentUser.roles;
  },
);

const selectLoading = createSelector([selectRaw], (auth) =>
  Boolean(auth.loading),
);

const selectLoadingInit = createSelector(
  [selectRaw],
  (auth) => Boolean(auth.loadingInit),
);

const selectLoadingEmailConfirmation = createSelector(
  [selectRaw],
  (auth) => Boolean(auth.loadingEmailConfirmation),
);

const selectLoadingPasswordResetEmail = createSelector(
  [selectRaw],
  (auth) => Boolean(auth.loadingPasswordResetEmail),
);

const selectLoadingPasswordReset = createSelector(
  [selectRaw],
  (auth) => Boolean(auth.loadingPasswordReset),
);

const selectLoadingVerifyEmail = createSelector(
  [selectRaw],
  (auth) => Boolean(auth.loadingVerifyEmail),
);

const selectLoadingPasswordChange = createSelector(
  [selectRaw],
  (auth) => Boolean(auth.loadingPasswordChange),
);

const selectLoadingUpdateProfile = createSelector(
  [selectRaw],
  (auth) => Boolean(auth.loadingUpdateProfile),
);

const selectErrorMessage = createSelector(
  [selectRaw],
  (auth) => auth.errorMessage,
);

const selectErrorMessageVerifyEmail = createSelector(
  [selectRaw],
  (auth) => auth.errorMessageVerifyEmail,
);
const selectCurrentUserNameOrEmailPrefix = createSelector(
  [selectCurrentUser, selectCurrentUserFullName],
  (currentUser, fullName) => {
    if (!currentUser) {
      return '';
    }

    if (fullName && fullName.length < 25) {
      return fullName;
    }

    if (currentUser.firstName) {
      return currentUser.firstName;
    }

    return currentUser.email.split('@')[0];
  },
);

const selectCurrentUserAvatar = createSelector(
  [selectCurrentUser],
  (currentUser) => {
    if (
      !currentUser ||
      !currentUser.avatars ||
      !currentUser.avatars.length 
    ) {
      return null;
    }

    return null;
  },
);

const selectInvitedTenants = createSelector(
  [selectCurrentUser],
  (currentUser) => {
  
    return CurrentUser.tenant;
  },
);

const selectCurrentSettings = createSelector(
  [selectCurrentTenant],
  // The idea of this method is to refresh
  // where is using if the current tenant changes
  (currentTenant) => {
    return AuthCurrentTenant.getSettings();
  },
);

const selectBackgroundImageUrl = createSelector(
  [selectCurrentTenant],
  // The idea of this method is to refresh
  // where is using if the current tenant changes
  (currentTenant) => {
   

    const settings = AuthCurrentTenant.getSettings();

    return _get(
      settings,
      'backgroundImageUrl',
      _get(
        settings,
        'backgroundImages[0].downloadUrl',
        null,
      ),
    );
  },
);

const selectLogoUrl = createSelector(
  [selectCurrentTenant],
  // The idea of this method is to refresh
  // where is using if the current tenant changes
  (currentTenant) => {
   
    const settings = AuthCurrentTenant.getSettings();

    return _get(
      settings,
      'logoUrl',
      _get(settings, 'logos[0].downloadUrl', null),
    );
  },
);

const authSelectors = {
  selectLoadingPasswordResetEmail,
  selectLoadingEmailConfirmation,
  selectLoadingInit,
  selectLoadingUpdateProfile,
  selectLoading,
  selectRoles,
  selectSignedIn,
  selectCurrentUserFullName,
  selectCurrentUserEmail,
  selectCurrentUser,
  selectAuthenticationUser,
  selectErrorMessage,
  selectErrorMessageVerifyEmail,
  selectRaw,
  selectCurrentUserNameOrEmailPrefix,
  selectCurrentUserAvatar,
  selectLoadingPasswordReset,
  selectLoadingVerifyEmail,
  selectLoadingPasswordChange,
  selectCurrentTenant,
  selectInvitedTenants,
  selectCurrentSettings,
  selectLogoUrl,
  selectBackgroundImageUrl,
};

export default authSelectors;
