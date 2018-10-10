import React from 'react';
import {Parallax } from 'react-spring';
import Navigate from './nav';
import {SectionOne, SectionTwo, SectionThree, SectionFour, SectionFive} from './contents';
import SnowStorm from 'react-snowstorm';
import stars from './Images/stars.png'

import HeaderMain from './Images/HeaderMain.jpeg'
import skyline2 from './Images/skyline2.jpg'
import {
   Card, CardTitle, CardText, CardColumns, Fa,
  CardSubtitle, CardBody, CardImage, FlippingCard, CardUp, Avatar
} from 'mdbreact'

const scrollSpySectionsOffset = [];

const RainDropDiv = (() => {
  return <div class="raindrop"></div>;
});

const ParallaxCard = ({offset, img, title, content, marginLeft, action, flipped}) => (
  <Parallax.Layer factor={1} offset={offset} speed={-.1} style={{ width: "30%", marginLeft: `${marginLeft}` }}>
    <Card className="card-image" style={{ backgroundImage: "url('https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')" }}>
      <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
        <div>
          <CardTitle tag="h3" className="pt-2 "><strong>{title}</strong></CardTitle>
          <div className="display-linebreak"><p>{content}</p></div>
        </div>
      </div>
    </Card>
  </Parallax.Layer>
);

class Contentsections extends React.Component{  
  constructor(props) {
    super(props);
    this.state = { 
      isToggleOn: true, 
      offsetLen: 5,
      loadNavigation:false,
      active : 1,
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
    var activeState = this.parallax.current / 1000 + .8;
    console.log(Math.round(activeState));
    this.setState({active:Math.round(activeState)});
  }
  
  handleClick(parallax, offset) {
    let currentOffset = offset || parallax.offset;
    
    if (currentOffset === this.state.offsetLen) {
      currentOffset=-1;
    }
    parallax.scrollTo(currentOffset + 1);
  }
  render() {
    let rows = [];
    for (let i = 0; i < 200; i++) {
      rows.push(<RainDropDiv />);
    }   
    return (
      <div class="bgImage">
        <div class="raindrops">
          {rows}
        </div>
        <Parallax ref={ref => (this.parallax = ref)} pages={8}>
          <Parallax.Layer offset={0} speed={0} factor={8} style={{ }} onClick={e => this.handleClick(this.parallax, .6)}/>
          <Parallax.Layer factor={1} offset={0.2} speed={.2} onClick={e => this.handleClick(this.parallax)}>
          <section id="sOne" class="img-fullscreen">
            <SectionOne />  
          </section>
          </Parallax.Layer>
          <Parallax.Layer offset={1.2} speed={.2} factor={1} onClick={e => this.handleClick(this.parallax)}>
            <section id="sTwo">
              {this.state.loadNavigation && <SectionTwo/>}
            </section>
          </Parallax.Layer>

          <Parallax.Layer offset={2.2} speed={0.2} factor={1} onClick={e => this.handleClick(this.parallax, 2)}>
            <section id="sThree"></section>
          </Parallax.Layer>
          <Parallax.Layer offset={2.3} speed={-.310} onClick={e => this.handleClick(this.parallax, 2)}>
              <div class="topImg"></div>
            </Parallax.Layer>
          
            <Parallax.Layer offset={2.43} speed={.5}  onClick={e => this.handleClick(this.parallax, 2)}>
              <div class="bottomImg"></div>
            </Parallax.Layer> 
          
          <Parallax.Layer offset={3.2} speed={.5} onClick={e => this.handleClick(this.parallax, 2)} />
          <Parallax.Layer factor={1} offset={3.2} speed={0} onClick={e => this.handleClick(this.parallax)}>
            <section id="sFour">
              <SectionFour />
            </section>
          </Parallax.Layer>
          
          <Parallax.Layer factor={1} offset={4.4} speed={0} onClick={e => this.handleClick(this.parallax)}>
            <section id="sFive">
              <SectionFive />
            </section>
          </Parallax.Layer>

          <Parallax.Layer factor={1} offset={5.6} speed={0} onClick={e => this.handleClick(this.parallax)} >
            <section id="sSix">
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
