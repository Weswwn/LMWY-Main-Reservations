import React from 'react';
import PropTypes from 'prop-types';
import ReviewEntry from './ReviewEntry.jsx';
import ButtonList from './ButtonList.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    const { listOfReviews } = this.props;
    this.state = {
      currentListOfReviews: listOfReviews,
      pageIndex: 0,
    };
    this.changePage = this.changePage.bind(this);
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

  changePage(indexClicked, e) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setTimeout(() => {
      this.setState({
        pageIndex: indexClicked,
      });
    }, 1000);
  }


  render() {
    // Batch the reviews into batches of 40 and push into reviewBatchArray
    const { currentListOfReviews } = this.state;
    const reviewBatchArray = [];
    if (currentListOfReviews.length > 40) {
      let tempCounter = 0;
      for (let i = 40; i < currentListOfReviews.length; i += 40) {
        reviewBatchArray.push(currentListOfReviews.slice(tempCounter, i));
        if (i + 40 > currentListOfReviews.length) {
          const amountleft = currentListOfReviews.length - i;
          const finalAmount = amountleft + i;
          reviewBatchArray.push(currentListOfReviews.slice(i, finalAmount));
        } else {
          tempCounter += 40;
        }
      }
    } else {
      reviewBatchArray.push(currentListOfReviews);
    }

    const { pageIndex } = this.state;
    return (
      <div key={`${pageIndex}Review`}>
        {reviewBatchArray.length !== 0
          ? reviewBatchArray[pageIndex].map((eachReview) => <ReviewEntry eachReview={eachReview} />)
          : null}
        {currentListOfReviews.length !== 0
          ? <ButtonList changePage={this.changePage} numberOfPages={reviewBatchArray.length} /> : null}
      </div>
    );
  }
}

ReviewList.propTypes = {
  listOfReviews: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])).isRequired,
};

export default ReviewList;
