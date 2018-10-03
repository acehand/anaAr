import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
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
        <Navbar fixed="top" color="warning" light expand="md" className="bb">
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Scrollspy items={['sOne', 'sTwo', 'sThree', 'sFour','sFive']}
              currentClassName="is-current" 
              className="ml-auto navbar nav leftNav">  
                <NavItem>
                  <NavLink smooth="true" href="#sOne">Intro</NavLink>
                  </NavItem>
                  <NavItem>
                <NavLink smooth="true" href="#sTwo">HER</NavLink>
                  </NavItem>
                  <NavItem>
                <NavLink smooth="true" href="#sThree">Him</NavLink>
                  </NavItem>
                  <NavItem>
                <NavLink smooth="true" href="#sFour">Invite </NavLink>
                  </NavItem>
                  <NavItem>
                <NavLink smooth="true" href="#sFive">Location</NavLink>
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





