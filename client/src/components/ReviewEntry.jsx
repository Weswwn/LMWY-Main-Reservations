import React from 'react';
import styled from 'styled-components';
import StarRatingComponent from 'react-star-rating-component';
import PropTypes from 'prop-types';
import moment from 'moment';

// ------ MAIN BODY STYLE --------
const Body = styled.div`
  font-family: 'Source Sans Pro', sans-serif;
  display: flex;
  height: 30%;
  max-width: 600px;
  width: 100%;
  padding: 1rem 0 1rem 0;
  margin: 0 70px 0 200px;
  border-bottom: 1px solid #d8d9db;
  height: auto;
`;
Body.displayName = 'Body';

// ------ REVIEW BOX STYLING ---------
const ReviewBody = styled.span`
  font-size: 14px;
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
  padding: 0 0 0 0;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
  :focus {
    outline:0;
  }
`;
CommentButton.displayName = 'CommentButton';

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

const VIP = styled.div`
    text-transform: uppercase;
    position: absolute;
    background-color: #fdaf08;
    padding: 2px 0.5rem;
    font-size: 12px;
    border-radius: 1rem;
    font-weight: 700;
    top: -2px;
    color: #fff;
    left: 0;
`;
VIP.displayName = 'VIP';


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
      location, numberOfReviews, username, vipStatus,
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
      vipStatus,
    };
    this.handleShowMore = this.handleShowMore.bind(this);
  }

  handleShowMore(e) {
    e.preventDefault();
    this.setState((prevState) => ({
      readMe: !prevState.readMe,
    }));
  }

  render() {
    const {
      profilePicture, username, location, numberOfReviews, overallRating, foodRating, serviceRating,
      ambienceRating, comment, readMe,
    } = this.state;
    let { dateDined } = this.state;


    const todayDate = moment();
    const todayYear = todayDate.format('YYYY');
    const todayMonth = todayDate.format('MM');
    const todayDay = todayDate.format('DD');


    dateDined = moment(dateDined);
    const dinedYear = dateDined.format('YYYY');
    const dinedMonth = dateDined.format('MM');
    const dinedDay = dateDined.format('DD');


    const reviewDate = moment(`${dinedYear}-${dinedMonth}-${dinedDay}`);
    const currentDate = moment(`${todayYear}-${todayMonth}-${todayDay}`);


    const daySinceDining = currentDate.diff(reviewDate, 'days');
    // console.log(daySinceDining);

    let commentFirstHalf = null;
    let commentSecondHalf = null;
    if (comment.length > 300) {
      commentFirstHalf = comment.slice(0, 301);
      commentSecondHalf = comment.slice(301, comment.length);
    }
    const { vipStatus } = this.state;
    return (
      <Body className="review-entry-container">
        <UserBody className="user-data">
          {vipStatus === 1 ? <VIP>VIP</VIP> : null}
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
              {daySinceDining > 8 ? `Dined on ${moment(dateDined).format('MMMM D, YYYY')}` : `Dined ${daySinceDining} days ago`}
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
            {comment.length > 300
              ? (
                <div>
                  {readMe === true ? commentFirstHalf + commentSecondHalf : `${commentFirstHalf}...`}
                  <div>
                    {readMe === true ? <CommentButton onClick={(e) => this.handleShowMore(e)} type="button">- Read Less</CommentButton>
                      : <CommentButton onClick={(e) => this.handleShowMore(e)} type="button">+ Read More</CommentButton>}
                  </div>
                </div>
              )
              : comment}
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
    vipStatus: PropTypes.bool.isRequired,
  }).isRequired,
};


export default ReviewEntry;
