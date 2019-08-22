import React from 'react';

class SummaryComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfReviews: 110,
      foodRating: null,
      serviceRating: null,
      ambienceRating: null,
      valueRating: null,
      noise: null,
      percentageRecommended: null,
      numOf5Stars: null,
      numOf4Stars: null,
      numOf3Stars: null,
      numOf2Stars: null,
      numOf1Stars: null,
    };
  }

  render() {
    const { numberOfReviews } = this.state;
    return (
      <div className="review-container">
        <div className="review-total-sumcount">
          <h1>
             What
            {' '}
            {numberOfReviews}
            {' '}
            People Are Saying
          </h1>
        </div>
        <div className="review-sum-paragraph">
          <b><p>Overall ratings and reviews</p></b>
          <p id="review-paragraph">Reviews can only be made by diners who have eaten at this restaurant</p>
        </div>
      </div>
    );
  }
}

export default SummaryComponent;
