import React from 'react';
import styled from 'styled-components';
import StarRatingComponent from 'react-star-rating-component';
import PropTypes from 'prop-types';
import moment from 'moment';

// ------ MAIN BODY STYLE --------
const Body = styled.div`
  font-family: 'Source Sans Pro', sans-serif;
  display: flex;
  height: 25%;
  max-width: 600px;
  width: 100%;
  padding: 1rem 0 1rem 0;
  margin: 0 70px 0 200px;
  border-bottom: 1px solid #d8d9db;
`;
Body.displayName = 'Body';

// ------ REVIEW BOX STYLING ---------
const ReviewBody = styled.span`
  font-size: 14px;
  overflow: auto;
  width: 480px;
`;

const Rating = styled.span`
  color: red;
`;
Rating.displayName = 'Rating';


const Image = styled.img`
  border-radius: 50%;
  width: 48px;
  height: 48px;
`;
Image.displayName = 'Image';

const Comment = styled.div`
  margin: 20 0 0 0;
  color: #2d333f;
`;
Comment.displayName = 'Comment';

// ------ USERBODY BOX STYLING ---------
const UserBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 1rem;
  margin-left: 1rem;
  width: 6rem;
  font-size: 0.875rem;
  color: #6f737b;
  position: relative;
`;
UserBody.displayName = 'User';


const UserData = styled.div`
  text-align: center;
`;
UserData.displayName = 'UserData';

const UserName = styled(UserData)`
  color: #2d333f;
`;

const NumberOfReviews = styled(UserData)`
  font-size: 12px;
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
    let { dateDined } = this.state;
    const { foodRating } = this.state;
    const { serviceRating } = this.state;
    const { ambienceRating } = this.state;
    const { comment } = this.state;

    let todayDate = moment();
    todayDate = moment(todayDate).format('YYYY-MM-DD');

    const todayYear = Number(todayDate.slice(0, 4));
    const todayMonth = Number(todayDate.slice(5, 7));
    const todayDay = Number(todayDate.slice(8, 10));


    dateDined = dateDined.substring(0, dateDined.indexOf('T'));
    const dinedYear = Number(dateDined.slice(0, 4));
    const dinedMonth = Number(dateDined.slice(5, 7));
    const dinedDay = Number(dateDined.slice(8, 10));

    const reviewDate = moment([dinedYear, dinedMonth, dinedDay]);
    const currentDate = moment([todayYear, todayMonth, todayDay]);
    const daySinceDining = currentDate.diff(reviewDate, 'days');

    return (
      <Body className="review-entry-container">
        <UserBody className="user-data">
          <Image id="profile-img" src={profilePicture} />
          <UserName>{username}</UserName>
          <UserData>{location}</UserData>
          <NumberOfReviews>
            {numberOfReviews}
            {' '}
              reviews
          </NumberOfReviews>
        </UserBody>

        <ReviewBody className="each-rating">
          <div>
            <StarRatingComponent
              name="rate2"
              editing={false}
              value={overallRating}
              starColor="#DA3743"
              emptyStarColor="#e8e6e1"
            />
            {' '}
            {'·'}
            {' '}
            <span>
              {' '}
              {daySinceDining < 8 ? `Dined ${daySinceDining} days ago` : `Dined on ${moment(dateDined).format('MMMM D, YYYY')}`}
            </span>
          </div>

          <b>Overall</b>
          {' '}
          {' '}
          <Rating className="rating-overall">
            {overallRating}
          </Rating>
          {' '}
          {'·'}
          {' '}
          <b>Food</b>
          {' '}
          {' '}
          <Rating className="rating-food">
            {foodRating}
          </Rating>
          {' '}
          {'·'}
          {' '}
          <b>Service</b>
          {' '}
          {' '}
          <Rating className="rating-service">
            {serviceRating}
          </Rating>
          {' '}
          {'·'}
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


        </ReviewBody>

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
