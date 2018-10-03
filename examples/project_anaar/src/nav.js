import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { HashLink as Link } from 'react-router-hash-link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import ContentSections from './sections'
import Scrollspy from 'react-scrollspy'

class Navigate extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      test: "",
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <BrowserRouter><div>
        <ContentSections />
          <Navbar fixed="top" color="warning" light expand="lg">
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar justified fill>
                <Scrollspy items={['sOne', 'sTwo', 'sThree']} currentClassName="is-current" className="nav">
                  <NavItem>
                    <Link to="#sOne">Components</Link>
                  </NavItem>
                  <NavItem>
                    <Link to="#sTwo">Components</Link>
                  </NavItem>
                  <NavItem>
                    <Link to="#sThree">Components</Link>
                  </NavItem>
                </Scrollspy>
              </Nav>
            </Collapse>
          </Navbar>
      </div>
    </BrowserRouter>
      
    
    );
  }
}

export default Navigate;





