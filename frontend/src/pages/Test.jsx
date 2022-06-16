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
import generateFrequencySteps from "../utils/generateFrequencySteps";

// An array of frequencySteps ranging from 20000 to 20 decrementing by 500 hz
const frequencySteps = generateFrequencySteps(0, 20000, 500).reverse();

console.log(frequencySteps);

const buttonStyle = {
    width: "100%",
    padding: "10px",
};

const STATUS = {
    NOT_STARTED: "NOT_STARTED",
    STARTED: "STARTED",
    FINISHED: "FINISHED",
};

function Test() {
    const { token } = useContext(TokenContext);

    const [status, setStatus] = useState(STATUS.NOT_STARTED);
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
        if (level < frequencySteps.length - 1) {
            setLevel(level + 1);
        }

        if (level === frequencySteps.length - 1) {
            setStatus(STATUS.FINISHED);
        }
    };

    const handleNo = async () => {
        toggle();

        const response = await axios.post("http://localhost:3001/data", {
            token,
            score: frequencySteps[level],
        });

        console.log(response);
        setStatus(STATUS.FINISHED);
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
                {status === STATUS.NOT_STARTED && (
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
                            onClick={() => setStatus(STATUS.STARTED)}
                        >
                            Continue
                        </Button>
                    </>
                )}

                {status === STATUS.STARTED && (
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

                {status === STATUS.FINISHED && (
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
