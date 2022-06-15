import React from 'react';
import { FloatingLabel, Form, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Register() {
    const registerStyle = {
        borderRadius: "20px",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        padding: "70px 50px 50px 50px",
        margin: "auto",
        marginTop: "2rem",
        width: "38%"
    };

    const buttonStyle = {
        width: "100%",
        padding: "10px"
    }

    const signUpStyle = {
        color: "grey",
        fontSize: "14px"
    }

    return (
        <div className="mx-auto" style={ registerStyle }>
            <h3>Hey there! 👋</h3>
            <p className="mb-5">Sign up now to get started</p>

            <FloatingLabel controlId="name" className="mb-2" label="Name">
                <Form.Control type="text" className="shadow-none" placeholder="Tom" />
            </FloatingLabel>

            <FloatingLabel controlId="email" className="mb-2" label="Email address">
                <Form.Control type="email" className="shadow-none" placeholder="name@example.com" />
            </FloatingLabel>

            <Row className="mb-2">
                <Col md="6">
                    <FloatingLabel controlId="age" label="Age">
                        <Form.Control type="number" className="shadow-none" placeholder="Age" max="110" min="16" />
                    </FloatingLabel>
                </Col>

                <Col md="6">
                    <Form.Select className="shadow-none" style={{padding: "1rem .75rem"}}>
                        <option selected disabled>Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </Form.Select>
                </Col>
            </Row>

            <FloatingLabel controlId="password" label="Password">
                <Form.Control type="password" className="shadow-none" placeholder="Password" />
            </FloatingLabel>

            <Button variant="primary" type="submit" className="shadow-none mt-2" style={ buttonStyle }>
                Register
            </Button>

            <p className="text-center mt-3" style={ signUpStyle }>
                Already have an account? <a href="/login">Sign in</a>
            </p>
        </div>
    )
};
  
export default Register;