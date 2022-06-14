import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React, { useEffect } from "react";

function App() {
    useEffect(() => {
        // ! This is to get the data from the API, and console log it into your console (check it out!)
        axios
            .get("http://localhost:3001/data", {
                method: "GET",
                params: {
                    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJ0ZXN0QGdtYWlsLmNvbSIsImlhdCI6MTY1NTIyMjc3MH0.Kuc6dDkrE5IR-IiTn3NSxQq7Lv6X8uAmm9VFTVgGOh4",
                },
            })
            .then((res) => console.log(res.data));
    }, []);
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
