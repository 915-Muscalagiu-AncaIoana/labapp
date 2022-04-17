import React from 'react'
import {Link} from 'react-router-dom'
import {
    Navbar,
    NavItem,
    NavbarToggler,
    Collapse,
    NavLink,
    Nav,
    NavbarBrand,
    Container
} from 'reactstrap';

export default function Navigation() {
    const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div style={{
        display: 'block', width: 550, padding: 30, textAlign: 'center'
    }}>
    <Container textAlign='center'>
      <Navbar fixed='top' color="light" light >
        <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
        <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
        <NavItem>
            <Link to="/">First Page</Link> 
        </NavItem>
        <NavItem>
            <Link to="/2">Second Page</Link> 
        </NavItem>
        <NavItem>
            <Link to="/3">Third Page</Link> 
        </NavItem>
        <NavItem>
            <Link to="/4">Fourth Page</Link> 
        </NavItem>
        </Nav>
        </Collapse>
      </Navbar>
    </Container>
    </div>
  )
}
