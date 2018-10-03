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
      offsetLen: 5,
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
        <Parallax ref={ref => (this.parallax = ref)} pages={5}>
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
          <Parallax.Layer factor={1} offset={2} speed={1} onClick={e => this.handleClick(this.parallax)}>
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
          <Parallax.Layer factor={1} offset={4} speed={.25} onClick={e => this.handleClick(this.parallax)}>
          <section id="sFive">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.576894994789!2d80.25271465034191!3d12.934893219137827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525cdd5d90609f%3A0xf6d497e08ae5e492!2sThe+Royal+Palms!5e0!3m2!1sen!2sus!4v1538564720063"
                frameborder="0" style={{ border: "0" }} allowfullscreen></iframe>
          </section>
          
          </Parallax.Layer>
        </Parallax>
      </div>
    );
  }
}

export default Contentsections;
