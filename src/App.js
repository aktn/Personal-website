import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Info from './info/containers/info/info';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Info></Info>
      </div>
    );
  }
}

export default App;
