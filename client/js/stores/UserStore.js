'use strict';

import alt from '../utils/Alt';
import cookie from 'react-cookie';
import UserActions from '../actions/UserActions';
import toastr from 'toastr';

class UserStore {

  constructor() {
    this.bindActions(UserActions);
    this.user = null;
    this.isTech = false;
  }

  onSetUserDataSuccess(res) {
    this.user = res.data;
    console.log('res', res)
    if (res.isTech !== undefined) {
      this.isTech = res.isTech;
    }
  }

  onRemoveCurrentUserSuccess(cb) {
    this.user = null;

    toastr.success('You have successfully logged out.')
    cookie.remove('user');
    cookie.remove('isTech');
    cb();
  }
}

export default alt.createStore(UserStore);
