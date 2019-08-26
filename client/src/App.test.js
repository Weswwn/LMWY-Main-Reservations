import React from 'react';
import { shallow } from 'enzyme';

import App from './App.jsx';
import ReviewEntry from './components/ReviewEntry';

// Test that ReviewList's props has the listOfReviews that we passed

describe('ReviewList with one review', () => {
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
  it('ReviewEntry should render w/o crashing', () => {
    shallow(<ReviewEntry eachReview={review} />);
  });

  it('ReviewEntry state should match prop passed in', () => {
    const wrapper = shallow(<ReviewEntry eachReview={review} />);
    console.log(wrapper.find('.rating-service').debug());

    expect(wrapper.find('.rating-service').text()).toEqual('5');
    // console.log(wrapper.find('.Rating-food'));
    // expect(wrapper.find('.rating-food')).toBe();
  });
});
