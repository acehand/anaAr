import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import {
  Collapse,
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
        <Navbar fixed="top" color="warning" light expand="md" className="bb">
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav navbar right>
                <NavItem>
                <NavLink active={this.state.active === 1 ? true : false} smooth="true" to="#sOne">Intro</NavLink>
                  </NavItem>
                  <NavItem>
                <NavLink active={this.state.active === 2 ? true : false} smooth="true" to="#sTwo">HER</NavLink>
                  </NavItem>
                  <NavItem>
                <NavLink active={this.state.active === 3 ? true : false} smooth="true" to="#sThree">Him</NavLink>
                  </NavItem>
                  <NavItem>
                <NavLink active={this.state.active === 4 ? true : false} smooth="true" to="#sFour">Invite </NavLink>
                  </NavItem>
                  <NavItem>
                <NavLink active={this.state.active === 5 ? true : false} smooth="true" to="#sFive">Location</NavLink>
                  </NavItem>
                </Nav>
            </Collapse>
          </Navbar>
      </div>
    </BrowserRouter>
      
    
    );
  }
}

export default Navigate;





