import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReviewEntry from './components/ReviewEntry.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    axios.get('/api/restaurants/?/reviews', {
      params: {
        // r_id:
      },
    });
  }

  render() {
    return (
      <div><ReviewEntry /></div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
