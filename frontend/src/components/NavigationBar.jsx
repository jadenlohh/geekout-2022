import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import useToken from "../hooks/useToken";
import { Link } from "react-router-dom";
import logo from "../pages/logo.jpg"


function NavigationBar() {
    const { token, logOut } = useToken();

    const linkStyle = {
        color: "rgba(0,0,0,.55)",
        textDecoration: "none"
    };

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>
                    <img src={logo} width={60} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>
                            <Link to="/" style={linkStyle}>Home</Link>
                        </Nav.Link>

                        <Nav.Link>
                            <Link to="/info" style={linkStyle}>Information</Link>
                        </Nav.Link>

                        <Nav.Link>
                            <Link to="/test" style={linkStyle}>Audiometry Test</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>

                {!token ? (
                    <Nav className="justify-content-end">
                        <Nav.Link>
                            <Link to="/login" style={linkStyle}>Log in</Link>
                        </Nav.Link>

                        <Nav.Link>
                            <Link to="/register" style={linkStyle}>Register</Link>
                        </Nav.Link>
                    </Nav>
                ) : (
                    <Nav className="justify-content-end">
                        <Nav.Link>
                            <Link to="/chart" style={linkStyle}>Chart</Link>
                        </Nav.Link>

                        <Nav.Link>
                            <Link to="/profile" style={linkStyle}>Profile</Link>
                        </Nav.Link>

                        <Nav.Link>
                            <Link to="/logout" onClick={logOut} style={linkStyle}>Logout</Link>
                        </Nav.Link>
                    </Nav>
                )}
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
