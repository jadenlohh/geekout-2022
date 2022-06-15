import React from 'react';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Login() {
    const loginStyle = {
        borderRadius: "20px",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        padding: "70px 50px 50px 50px",
        width: "38%",
        margin: "auto",
        marginTop: "5rem"
    };

    const buttonStyle = {
        width: "100%",
        padding: "10px"
    }

    const signUpStyle = {
        color: "grey",
        fontSize: "14px"
    }

    const textStyle = {
        fontSize: "13px",
        textAlign: "right"
    }

    return (
        <div style={ loginStyle }>
            <h3>Welcome!</h3>
            <p className="mb-5">Please sign in to continue</p>

            <FloatingLabel controlId="email" className="mb-2" label="Email address">
                <Form.Control type="email" className="shadow-none" placeholder="name@example.com" />
            </FloatingLabel>

            <div>
                <FloatingLabel controlId="password" label="Password">
                    <Form.Control type="password" className="shadow-none" placeholder="Password" />
                </FloatingLabel>
                <p style={ textStyle }><a href="/forget">Forgot password</a></p>
            </div>

            <Button variant="primary" type="submit" className="shadow-none mt-2" style={ buttonStyle }>
                Continue
            </Button>

            <p className="text-center mt-3" style={ signUpStyle }>
                Don't have an account? <a href="/register">Sign up</a>
            </p>
        </div>
    )
};
  
export default Login;