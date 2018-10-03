import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
} from 'reactstrap';
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
          <Navbar fixed="top" color="warning" light expand="md">
            <NavbarBrand href="/">Booya</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Scrollspy items={['sOne', 'sTwo', 'sThree']} 
              currentClassName="is-current" 
              className="ml-auto navbar nav leftNav">  
                <NavItem>
                  <Link smooth to="#sOne">Intro</Link>
                  </NavItem>
                  <NavItem>
                  <Link smooth to="#sTwo" class="nav-link" >HER</Link>
                  </NavItem>
                  <NavItem>
                  <Link smooth to="#sThree" class="nav-=link">Him</Link>
                  </NavItem>
                </Scrollspy>
            </Collapse>
          </Navbar>
      </div>
    </BrowserRouter>
      
    
    );
  }
}

export default Navigate;





