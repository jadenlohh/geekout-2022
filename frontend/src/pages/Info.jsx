import React from 'react';
import NavigationBar from '../components/NavigationBar';
import logo from './hearing.png';
import logo1 from './hearing1.png';
import logo2 from './hearing2.png';
import logo3 from './hearing3.png';
import aboutus from './aboutus.jpg';
import aboutus1 from './aboutus1.png';
import aboutus2 from './aboutus2.jpg';
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
            <NavigationBar/>
            <h1 style = {{...testAlign,...SMALLERTEXT}} > What we do </h1>
            <h1 style = {testAlign} >We  have  created a website for you to help you personally to improve your hearing </h1>
            <br></br>
            <Row className="justify-content-between">
                <Col md="5" className="rounded float-left" style={topleft}>
                    <img className="d-flex p-5 col-example" style = {pics1} src= {logo} />
                    <h1 style = {{...testAlign, ...Header}} >What is Hearing Loss </h1>
                    <h3 style = {TEXT}> Hearing loss is quite common. A hearing loss can be caused by many factors, but age and noise exposure are the two most common causes. You can have a hearing loss in one ear or in both ears. In this guide, you will get an explanation of what a hearing loss is and find facts about the causes and symptoms of hearing loss. You will also find information about how to treat hearing loss. </h3>
                </Col>
                

                <Col md="4" className="rounded float-left" style={topright}>
                    <img className="d-flex p-5 col-example" style = {pics1} src= {logo1} />
                    <h1 style = {{...testAlign, ...Header}} >Types of Hearing loss </h1>
                    <h3 style = {TEXT}> Hearing loss affects people of all ages and can be caused by many different factors. The three basic categories of hearing loss are sensorineural hearing loss, conductive hearing loss and mixed hearing loss. </h3>                
                    <a href="https://www.hopkinsmedicine.org/health/conditions-and-diseases/hearing-loss/types-of-hearing-loss#:~:text=The%20three%20basic%20categories%20of,loss%20and%20mixed%20hearing%20loss."> <h3 style = {TEXT}> Click Here for More Info </h3>       </a>
                </Col> 

            </Row>
            <br></br>
            <br></br>
            <br></br>

            <Row className="justify-content-between">
                <Col md="5" className="rounded float-left" style={topleft}>
                    <img className="d-flex p-5 col-example" style = {pics1} src= {logo2} />
                    <h1 style = {{...testAlign, ...Header}} >Importance of taking care of ur hearing  </h1>
                    <h3 style = {TEXT}> The ears are the most visible part of the human hearing system. Taking care of your ears is important in many ways. Cleaning is one step, while preventing and treating infections is another. Ear care also include taking steps to avoid unnecessary noise and watching for possible hearing loss. </h3>
                </Col>
                

                <Col md="4" className="rounded float-left" style={topright}>
                    <img className="d-flex p-5 col-example" style = {pics1} src= {logo3} />
                    <h1 style = {{...testAlign, ...Header}} >Solutions </h1>
                    <h3 style = {TEXT}>Several options are available for hearing loss, ranging from medical treatment to listening devices, such as hearing aids. Treatment depends of the cause and severity of hearing loss. For age-related hearing loss, there is no cure, but hearing aids and other listening devices help treat the problem and improve quality of life.</h3>                
                </Col> 
            </Row>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1 style = {testAlign} >About Us</h1>
            <Row className="justify-content-between">
                <Col md="2" className="rounded float-left" style={topleft}>
                    <img className="d-flex p-5 col-example" style = {pics2} src= {aboutus1} />
                    <a href="/Moreinfo"> <h3 style = {TEXT}> Report that is only for yourself. </h3> </a>  
                </Col>
                
                <Col md="2" className="rounded float-left" style={topright}>
                    <img className="d-flex p-5 col-example" style = {pics2} src= {aboutus2} />
                    <a href="/Moreinfo"><h3 style = {TEXT}> Get feedback from specialist? </h3>     </a>             
                </Col> 

                <Col md="2" className="rounded float-left" style={topright}>
                    <img  className="d-flex p-5 col-example" style = {pics2} src= {aboutus} />
                   <a href="/Moreinfo"> <h3 style = {TEXT}> Why Choose Us? </h3>       </a>         
                </Col>
            </Row>
           
        </>
    )
}
;
  
export default Info  ;


 {/* <Card md="2" className="rounded float-left" >
                <Card.Img className="d-flex p-5 col-example" variant="top" src={logo} style = {pics2}/>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            // </Card> */}