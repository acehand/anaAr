import React from 'react';
import { Spring, Parallax, ParallaxLayer } from 'react-spring';

class Contentsections extends React.Component{
  
  render() {
    return (
      <div>
        <Parallax ref={ref => (this.parallax = ref)} pages={5} >
        <Parallax.Layer factor={1.5} offset={0} speed={.5} style={{ backgroundColor: 'teal' }} onClick={() => this.parallax.scrollTo(1)}>
            <div id="sOne"></div>
          </Parallax.Layer>
          <Parallax.Layer factor={1.5} offset={1} speed={.25} style={{ backgroundColor: 'PInk' }} >
            <div id="sTwo"></div>
          </Parallax.Layer>
          <Parallax.Layer factor={1.5} offset={2} speed={.25} style={{ backgroundColor: 'brown' }} >
            <div id="sThree"></div>
          </Parallax.Layer>
        </Parallax>
        </div>
    );
  }
}

export default Contentsections;
