import React from 'react';
import ReactDOM from 'react-dom';
import SummaryComponent from './components/SummaryComponent.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    
    return (
      <div><SummaryComponent /></div>
    )
  }
}

ReactDOM.render(<App /> , document.getElementById("app"));