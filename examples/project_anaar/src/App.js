import React, { Component } from 'react';
import './App.css'
import {BrowserRouter, Route} from 'react-router-dom';
import ContentSections from './sections'
import { SectionOne, SectionTwo, SectionFour, SectionFive } from './contents';


class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <Route path="/" component={ContentSections} exact/>
      </BrowserRouter>
    );
  }
}

export default App;
