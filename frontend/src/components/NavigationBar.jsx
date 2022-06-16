import React from "react";
import { Container, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../pages/logo.jpg";



function NavigationBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>
                    <img src={logo} width={60}c alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/info">Information</Nav.Link>
                        <Nav.Link href="/test">Test Your Hearing</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

                <Nav className="justify-content-end">
                    <Nav.Link href="/login">Log In</Nav.Link>
                    <Nav.Link href="/register">Sign up</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavigationBar;