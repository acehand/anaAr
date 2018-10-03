import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
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
        <Navbar fixed="sticky-top" color="warning" light expand="md" className="bb">
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Scrollspy items={['sOne', 'sTwo', 'sThree', 'sFour','sFive']}
              currentClassName="is-current" 
              className="ml-auto navbar nav leftNav">  
                <NavItem>
                  <Link smooth to="#sOne">Intro</Link>
                  </NavItem>
                  <NavItem>
                  <Link smooth to="#sTwo" class="nav-link" >HER</Link>
                  </NavItem>
                  <NavItem>
                  <Link smooth to="#sThree" class="nav-link">Him</Link>
                  </NavItem>
                  <NavItem>
                    <Link smooth to="#sFour" class="nav-link">Invite</Link>
                  </NavItem>
                  <NavItem>
                    <Link smooth to="#sFive" class="nav-link">Location</Link>
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





