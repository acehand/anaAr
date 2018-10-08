import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import {
  Collapse,
  Container,
  Navbar,
  Nav,
  NavbarToggler,
  NavLink,
  NavItem,
} from 'mdbreact';
import Scrollspy from 'react-scrollspy'

class Navigate extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    console.log(props);
    this.state = {
      isOpen: false,
      test: "",
      active: props.active
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ active : nextProps.active});
  }
  render() {
    return (
      <BrowserRouter><div>
        <Container>
        <Navbar fixed="top" color="warning" expand="lg" scrolling>
            <NavbarToggler onClick={this.toggle} />
              <Nav navbar right>
                <NavItem>
                  <NavLink active={this.state.active === 1 ? true : false} smooth="true" to="#sOne">
                  <p>Intro</p>
                  </NavLink>
              </NavItem>
              <NavItem>
                <NavLink active={this.state.active === 2 ? true : false} smooth="true" to="#sTwo"><p>HER</p></NavLink>
                  </NavItem>
                  <NavItem>
                <NavLink active={this.state.active === 3 ? true : false} smooth="true" to="#sThree"><p>Him</p></NavLink>
                  </NavItem>
                  <NavItem>
                <NavLink active={this.state.active === 4 ? true : false} smooth="true" to="#sFour"><p>Invite</p></NavLink>
                  </NavItem>
                  <NavItem>
                <NavLink active={this.state.active === 5 ? true : false} smooth="true" to="#sFive"><p>Location</p></NavLink>
                  </NavItem>
                </Nav>
          </Navbar></Container>
      </div>
    </BrowserRouter>
      
    
    );
  }
}

export default Navigate;





