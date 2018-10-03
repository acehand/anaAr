import React, { Component } from 'react';
import logo from './logo.svg'
import './App.css'
import ContentSections from './sections'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContentSections/>
      </div>
    );
  }
}

export default App;
