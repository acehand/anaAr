import React, { Component } from 'react';
import './App.css'
import {BrowserRouter, Route} from 'react-router-dom';
import ContentSections from './sections'
import { SectionOne, SectionTwo, SectionFour, SectionFive } from './contents';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFooterContent : false
    };
  }
  render() {
    return (
      <BrowserRouter >
        <ContentSections showFooterContent={this.state.showFooterContent}/>
      </BrowserRouter>
    );
  }
}

export default App;
