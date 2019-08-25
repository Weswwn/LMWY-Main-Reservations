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
    profilePicture: {
      type: 'Buffer',
      data: [
        104,
        116,
        116,
        112,
        115,
        58,
        47,
        47,
        115,
        51,
        46,
        97,
        109,
        97,
        122,
        111,
        110,
        97,
        119,
        115,
        46,
        99,
        111,
        109,
        47,
        117,
        105,
        102,
        97,
        99,
        101,
        115,
        47,
        102,
        97,
        99,
        101,
        115,
        47,
        116,
        119,
        105,
        116,
        116,
        101,
        114,
        47,
        108,
        105,
        110,
        103,
        101,
        115,
        119,
        97,
        114,
        97,
        110,
        47,
        49,
        50,
        56,
        46,
        106,
        112,
        103,
      ],
    },
    vipStatus: 0,
  };
  it('ReviewEntry should render w/o crashing', () => {
    shallow(<ReviewEntry eachReview={review} />);
  });

  it('ReviewEntry state should match prop passed in', () => {
    const wrapper = shallow(<ReviewEntry eachReview={review} />);

    // expect(wrapper.find('.review-entry-container')).toBe(4);
  });
});
