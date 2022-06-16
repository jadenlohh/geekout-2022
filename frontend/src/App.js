import React, { createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Info from "./pages/Info";
import Moreinfo from "./pages/Moreinfo";
import Test from "./pages/Test";
import Home from "./pages/Home";
import ChartPage from "./pages/Chart";
import useToken from "./hooks/useToken";
import Logout from "./pages/Logout";
import Profile from "./pages/Profile";

export const TokenContext = createContext();

function App() {
    const { token, logOut, saveTokenToStorage } = useToken();
    return (
        <>
            <TokenContext.Provider
                value={{ token, saveTokenToStorage, logOut }}
            >
                <div style={{ margin: "0", padding: "0" }}>
                    <Router>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/info" element={<Info />} />
                            <Route path="/Moreinfo" element={<Moreinfo />} />
                            <Route path="/test" element={<Test />} />

                            <Route path="/chart" element={<ChartPage />} />
                            <Route path="/profile" element={<Profile />} />

                            <Route path="/logout" element={<Logout />} />
                        </Routes>
                    </Router>
                </div>
            </TokenContext.Provider>
        </>
    );
}

export default App;
