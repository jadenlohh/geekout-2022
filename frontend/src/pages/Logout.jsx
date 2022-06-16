import React, { useContext, useEffect, useState } from "react";
import { FloatingLabel, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import useToken from "../hooks/useToken";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import { TokenContext } from "../App";

function Logout() {
    const { logOut } = useContext(TokenContext);
    const navigate = useNavigate();

    useEffect(() => {
        logOut();

        // Navigate to home page
        navigate("/");
    }, []);

    return <></>;
}

export default Logout;
