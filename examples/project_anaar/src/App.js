import $ from 'jquery';
import React, { Component } from 'react';
import './App.css'
import {BrowserRouter, Route} from 'react-router-dom';
import ContentSections from './sections'
import { SectionOne, SectionTwo, SectionFour, SectionFive } from './contents';
import './sakura/jquery-sakura.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFooterContent : false
    };
  }
  componentDidMount() {
    $('body').sakura('start', {
      blowAnimations: [
        'blow-medium-lerightft',
      ],
      className: 'sakura',
      fallSpeed: 2,
      maxSize: 40,
      minSize: 20,
      newOn: 300,
      swayAnimations: ['sway-4', 'sway-2']
    });
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
