import React from 'react';
import { Spring} from 'react-spring';
import { Parallax, Transition } from 'react-spring';
import {
  Container, Row, Col,Card,  CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody, Media
} from 'mdbreact'
import holdHands from './Images/holdHands.jpg'

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
            <Transition
              from={{ opacity: 0, top: "0" }}
              enter={{ opacity: 1, top: "30px"}}
              update={{ opacity: 0.5, height: "0"}}
              leave={{ opacity: 0 }}>
              {styles => <div style={styles}><h1 className="section-title">{this.state.heading1}</h1></div>}
            </Transition>
            
            <h3 className="section-subtitle  mbr-light">
              <span>{this.state.subHeading1}</span><br />
              <span>{this.state.subHeading2}</span>
            </h3>
            <p className="section-text display-7">
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
      <Container style={{ top: "20%", position: "absolute", left: "10%" }}>
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
              {props => <div className="section-title" style={props}><p className="section-text">we would like to invite you to the premiere of "The wedding kalyanam".</p> </div>}
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
      subHeading3: "dont forget to bring ur fun and party size on",
      eventDate: "Sunday, December 9th 2018",
      partyDate: "Saturday, December 8th 2018",
    }
  }
  render() {
    return (
      <Container className="align-center">
        <Media>
          <Media left className="border">
            <Spring
              from={{
                opacity:0,
                background: 'linear-gradient(to right, #30e8bf, #ff8235)',
                boxShadow: '0px 1000px 1500px -10px #2D3747',
              }}
              to={{
                height: "500px",
                opacity:1,
                background: 'linear-gradient(to right, #009fff, #ec2f4b)',
                boxShadow: '0px 10px 15px -10px #2D3747',
              }}
              config={{ tension: 30, friction: 100 }}
              >
              {styles => <img style={styles} className="img-halfScreen" src={holdHands} />}
            </Spring>
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
              <span>&<br/>{this.state.subHeading3}</span><br/>
              <span>{this.state.partyDate}</span>
            </p>
      </Media>
        </Media>
      </Container>
    );
  }
}
