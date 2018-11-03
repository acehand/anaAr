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
    
    
    this.state = {
      history : createHistory(),
      isOpen: false,
      test: "",
      active: props.active
    };
  }
  
  componentWillUnmount() {
    this.unlisten();
  }
  componentDidMount() {
    this.state.history.listen((location, action) => {
      let hash = location.hash;
      // if (hash === "sTwo") {
      //   this.setState({active : "24.5%"});
      // }
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
          <div className="headBgImage"></div>
          <div className="navPointer" style={{ marginLeft: this.state.active + '%' }}/>
          <Nav navbar right className="justify-content-center">
            <Item title="Meet" to="#sOne"/>            
            <Item title="Connect" to="#sTwo"/>
            <Item title="Bond" to="#sThree"/>
            <Item title="Woo" to="#sFour"/>
            <Item title="Knot" to="#sFive"/>
            <Item title="Venue" to="#sSix"/> 
          </Nav>
        </Navbar>
      </Router>
    );
  }
}

export default Navigate;





