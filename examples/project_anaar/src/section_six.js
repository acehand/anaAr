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
        { title: 'Chat and Chit', value:  "6:30PM"}, 
        { title: 'Performance', value:  '6:45PM'}, 
        { title: "Food", value:  "7:00 PM Onwards"}, 
        { title: 'CutLose and photos', value:  "8:00PM - 10:OOPM"}],
      marriage: [
        {title: 'Kasi yathirai', value:  "7:30 AM"},
        {title: 'oongal', value:  "7:45 AM" },
        {title: 'Dum Dum Dum', value:  '8:15 : 9:30 AM' },
        {title: 'Sapadu', value:  "10:00 AM" },
      ],
    }
  }
  render() {
    return (
      <div className="container h-100">
        <h1 className="section-title">Minutes</h1>
        <div className="row">
          <blockquote className="blockquote bq-primary">
            <p className="bq-title">08/12/2018</p>
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
            <p className="bq-title">09/12/2018</p>
          </blockquote>
        </div>
          <div className="row align-items-start mt-2 justify-content-center">
            {this.state.marriage.map((obj) =>
              <ColumnElement heading={obj.title} value={obj.value} />
            )
            }
        </div>
      </div>
    );
  }
}