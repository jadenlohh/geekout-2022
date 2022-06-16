import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Card, Col, Container, Row } from "react-bootstrap";
import { TokenContext } from "../App";
import NavigationBar from "../components/NavigationBar";
import { useNavigate } from "react-router-dom";
import HearingAbilityGauge from "../components/HearingAbilityGauge";
import { IoMdHappy, IoMdSad } from "react-icons/io";

export default function ChartPage() {
    const { token } = useContext(TokenContext);

    const [data, setData] = useState([]);

    const navigate = useNavigate();

    const [hearingAbilityPercentage, setHearingAbilityPercentage] = useState(0);

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

                    <Col lg={6} className="d-flex align-items-stretch">
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

                <Row className="mt-4">
                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Hearing Ability</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    The chart below shows the average hearing
                                    ability of the user.
                                </Card.Subtitle>

                                <HearingAbilityGauge
                                    data={data}
                                    hearingAbilityPercentage={
                                        hearingAbilityPercentage
                                    }
                                    setHearingAbilityPercentage={
                                        setHearingAbilityPercentage
                                    }
                                />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6} className="d-flex align-items-stretch">
                        <Card style={{width: "100%"}}>
                            <Card.Body>
                                {hearingAbilityPercentage > 60 ? (
                                    <>
                                        <IoMdHappy size={54} className='mt-5' />
                                        <Card.Title>
                                            You are hearing well!
                                        </Card.Title>

                                        <Card.Subtitle className="mb-2 text-muted">
                                            Keep it up!
                                        </Card.Subtitle>
                                    </>
                                ) : (
                                    <>
                                        <IoMdSad size={54} className='mt-5' />
                                        <Card.Title>
                                            You are hearing poorly!
                                        </Card.Title>

                                        <Card.Subtitle className="mb-2 text-muted">
                                            Prevent exposure to loud noises,
                                            wear ear protection if needed.
                                        </Card.Subtitle>
                                    </>
                                )}

                                <div style={{textAlign: "left", color: 'grey', fontSize: '14px', width: '70%', position: 'absolute', bottom: '20px'}} className='ms-3'>
                                    <Row>
                                        <Col md="1"><img src={"https://img.icons8.com/ios/22/light-on.png"} /></Col>
                                        <Col md="2" style={{paddingLeft: '4px'}} className="my-auto"><b>Tip:</b></Col>
                                    </Row>
                                    <p className="mt-1">Always remember to keep your volume at a safe level and only listen in areas that are less noisy</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
