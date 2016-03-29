'use strict';

import alt from '../utils/Alt';
import axios from 'axios';
import toastr from 'toastr';
import UserActions from './UserActions'

class TechProfileActions {

  constructor() {
    this.generateActions(
      'updateBio',
      'updateLocation',
      'updatePhone',
      'toggleEdit',
      'fetchProfileSuccess',
      'updateProfileSuccess'
    )
  }

  createProfile(email, location, bio, phone) {
    axios
      .post('/api/tech/create', {
        email: email,
        bio: bio,
        location: location,
        phone: phone
      })
      .then(() => {
        UserActions.setUserData(email, true);
        toastr.success('You have successfully registered!')
      })
  }

  fetchProfile(email) {
    axios
      .get(`/api/tech/profile/${email}`)
      .then(res => {
        this.actions.fetchProfileSuccess(res);
      })
  }

  toggleEdit() {
    this.actions.toggleEdit();
  }

  updateProfile(email, bio, location, phone, cb) {
    axios
      .put(`/api/tech/profile/${email}`, {
        bio: bio,
        location: location,
        phone: phone
      })
      .then(() => {
        this.actions.updateProfileSuccess(cb);
      })
  }
}

export default alt.createActions(TechProfileActions);
