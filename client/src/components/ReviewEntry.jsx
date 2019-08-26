import React from 'react';
import styled from 'styled-components';

const Rating = styled.span`
  color: red;
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10 10 10 5;
  width: 800px;
  height: 20%;
  
  border-bottom: 1px solid #d8d9db;
`;

const Image = styled.img`
  border-radius: 50%;
  width: 48px;
  height: 48px;
  margin: 20 20 20 20;
`;

const Comment = styled.div`
  padding: 20 0 0 0;
`;

const User = styled.div`
  flex-direction: column;
  align-items: center;
  margin-right: 1rem;
  margin-left: 1rem;
  width: 6rem;
`;

const UserData = styled.div`
  align-items: center;
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
        <User className="user-data">
          <Image id="profile-img" src={this.state.profilePicture} />
          <UserData>{this.state.username}</UserData>
          <UserData>{this.state.location}</UserData>
          <UserData>{this.state.numberOfReviews}</UserData>
        </User>

        <div className="each-rating">
          <div>{this.state.dateDined.substring(0, this.state.dateDined.indexOf('T'))}</div>
          <b>Overall</b>
          {' '}
          {' '}
          <Rating className="rating-overall">
            {this.state.overallRating}
          </Rating>
          {' '}
          {' '}
          <b>Food</b>
          {' '}
          {' '}
          <Rating className="rating-food">
            {this.state.foodRating}
          </Rating>
          {' '}
          {' '}
          <b>Service</b>
          {' '}
          {' '}
          <Rating className="rating-service">
            {this.state.serviceRating}
          </Rating>
          {' '}
          {' '}
          <b>Ambience</b>
          {' '}
          {' '}
          <Rating className="rating-ambience">
            {this.state.ambienceRating}
          </Rating>
          {' '}
          {' '}
          <Comment className="rating-comment">
            {this.state.comment}
          </Comment>


        </div>

      </Body>
    );
  }
}

export default ReviewEntry;
