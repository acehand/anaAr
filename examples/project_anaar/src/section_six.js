import React from 'react';
import { Spring } from 'react-spring';
import { Parallax, Transition } from 'react-spring';
import {
  Container, Row, Col, Card, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody, Media, Animation
} from 'mdbreact'
import holdHands from './Images/holdHands.jpg'
import propalLeft from './Images/proposalLeft2.jpg'
import propalRight from './Images/proposalRight.jpg'
import inviteImage from './Images/inviteImg.gif'


const ColumnElement = ({heading, value}) => {
  return (
    <div className="col-2 borderRight d-md-flex flex-column justify-content-between">
      <div class="z-depth-1">
        <p className="font-weight-bold">{heading}</p>
        <p className="font-weight-normal">{value}</p>
      </div>
    </div>
  );
};
export class SectionSix extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      reception : [
        {title: 'Entry', value : "6:00 PM"},
        {title: 'Chat and Chit', value:  "6:30PM"},
        {title: "Food", value:  "7:00 PM Onwards"},
        {title: 'Performance', value:  '7:30PM'},
        {title: 'Dance and Photos', value:  "The whole time"}],
      marriage: [
        {title: 'Kasi yathirai', value:  "8:00 AM"},
        {title: 'Oonjal', value:  "8:30 AM" },
        {title: 'Dum Dum Dum', value:  '9:00 : 10:30 AM' },
        {title: 'Sapadu', value:  "11:00 AM" },
      ],
      condition1: "1. All times are subject to change ;)",
      condition2: "2. No gift or boquets please. Rule breakers will be subjected to endless dancing!"
    }
  }
  render() {
    return (
      <div className="container h-100">
        <h1 className="section-title">Minutes<sup>1</sup></h1>
        <div className="row">
          <blockquote className="blockquote bq-primary">
            <p className="bq-title">
              Reception<sup>2</sup>, 8th of December 2018
            </p>
          </blockquote>
        </div>
        <div className="row align-items-start mt-2  justify-content-center">
          {this.state.reception.map((obj) =>
            <ColumnElement heading={obj.title} value={obj.value} />
            )
          }
        </div>
        <div className="row mt-5 justify-content-center">
          <hr/>
        </div>
        <div className="row">
          <blockquote className="blockquote bq-primary">
            <p className="bq-title">Wedding, 8th of December 2018</p>
          </blockquote>
        </div>
          <div className="row align-items-start mt-2 justify-content-center">
            {this.state.marriage.map((obj) =>
              <ColumnElement heading={obj.title} value={obj.value} />
            )
            }
        </div>
        <p className="section-subtitle">
        {this.state.condition1} <br/>
        {this.state.condition2}
        </p>
      </div>
    );
  }
}