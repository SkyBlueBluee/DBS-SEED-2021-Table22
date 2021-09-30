import React, {useState, useEffect} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";

import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
const NavigationBar = () => {
    let [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        
    });
    return (
        <div>
            <Navbar expand="lg">
                <Navbar.Brand href="#home">Digital Web Marketplace</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav className="me-auto">
                        <Nav.Link href="/">Login</Nav.Link>
                        <Nav.Link href="/products">Products</Nav.Link>
                        <Nav.Link href="/checkout">Checkout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavigationBar
