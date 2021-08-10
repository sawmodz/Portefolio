import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export class Main extends React.PureComponent {
  render () {
    return (
      <App/>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById("root"))
