import React from 'react';
import { Spring, Parallax, ParallaxLayer } from 'react-spring';
import { Container, Row, Col } from 'reactstrap';
import Navigate from './nav';
import {SectionOne, SectionTwo, SectionThree, SectionFour} from './contents'
import SnowStorm from 'react-snowstorm';

class Contentsections extends React.Component{  
  constructor(props) {
    super(props);
    this.state = { 
      isToggleOn: true, 
      offsetLen: 2,
      loadNavigation:false,
    };
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this._renderNavigation = this._renderNavigation.bind(this);
  }
  componentDidMount() {
    this.setState({loadNavigation:true});
  }
  _renderNavigation() {
    if (this.state.loadNavigation) {
      return <Navigate />;
    }   
  }
  // _loadSections() {
  //   let 
  // }
  handleClick(parallax) {
    let currentOffset = parallax.offset;
    if (currentOffset == this.state.offsetLen) {
      currentOffset=-1;
    }
    parallax.scrollTo(currentOffset + 1);
  }
  render() {
    return (
      <div>
          {this._renderNavigation()}
        <Parallax ref={ref => (this.parallax = ref)} pages={4}>
          <Parallax.Layer className="subK" factor={1.25} offset={0} speed={.25}  onClick={e => this.handleClick(this.parallax)}>
            <section id="sOne" class="img-fullscreen">
              <SnowStorm snowColor="green" targetElement="sOne" snowCharacter="~^~"/>
              <SectionOne/>
            </section>
          </Parallax.Layer>
          <Parallax.Layer factor={1.25} offset={1} speed={.25} onClick={e => this.handleClick(this.parallax)}>
            <section id="sTwo">
              <SnowStorm snowColor="Orange" targetElement="sTwo" snowCharacter="**" />
              <SectionTwo />
            </section>
          </Parallax.Layer>
          <Parallax.Layer factor={1} offset={2} speed={.25} onClick={e => this.handleClick(this.parallax)}>
          <section id="sThree">
              <SnowStorm snowColor="White" targetElement="sThree" snowCharacter="**" />      
              <SectionThree/>
          </section>
          </Parallax.Layer>
          <Parallax.Layer factor={1} offset={3} speed={.25} onClick={e => this.handleClick(this.parallax)}>
            <section id="sFour">
              <SnowStorm snowColor="White" targetElement="sThree" snowCharacter="**" />
              <SectionFour />
            </section>
          </Parallax.Layer>
        </Parallax>
      </div>
    );
  }
}

export default Contentsections;
