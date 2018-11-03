import React, { Component } from 'react';
import './App.css'
import ContentSections from './sections'


class App extends Component {
  render() {
    return (
      <div className="App">
        <ContentSections/>
        <div className="footer">
          <span className="float-right red-text"> Designed by the Bride ; Implemented by Groom</span>
        </div>
      </div>
    );
  }
}

export default App;
