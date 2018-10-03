import React from 'react';
import { Spring, Parallax, ParallaxLayer } from 'react-spring';
import { Container, Row, Col } from 'reactstrap';
import Navigate from './nav';

class Contentsections extends React.Component{  
  constructor(props) {
    super(props);
    this.state = { 
      isToggleOn: true, 
      offsetLen: 2, 
      loadNavigation:false,
      heading1 : "Anand & Archana",
      subHeading1: "Few years ago, they didnt know what they were meant to be",
      subHeading2: "Now, they are all geared up to exchange rings, party around and get married",
      eventDate : "Sunday, December 9th 2018"
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
        <Parallax ref={ref => (this.parallax = ref)} pages={3} >
          <Parallax.Layer id="sOne" factor={1} offset={0} speed={.25}  onClick={e => this.handleClick(this.parallax)}>
            <section id="sOne" class="img-fullscreen">
              <Container className="align-center">
                <Row>
                  <Col md={{size:10}} className="fWhite">
                      <h1 className="section-title">
                        Anand &amp; Archana
                      </h1>
                      <h3 className="section-subtitle  mbr-light">
                        <span>{this.state.subHeading1}</span><br/>
                      <span>{this.state.subHeading2}</span>
                      </h3>
                      <p class="section-text display-7">
                        {this.state.eventDate}
                      </p>
                  </Col>
                </Row>
              </Container>
            </section>
          </Parallax.Layer>
        </Parallax>
      </div>
    );
  }
}

export default Contentsections;
