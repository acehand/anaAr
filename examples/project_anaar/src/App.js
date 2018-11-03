import React, { Component } from 'react';
import './App.css'
import {BrowserRouter, Route} from 'react-router-dom';
import ContentSections from './sections'
import { SectionOne, SectionTwo, SectionFour, SectionFive } from './contents';


class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <div>
          <Route path="/" component={ContentSections} exact/>
        </div>
        
      </BrowserRouter>
    );
  }
}

export default App;
