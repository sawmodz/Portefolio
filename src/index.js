import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './componenent/main/Main';

export class Site extends React.PureComponent {
  render () {
    return (
      <Main/>
    )
  }
}

ReactDOM.render(<Site />, document.getElementById("root"))
