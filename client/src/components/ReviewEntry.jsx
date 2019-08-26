import React from 'react';
import styled from 'styled-components';

const Rating = styled.span`
  color: red;
`;

const Body = styled.div`
  display: flex;
  padding: 30 15% 30 15%;
  max-width: 40%;
  max-height: 40%;
  border-bottom: 1px solid grey;
`;

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
      profilePicture: this.props.eachReview.profilePicture,
      location: this.props.eachReview.location,
      numberOfReviews: this.props.eachReview.numberOfReviews,
      username: this.props.eachReview.username,
    };
  }


  render() {
    return (
      <Body className="review-entry-container">
        <div className="each-rating">
          <div>{this.state.dateDined.substring(0, this.state.dateDined.indexOf('T'))}</div>
          <b>Overall</b>
          {' '}
          {' '}
          <Rating className="rating">
            {this.state.overallRating}
          </Rating>
          {' '}
          {' '}
          <b>Food</b>
          {' '}
          {' '}
          <Rating className="rating">
            {this.state.foodRating}
          </Rating>
          {' '}
          {' '}
          <b>Service</b>
          {' '}
          {' '}
          <Rating className="rating">
            {this.state.serviceRating}
          </Rating>
          {' '}
          {' '}
          <b>Ambience</b>
          {' '}
          {' '}
          <Rating className="rating">
            {this.state.ambienceRating}
          </Rating>

          <Rating className="rating">
            <img id="imgElem" src={this.state.profilePicture} />
          </Rating>
        </div>

      </Body>
    );
  }
}

export default ReviewEntry;
