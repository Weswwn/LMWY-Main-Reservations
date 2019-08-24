import React from 'react';
import ReviewEntry from './ReviewEntry.jsx';

const ReviewList = (props) => (
  <div key="review-list">
    {props.listOfReviews.map((eachReview) => <ReviewEntry eachReview={eachReview} />)}
  </div>
);

export default ReviewList;
