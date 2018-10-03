import React from 'react';
import { Spring} from 'react-spring';
import {
  Container, Row, Col,Card, Button, CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody, Media
} from 'reactstrap';

export class SectionOne extends React.Component{
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

export class SectionTwo extends React.Component {
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
      <Container style={{ top:"20%", position:"absolute", left:"10%"}}>
        <Row>
          <CardColumns>
            <Card style={{ backgroundColor: '#FDF2E9', borderColor: '#blue' }}>
              <CardBody>
                <CardTitle>Archana</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Content</CardText>
              </CardBody>
            </Card>
            <Card style={{ backgroundColor: '#FDF2E9', borderColor: '#blue' }}>
              <CardBody>
                <CardTitle>Wedding</CardTitle>
                <CardText>Date 1</CardText>
                <CardText>Date 2</CardText>
              </CardBody>
            </Card>
            <Card style={{ backgroundColor: '#D98880', borderColor: '#blue' }}>
              <CardBody>
                <CardTitle>Anand</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Content</CardText>
              </CardBody>
            </Card>
          </CardColumns>
        </Row>
      </Container>
    );
  }
}
export class SectionThree extends React.Component {
  render() {
    return(
      <Container className="align-center">
        <Row>
          <Col md={{ size: 10 }} className="fWhite">
            <h1 className="section-title">"Wedding"</h1>
            <Spring from={
              { color: "blue", fontSize: "0px", left: "0px" }
            } to={
              { color: 'white', fontSize: "50px", left: "45%" }
            }
              config={{ tension: 5, friction: 20 }}>
              {props => <div class="section-title" style={props}><p class="section-text">we would like to invite you to the premiere of "The wedding kalyanam".</p> </div>}
            </Spring>
          </Col>
        </Row>
      </Container>
    );
  }
}


export class SectionFour extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heading1: "Invite",
      subHeading1: "your are invited to cheer two crazies",
      subHeading2: "team up for their game of life on",
      subHeading3: "& dont forget to bring ur fun and party size on",
      eventDate: "Sunday, December 9th 2018",
      partyDate: "Saturday, December 8th 2018",
    }
  }
  render() {
    return (
      <Container className="align-center">
        <Media>
          <Media left href="#">
            <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
          </Media>
          <Media body>
            <Media heading>
              <h1 className="section-title">{this.state.heading1}</h1>
            </Media>
            <h3 className="section-subtitle  mbr-light">
              <span>{this.state.subHeading1}</span><br />
              <span>{this.state.subHeading2}</span>
            </h3>
            <p className="section-subtitle mbr-light">
              {this.state.eventDate}
            </p>
            <p className="section-subtitle mbr-light">
              <span>{this.state.subHeading3}</span><br/>
              <span>{this.state.partyDate}</span>
            </p>
      </Media>
        </Media>
      </Container>
    );
  }
}
