import React from 'react';
import { Navbar} from 'react-bootstrap';
import { Nav} from 'react-bootstrap';
import { NavDropdown} from 'react-bootstrap';
import { Container} from 'react-bootstrap';

import '../CartWidget/CartWidget'
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#" id='logo'>LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="#">
            <Nav.Link href="#">Ejemplo 1</Nav.Link>
            <Nav.Link href="#p">Ejemplo 2</Nav.Link>
            <NavDropdown title="Categorias" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#">Primera</NavDropdown.Item>
                <NavDropdown.Item href="#">Segunda</NavDropdown.Item>
                <NavDropdown.Item href="#">Tercera</NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        <CartWidget/>
        </Container>
        </Navbar>
    );
};
  
export default NavBar;