class Authorization{
  constructor(permissions, users) {
    this.permissions = permissions
  }

  listPermissions(userId){
    let roles = [];
    let grantedPermissions = [];
    for (let user of this.users){
      if(userId = user.id){
      roles = user.roles;
      break;  
      }
    }
    for (let role of roles) {
      for(let permission of this.permissions) {
        if (permission.role == role) {
          if (permission.active) {
            grantedPermissions.push(permission.name)
          }

        }
      }

    }
    return grantedPermissions
  }

  checkPermitted(permissionName, userId){

    return
  }
}

module.exports = Authorization