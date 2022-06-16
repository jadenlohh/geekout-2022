import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../components/NavigationBar';
import { Link } from "react-router-dom";


function Home() {
    return (
        <>
            <NavigationBar />
            <div style={{textAlign: "center", display: "flex", justifyContent: "center", marginTop: "25vh"}}>
                <div style={{height: "fit-content"}}>
                    <h1>
                        <b>Can you hear me?</b>
                    </h1>
                    
                    <p>1.5 billion people experience hearing loss. Do you?</p>
                    {/* <Button variant="outline-primary" type="submit" className="shadow-none mt-2 me-4" style={{padding: "10px 20px"}} href="/info">
                        More info
                    </Button> */}

                    <div className="mt-4">
                        <Button variant="primary" type="submit" className="shadow-none" style={{padding: "12px 50px", borderRadius: "30px"}}>
                            <Link to="/test" style={{color: "white", textDecoration: "none"}}>Test Now</Link>
                        </Button>

                        <a href="/info" className="ms-4" style={{textDecoration: "none", paddingTop: "18px"}}>Learn More</a>
                    </div>
                </div>
            </div>
        </>
    );
};
  
export default Home;