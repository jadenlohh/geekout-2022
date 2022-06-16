import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import useToken from "../hooks/useToken";
import { Link } from "react-router-dom";

function NavigationBar() {
    const { token, logOut } = useToken();

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

                {!token ? (
                    <Nav className="justify-content-end">
                        <Nav.Link>
                            <Link to="/login">Login</Link>
                        </Nav.Link>

                        <Nav.Link>
                            <Link to="/register">Register</Link>
                        </Nav.Link>
                    </Nav>
                ) : (
                    <Nav className="justify-content-end">
                        <Nav.Link>
                            <Link to="/chart">Chart</Link>
                        </Nav.Link>

                        <Nav.Link>
                            <Link to="/profile">Profile</Link>
                        </Nav.Link>

                        <Nav.Link>
                            <Link to="/logout" onClick={logOut}>
                                Logout
                            </Link>
                        </Nav.Link>
                    </Nav>
                )}
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
