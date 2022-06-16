import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Chart from "react-apexcharts";
import {
    Card,
    Col,
    Container,
    FloatingLabel,
    Form,
    Row,
} from "react-bootstrap";
import { TokenContext } from "../App";
import NavigationBar from "../components/NavigationBar";
import useToken from "../hooks/useToken";
import { useNavigate } from "react-router-dom";

export default function Profile() {
    const { token } = useContext(TokenContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate("/login");
        }

        const getUserData = async () => {
            try {
                const res = await axios.get("http://localhost:3001/user", {
                    params: {
                        token,
                    },
                });

                const d = res.data.data;
                const { name: apiName, email: apiEmail } = d;

                setName(apiName);
                setEmail(apiEmail);
            } catch (err) {
                console.log(err);
            }
        };

        getUserData();
    }, []);

    return (
        <div>
            <NavigationBar />
            <Container style={{ textAlign: "center" }}>
                <h1 className="my-5">My Profile</h1>

                <FloatingLabel
                    controlId="name"
                    className="mb-2"
                    label="Name"
                    onChange={(e) => setName(e.target.value)}
                >
                    <Form.Control
                        type="text"
                        className="shadow-none"
                        placeholder="Your Name"
                        value={name}
                        required
                    />
                </FloatingLabel>

                <FloatingLabel
                    controlId="name"
                    className="mb-2"
                    label="Email address"
                    onChange={(e) => setEmail(e.target.value)}
                >
                    <Form.Control
                        type="text"
                        className="shadow-none"
                        placeholder="Your Name"
                        value={email}
                        required
                    />
                </FloatingLabel>
            </Container>
        </div>
    );
}
