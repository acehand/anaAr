import React from 'react';
import { Spring} from 'react-spring';
import { Parallax, Transition } from 'react-spring';
import {
  Container, Row, Col,Card,  CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody, Media, Animation
} from 'mdbreact'
import holdHands from './Images/holdHands.jpg'
import propalLeft from './Images/proposalLeft2.jpg'
import propalRight from './Images/proposalRight.jpg'
import inviteImage from './Images/inviteImg.gif'

export class SectionOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heading1: "Anand & Archana",
      subHeading1: "There were two people who knew other for a very long time.",
      subHeading2: "But they never really saw each other...",
      // subHeading1: "For a very long time, they knew each other.",
      // subHeading2: "But they never really saw each other.",
      // subHeading3: "Until they were struck by the lightning from each other.",
      // subHeading4: "After that, even Zues couldn't stop them.",
    }
  }
  render() {
    return (
      <div className="container h-100 mt-5">
        <Row className="justify-content-center mt-5">
          <Col className="fWhite mt-4 ml-5">
            <h1 className="section-title white-text">{this.state.heading1}</h1>
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <Col lg={10} className="fWhite mt-7">
            <h3 className="section-subtitle mbr-light text-center">
              <span>{this.state.subHeading1}</span><br/>
              <span>{this.state.subHeading2}</span><br/>
            </h3>
          </Col>
        </Row>
      </div>
    );
  }
}

export class SectionThree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

const AnimatedContent = ({left, right}) => {
  return (<p className="section-subtitle  mbr-light content center-text display-linebreak">
    <Animation className="reveal d-inline-block" type="slideInLeft" duration="3s" delay="2s">
      {left}
    </Animation>
    <Animation className="d-inline-block" type="slideInRight" duration="3s" delay="2s">
      {right}
    </Animation>
  </p>
);
};

export class SectionTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heading1: "One fine fall trip...",
      left0: "He bragged about NYC's work life.",
      right0: "She went there to check it out herself.",
      left1: "He made her laugh.",
      right1: "She made him work lesser.",
      left2: "He played tricks on her.",
      right2: " She teased him by not completing her stories.",
      left3: "He woke her up every morning.",
      right3: "She slept longer.",
      left4: "He talked and talked and talked.",
      right4: "She listened!",
    }
  }
  render() {
    return(
      <Container className="align-center">
        <Row>
          <Col md={10} className="center-block">
            <h1 className="section-title center-text white-text">{this.state.heading1}</h1>
            <AnimatedContent left={this.state.left0} right={this.state.right0} />
            <AnimatedContent left={this.state.left1} right={this.state.right1} />
            <AnimatedContent left={this.state.left2} right={this.state.right2} />
            <AnimatedContent left={this.state.left3} right={this.state.right3} />
            <AnimatedContent left={this.state.left4} right={this.state.right4} />
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
      heading1: "When everything was all peachy...",
      proposalContent: "She dressed up for a photoshoot. She posed. But he Proposed. \n \xA0 \xA0 \xA0 \xA0 \xA0 As much as she saw it coming, she didn't see it coming.\n \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 Of course, she said yes!",
    }
  }
  render() {
    return (
      <div className="sticky-top">
        <Animation type="jello" duration="1s" delay="2s">
          <h3 className="text-center section-title fWhite">{this.state.heading1}</h3>
        </Animation>
        <div className="row justify-content-start z-depth-5 float-left d-inline-block rounded border-0">
          <img className="img-halfScreen rounded onHover" src={propalLeft} />
        </div>
        <div className="d-inline-block w-32">
          <p className="w-100 section-subtitle display-linebreak mbr-light sRotate text-left">
              {this.state.proposalContent}
          </p></div>
        <div class="row justify-content-end z-depth-5 float-right d-inline-block rounded border-0">
          <img className="img-halfScreen rounded onHover" src={propalRight} />
        </div>
      </div>
    );
  }
}

export class SectionFive extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inviteTitle1: "Mangalyam Thandunanena",
      inviteSub1: "As these two crazies team up for their game of life,",
      inviteSub2: "You are invited to brighten up the next page of their story by, ",

      reception1: "#1 Making the reception fun by dancing with us[them] on,",
      receptionDate: "Saturday, 8th of December 2018",

      wedding1: "#2 Cheering at our[their] traditional wedding ceremony on,",
      weddingDate: "Sunday, 9th of December 2018",
      // reception1: "Starting with a reception that aims to be a fun dance party, on,",
      // receptionDate: "Saturday, 8th of December 2018",

      // wedding1: "Followed by a traditional wedding ceremony on,",
      // weddingDate: "Sunday, 9th of December 2018",
    }
  }
  render() {
    return (
      <Container className="align-center">
          <h1 className="section-title">{this.state.inviteTitle1}</h1>
      <Media>
          <Media className="ml-4 border border-dark thumbnail">
            <Media object src = {inviteImage}/>
          </Media>
          <Media body className="ml-4">
            <p style={{marginTop:"15%"}} className="section-subtitle mbr-light">
              {this.state.inviteSub1}<br />
              {this.state.inviteSub2}<br /><br />
              {this.state.reception1}<br />
              <span>{this.state.receptionDate}</span><br />
              {this.state.wedding1}<br />
              <strong>{this.state.weddingDate}</strong><br/>
            </p>
      </Media>
        </Media>
      </Container>
    );
  }
}
