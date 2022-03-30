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
            <Navbar bg="light" expand="lg">
                <Container>
                    <Link to="/">Swappie</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            
                            
                        </Nav>
                        <Nav>
                            {isAuthenticated ? 
                                <NavDropdown title="My Profile" id="collasible-nav-dropdown">
                                    <NavDropdown.Item ><Link to="/profile/details">Details</Link></NavDropdown.Item>
                                    <NavDropdown.Item ><Link to="/profile/loans">My Loans</Link></NavDropdown.Item>
                                    <NavDropdown.Item ><Link to="/profile/listings">My Listings</Link></NavDropdown.Item>
                            </NavDropdown> : <> </>}
                            {isAuthenticated ?
                                <button onClick={() => logout({ returnTo: window.location.origin })}>
                                    Log Out
                                </button> :
                                <button onClick={() => loginWithRedirect()}>Log In</button>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </>
        
    );
};

export default NavBar;