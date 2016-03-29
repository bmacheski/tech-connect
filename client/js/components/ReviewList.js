'use strict';

import React from 'react';
import ReviewActions from '../actions/ReviewActions';
import ReviewStore from '../stores/ReviewStore'
import UserStore from '../stores/UserStore';
import StarRating from 'react-star-rating';

require('react-star-rating/dist/css/react-star-rating.min.css');

class ReviewList extends React.Component {

  constructor(props) {
    super(props);
    this.state = ReviewStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    let user = UserStore.getState().user;

    ReviewStore.listen(this.onChange);
    ReviewActions.getTechReviews(user);
  }

  componentWillUnmount() {
    ReviewStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  renderReviews() {
    { return (this.state.reviews.length) ?
      (
        this.state.reviews.map((review, i) => {
          return (
            <div key={i}>
              <h3>{review.message}</h3>
              <StarRating
                name="tech-connect"
                rating={review.stars}
              />
            </div>
          )
        })
      ) : (
     <h1>You don't have any reviews yet</h1>
     )
    }
  }

  render() {
    return (
      <div className="ui container holder">
        <div className="ui celled list">
          <h1 className="ui dividing header">Reviews</h1>
          {this.renderReviews()}
        </div>
      </div>
    )
  }
}

export default ReviewList;
