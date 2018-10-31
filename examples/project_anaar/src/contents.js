import React from 'react';
import {
  Container, Row, Col,Card,  CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody, Media, Animation
} from 'mdbreact'
import propalLeft from './Images/proposalLeft2.jpg'
import propalRight from './Images/proposalRight.jpg'
import inviteImage from './Images/inviteImg.gif'

export class SectionOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heading1: "Anand & Archana",
      subHeading1: "There were two people who knew each other for a very long time.",
      subHeading2: "But they never really saw each other...",
      // subHeading1: "For a very long time, they knew each other.",
      // subHeading2: "But they never really saw each other.",
      // subHeading3: "Until they were struck by the lightning from each other.",
      // subHeading4: "After that, even Zues couldn't stop them.",
    }
  }
  render() {
    return (
      <div className="container">
        <Row className="justify-content-center">
          <Col className="mt-6">
            <h1 className=" section-title white-text">{this.state.heading1}</h1>
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
  return (<p className="section-subtitle display-linebreak">
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
      heading1: "One fine fall week...",
      left0: "He bragged about NYC's work life.",
      right0: "She went there to see it for herself.",
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
      <div className="d-flex justify-content-center flex-column">
        <div className="align-self-center title">
          <h3 className="text-center section-title fWhite">{this.state.heading1}</h3>
        </div>
        <div className="align-self-center align-self-md-center w-100">
          <AnimatedContent left={this.state.left0} right={this.state.right0} />
          <AnimatedContent left={this.state.left1} right={this.state.right1} />
          <AnimatedContent left={this.state.left2} right={this.state.right2} />
          <AnimatedContent left={this.state.left3} right={this.state.right3} />
          <AnimatedContent left={this.state.left4} right={this.state.right4} />
        </div>
      </div>      
    );
  }
}
export class SectionFour extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heading1: "When all was peachy...",
      proposalContent: "She dressed up for a photoshoot. She posed. But he Proposed. \n \xA0 \xA0 \xA0 \xA0 \xA0 As much as she saw it coming, she didn't see it coming.\n \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 Of course, she said yes!",
    }
  }
  render() {
    return (
      <div className="w-100 h-100">
        <div className="shadowLayer">
          <div className="d-flex justify-content-center flex-column">
            <div className="mb-auto">
              <h3 className="text-center section-title fWhite">{this.state.heading1}</h3>
            </div>
            <div className="align-self-center mb-auto">
              <p className="section-subtitle display-linebreak sRotate">
                {this.state.proposalContent}
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex flex-row">
          <div className="m-3 w-25">
            <img alt="b" className="z-depth-5 rounded onHover w-100" src={propalLeft} />
          </div>        
          <div className="ml-auto mt-auto m-3 w-25">
            <img alt="b" className=" z-depth-5 rounded onHover w-100" src={propalRight} />
          </div>
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
      inviteSub1: "As we team up for the game of life,",
      inviteSub2: "You are invited to brighten up the next page of our story ",

      reception1: "#1 Making the reception fun by dancing with us",
      receptionDate: "7pm Saturday, 8th of December 2018",

      wedding1: "#2 Cheering at our traditional wedding ceremony",
      weddingDate: "8am Sunday, 9th of December 2018",

    }
  }
  render() {
    return (
      <div>
        <div className="d-flex justify-content-center flex-column">
          <div className="align-self-center title">
            <h1 className="section-title">{this.state.inviteTitle1}</h1>
          </div>
        </div>
        <div className="d-flex justify-content-left flex-row">
          <div className="align-self-left title">
            <Media object src={inviteImage} />
          </div>
        </div>
        <div className="d-flex justify-content-right flex-row">
          <div className="align-self-center title">
            <p style={{ marginTop: "5%" }} className="section-subtitle mbr-light">
              {this.state.inviteSub1}<br />
              {this.state.inviteSub2}<br />
              by<br />
              {this.state.reception1}<br />
              on<br />
              <span class="display-linebreak">{this.state.receptionDate}</span><br /><br />
              {this.state.wedding1}<br />
              on<br />
              <strong><span class="display-linebreak">{this.state.weddingDate}</span></strong><br />
            </p>
          </div>
        </div>
      </div>
    );
  }
}
