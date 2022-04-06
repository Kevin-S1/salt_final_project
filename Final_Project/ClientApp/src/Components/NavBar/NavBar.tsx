import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {Navbar, Container, Nav, NavDropdown, NavLink} from "react-bootstrap";
import { Link } from 'react-router-dom';
import './navbar.css';

const NavBar = () => {
    const { loginWithRedirect, logout } = useAuth0();
    const { isAuthenticated } = useAuth0();
    
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="navBar" bg="light">
                <Container>
                    <Link className='nav-header' to="/"><strong className="nav-header__sub">Borrow</strong>My</Link>

                    
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="navbar-collapse navbar-links" id="responsive-navbar-nav">
                        <Nav className="me-auto navbar-items">
                            <div className='nav-items-left'>
                                <Nav.Link eventKey="1">
                                    <Link className='nav-item' to="/toys">Toys</Link>
                                </Nav.Link>
                                <Nav.Link eventKey="2">
                                    <Link className='nav-item' to="/about">About Us</Link>
                                </Nav.Link>
                                <Nav.Link eventKey="3">
                                    <Link className='nav-item' to="/contact">Contact</Link>
                                </Nav.Link>
                            </div>
                            
                            <div className='nav-items-right'>
                                {isAuthenticated ?
                                    <NavDropdown title="My Profile" id="collapsible-nav-dropdown">
                                        <NavDropdown.Item eventKey="4"><Link className="navbar__dropdown__item" to={`/profile/details`}
                                        >Details</Link></NavDropdown.Item>
                                        <NavDropdown.Item eventKey="5"><Link className="navbar__dropdown__item" to="/profile/loans">My Loans</Link></NavDropdown.Item>
                                        <NavDropdown.Item eventKey="6"><Link className="navbar__dropdown__item" to="/profile/listings">My Listings</Link></NavDropdown.Item>
                                    </NavDropdown> : <> </>}
                                {isAuthenticated ?
                                    <button className="button-32" role="button" onClick={() => logout({ returnTo: window.location.origin })}>
                                        Log Out
                                    </button> :
                                    <button className="button-32" role="button" onClick={() => loginWithRedirect()}>Log In / Register</button>}
                            </div>
                            
                            
                                </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
        
    );
};

export default NavBar;