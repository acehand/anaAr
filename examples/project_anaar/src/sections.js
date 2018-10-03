import React from 'react';
import { Spring, Parallax, ParallaxLayer } from 'react-spring';
import Navigate from './nav';

class Contentsections extends React.Component{  
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true, offsetLen: 2};
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

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
        <Navigate/>
        <Parallax ref={ref => (this.parallax = ref)} pages={5} >
          <Parallax.Layer factor={1.5} offset={0} speed={.5} style={{ backgroundColor: 'teal' }} onClick={e => this.handleClick(this.parallax)}>
            <div id="sOne"></div>
          </Parallax.Layer>
          <Parallax.Layer factor={1.5} offset={1} speed={.25} style={{ backgroundColor: 'PInk' }} onClick={e => this.handleClick(this.parallax)}>
            <div id="sTwo"></div>
          </Parallax.Layer>
          <Parallax.Layer factor={1.5} offset={2} speed={.25} style={{ backgroundColor: 'brown' }} onClick={e => this.handleClick(this.parallax)}>
            <div id="sThree"></div>
          </Parallax.Layer>
        </Parallax>
      </div>
    );
  }
}

export default Contentsections;
