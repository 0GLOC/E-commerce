import React from 'react';
import { Navbar, Nav, Offcanvas, Container} from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar bg="light" expand={false}>
            <Container fluid>
                <Navbar.Brand href="#">Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">Titulo</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link href="#action1">Ejemplo 1</Nav.Link>
                        <Nav.Link href="#action2">Ejemplo 2</Nav.Link>
                        <Nav.Link href="#action2">Ejemplo 3</Nav.Link>
                        <Nav.Link href="#action2">Ejemplo 4</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
};
  
export default NavBar;