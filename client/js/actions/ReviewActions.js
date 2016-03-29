'use strict';

import alt from '../utils/Alt';
import axios from 'axios';

class ReviewActions {

  constructor() {
    this.generateActions(
      'createReviewSuccess',
      'fetchReviewSuccess',
      'updateReview',
      'updateStars'
    )
  }

  createReview(tech, review, stars) {
    axios
      .post(`/api/tech/${tech}/review`, {
        review: review,
        stars: stars
      })
      .then(() => {
        this.actions.createReviewSuccess();
      })
  }

  getTechReviews(tech) {
    axios
      .get(`/api/tech/${tech}/review`)
      .then((res) => {
        this.actions.fetchReviewSuccess(res);
      })
  }
}

export default alt.createActions(ReviewActions);
