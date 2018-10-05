import React from 'react';
import {Parallax } from 'react-spring';
import Navigate from './nav';
import {SectionOne, SectionTwo, SectionThree, SectionFour} from './contents';
import SnowStorm from 'react-snowstorm';
import stars from './Images/stars.png'
import HeaderMain from './Images/HeaderMain.jpeg'
import skyline2 from './Images/skyline2.jpg'
import {
   Card, CardTitle, CardText, CardColumns, Fa,
  CardSubtitle, CardBody, CardImage,
} from 'mdbreact'

const scrollSpySectionsOffset = [];
const ParallaxCard = ({offset, img, title, content, marginLeft}) => (
  <Parallax.Layer factor={.5} offset={offset} speed={-.1} style={{ width: "30%", marginLeft: `${marginLeft}` }}>
    <Card>
      <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
      </CardBody>
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
      a:1
    };
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this._renderNavigation = this._renderNavigation.bind(this);
  }
  componentDidMount() {
    this.setState({loadNavigation:true});
    var container = this.parallax.container;
    container.addEventListener('scroll', this.handleScroll);
  }
  // _setSectionHeight(){
  //   var container = this.parallax.refs.container,
  //     scrollSpySections = container.getElementsByTagName('section');
  //   for (let i = 0; i < scrollSpySections.length; i++) {
  //     let currentOffsetTop = scrollSpySections[i].offsetTop - (i * 16);
  //     if (!scrollSpySectionsOffset.includes(currentOffsetTop)) {
  //       scrollSpySectionsOffset.push(currentOffsetTop);
  //     }
  //   }
  // } 
  _renderNavigation() {
    if (this.state.loadNavigation) {
      return <Navigate active={this.state.active}/>;
    }
  }
  handleScroll() {
    var activeState = this.parallax.current / 1000 + .8;
    console.log(Math.round(activeState));
    this.setState({active:Math.round(activeState)});
  }
  // _loadSections() {
  //   let 
  // }
  handleClick(parallax, offset) {
    let currentOffset = offset || parallax.offset;
    
    if (currentOffset === this.state.offsetLen) {
      currentOffset=-1;
    }
    parallax.scrollTo(currentOffset + 1);
  }
  render() {
    return (
      <div>
          {this._renderNavigation(this.state.active)}
        <Parallax ref={ref => (this.parallax = ref)} pages={6}>
          <Parallax.Layer offset={0} speed={0} factor={6} style={{ backgroundImage: `url(${stars})`, backgroundSize: 'cover' }} onClick={e => this.handleClick(this.parallax, .6)}/>
          <Parallax.Layer factor={1} offset={0.2} speed={0.3} onClick={e => this.handleClick(this.parallax)}>
            <section id="sOne" class="img-fullscreen">
              <SectionOne />
            </section>
          </Parallax.Layer>
          <Parallax.Layer offset={1.8} speed={.5} factor={1.5} onClick={e => this.handleClick(this.parallax, 2)}>
              <section id ="sTwo"/>
          </Parallax.Layer>
          <ParallaxCard offset={1.3} title="a" content="" img="" marginLeft="10%" />
          <ParallaxCard offset={1.3} title="b" content="" img="" marginLeft="60%" />
          <ParallaxCard offset={2.0} title="c" content="" img="" marginLeft="10%" />
          <ParallaxCard offset={2.0} title="d" content="" img="" marginLeft="60%" />
          
          <Parallax.Layer offset={2.5} speed={.5} onClick={e => this.handleClick(this.parallax, 2)} />
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
