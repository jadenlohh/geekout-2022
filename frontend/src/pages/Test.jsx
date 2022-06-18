import React, { useContext, useEffect, useState } from "react";
import {
    FloatingLabel,
    Form,
    Button,
    Container,
    Alert,
    Row,
    Col,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useFrequency } from "react-frequency";
import { IoMdWarning, IoWarning } from "react-icons/io5";
import NavigationBar from "../components/NavigationBar";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { TokenContext } from "../App";
import generateFrequencySteps from "../utils/generateFrequencySteps";

// An array of frequencySteps ranging from 20000 to 20 decrementing by 500 hz
const frequencySteps = generateFrequencySteps(0, 20000, 500).reverse();

console.log(frequencySteps);

const buttonStyle = {
    borderRadius: "10px",
    width: "50%",
    padding: "14px",
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
                        <h1 className="mt-4">Test your hearing</h1>
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
                                Find a quiet place to do the test and adjust the
                                volume accordingly. Headphones are recommended
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
                            className="shadow-none"
                            style={{
                                borderRadius: "30px",
                                padding: "14px 50px",
                            }}
                        >
                            Start test
                        </Button>
                    </>
                )}

                {status === STATUS.STARTED && (
                    <>
                        <h1 className="mt-4">Test your hearing</h1>

                        <p class="lead">
                            At every stage, you will be asked if you can hear
                            something. Click either Yes or No.
                        </p>

                        <p>Stage {level + 1}</p>

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
                            onClick={toggle}
                            className="shadow-none"
                            style={{ padding: "10px 30px" }}
                        >
                            {playing ? "Pause sound" : "Play sound"}
                        </Button>

                        <h2 className="mt-5 mb-3">Can you hear anything?</h2>

                        <Button
                            variant="danger"
                            onClick={handleNextStep}
                            disabled={!playing}
                            className="me-3 shadow-none"
                            style={{ padding: "8px 30px" }}
                        >
                            No
                        </Button>

                        <Button
                            variant="success"
                            onClick={handleNo}
                            disabled={!playing}
                            className="shadow-none"
                            style={{ padding: "8px 30px" }}
                        >
                            Yes
                        </Button>
                    </>
                )}

                {status === STATUS.FINISHED && (
                    <>
                        <h1 className="mt-5">Test completed</h1>
                        <p class="lead">
                            You can now go to your statistics page to view
                            your results
                        </p>

                        <Button
                            variant="primary"
                            onClick={() => navigate("/chart")}
                            className="shadow-none mt-3 mb-2"
                            style={buttonStyle}
                        >
                            View statistics                  
                        </Button>
                        <br />
                        <Link to='/' style={{fontSize: '15px'}}>Back to home</Link>
                    </>
                )}
            </Container>
        </div>
    );
}

export default Test;
