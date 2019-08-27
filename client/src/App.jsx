import React from 'react';
import axios from 'axios';
import moment from 'moment';
import ReviewList from './components/ReviewList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfReviews: [],
    };
  }

  componentDidMount() {
    let urlParam = document.location.pathname.substring(13);
    urlParam = urlParam.substring(0, urlParam.length - 1);
    console.log(urlParam);
    axios.get('/api/restaurants/:id/reviews', {
      params: {
        id: urlParam,
      },
    })
      .then((response) => {
        const listOfReviews = response.data;
        listOfReviews.sort((a, b) => new Date(b.date_dined) - new Date(a.date_dined));
        // Changed the date format from ISO to MMMM D YYY by utilizing momentJS
        for (let i = 0; i < listOfReviews.length; i += 1) {
          listOfReviews[i].date_dined = moment(listOfReviews[i].date_dined).format('MMMM D, YYYY');
        }
        this.setState({
          listOfReviews,
        });
      });
  }

  render() {
    const { listOfReviews } = this.state;
    return (
      <div><ReviewList listOfReviews={listOfReviews} /></div>
    );
  }
}
export default App;
