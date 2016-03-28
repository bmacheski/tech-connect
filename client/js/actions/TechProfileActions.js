'use strict';

import alt from '../utils/Alt';
import axios from 'axios';
import toastr from 'toastr';

class TechProfileActions {

  constructor() {
    this.generateActions(
      'updateBio',
      'updateLocation',
      'toggleEdit',
      'fetchProfileSuccess',
      'updateProfileSuccess'
    )
  }

  createProfile(email, location, bio) {
    axios
      .post('/api/tech/create', {
        email: email,
        bio: bio,
        location: location
      })
      .then(() => {
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

  updateProfile(email, bio, location, cb) {
    axios
      .put(`/api/tech/profile/${email}`, {
        bio: bio,
        location: location
      })
      .then(() => {
        this.actions.updateProfileSuccess(cb);
      })
  }
}

export default alt.createActions(TechProfileActions);
