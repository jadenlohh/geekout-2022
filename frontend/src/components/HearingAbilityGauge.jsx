import Chart from "react-apexcharts";
import React, { useState, useEffect } from "react";
export default function HearingAbilityGauge({ data }) {
    const [options, setOptions] = useState();
    const [series, setSeries] = useState([]);

    useEffect(() => {
        console.log(data);
        // Find average of last 10 scores
        const average =
            data
                .slice(Math.max(data.length - 10, 1))
                .reduce((acc, curr) => acc + curr.score, 0) / 10;
        console.log(average);

        // Get percentage of average over 20000
        const percentage = (average / 20000) * 100;
        setSeries([parseInt(percentage)]);
    }, [data]);

    return (
        <div className="chart">
            <Chart
                options={{
                    chart: {
                        height: 350,
                        type: "radialBar",
                        toolbar: {
                            show: true,
                        },
                    },
                    plotOptions: {
                        radialBar: {
                            dataLabels: {
                                show: true,
                                name: {
                                    offsetY: -10,
                                    show: true,
                                    color: "#888",
                                    fontSize: "17px",
                                },
                                value: {
                                    formatter: function (val) {
                                        return parseInt(val);
                                    },
                                    color: "#111",
                                    fontSize: "36px",
                                    show: true,
                                },
                            },
                        },
                    },
                    fill: {
                        type: "gradient",
                        gradient: {
                            shade: "dark",
                            type: "horizontal",
                            shadeIntensity: 0.5,
                            gradientToColors: ["#ef4444", "#22c55e"],
                            inverseColors: true,
                            opacityFrom: 1,
                            opacityTo: 1,
                            stops: [0, 100],
                        },
                    },
                    stroke: {
                        lineCap: "round",
                    },
                    labels: ["Percent"],
                }}
                series={series}
                type="radialBar"
                height={350}
            />
        </div>
    );
}
