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
      subHeading1: "For a very long time, they knew each other.",
      subHeading2: "But they never really saw each other.",
      subHeading3: "Until they were struck by the lightning from each other.",
      subHeading4: "After that, even Zues couldn't stop them.",
      eventDate: "Sunday, December 9th 2018"
    }
  }
  render() {
    return (
      <Container className="align-center">
        <Row>
          <Col lg={10} className="fWhite">
            <div class="top-block"><h1 className="section-title top-block">{this.state.heading1}</h1></div>
            <h3 className="section-subtitle  mbr-light mid-block">
              <span>{this.state.subHeading1}</span><br/>
              <span>{this.state.subHeading2}</span><br />
              <span>{this.state.subHeading3}</span><br />
              <span>{this.state.subHeading4}</span><br />
            </h3>
          </Col>
        </Row>
      </Container>
    );
  }
}

export class SectionThree extends React.Component {
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
export class SectionTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heading1: "One fine fall trip",
      subHeading1: "Two people, who knew each other for a very long time but never really saw each other until they were struck by a lightning.",
      subHeading2: "After that, even Zues couldn't stop them.",
      eventDate: "Sunday, December 9th 2018",
      content: 'He made her laugh. She made him work lesser. \n He played tricks on her. She teased him by not completing her stories.\n He woke her up every morning. She slept longer.\nHe talked and talked and talked. She listened!',
      card2Content: "Hangouts brough them closer.So much so that, he `proposed` to her via Hangouts",
      card3Content: "She dressed up for a photoshoot. \n She posed. But he Proposed. \n Of course, she said yes - t7hey had already decided a date! \n. As much as she saw it coming, she didnt see it coming\n",
    }
  }
  render() {
    return(
      <Container className="align-center">
        <Row>
          <Col md={10} className="fWhite center-block">
            <h1 className="section-title center-text">One fall week</h1>
            <Spring from={
              { color: "blue", fontSize: "0px", left: "0px" }
            } to={
              { color: 'white', fontSize: "50px", left: "10%" , textAlign:"center" }
            }
              config={{ tension: 15, friction: 50 }}>
              {props => <div style={props}><p className="section-subtitle  mbr-light content center-text display-linebreak ">{this.state.content}</p> </div>}
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
