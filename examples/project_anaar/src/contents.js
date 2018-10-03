import React from 'react';
import { Container, Row, Col } from 'reactstrap';

class SectionOne extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      heading1: "Anand & Archana",
      subHeading1: "Few years ago, they didnt know what they were meant to be",
      subHeading2: "Now, they are all geared up to exchange rings, party around and get married",
      eventDate: "Sunday, December 9th 2018"
    }
  }
  render() {
    return (
      <Container className="align-center">
        <Row>
          <Col md={{ size: 10 }} className="fWhite">
            <h1 className="section-title">{this.state.heading1}</h1>
            <h3 className="section-subtitle  mbr-light">
              <span>{this.state.subHeading1}</span><br />
              <span>{this.state.subHeading2}</span>
            </h3>
            <p class="section-text display-7">
              {this.state.eventDate}
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default SectionOne