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
  Fa,
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
      <BrowserRouter>
        <Navbar className="nav-stack" fixed="top">
          <Nav navbar right className="justify-content-center">
            <NavItem >
                  <Fa icon="circle mt-2" size="9x" />
                  <NavLink active={this.state.active === 1 ? true : false} smooth="true" to="#sOne">
                  <p>Meet</p>
                  </NavLink>
              </NavItem>
              <NavItem>
                <NavLink active={this.state.active === 2 ? true : false} smooth="true" to="#sTwo"><p>Spark</p></NavLink>
                  </NavItem>
                  <NavItem>
                <NavLink active={this.state.active === 3 ? true : false} smooth="true" to="#sThree"><p>Grow</p></NavLink>
                  </NavItem>
                  <NavItem>
                <NavLink active={this.state.active === 4 ? true : false} smooth="true" to="#sFour"><p>Confirm</p></NavLink>
                  </NavItem>
                  <NavItem>
                  <NavItem></NavItem>
                    <NavLink active={this.state.active === 5 ? true : false} smooth="true" to="#sFive"><p>Gather</p></NavLink>
                  </NavItem>
                <NavItem>
                  <NavLink active={this.state.active === 6 ? true : false} smooth="true" to="#sFive"><p>D-Day</p></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink active={this.state.active === 6 ? true : false} smooth="true" to="#sFive"><p>D-place</p></NavLink>
                </NavItem>
              </Nav>
          </Navbar>
    </BrowserRouter>
      
    
    );
  }
}

export default Navigate;





