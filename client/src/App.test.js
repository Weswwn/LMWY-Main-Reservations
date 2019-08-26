import React from 'react';
import { shallow } from 'enzyme';
import ReviewEntry from './components/ReviewEntry';

// Test that ReviewList's props has the listOfReviews that we passed

describe('Test all states and corresponding DOM renders', () => {
  const review = {
    id: 98,
    overallRating: 4,
    foodRating: 3,
    serviceRating: 5,
    ambienceRating: 1,
    comment: 'In quisquam suscipit nisi quis. Delectus delectus sed facilis quos. Facilis qui vel dolores. Animi pariatur eos.',
    r_id: 'r2',
    u_id: 1,
    date_dined: '2019-07-28T07:00:00.000Z',
    user_id: 1,
    username: 'Neha Walsh',
    location: 'Crooksville',
    numberOfReviews: 66,
    profilePicture: 'https://s3.amazonaws.com/uifaces/faces/twitter/danillos/128.jpg',
    vipStatus: 0,
  };

  // ------------------ RENDER TEST -------------------------
  it('ReviewEntry should render without crashing', () => {
    shallow(<ReviewEntry eachReview={review} />);
  });

  // ------------------ overallRating TEST -------------------------
  it('overallRating should be properly set to State', () => {
    const wrapper = shallow(<ReviewEntry eachReview={review} />);

    expect(wrapper.state('overallRating')).toEqual(4);
  });

  it('overallRating should be properly rendered to DOM', () => {
    const wrapper = shallow(<ReviewEntry eachReview={review} />);

    expect(wrapper.find('.rating-overall').text()).toEqual('4');
  });

  // ------------------ foodRating TEST -------------------------
  it('foodRating should be properly set to State', () => {
    const wrapper = shallow(<ReviewEntry eachReview={review} />);

    expect(wrapper.state('foodRating')).toEqual(3);
  });

  it('foodRating should be properly rendered to DOM', () => {
    const wrapper = shallow(<ReviewEntry eachReview={review} />);

    expect(wrapper.find('.rating-food').text()).toEqual('3');
  });

  // ------------------ serviceRating TEST -------------------------
  it('serviceRating should be properly set to State', () => {
    const wrapper = shallow(<ReviewEntry eachReview={review} />);

    expect(wrapper.state('serviceRating')).toEqual(5);
  });

  it('serviceRating should be properly rendered to DOM', () => {
    const wrapper = shallow(<ReviewEntry eachReview={review} />);

    expect(wrapper.find('.rating-service').text()).toEqual('5');
  });

  // ------------------ ambienceRating TEST -------------------------
  it('ambienceRating should be properly set to State', () => {
    const wrapper = shallow(<ReviewEntry eachReview={review} />);

    expect(wrapper.state('ambienceRating')).toEqual(1);
  });

  it('ambienceRating should be properly rendered to DOM', () => {
    const wrapper = shallow(<ReviewEntry eachReview={review} />);

    expect(wrapper.find('.rating-ambience').text()).toEqual('1');
  });

  // ------------------ dateDined TEST -------------------------
  it('dateDined should be properly set to State', () => {
    const wrapper = shallow(<ReviewEntry eachReview={review} />);

    expect(wrapper.state('dateDined')).toEqual('2019-07-28T07:00:00.000Z');
  });
  // Come back to test Date later
});
