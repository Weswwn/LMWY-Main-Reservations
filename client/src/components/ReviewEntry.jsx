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
ReviewBody.displayName = 'ReviewBody';

const RatingData = styled.div`
  margin: 10px 0 0 0;
`;
RatingData.displayName = 'RatingData';

const Rating = styled.span`
  color: #DA3743;
  font-weight: bold;
`;
Rating.displayName = 'Rating';

const Image = styled.img`
  border-radius: 50%;
  width: 48px;
  height: 48px;
`;
Image.displayName = 'Image';

const Comment = styled.div`
  margin: 13px 0 0 0;
  color: #2d333f;
`;
Comment.displayName = 'Comment';

const CommentButton = styled.button`
  border: none;
  font-size: 1em;
  display: block;
  color: #DA3743; 
  margin: 8px 0 0 0;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
  :focus {
    outline:0;
  }
`;

const ReviewDate = styled.span`
  height: 2rem;
  margin: 0 0 40px 0;
`;
ReviewDate.displayName = 'ReviewDate';

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
UserBody.displayName = 'UserBody';


const UserData = styled.div`
  text-align: center;
  margin-top: 0.5rem;
`;
UserData.displayName = 'UserData';

const UserName = styled.div`
  color: #2d333f;
  text-align: center;
  margin-top: 0.5rem;
`;

const NumberOfReviews = styled.div`
  font-size: 12px;
  text-align: center;
  margin-top: 0.5rem;
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
      readMe: false,
    };
    this.handleShowMore = this.handleShowMore.bind(this);
  }

  handleShowMore(e) {
    e.preventDefault();
    console.log('hi');
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

    let commentFirstHalf = null;
    let commentSecondHalf = null;
    if (comment.length > 300) {
      commentFirstHalf = comment.slice(0, 301);
      commentSecondHalf = comment.slice(301, comment.length);
    }

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
            <ReviewDate>
              {' '}
              {'·'}
              {' '}
              {' '}
              {daySinceDining < 8 ? `Dined ${daySinceDining} day(s) ago` : `Dined on ${moment(dateDined).format('MMMM D, YYYY')}`}
            </ReviewDate>
          </div>

          <RatingData>
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
          </RatingData>
          {' '}
          {' '}
          <Comment className="comment">
            {comment.length > 300 ? (
              <div>
                {`${commentFirstHalf}...`}
                <div>
                  <CommentButton onClick={(e) => this.handleShowMore(e)} type="button">+ Read More</CommentButton>
                </div>
              </div>
            ) : comment}
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
