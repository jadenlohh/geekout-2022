import React from 'react';
import NavigationBar from '../components/NavigationBar';
import logo from './hearing.png';
import logo1 from './hearing1.png';
import logo2 from './hearing2.png';
import logo3 from './hearing3.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Card, Button } from 'react-bootstrap';

const testAlign = {
    textAlign : 'center',
    fontSize : 15,

}
const TEXT = {
    fontSize : 18,
    

}
const Header = {
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
                    <h3 style = {TEXT}> TESTETSTETETTSSTSVUTEDVVXVBGCIHR HUkjjdbrv oh w80u f08ug08je0g0j gf 9w0jrf wuwp99fu 0 </h3>                
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

            <Row className="justify-content-between">
                <Col md="2" className="rounded float-left" style={topleft}>
                    <img className="d-flex p-5 col-example" style = {pics2} src= {logo2} />
                    <h3 style = {TEXT}> JF YFIY IYFY YFYIC TRYTIKUBLGUITIGGOUGHOUAtstuutdutfdiyr6roljh ougolgouigtvoihc;oyo xo;7tk v7igoutoivouh ouoti7bpgout or8y ob7tyi ceio7itui vdiytit yfoyo8ti  </h3>
                </Col>
                
                <Col md="2" className="rounded float-left" style={topright}>
                    <img className="d-flex p-5 col-example" style = {pics2} src= {logo} />
                    <h3 style = {TEXT}> TESTETSTETETTSSTSVUTEDVVXVBGCIHR HUkjjdbrv oh w80u f08ug08je0g0j gf 9w0jrf wuwp99fu 0 </h3>                
                </Col> 

                <Col md="2" className="rounded float-left" style={topright}>
                    <img className="d-flex p-5 col-example" style = {pics2} src= {logo} />
                    <h3 style = {TEXT}> TESTETSTETETTSSTSVUTEDVVXVBGCIHR HUkjjdbrv oh w80u f08ug08je0g0j gf 9w0jrf wuwp99fu 0 </h3>                
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