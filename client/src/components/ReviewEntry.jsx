import React from 'react';

class ReviewEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overallRating: this.props.eachReview.overallRating,
      foodRating: this.props.eachReview.foodRating,
      serviceRating: this.props.eachReview.serviceRating,
      ambienceRating: this.props.eachReview.ambienceRating,
      dateDined: this.props.eachReview.date_dined,
      comment: this.props.eachReview.comment,
      profilePicture: null,
      location: this.props.eachReview.location,
      numberOfReviews: this.props.eachReview.numberOfReviews,
      username: this.props.eachReview.username,
    };
  }

  render() {
    // const { overallRating } = this.state;
    // const { foodRating } = this.state;
    return (
      <div className="review-entry-container">
        {this.state.overallRating}
        {this.state.username}
      </div>
    );
  }
}

export default ReviewEntry;
