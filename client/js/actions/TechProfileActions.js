'use strict';

import alt from '../utils/Alt';
import axios from 'axios';

class TechProfileActions {
  constructor() {
    this.generateActions(
      'updateName',
      'updateLocation',
      'updateBio'
    )
  }
    createProfile(id, name, location, bio) {
      axios
        .post('/api/tech/create', {
          id: id,
          name: name,
          location: location,
          bio: bio
        })
        .then(() => {
          console.log('profile posted!');
        })
    }
}

export default alt.createActions(TechProfileActions);
