import React from 'react';
import NavigationBar from '../components/NavigationBar';
import banner1 from '../images/hearing.png';
import banner2 from '../images/hearing1.jpg';
import banner3 from '../images/hearing2.png';
import banner4 from '../images/hearing3.png';
import { Link } from 'react-router-dom';
// import aboutus from './aboutus.jpg';
// import aboutus1 from './aboutus1.png';
// import aboutus2 from './aboutus2.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Card, Button } from 'react-bootstrap';

const testAlign = { // to align the text in the middle
    textAlign : 'center',
    fontSize : 20,

}
const SMALLERTEXT = {
    fontSize : 16,   //for "What we do"
    

}

const TEXT = { // text size for the information part
    fontSize : 18,
    

}
const Header = {  //textsixe for the headers of each topic
    fontSize : 24,
    

}

const pics1 = {
    height : 400 ,
    width : 490 ,
}

const pics2 = {
    height : 250 ,
    width : 300,
}

const topleft = {
    marginLeft: 150,
    marginTop: 10
}

const topright = {
    marginRight: 100,
    marginTop: 10
}



function Info() {
    return (
        <>
            <NavigationBar />

            <h2 className='mt-5 ms-5'>Information</h2>
            <p className='ms-5'>Gain a deeper insight about hearing loss</p>

            <div>
                <Row xs={1} md={2} className="g-4 mx-5" style={{margin: 'auto'}}>
                    <Col className='ps-0 d-flex align-items-stretch'>
                        <Card>
                            <Card.Img variant="top" src={banner1} />
                            <Card.Body>
                                <Card.Title>What is Hearing Loss</Card.Title>
                                <Card.Text>
                                    Hearing loss is quite common around the world. It can be caused by many factors, 
                                    but age and noise exposure are the two most common causes. <br /><br />You can have a hearing 
                                    loss in one or both ears. Read further below to find out more about the causes and symptoms 
                                    of hearing loss and how you can prevent it
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className='ps-0 d-flex align-items-stretch'>
                        <Card>
                            <Card.Img variant="top" src={banner2}/>
                            <Card.Body>
                                <Card.Title>Types & Causes of Hearing Loss</Card.Title>
                                <Card.Text>
                                    Hearing loss affects people of all ages and can be caused by many different factors. 
                                    The three basic categories of hearing loss are sensorineural hearing loss, conductive 
                                    hearing loss and mixed hearing loss
                                </Card.Text>
                                <Button variant="primary" className='shadow-none' href="https://bit.ly/39BrJEZ">Read more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>


                <Row xs={1} md={2} className="g-4 mx-5" style={{margin: 'auto'}}>
                    <Col className='ps-0 d-flex align-items-stretch'>
                        <Card>
                            <Card.Img variant="top" src={banner3} />
                            <Card.Body>
                                <Card.Title>Importance of taking care for your hearing</Card.Title>
                                <Card.Text>
                                    The ears are the most visible part of the human hearing system. Taking care of your ears is 
                                    important in many ways. Cleaning is one step, while preventing and treating infections is another. 
                                    Ear care also include taking steps to avoid unnecessary noise and watching for possible hearing loss
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className='ps-0 d-flex align-items-stretch'>
                        <Card>
                            <Card.Img variant="top" src={banner4} style={{height: "68%"}} />
                            <Card.Body>
                                <Card.Title>Solution</Card.Title>
                                <Card.Text>
                                    Several options are available for hearing loss, ranging from medical treatment to listening devices, such 
                                    as hearing aids. Treatment depends of the cause and severity of hearing loss. For age-related hearing loss, 
                                    there is no cure, but hearing aids and other listening devices help treat the problem and improve quality of life
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
    
            <div className='text-center' style={{marginTop: "120px", marginBottom: '100px'}}>
                <h1 style={{fontSize: '47px'}}><b>Detect Early</b></h1>
                <p style={{fontSize: '17px'}}>It is never too late to take the test for a piece of mind</p>
                <Button variant='primary' style={{padding: "10px 20px"}} className='shadow-none'>
                    <Link to="/test" style={{color: 'white', textDecoration: 'none'}}>Start test</Link>
                </Button>
            </div>

            




            {/* 
            <h1 style = {testAlign} >About Us</h1>
            <Row className="justify-content-between">
                <Col md="2" className="rounded float-left" style={topleft}>
                    <img className="d-flex p-5 col-example" style = {pics2} src= {aboutus1} />
                    <a href="/moreinfo"> <h3 style = {TEXT}> Report that is only for yourself. </h3> </a>  
                </Col>
                
                <Col md="2" className="rounded float-left" style={topright}>
                    <img className="d-flex p-5 col-example" style = {pics2} src= {aboutus2} />
                    <a href="/moreinfo"><h3 style = {TEXT}> Get feedback from specialist? </h3>     </a>             
                </Col> 

                <Col md="2" className="rounded float-left" style={topright}>
                    <img  className="d-flex p-5 col-example" style = {pics2} src= {aboutus} />
                   <a href="/moreinfo"> <h3 style = {TEXT}> Why Choose Us? </h3>       </a>         
                </Col>
            </Row>
            */}
        </>
    )
}
;
  
export default Info;