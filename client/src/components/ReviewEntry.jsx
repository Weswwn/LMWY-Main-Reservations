import React from 'react';

class ReviewEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overallRating: this.props.listOfReviews.overallRating,
      foodRating: null,
      serviceRating: null,
      ambienceRating: null,
      dateDined: null,
      comment: null,
      profilePicture: null,
      location: null,
      numberOfReviews: 110,
    };
  }

  render() {
    // const { overallRating } = this.state;
    // const { foodRating } = this.state;
    return (
      <div className="review-container">
        hi
      </div>
    );
  }
}

export default ReviewEntry;
