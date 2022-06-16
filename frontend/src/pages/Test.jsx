import React, { useEffect, useState } from "react";
import { FloatingLabel, Form, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useFrequency } from "react-frequency";
import { IoMdWarning, IoWarning } from "react-icons/io5";
import NavigationBar from "../components/NavigationBar";
import useToken from "../hooks/useToken";
import axios from "axios";

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
    const { token, saveTokenToLocalStorage } = useToken();
    const [started, setStarted] = useState(STATUS.NOT_STARTED);
    const [gain, setGain] = useState(0.5);

    const [level, setLevel] = useState(0);

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

    return (
        <div>
            <NavigationBar />
            <Container>
                {started === STATUS.NOT_STARTED && (
                    <>
                        <h1>Test your hearing</h1>

                        <IoWarning />

                        <p>
                            The audio plays at a very high frequency and it will
                            implode your ears. Adjust the volume accordingly.
                            Headphones are recommended.
                        </p>

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
                        <p className="mb-5">
                            Test out how good your hearing is (
                            {frequencySteps[level]})
                        </p>
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value={gain}
                            onChange={(e) => setGain(e.target.value)}
                        />
                        <Button onClick={toggle}>
                            {playing ? "Pause" : "Play"}
                        </Button>
                        <h1>Can you hear anything?</h1>

                        <Button
                            variant="success"
                            onClick={handleNextStep}
                            disabled={!playing}
                        >
                            Yes
                        </Button>
                        <Button
                            variant="danger"
                            onClick={handleNo}
                            disabled={!playing}
                        >
                            No
                        </Button>
                    </>
                )}
            </Container>
        </div>
    );
}

export default Test;
