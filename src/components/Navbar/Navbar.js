import React from 'react';
import { Navbar} from 'react-bootstrap';
import { Nav} from 'react-bootstrap';
import { NavDropdown} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import './Navbar.css'
import '../CartWidget/CartWidget'
import logo from '../../assets/img/Logo.png'
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav"  style={{marginLeft: '60px'}}>
            <Nav>
                <NavLink className='logo' to='/'>
                    <img
                    src={logo}
                    alt='logo'
                    height='40'
                    />
                </NavLink>
                <NavLink to='/' style={({ isActive }) => isActive ? { textDecoration: 'none',} : {textDecoration: 'none', color: 'rgba(255,255,255,.55)'}}>Todos Los Productos</NavLink>
            <Nav.Link href="#p"></Nav.Link>
            <NavDropdown title="Categorias" id="collasible-nav-dropdown">
                <NavLink className="dropdown-item" to="/categoria/Acción">Acción</NavLink>
                <NavLink className="dropdown-item" to="/categoria/RPG">RPG</NavLink>
                <NavLink className="dropdown-item" to="/categoria/Plataformas">Plataformas</NavLink>  
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        <CartWidget/>
        </Navbar>
    );
};
  
export default NavBar;