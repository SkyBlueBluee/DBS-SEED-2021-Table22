import React from 'react'
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
const NavigationBar = () => {
    return (
        <div>
            <Navbar expand="lg">
                <Navbar.Brand href="#home">Page name maybe?</Navbar.Brand>
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
