import React from 'react';
import styled from 'styled-components';
import StarRatingComponent from 'react-star-rating-component';
import PropTypes from 'prop-types';

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
    const { eachReview } = this.props;
    const {
      // eslint-disable-next-line camelcase
      overallRating, foodRating, serviceRating, ambienceRating, date_dined, comment, profilePicture,
      location, numberOfReviews, username,
    } = eachReview;
    this.state = {
      overallRating,
      foodRating,
      serviceRating,
      ambienceRating,
      dateDined: date_dined,
      comment,
      profilePicture,
      location,
      numberOfReviews,
      username,
    };
  }

  render() {
    const { profilePicture } = this.state;
    const { username } = this.state;
    const { location } = this.state;
    const { numberOfReviews } = this.state;
    const { overallRating } = this.state;
    const { dateDined } = this.state;
    const { foodRating } = this.state;
    const { serviceRating } = this.state;
    const { ambienceRating } = this.state;
    const { comment } = this.state;


    return (
      <Body className="review-entry-container">
        <User className="user-data">
          <Image id="profile-img" src={profilePicture} />
          <UserData>{username}</UserData>
          <UserData>{location}</UserData>
          <UserData>{numberOfReviews}</UserData>
        </User>

        <div className="each-rating">
          <div>
            <StarRatingComponent
              name="rate2"
              editing={false}
              value={overallRating}
              starColor="#DA3743"
              emptyStarColor="#e8e6e1"
            />
          </div>

          <div>{dateDined.substring(0, dateDined.indexOf('T'))}</div>
          <b>Overall</b>
          {' '}
          {' '}
          <Rating className="rating-overall">
            {overallRating}
          </Rating>
          {' '}
          {' '}
          <b>Food</b>
          {' '}
          {' '}
          <Rating className="rating-food">
            {foodRating}
          </Rating>
          {' '}
          {' '}
          <b>Service</b>
          {' '}
          {' '}
          <Rating className="rating-service">
            {serviceRating}
          </Rating>
          {' '}
          {' '}
          <b>Ambience</b>
          {' '}
          {' '}
          <Rating className="rating-ambience">
            {ambienceRating}
          </Rating>
          {' '}
          {' '}
          <Comment className="comment">
            {comment}
          </Comment>


        </div>

      </Body>
    );
  }
}
ReviewEntry.propTypes = {
  eachReview: PropTypes.shape({
    overallRating: PropTypes.number.isRequired,
    foodRating: PropTypes.number.isRequired,
    serviceRating: PropTypes.number.isRequired,
    ambienceRating: PropTypes.number.isRequired,
    date_dined: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    profilePicture: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    numberOfReviews: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
  overallRating: PropTypes.number.isRequired,
  foodRating: PropTypes.number.isRequired,
  serviceRating: PropTypes.number.isRequired,
  ambienceRating: PropTypes.number.isRequired,
  date_dined: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  profilePicture: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  numberOfReviews: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
};


export default ReviewEntry;
