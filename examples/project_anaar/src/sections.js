import React from 'react';
import {Parallax } from 'react-spring';
import Navigate from './nav';
import {SectionOne, SectionTwo, SectionFour, SectionFive} from './contents';
import Collage from './Images/Collages2.jpg';
import keyUp from './Images/keyup2.png';
import keyDown from './Images/keydown2.png';

class Contentsections extends React.Component{  
  constructor(props) {
    super(props);
    this.state = { 
      isToggleOn: true, 
      offsetLen: 6,
      loadNavigation:false,
      threshold : 0,
      active: 10,
      maxLeft : 10,
      maxRight : 84,
      a:1, 
      flipped : false,
      card1Content: 'He made her laugh. \n She made him work lesser. \n He played tricks on her.\nShe teased him by not completing her stories.\n He woke her up every morning.\n She slept longer.\nHe talked and talked and talked.\nShe listened!',
      card2Content : "Hangouts brough them closer.So much so that, he `proposed` to her via Hangouts",
      card3Content: "She dressed up for a photoshoot. \n She posed. But he Proposed. \n Of course, she said yes - t7hey had already decided a date! \n. As much as she saw it coming, she didnt see it coming\n",
    };
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
    var activeState = (this.parallax.current )/this.parallax.container.offsetHeight,
     threshold = (activeState * 14.5);
     if (activeState === 0 || threshold < 0) {
       threshold = 0;
     }
     this.setState({active: (threshold + this.state.maxLeft)});
  }
  
  handleClick(parallax, offset) {
    let currentOffset = offset || parallax.offset;
    
    if (currentOffset === this.state.offsetLen-1) {
      currentOffset=-1;
    }
    
    parallax.scrollTo(currentOffset + 1.);
  }
  render() {
    return (
      <div class="bgImage">
      {this._renderNavigation()}
        <Parallax ref={ref => (this.parallax = ref)} pages={6.5}>
          <Parallax.Layer id="1" factor={1} offset={0.1} speed={0} onClick={e => this.handleClick(this.parallax,0)}>
            <section id="sOne" class="img-fullscreen">
              <SectionOne />  
            </section>
          </Parallax.Layer>
          
          <Parallax.Layer id="2" offset={1.1} speed={0} factor={1} onClick={e => this.handleClick(this.parallax, 1)}>
            <section id="sTwo">
              <SectionTwo/>
            </section>
          </Parallax.Layer>

          <Parallax.Layer id="3" offset={2.1} speed={0} factor={1} onClick={e => this.handleClick(this.parallax, 2)}>\
            <section id="sThree">
              <div className="d-flex flex-column h-100">
                <div className="m-2 h-50">
                  <img alt="b" className="h-100" src={Collage} />
                </div>
              </div>
            </section>
          </Parallax.Layer>
          <Parallax.Layer offset={2.57} speed={-.3} onClick={e => this.handleClick(this.parallax, 2)}>
            <div class="topImg">
              <img alt="b" className="h-200" src={keyUp} />
            </div>
          </Parallax.Layer>
          <Parallax.Layer offset={2.58} speed={.3}  onClick={e => this.handleClick(this.parallax, 2)}>
            <div class="topImg">
              <img alt="b" className="h-200"  src={keyDown} />
            </div>
          </Parallax.Layer> 
          
          <Parallax.Layer id = "4" factor={1} offset={3.1} speed={0} onClick={e => this.handleClick(this.parallax,3)}>
            <section id="sFour">
              <SectionFour />
            </section>
          </Parallax.Layer>
          
          <Parallax.Layer id="5" factor={1} offset={4.1} speed={0} onClick={e => this.handleClick(this.parallax,4)}>
            <section id="sFive">
              <SectionFive />
            </section>
          </Parallax.Layer>

          <Parallax.Layer id="6" factor={1} offset={5.1} speed={0} onClick={e => this.handleClick(this.parallax,5)}>
            <section id="sSeven">
              <div className="d-flex justify-content-center flex-column h-15">
                <div className="mb-auto">
                  <h3 className="section-title white-text">Meet us at ...</h3>
                </div>
              </div>  
              <iframe
                  title="maps"
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
