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

  // ------------------ comment TEST -------------------------
  it('ambienceRating should be properly set to State', () => {
    const wrapper = shallow(<ReviewEntry eachReview={review} />);

    expect(wrapper.state('comment')).toEqual('In quisquam suscipit nisi quis. Delectus delectus sed facilis quos. Facilis qui vel dolores. Animi pariatur eos.');
  });

  it('ambienceRating should be properly rendered to DOM', () => {
    const wrapper = shallow(<ReviewEntry eachReview={review} />);

    expect(wrapper.find('.comment').text()).toEqual('In quisquam suscipit nisi quis. Delectus delectus sed facilis quos. Facilis qui vel dolores. Animi pariatur eos.');
  });

  // ------------------ profilePicture TEST -------------------------
  it('profile-img should be properly set to State', () => {
    const wrapper = shallow(<ReviewEntry eachReview={review} />);

    expect(wrapper.state('profilePicture')).toEqual('https://s3.amazonaws.com/uifaces/faces/twitter/danillos/128.jpg');
  });

  it('profile-img should be properly rendered to DOM', () => {
    const wrapper = shallow(<ReviewEntry eachReview={review} />);

    expect(wrapper.find('#profile-img').prop('src')).toEqual('https://s3.amazonaws.com/uifaces/faces/twitter/danillos/128.jpg');
  });

  // ------------------ CONDITIONAL DATE RENDER TEST -------------------------
  it('Should render the conditional that is greater than 8 days', () => {
    const wrapper = shallow(<ReviewEntry eachReview={review} />);

    expect(wrapper.find('ReviewDate').text()).toEqual(' ·  Dined on July 28, 2019');
  });
});

describe('Test all states and corresponding DOM renders', () => {
  const review = {
    id: 98,
    overallRating: 4,
    foodRating: 3,
    serviceRating: 5,
    ambienceRating: 1,
    comment: 'Maxime velit recusandae dolores incidunt consequatur. Facilis aspernatur dolor voluptas nemo qui aperiam nostrum. Delectus ut laboriosam unde quos et est voluptatem placeat qui. Natus repudiandae expedita ducimus molestias temporibus excepturi est quo. Expedita ut aliquid nihil doloribus et. Sit vel ex est recusandae rerum autem.',
    r_id: 'r2',
    u_id: 1,
    date_dined: '2019-08-26T07:00:00.000Z',
    user_id: 1,
    username: 'Neha Walsh',
    location: 'Crooksville',
    numberOfReviews: 66,
    profilePicture: 'https://s3.amazonaws.com/uifaces/faces/twitter/danillos/128.jpg',
    vipStatus: 0,
    readMe: false,
  };
  // ------------------ DATE RENDER TEST -------------------------
  it('Should render the conditional for when the reviewer dined less than 8 days ago ', () => {
    const wrapper = shallow(<ReviewEntry eachReview={review} />);

    expect(wrapper.find('ReviewDate').text()).toEqual(' ·  Dined 2 days ago');
  });

  // ------------------ COMMENT CONDITIONAL RENDER TEST -------------------------
  it('Should only display firstHalfComment since readMe state is false', () => {
    const wrapper = shallow(<ReviewEntry eachReview={review} />);

    expect(wrapper.state('readMe')).toEqual(false);
    expect(wrapper.find('CommentButton').text()).toEqual('+ Read More');
    expect(wrapper.find('Comment').text()).toEqual('Maxime velit recusandae dolores incidunt consequatur. Facilis aspernatur dolor voluptas nemo qui aperiam nostrum. Delectus ut laboriosam unde quos et est voluptatem placeat qui. Natus repudiandae expedita ducimus molestias temporibus excepturi est quo. Expedita ut aliquid nihil doloribus et. Sit vel ...+ Read More');
  });
});

describe('Test all states and corresponding DOM renders', () => {
  const review = {
    id: 98,
    overallRating: 4,
    foodRating: 3,
    serviceRating: 5,
    ambienceRating: 1,
    comment: 'Maxime velit recusandae dolores incidunt consequatur. Facilis aspernatur dolor voluptas nemo qui aperiam nostrum. Delectus ut laboriosam unde quos et est voluptatem placeat qui. Natus repudiandae expedita ducimus molestias temporibus excepturi est quo. Expedita ut aliquid nihil doloribus et. Sit vel ex est recusandae rerum autem.',
    r_id: 'r2',
    u_id: 1,
    date_dined: '2019-08-26T07:00:00.000Z',
    user_id: 1,
    username: 'Neha Walsh',
    location: 'Crooksville',
    numberOfReviews: 66,
    profilePicture: 'https://s3.amazonaws.com/uifaces/faces/twitter/danillos/128.jpg',
    vipStatus: 0,
    readMe: false,
  };
  // ------------------ READ MORE BUTTON TEST -------------------------
  it('Test that the "readMe" state bangs when "Read ME" button is pressed', () => {
    const wrapper = shallow(<ReviewEntry eachReview={review} />);
    expect(wrapper.find('CommentButton').text()).toEqual('+ Read More');
    expect(wrapper.state('readMe')).toEqual(false);

    wrapper.find('CommentButton').simulate('click', { preventDefault() {} });
    expect(wrapper.state('readMe')).toEqual(true);
    expect(wrapper.find('CommentButton').text()).toEqual('- Read Less');
    expect(wrapper.find('Comment').text()).toEqual('Maxime velit recusandae dolores incidunt consequatur. Facilis aspernatur dolor voluptas nemo qui aperiam nostrum. Delectus ut laboriosam unde quos et est voluptatem placeat qui. Natus repudiandae expedita ducimus molestias temporibus excepturi est quo. Expedita ut aliquid nihil doloribus et. Sit vel ex est recusandae rerum autem.- Read Less');
  });
});
