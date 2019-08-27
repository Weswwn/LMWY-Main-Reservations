import React from 'react';
import PropTypes from 'prop-types';
import ReviewEntry from './ReviewEntry.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    const { listOfReviews } = this.props;
    this.state = {
      currentListOfReviews: listOfReviews,
    };
  }

  componentDidUpdate(prevProps) {
    const { listOfReviews } = this.props;
    if (listOfReviews.length !== prevProps.listOfReviews.length) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        currentListOfReviews: listOfReviews,
      });
    }
  }

  render() {
    const { currentListOfReviews } = this.state;
    // console.log(this.props.listOfReviews);
    if (currentListOfReviews.length > 40) {
      
    }
    return (
      <div key="review-list">
        {currentListOfReviews.map((eachReview) => <ReviewEntry eachReview={eachReview} />)}
      </div>
    );
  }
}

ReviewList.propTypes = {
  listOfReviews: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])).isRequired,
};

export default ReviewList;
