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

export default function ChartPage() {
    const { token } = useContext(TokenContext);

    const [data, setData] = useState([]);

    const navigate = useNavigate();

    const [options, setOptions] = useState();

    const [series, setSeries] = useState([]);
    const [scatterSeries, setScatterSeries] = useState([]);

    useEffect(() => {
        if (!token) {
            navigate("/login");
        }

        console.log(token);

        const getHearingData = async () => {
            try {
                const res = await axios.get("http://localhost:3001/data", {
                    params: {
                        token,
                    },
                });

                console.log(res.data.data);
                setData(res.data.data);

                const d = res.data.data;
                setSeries([
                    {
                        name: "Last heard frequency",
                        data: d.map((item) => item.score),
                    },
                ]);

                setScatterSeries([
                    {
                        name: d.map((item) => item.created_at),
                        data: d.map((item) => item.score),
                    },
                ]);

                console.log(scatterSeries);
            } catch (err) {
                console.log(err);
            }
        };

        getHearingData();
    }, []);

    return (
        <div>
            <NavigationBar />
            <Container style={{ textAlign: "center" }} className="mb-5">
                <h1 className="my-5">Statistics</h1>

                <Row>
                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Last Heard Frequency</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted" style={{fontSize: "15px"}}>
                                    The chart below shows the last heard
                                    frequency recorded by the user
                                </Card.Subtitle>

                                <Card.Text className="my-5">
                                    Last heard frequency:{" "}
                                    <b>{data.length > 0
                                        ? `${data[data.length - 1].score}`
                                        : 0}hz</b> on <b>{data.length > 0
                                            ? `${data[data.length - 1].created_at}`
                                            : 0}</b>
                                        
                                    <br />
                                    Total number of attempts: <b>{data.length > 0 ? data.length : 0}</b>
                                </Card.Text>

                                <Chart
                                    options={{
                                        // title: {
                                        //     text: "Last heard frequency",
                                        //     align: "left",
                                        // },
                                        chart: {
                                            zoom: {
                                                enabled: false,
                                            },
                                        },

                                        noData: {
                                            text: "No Data Available, Start a test!",
                                        },
                                    }}
                                    series={series}
                                    type="line"
                                    width="500"
                                />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    Scatter Plot of Frequencies
                                </Card.Title>
                                <Card.Subtitle className="mb-2 text-muted mb-5" style={{fontSize: "15px"}}>
                                    The chart below shows the last heard
                                    frequency against time
                                </Card.Subtitle>

                                <Chart
                                    options={{
                                        xaxis: {
                                            type: "datetime",
                                            categories: data.map(
                                                (item) => item.created_at
                                            ),
                                        },

                                        noData: {
                                            text: "No Data Available, Start a test!",
                                        },
                                    }}
                                    series={series}
                                    type="scatter"
                                    width="500"
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
