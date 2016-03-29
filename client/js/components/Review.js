'use strict';

import React from 'react';
import ReviewActions from '../actions/ReviewActions';
import ReviewStore from '../stores/ReviewStore'
import StarRating from 'react-star-rating';

require('react-star-rating/dist/css/react-star-rating.min.css')

class Review extends React.Component {

  constructor(props) {
    super(props);
    this.state = ReviewStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    ReviewStore.listen(this.onChange);
  }

  componentWillUnmount() {
    ReviewStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  saveReview(e) {
    e.preventDefault();

    let tech =  this.context.router.getCurrentParams().tech;
    let review = this.state.review;
    let stars = this.state.stars;

    if (review) {
      ReviewActions.createReview(tech, review, stars);
    }
  }

  render() {
    return (
      <div className="ui container holder">
        <h2 className="ui dividing header">Post a review</h2>
        <form
          className="ui fluid form"
          onSubmit={this.saveReview.bind(this)}>
        <div className="title-loc">
        </div>
          <div className="field">
            <h3>
              <label>Review</label>
            </h3>
            <textarea
              placeholder="Detail your experience with your technician."
              onChange={ReviewActions.updateReview}>
            </textarea>
          </div>
          <StarRating
            name="tech-connect"
            caption="Rate your technician!"
            totalStars={5}
            onRatingClick={ReviewActions.updateStars}
          />
          <button
            className="ui submit button"
            type="submit">
            Submit Review
          </button>
        </form>
      </div>
    )
  }
}

Review.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default Review;
