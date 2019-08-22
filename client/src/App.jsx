import React from 'react';
import ReactDOM from 'react-dom';
import SummaryComponent from './components/SummaryComponent.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div><SummaryComponent /></div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
