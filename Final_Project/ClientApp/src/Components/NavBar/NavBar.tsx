import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap";
import { Link } from 'react-router-dom';
import './navbar.css';

const NavBar = () => {
    const { loginWithRedirect, logout } = useAuth0();
    const { isAuthenticated } = useAuth0();
    
    return (
        <>
            <Navbar className="navBar" bg="light" expand="lg">
                <Container className="navbar-container">
                    <div className="navbar-container__left">
                        <Link className='nav-header' to="/"><strong className="nav-header__sub">Borrow</strong>My</Link>
                        <Nav className="me-auto">
                            <Link className='nav-item' to="/toys">Toys</Link>
                        </Nav>
                        <Nav className="me-auto">
                            <Link className='nav-item' to="/about">About Us</Link>
                        </Nav>
                        <Nav className="me-auto">
                            <Link className='nav-item' to="/contact">Contact</Link>
                        </Nav>
                    </div>
                    <div className="navbar-container__right">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="navbar-collapse float-right" id="basic-navbar-nav">
                        <Nav>
                            {isAuthenticated ? 
                                <NavDropdown title="My Profile" id="collasible-nav-dropdown">
                                    <NavDropdown.Item ><Link className="navbar__dropdown__item" to={`/profile/details`}
                                    >Details</Link></NavDropdown.Item>
                                    <NavDropdown.Item ><Link className="navbar__dropdown__item" to="/profile/loans">My Loans</Link></NavDropdown.Item>
                                    <NavDropdown.Item ><Link className="navbar__dropdown__item" to="/profile/listings">My Listings</Link></NavDropdown.Item>
                            </NavDropdown> : <> </>}
                            {isAuthenticated ?
                                <button className="button-32" role="button" onClick={() => logout({ returnTo: window.location.origin })}>
                                    Log Out
                                </button> :
                                <button className="button-32" role="button" onClick={() => loginWithRedirect()}>Log In / Register</button>}
                        </Nav>
                    </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
            
        </>
        
    );
};

export default NavBar;