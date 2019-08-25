import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
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
        console.log(response);
        this.setState({
          listOfReviews: response.data,
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

ReactDOM.render(<App />, document.getElementById('app'));
