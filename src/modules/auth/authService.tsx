import authAxios from 'src/modules/shared/axios/authAxios';
import { AuthToken } from 'src/modules/auth/authToken';
import AuthCurrentTenant from 'src/modules/auth/authCurrentTenant';
import AuthInvitationToken from 'src/modules/auth/authInvitationToken';


export default class AuthService {

  static async fetchMe() {
    const response = await authAxios.get('/auth/me');
    return response.data;
  }

  static signout() {
    AuthToken.set(null, true);
  }

  static async updateProfile(data) {
    const body = {
      data,
    };

    const response = await authAxios.put(
      '/auth/profile',
      body,
    );

    return response.data;
  }

  static async changePassword(oldPassword, newPassword) {
    const body = {
      oldPassword,
      newPassword,
    };

    const response = await authAxios.put(
      '/auth/change-password',
      body,
    );

    return response.data;
  }


  static isSocialOnboardRequested() {
    const urlParams = new URLSearchParams(
      window.location.search,
    );

    return Boolean(urlParams.get('social'));
  }
}
