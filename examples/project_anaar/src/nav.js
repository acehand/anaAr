import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import {
  Navbar,
  Nav,
  NavLink,
  NavItem,
  Fa,
} from 'mdbreact';

const Item = ({title, property}) => (
  <NavItem>
    <Fa icon="circle" size="9x" />
    <NavLink smooth="true" to="#sOne">
      <p>{title}</p>
    </NavLink>
  </NavItem>
);
class Navigate extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    console.log(props);
    this.state = {
      isOpen: false,
      test: "",
      active: props.active
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

handleScroll(event) {
  debugger;
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
    this.setState({ active : nextProps.active});
  }
  render() {
    return (
      <BrowserRouter>
        <Navbar className="nav-stack" fixed="top">
          <div className="headBgImage"></div>
          <div className="navPointer" style={{ marginLeft: this.state.active + '%' }}/>
          <Nav navbar right className="justify-content-center">
            <Item title="Meet"/>
            <Item title="Spark" />
            <Item title="Grow" />
            <Item title="Confirm" />
            <Item title="Gather" />
            <Item title="D-Day" />
            <Item title="D-place" />            
          </Nav>
        </Navbar>
      </BrowserRouter>
    );
  }
}

export default Navigate;





