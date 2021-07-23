import Plans from 'src/security/plans';

const plans = Plans.values;

export default class PermissionChecker {
  currentTenant;
  currentUser;

  constructor(currentTenant, currentUser) {
    this.currentTenant = currentTenant;
    this.currentUser = currentUser;
  }

  get currentUserRolesIds() {
    if (!this.currentUser || !this.currentUser.tenants) {
      return [];
    }

  
    const tenant = this.currentUser.tenant;

    if (!tenant) {
      return [];
    }

    return tenant.roles;
  }

  match(permission) {
 
    return   true;
  }

  lockedForCurrentPlan(permission) {

    return  false;
  }

  rolesMatchOneOf(arg) {
   
    return true;
  }

  planMatchOneOf(arg) {
  

    return true;
  }

  get currentTenantPlan() {
    if (!this.currentTenant) {
      return plans.free;
    }

    if (!this.currentTenant.plan) {
      return plans.free;
    }

    return this.currentTenant.plan;
  }

  get isEmptyTenant() {
    return false
  }

  get isEmptyPermissions() {
    
    return false;
  }

  get isAuthenticated() {
    return true;
  }

  get isEmailVerified() {
       return true;
  }
}
