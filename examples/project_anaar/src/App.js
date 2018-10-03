import React, { Component } from 'react';
import './App.css'
import ContentSections from './sections'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContentSections/>
        <div id="footer">
          <div className="container">
            <p className="footer-block">Place sticky footer content here.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
