'use strict';

import alt from '../utils/Alt';
import axios from 'axios';

class TechProfileActions {
  constructor() {
    this.generateActions(
      'updateBio',
      'updateLocation'
    )
  }
    createProfile(id, location, bio) {
      axios
        .post('/api/tech/create', {
          id: id,
          bio: bio,
          location: location
        })
        .then(() => {
          console.log('profile posted!');
        })
    }
}

export default alt.createActions(TechProfileActions);
