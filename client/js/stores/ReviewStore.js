'use strict';

import alt from '../utils/Alt';
import ReviewActions from '../actions/ReviewActions';
import toastr from 'toastr';

class ReviewStore {

  constructor() {
    this.bindActions(ReviewActions);
    this.review = null;
    this.stars = null;
    this.reviews = [];
  }

  onUpdateReview(e) {
    this.review = e.target.value;
  }

  onUpdateStars(e) {
    this.stars = e[1].rating;
  }

  onCreateReviewSuccess() {
    toastr.success('Review posted!');
  }

  onFetchReviewSuccess(res) {
    this.reviews = res.data;
  }
}

export default alt.createStore(ReviewStore);
