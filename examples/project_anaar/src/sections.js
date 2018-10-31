import React from 'react';
import {Parallax } from 'react-spring';
import Navigate from './nav';
import {SectionOne, SectionTwo, SectionFour, SectionFive} from './contents';
import {SectionSix} from './section_six';

class Contentsections extends React.Component{  
  constructor(props) {
    super(props);
    this.state = { 
      isToggleOn: true, 
      offsetLen: 6,
      loadNavigation:false,
      threshold : 0,
      active:-25.45,
      maxLeft : -25.45,
      maxRight : 25.45,
      a:1, 
      flipped : false,

      card1Content: 'He made her laugh. \n She made him work lesser. \n He played tricks on her.\nShe teased him by not completing her stories.\n He woke her up every morning.\n She slept longer.\nHe talked and talked and talked.\nShe listened!',
      card2Content : "Hangouts brough them closer.So much so that, he `proposed` to her via Hangouts",
      card3Content: "She dressed up for a photoshoot. \n She posed. But he Proposed. \n Of course, she said yes - t7hey had already decided a date! \n. As much as she saw it coming, she didnt see it coming\n",
      
    };
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.handleFlipping = this.handleFlipping.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this._renderNavigation = this._renderNavigation.bind(this);
  }
  componentDidMount() {
    this.setState({loadNavigation:true});
    var container = this.parallax.container;
    container.addEventListener('scroll', this.handleScroll);
  }
  _renderNavigation() {
    if (this.state.loadNavigation) {
      return <Navigate active={this.state.active}/>;
    }
  }
  handleFlipping() {
    this.setState({flipped:true});
  }
  handleScroll() {
    var activeState = (this.parallax.current / this.parallax.container.offsetHeight),
     threshold = this.state.threshold + (activeState * 10);
     if (activeState === 0 || threshold < 0) {
       threshold = 0;
     }
     this.setState({active: (threshold + this.state.maxLeft)});
  }
  
  handleClick(parallax, offset) {
    let currentOffset = offset || parallax.offset;
    
    if (currentOffset === this.state.offsetLen) {
      currentOffset=-1;
    }
    parallax.scrollTo(currentOffset + 1);
  }
  render() {
    return (
      <div class="bgImage">
      {this._renderNavigation()}
        <Parallax ref={ref => (this.parallax = ref)} pages={9}>
          <Parallax.Layer offset={0} speed={0} factor={8} onClick={e => this.handleClick(this.parallax,.1)}/>
          <Parallax.Layer factor={1} offset={0.1} speed={.2} onClick={e => this.handleClick(this.parallax,.1)}>
            <section id="sOne" class="img-fullscreen">
              <SectionOne />  
            </section>
          </Parallax.Layer>
          
          <Parallax.Layer offset={1.2} speed={.2} factor={1} onClick={e => this.handleClick(this.parallax, 1.3)}>
            <section id="sTwo">
              <SectionTwo/>
            </section>
          </Parallax.Layer>

          <Parallax.Layer offset={2.2} speed={0.2} factor={1} onClick={e => this.handleClick(this.parallax, 2.2)}>
            <section id="sThree"></section>
          </Parallax.Layer>
          <Parallax.Layer offset={2.1} speed={-.310} onClick={e => this.handleClick(this.parallax, 2.1)}>
            <div class="topImg"></div>
          </Parallax.Layer>
          <Parallax.Layer offset={2.2} speed={.5}  onClick={e => this.handleClick(this.parallax, 2.2)}>
            <div class="bottomImg"></div>
          </Parallax.Layer> 
          
          <Parallax.Layer factor={1} offset={3.2} speed={0} onClick={e => this.handleClick(this.parallax,3.1)}>
            <section id="sFour">
              <SectionFour />
            </section>
          </Parallax.Layer>
          
          <Parallax.Layer factor={1} offset={4.4} speed={0} onClick={e => this.handleClick(this.parallax,4.3)}>
            <section id="sFive">
              <SectionFive />
            </section>
          </Parallax.Layer>

          <Parallax.Layer factor={1} offset={5.6} speed={0} onClick={e => this.handleClick(this.parallax,5.4)}>
            <section id="sSeven">
              <div className="d-flex flex-column w-100 h-100">
                <div className="align-items-center mb-auto h-100">
                  <iframe
                    title="maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.576894994789!2d80.25271465034191!3d12.934893219137827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525cdd5d90609f%3A0xf6d497e08ae5e492!2sThe+Royal+Palms!5e0!3m2!1sen!2sus!4v1538564720063"
                    frameborder="0" style={{ border: "0" }} allowfullscreen></iframe>
                </div>
              </div>
            </section>
          </Parallax.Layer>
          </Parallax>
      </div>
    );
  }
}

export default Contentsections;
