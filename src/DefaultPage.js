import React, { Component } from 'react';
import logo from './logo.svg';


class DefaultPage extends Component {
    render() {
      return (
        <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>src/App.js</code> has been edited.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
      );
    }
}

export default DefaultPage;
