import React, { Component } from 'react';
import './App.css'
import ContentSections from './sections'


class App extends Component {
  render() {
    return (
      <div className="App">
        <ContentSections/>
        <div className="footer"></div>
      </div>
    );
  }
}

export default App;
