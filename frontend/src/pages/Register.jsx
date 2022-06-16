import React, { useEffect, useState } from "react";
import {
    FloatingLabel,
    Form,
    Button,
    Row,
    Col,
    FormGroup,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import useToken from "../hooks/useToken";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import { useContext } from "react";
import { TokenContext } from "../App";

const registerStyle = {
    borderRadius: "20px",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    padding: "70px 50px 50px 50px",
    margin: "auto",
    marginTop: "2rem",
    width: "38%",
};

const buttonStyle = {
    width: "100%",
    padding: "10px",
};

const signUpStyle = {
    color: "grey",
    fontSize: "14px",
};

function Register() {
    const { token } = useContext(TokenContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [error, setError] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            // TODO: If no token, redirect
            navigate("/");
        }
    }, [token]);

    const handleSignUp = async (e) => {
        e.preventDefault();

        if (confirmPassword !== password) {
            setError("Passwords do not match");
            return;
        }

        try {
            setError("");
            const results = await axios.post(
                "http://localhost:3001/auth/register",
                {
                    name,
                    email,
                    age,
                    gender,
                    password,
                }
            );

            setError("");

            const {
                data: { success, data },
            } = results;

            navigate("/login");
        } catch ({ response: { data } }) {
            const {
                data: { error: errorMessage },
            } = data;
            setError(errorMessage);
        }
    };

    return (
        <>
            <NavigationBar />
            <div className="mx-auto" style={registerStyle}>
                <h3>Hey there! 👋</h3>
                <p className="mb-5">Sign up now to get started</p>

                <p className="text-danger">{error}</p>

                <Form onSubmit={handleSignUp}>
                    <FloatingLabel
                        controlId="name"
                        className="mb-2"
                        label="Name"
                    >
                        <Form.Control
                            type="text"
                            className="shadow-none"
                            placeholder="Tom"
                            value={name}
                            required
                            onChange={(e) => setName(e.target.value)}
                        />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="email"
                        className="mb-2"
                        label="Email address"
                    >
                        <Form.Control
                            type="email"
                            className="shadow-none"
                            placeholder="name@example.com"
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </FloatingLabel>

                    <Row className="mb-2">
                        <Col md="6">
                            <FloatingLabel controlId="age" label="Age">
                                <Form.Control
                                    type="number"
                                    className="shadow-none"
                                    placeholder="Age"
                                    max="110"
                                    min="16"
                                    value={age}
                                    required
                                    onChange={(e) => setAge(e.target.value)}
                                />
                            </FloatingLabel>
                        </Col>

                        <Col md="6">
                            <Form.Select
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                className="shadow-none"
                                required
                                style={{ padding: "1rem .75rem" }}
                            >
                                <option value="" disabled>
                                    Gender
                                </option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </Form.Select>
                        </Col>
                    </Row>

                    <FloatingLabel controlId="password" label="Password">
                        <Form.Control
                            type="password"
                            className="shadow-none mb-2"
                            placeholder="Password"
                            value={password}
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="confirmPassword"
                        label="Confirm password"
                    >
                        <Form.Control
                            type="password"
                            className="shadow-none"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            required
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </FloatingLabel>

                    <Button
                        variant="primary"
                        type="submit"
                        className="shadow-none mt-2"
                        style={buttonStyle}
                    >
                        Register
                    </Button>

                    <p className="text-center mt-3" style={signUpStyle}>
                        Already have an account? <a href="/login">Sign in</a>
                    </p>
                </Form>
            </div>
        </>
    );
}

export default Register;
