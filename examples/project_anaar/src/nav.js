import React from 'react';
import {Router} from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';
import createHistory from 'history/createBrowserHistory';

import {
  Navbar,
  Nav,
  NavItem,
  Fa,
} from 'mdbreact';
const Item = ({title, to}) => (
  <NavItem>
    <Fa icon="circle" size="9x" />
    <Link smooth="true" to={to}>
      <p>{title}</p>
    </Link>
  </NavItem>
);
class Navigate extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleClick = this.handleClick.bind(this);
    
    
    this.state = {
      history : createHistory(),
      isOpen: false,
      scrollable : 0,
      active: props.active
    };
  }
  handleClick(id) {
    let element = document.getElementById("scrollLayer"+id);
    element.scrollIntoView({ 'behavior': 'smooth' });
   }
  componentWillUnmount() {
    this.unlisten();
  }
  componentDidMount() {
    this.state.history.listen((location, action) => {
      let hash = location.hash;
    });
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll(event) {
    let scrollTop = event.srcElement.body.scrollTop,
      itemTranslate = Math.min(0, scrollTop / 3 - 60);

    this.setState({
      transform: itemTranslate
    });
  }
  
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ active: nextProps.active });
  }
  render() {
    return (
      <Router history={this.state.history}>
        <Navbar className="nav-stack" fixed="top">
          <Nav className="justify-content-center">
            <NavItem>
              <Fa icon="circle"  />
              <a onClick={e => this.handleClick("1")}>
                <p>Meet</p>
              </a>
            </NavItem>
            <NavItem>
              <Fa icon="circle" />
              <a  onClick={e => this.handleClick("2")}>
                <p>Connect</p>
              </a>
            </NavItem>
            <NavItem>
              <Fa icon="circle"  />
              <a onClick={e => this.handleClick("3")}>
                <p>Hangout</p>
              </a>
            </NavItem>
            <NavItem>
              <Fa icon="circle" />
              <a onClick={e => this.handleClick("4")}>
                <p>Woo</p>
              </a>
            </NavItem>
            <NavItem>
              <Fa icon="circle" />
              <a onClick={e => this.handleClick("5")}>
                <p>Knot</p>
              </a>
            </NavItem>
            <NavItem>
              <Fa icon="circle" />
              <a onClick={e => this.handleClick("6")}>
                <p>Venue</p>
              </a>
            </NavItem>
          </Nav>
        </Navbar>
      </Router>
    );
  }
}

export default Navigate;





