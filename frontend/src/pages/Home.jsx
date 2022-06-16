import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../components/NavigationBar';


function Home() {
    return (
        <>
            <NavigationBar />
            <div style={{textAlign: "center", display: "flex", justifyContent: "center", marginTop: "28vh"}}>
                <div style={{height: "fit-content"}}>
                    <h1 >
                        <b>Can you hear me?</b>
                    </h1>
                    
                    <p>1.5 billion people experience hearing loss. Do you?</p>
                    <Button variant="outline-primary" type="submit" className="shadow-none mt-2 me-4" style={{padding: "10px 20px"}} href="/info">
                        More info
                    </Button>

                    <Button variant="primary" type="submit" className="shadow-none mt-2" style={{padding: "10px 20px"}} href="/test">
                        Test Now
                    </Button>
                </div>
            </div>
        </>
    );
};
  
export default Home;