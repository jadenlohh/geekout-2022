import React, { useContext, useEffect, useState } from "react";
import { FloatingLabel, Form, Button, Container, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useFrequency } from "react-frequency";
import { IoMdWarning, IoWarning } from "react-icons/io5";
import NavigationBar from "../components/NavigationBar";
import useToken from "../hooks/useToken";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../App";

const frequencySteps = [
    20000, 19000, 18000, 17000, 16000, 15000, 14000, 13000, 12000, 11000, 10000,
    9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000,
];

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

const STATUS = {
    NOT_STARTED: "NOT_STARTED",
    STARTED: "STARTED",
    FINISHED: "FINISHED",
};

function Test() {
    const { token } = useContext(TokenContext);

    const [started, setStarted] = useState(STATUS.NOT_STARTED);
    const [gain, setGain] = useState(0.5);

    const [level, setLevel] = useState(0);

    const navigate = useNavigate();

    const { toggle, start, stop, playing } = useFrequency({
        hz: frequencySteps[level],
        type: "center",
        gain,
        oscillator: "sine",
    });

    const handleNextStep = () => {
        setLevel(level + 1);
    };

    const handleNo = async () => {
        toggle();

        const response = await axios.post("http://localhost:3001/data", {
            token,
            score: frequencySteps[level],
        });

        console.log(response);
        setStarted(STATUS.FINISHED);
    };

    useEffect(() => {
        if (!token) {
            navigate("/login");
        }
    }, []);

    // if (!token) return <div>Hello</div>;

    return (
        <div>
            <NavigationBar />
            <Container style={{ textAlign: "center" }}>
                {started === STATUS.NOT_STARTED && (
                    <>
                        <h1>Test your hearing</h1>
                        <p class="lead">
                            Take our quick & easy hearing test online to find
                            out how well can you hear?
                        </p>

                        <Alert
                            variant="danger"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                textAlign: "center",
                            }}
                        >
                            <IoWarning
                                size={24}
                                style={{ marginRight: "1em" }}
                            />

                            <p style={{ margin: 0 }}>
                                The test plays audio at a very high frequency.
                                Find a quiet place to do the test. Adjust the
                                volume accordingly. Headphones are recommended.
                            </p>
                        </Alert>

                        <Form.Label>
                            Volume {Math.round(gain * 100)}%
                        </Form.Label>

                        <Form.Group>
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.01"
                                value={gain}
                                onChange={(e) => setGain(e.target.value)}
                            />
                        </Form.Group>

                        <br />

                        <Button
                            variant="primary"
                            onClick={() => setStarted(STATUS.STARTED)}
                        >
                            Continue
                        </Button>
                    </>
                )}

                {started === STATUS.STARTED && (
                    <>
                        <h2>Test your hearing</h2>

                        <p class="lead">
                            At every stage, you will be asked if you can hear
                            any frequency. Click either Yes or No.
                        </p>

                        <Form.Label>
                            Volume {Math.round(gain * 100)}%
                        </Form.Label>

                        <Form.Group>
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.01"
                                value={gain}
                                onChange={(e) => setGain(e.target.value)}
                            />
                        </Form.Group>

                        <br />

                        <Button onClick={toggle}>
                            {playing ? "Pause" : "Play"}
                        </Button>
                        <h1>Can you hear anything?</h1>

                        <div className="d-grid gap-2">
                            <Button
                                variant="success"
                                onClick={handleNo}
                                disabled={!playing}
                            >
                                Yes
                            </Button>
                            <Button
                                variant="danger"
                                onClick={handleNextStep}
                                disabled={!playing}
                            >
                                No
                            </Button>
                        </div>
                    </>
                )}

                {started === STATUS.FINISHED && (
                    <>
                        <h1>Test finished</h1>
                        <p class="lead">
                            You can now go to your profile page to see how your
                            hearing is.
                        </p>

                        <Button
                            variant="primary"
                            onClick={() => navigate("/chart")}
                            style={buttonStyle}
                        >
                            Go Profile Page
                        </Button>
                    </>
                )}
            </Container>
        </div>
    );
}

export default Test;
