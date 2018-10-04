import React from 'react';
import {Parallax } from 'react-spring';
import Navigate from './nav';
import {SectionOne, SectionTwo, SectionThree, SectionFour} from './contents';
import SnowStorm from 'react-snowstorm';
import stars from './Images/stars.png'
import HeaderMain from './Images/HeaderMain.jpeg'
import skyline2 from './Images/skyline2.jpg'


// const ParallaxPage = ({offset, speed, that}) => (
//   <Parallax.Layer offset={offset} speed={speed} onClick={e => that.handleClick(that.parallax)}/>
// );

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
    
    if (currentOffset === this.state.offsetLen) {
      currentOffset=-1;
    }
    parallax.scrollTo(currentOffset + 1);
  }
  render() {
    return (
      <div>
          {this._renderNavigation()}
        <Parallax ref={ref => (this.parallax = ref)} pages={6}>
          <Parallax.Layer offset={1} speed={1} style={{ backgroundColor: '#00C853' }} />
          <Parallax.Layer offset={2} speed={1} style={{ backgroundColor: '#18FFFF' }} />
          <Parallax.Layer offset={0} speed={0} factor={6} style={{ backgroundImage: `url(${stars})`, backgroundSize: 'cover' }} onClick={e => this.handleClick(this.parallax)}/>
          <Parallax.Layer factor={1} offset={0.2} speed={-0.3} onClick={e => this.handleClick(this.parallax)}>
            <section id="sOne" class="img-fullscreen">
              <SectionOne />
            </section>
          </Parallax.Layer>
          <Parallax.Layer offset={1} speed={.5} onClick={e => this.handleClick(this.parallax)}>
            <section id="sTwo"></section>
          </Parallax.Layer>
          <Parallax.Layer  offset={2.2} speed={-.5} style={{ backgroundColor: '#00C853', width: "30%", marginLeft: "10%", height: "100px" }}/>
          <Parallax.Layer  offset={2.2} speed={-.5} style={{ backgroundColor: '#18FFFF', width: "30%", marginLeft: "50%", height: "100px" }}/>
          <Parallax.Layer  offset={2.6} speed={-.5} style={{ backgroundColor: '#00C852', width: "30%", marginLeft: "10%", height: "100px" }}/>
          <Parallax.Layer offset={2.6} speed={-.5} style={{ backgroundColor: '#18FFFB', width: "30%", marginLeft: "50%", height: "100px" }}/>

          <Parallax.Layer offset={3} speed={.5} onClick={e => this.handleClick(this.parallax)} />
          <Parallax.Layer offset={3} speed={0} factor={1} style={{ backgroundImage: `url(${skyline2})`, height: "20%", width: "100%", backgroundSize: "fill" }} onClick={e => this.handleClick(this.parallax)}>
            <section id="sThree">
              <SectionThree /> 
            </section>
          </Parallax.Layer>
          
          <Parallax.Layer factor={1} offset={4} speed={-.1} onClick={e => this.handleClick(this.parallax)}>
            <section id="sFour">
              <SectionFour />
            </section>
          </Parallax.Layer>
          <Parallax.Layer factor={1} offset={5.1} speed={0} onClick={e => this.handleClick(this.parallax)} >
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
