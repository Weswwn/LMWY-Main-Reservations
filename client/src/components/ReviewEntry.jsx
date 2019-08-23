import React from 'react';

class ReviewEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overallRating: null,
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
    // const { numberOfReviews } = this.state;
    return (
      <div className="review-container">
        Hello
      </div>
    );
  }
}

export default ReviewEntry;
