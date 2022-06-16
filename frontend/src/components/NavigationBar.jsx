import React from "react";
import { Container, Navbar, Nav, Button, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import useToken from "../hooks/useToken";
import { Link } from "react-router-dom";
import logo from "../pages/logo.jpg"


function NavigationBar() {
    const { token, logOut } = useToken();

    const linkStyle = {
        color: "black",
        textDecoration: "none",
        padding: "0 8px"
    };

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>
                    <img src={logo} width={75} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                </Navbar.Collapse>

                {!token ? (
                    <Nav className="justify-content-end">
                        <Nav.Link className="my-auto">
                            <Link to="/" style={linkStyle}>Home</Link>
                        </Nav.Link>

                        <Nav.Link className="my-auto">
                            <Link to="/info" style={linkStyle}>Information</Link>
                        </Nav.Link>

                        <Nav.Link className="my-auto">
                            <Link to="/test" style={linkStyle}>Audiometry Test</Link>
                        </Nav.Link>

                        <Nav.Link className="my-auto">
                            <Link to="/login">
                                <Button variant="primary" style={{borderRadius: "20px", padding: "9px 40px"}} className="shadow-none">Sign in</Button>
                            </Link>
                        </Nav.Link>
                    </Nav>
                ) : (
                    <Nav className="justify-content-end">
                        <Nav.Link className="my-auto">
                            <Link to="/" style={linkStyle}>Home</Link>
                        </Nav.Link>

                        <Nav.Link className="my-auto">
                            <Link to="/info" style={linkStyle}>Information</Link>
                        </Nav.Link>

                        <Nav.Link className="my-auto">
                            <Link to="/test" style={linkStyle}>Audiometry Test</Link>
                        </Nav.Link>

                        <Nav.Link className="my-auto">
                            <Dropdown>
                                <Dropdown.Toggle style={{borderRadius: "20px", padding: "9px 35px"}} className="shadow-none">
                                    Profile
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item>
                                        <Link to="/profile" style={linkStyle}>View Profile</Link>
                                    </Dropdown.Item>

                                    <Dropdown.Item>
                                        <Link to="/chart" style={linkStyle}>Statistics</Link>
                                    </Dropdown.Item>

                                    <Dropdown.Item>
                                        <Link to="/logout" onClick={logOut} style={linkStyle}>Log out</Link>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav.Link>
                    </Nav>
                )}
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
