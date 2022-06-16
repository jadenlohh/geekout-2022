import React, { useEffect, useState } from "react";
import { FloatingLabel, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import useToken from "../hooks/useToken";
import { useNavigate } from "react-router-dom";

function Login() {
    const { token, saveTokenToLocalStorage } = useToken();

    const loginStyle = {
        borderRadius: "20px",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        padding: "70px 50px 50px 50px",
        width: "38%",
        margin: "auto",
        marginTop: "5rem",
    };

    const buttonStyle = {
        width: "100%",
        padding: "10px",
    };

    const signUpStyle = {
        color: "grey",
        fontSize: "14px",
    };

    const textStyle = {
        fontSize: "13px",
        textAlign: "right",
    };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            // TODO: If no token, redirect
            navigate("/");
        }
    }, [token]);

    const handleLogin = async (e) => {
        e.preventDefault();

        console.log(email, password);
        setError("");
        try {
            const res = await axios.post("http://localhost:3001/auth/login", {
                email: email,
                password: password,
            });

            const { data } = res;
            console.log(data);

            const {
                success,
                data: { token },
            } = data;

            if (success) {
                saveTokenToLocalStorage(token);
            }

            setError("");
        } catch ({ response: { data } }) {
            const {
                data: { error: errorMessage },
            } = data;
            setError(errorMessage);
        }
    };

    return (
        <div style={loginStyle}>
            <h3>Welcome!</h3>
            <p className="mb-5">Please sign in to continue</p>

            <p className="text-danger">{error}</p>

            <Form onSubmit={handleLogin}>
                <FloatingLabel
                    controlId="email"
                    className="mb-2"
                    label="Email address"
                    onChange={(e) => setEmail(e.target.value)}
                >
                    <Form.Control
                        type="email"
                        className="shadow-none"
                        placeholder="name@example.com"
                    />
                </FloatingLabel>

                <div>
                    <FloatingLabel controlId="password" label="Password">
                        <Form.Control
                            type="password"
                            className="shadow-none"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FloatingLabel>
                    <p style={textStyle}>
                        <a href="/forget">Forgot password</a>
                    </p>
                </div>

                <Button
                    variant="primary"
                    type="submit"
                    className="shadow-none mt-2"
                    style={buttonStyle}
                >
                    Continue
                </Button>

                <p className="text-center mt-3" style={signUpStyle}>
                    Don't have an account? <a href="/register">Sign up</a>
                </p>
            </Form>
        </div>
    );
}

export default Login;
